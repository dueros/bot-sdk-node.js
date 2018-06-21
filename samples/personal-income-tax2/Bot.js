/**
 * @file 意图处理类
 * @author yelvye@baidu.com
 */

'use strict';

const BaseBot = require('./lib/Bot');
const InquiryType = require('./util/InquiryType');
const TaxUtil = require('./util/TaxUtil');
const Mock = require('./mock/Mock');

class Bot extends BaseBot {

    /**
     * Bot的构造函数,意图处理逻辑的主体
     *
     * @param {Object} postData bot协议入参
     */
    constructor(postData) {
        super(postData);

        //  唤醒意图的处理handler
        this.addLaunchHandler(() => {
            this.waitAnswer();
            return {
                directives: [this.getTemplate2('个税查询服务,欢迎使用所得税查询服务,告诉我月薪是多少,就可以查询个税、公积金、养老等个税类型。', Bot.DEFAULT_IMAGE)],
                outputSpeech: '欢迎使用所得税查询服务,告诉我月薪是多少,就可以查询个税、公积金、养老等个税类型。'
            };
        });


        //  意图处理的handler
        this.addIntentHandler('inquiry_tax', () => {
            let salary = this.getSlot('salary');
            if (!salary) {
                this.nlu.ask('salary');
                return {
                    directives: [this.getTemplate2('你工资多少？', Bot.DEFAULT_IMAGE)],
                    outputSpeech: '你工资多少？'
                };
            }

            let checked = TaxUtil.checkMonthlysalary(salary);
            if (!checked) {
                this.nlu.ask('salary');
                //  let standardCard = this.getStandardCard('个税查询', 'salary format error,please input again');
                return {
                    //  card: standardCard,
                    directives: [this.getTemplate2('个税查询：工资格式错误, 请重新输入...', Bot.DEFAULT_IMAGE)],
                    outputSpeech: '工资格式错误, 请重新输入...'
                };
            }
            let salarySlotStatus = this.nlu.getSlotConfirmationStatus('salary').toUpperCase();
            let confirmSalarySlotStatus = this.confirmSalarySlotStatus(salary, salarySlotStatus);
            if (confirmSalarySlotStatus !== 'CONFIRMED') {
                return confirmSalarySlotStatus;
            }


            let city = this.getSlot('city');
            if (!city) {
                this.nlu.ask('city');
                return {
                    directives: [this.getTemplate2('你在哪里？', Bot.DEFAULT_IMAGE)],
                    outputSpeech: '你在哪里？'
                };
            }
            let citySlotStatus = this.nlu.getSlotConfirmationStatus('city');
            let confirmCitySlotStatus = this.confirmCitySlotStatus(city, citySlotStatus);
            if (confirmCitySlotStatus !== 'CONFIRMED') {
                return confirmCitySlotStatus;
            }

            //  选择个税的查询类型
            let computeType = this.getSlot('computeType');
            if (!computeType) {
                this.nlu.ask('computeType');
                return {
                    directives: [this.getTemplate2('请选择你要查询的个税类型，你可以选择 养老、医疗、失业、工伤、生育、公积金和全部', Bot.DEFAULT_IMAGE)],
                    outputSpeech: '请选择你要查询的个税类型，你可以选择 养老、医疗、失业、工伤、生育、公积金和全部'
                };
            }

            let intentStatus = this.nlu.getIntentConfirmationStatus();
            let intentConfirmStatus = this.confirmIntentStatus(intentStatus, city, salary);
            if (intentConfirmStatus === true) {
                this.waitAnswer();
                switch (this.getSlot('computeType')) {
                    case '养老':
                    case '医疗':
                    case '失业':
                    case '工伤':
                    case '生育':
                    case '公积金':
                        return this.computeOne(computeType, city, salary);

                    case '全部':
                        return this.computeAll(computeType, city, salary);

                    default:
                        //  console.error('salary slot exception!');
                        break;
                }
            } else {
                return intentConfirmStatus;
            }
        });

        //  关闭会话的handler
        this.addSessionEndedHandler(() => {
            return {
                directives: [this.getTemplate2('欢迎再次使用～', Bot.DEFAULT_IMAGE)],
                outputSpeech: '欢迎再次使用～'
            };
        });
    }

    /**
     *  获取文本展现模板
     *
     *  @param {string} text 一级标题
     *  @return {RenderTemplate} 渲染模版
     */
    getTemplate1(text) {
        let bodyTemplate = new BaseBot.Directive.Display.Template.BodyTemplate1();
        bodyTemplate.setPlainTextContent(text);
        bodyTemplate.setBackGroundImage(Bot.DEFAULT_IMAGE);
        let renderTemplate = new BaseBot.Directive.Display.RenderTemplate(bodyTemplate);
        return renderTemplate;
    }

    /**
     *  获取上图下文模版
     *
     *  @param {string} name 模版内容
     *  @param {string} url  图片地址
     *  @return {RenderTemplate} 渲染模版
     */
    getTemplate2(name, url) {
        let bodyTemplate = new BaseBot.Directive.Display.Template.BodyTemplate2();
        bodyTemplate.setBackGroundImage(Bot.DEFAULT_IMAGE);
        bodyTemplate.setPlainContent(name);
        let renderTemplate = new BaseBot.Directive.Display.RenderTemplate(bodyTemplate);
        return renderTemplate;
    }

    /**
     * 确认city 槽位
     *
     * @param {string} city 城市
     * @param {string} citySlotStatus city槽位的状态
     * @return {(Object|string)} 返回确认消息体或者CONFIRMED
     * @public
     */
    confirmCitySlotStatus(city, citySlotStatus) {
        switch (citySlotStatus) {

            case 'NONE':
                this.nlu.setConfirmSlot('city');
                return {
                    directives: [this.nlu._directive, this.getTemplate1(`你是在 ${JSON.parse(city).city} ?`)],
                    outputSpeech: `你是在 ${JSON.parse(city).city} ?`
                };

            case 'DENIED':
                return {
                    shouldEndSession: true,
                    directives: [this.getTemplate1('城市槽位确认失败, 欢迎下次再来!')],
                    outputSpeech: '城市槽位确认失败, 欢迎下次再来!'
                };

            case 'CONFIRMED':
                return 'CONFIRMED';

            default:
                //  console.log('city slot exception!');
                break;
        }
    }

    /**
     * 确认salary槽位
     *
     * @param {number} salary 工资
     * @param {string} salarySlotStatus salary槽位的状态
     * @return {Object|string} 确认消息体或者CONFIRMED
     * @public
     */
    confirmSalarySlotStatus(salary, salarySlotStatus) {
        switch (salarySlotStatus) {

            case 'NONE':
                this.nlu.setConfirmSlot('salary');
                return {
                    directives: [this.nlu._directive, this.getTemplate1(`你的工资是 ${salary} 吗 ?`)],
                    outputSpeech: `你的工资是 ${salary} 吗 ?`
                };

            case 'DENIED':
                //  todo:: 可以不关闭session再次询问
                return {
                    shouldEndSession: true,
                    directives: [this.getTemplate1('工资槽位确认失败, 欢迎下次再来 !')],
                    outputSpeech: '工资槽位确认失败, 欢迎下次再来 !'
                };

            case 'CONFIRMED':
                return 'CONFIRMED';

            default:
                //  console.log('salary slot exception!');
                break;
        }
    }

    /**
     * 意图确认
     *
     * @param {string} intentStatus 意图确认状态
     * @param {string} city 城市
     * @param {number} salary 工资
     * @return {(Object|boolean)} 消息体或者意图确认状态
     * @public
     */
    confirmIntentStatus(intentStatus, city, salary) {
        if (!intentStatus) {
            this.nlu.setConfirmIntent();
            return {
                directives: [this.getTemplate1(`你的城市是：${JSON.parse(city).city}, 工资是：${salary} ?`)],
                outputSpeech: `你的城市是：${JSON.parse(city).city}, 工资是：${salary} ?`
            };
        }
        else if (intentStatus.toUpperCase() === 'DENIED') {
            return {
                shouldEndSession: true,
                directives: [this.getTemplate1('意图确认失败, 欢迎再次使用～')],
                //  card: this.getTextCard('intent confirm failure, welcome back again!'),
                outputSpeech: 'intent confirm failure, welcome back again!'
            };
        }
        else if (intentStatus.toUpperCase() === 'CONFIRMED') {
            return true;
        }

        return {
            shouldEndSession: true,
            directives: [this.getTemplate1('意图确认失败, 欢迎再次使用～')],
            outputSpeech: '意图确认失败, 欢迎再次使用～'
        };
    }

    /**
     * 返回模版列表
     *
     * @param {Object} taxData 个税查询的结果
     * @return {RenderTemplate}  模版列表
     * @public
     */
    getListTemplate1(taxData) {
        let listTemplate = new BaseBot.Directive.Display.Template.ListTemplate1();
        //  设置模版标题
        listTemplate.setTitle('样例演示');
        let types = InquiryType.inquiryType;
        for (let k in types) {
            let content = TaxUtil.processTemplate(types[k].content, taxData);
            let listTemplateItem = new BaseBot.Directive.Display.Template.ListTemplateItem();
            listTemplateItem.setImage(types[k].imageUrl);
            listTemplateItem.setPlainPrimaryText(types[k].title);
            listTemplateItem.setPlainSecondaryText(content);
            listTemplate.addItem(listTemplateItem);
        }
        let renderTemplate = new BaseBot.Directive.Display.RenderTemplate(listTemplate);
        return renderTemplate;
    }

    /**
     * 计算所有的个税类型
     *
     * @param {string} computeType 类型
     * @param {string} city 城市
     * @param {number} salary 工资
     * @return {Promise} 所有类别的查询结果
     * @public
     */
    computeAll(computeType, city, salary) {
        return TaxUtil.getTaxData(city, salary).then(taxData => {
            let cloneTaxData = JSON.parse(JSON.stringify(taxData));
            if (!taxData) {
                this.nlu.ask('city');
                //  let card = this.getStandardCard('个税查询', 'city not supported!');
                return {
                    directives: [this.getTemplate1('不支持所在城市!')],
                    outputSpeech: '不支持所在城市!'
                };
            }
            //  走mock数据
            if (taxData === '404') {
                cloneTaxData = Mock.getMockData(computeType, salary);
            }
            let result = '';
            let types = InquiryType.inquiryType;
            for (let k in types) {
                let content = TaxUtil.processTemplate(types[k].content, cloneTaxData);
                result += content;
            }
            //  获取ListCard数据
            let listTemplate = this.getListTemplate1(cloneTaxData);
            return {
                directives: [listTemplate],
                outputSpeech: result
            };
        });
    }

    /**
     * 计算单独要查询的个税种类
     *
     * @param {string} computeType 类型
     * @param {string} city 城市
     * @param {number} salary 工资
     * @return {Promise} 指定类别的查询结果
     * @public
     */
    computeOne(computeType, city, salary) {
        return TaxUtil.getTaxData(city, salary).then(taxData => {
            let cloneTaxData = JSON.parse(JSON.stringify(taxData));
            if (!taxData) {
                this.nlu.ask('city');
                //  let card = this.getStandardCard('个税查询', '城市不支持!');
                return {
                    directives: [this.getTemplate1('城市不支持!')],
                    outputSpeech: '城市不支持!'
                };
            }
            //  url失效,走本地mock数据
            if (taxData === '404') {
                cloneTaxData = Mock.getMockData(computeType, salary);
            }

            let imageUrl = InquiryType.inquiryType[computeType].imageUrl;
            let content = InquiryType.inquiryType[computeType].content;
            let result = TaxUtil.processTemplate(content, cloneTaxData);
            let title = `${computeType}查询`;
            let textImageTemplate = this.getTemplate2(title, imageUrl);
            return {
                directives: [textImageTemplate],
                outputSpeech: result
            };
        });
    }

}

Bot.DEFAULT_IMAGE = 'https://skillstore.cdn.bcebos.com/icon/100/c709eed1-c07a-be4a-b242-0b0d8b777041.jpg';

module.exports = Bot;
