/**
 * @file 意图处理类
 * @author yelvye@baidu.com
 */


const BaseBot = require('./lib/Bot');
const Request = require('./util/HttpRequest');

class Bot extends BaseBot {

    /**
     * Bot的构造函数,意图处理逻辑的主体
     *
     * @param {Object} postData bot协议入参
     */
    constructor(postData) {
        super(postData);

        //  添加对LaunchRequest 的处理函数
        this.addLaunchHandler(() => {
            this.waitAnswer();
            return {
                directives: [this.getTemplate3('欢迎使用‘QQ测吉凶’')],
                outputSpeech: '欢迎使用QQ测吉凶'
            };
        });

        //  添加对SessionEndedRequest 的处理函数
        this.addSessionEndedHandler(() => {
            this.waitAnswer();
            return {
                directives: [this.getTemplate3('感谢使用‘QQ测吉凶’')],
                outputSpeech: '感谢使用'
            };
        });

        //  添加对特定意图的处理函数
        this.addIntentHandler('qqEvaluation', () => {
            if (!this.getSlot('qqNumber')) {
                this.nlu.ask('qqNumber');
                this.waitAnswer();
                return {
                    directives: [this.getTemplate3('方便告诉我一下你的QQ号吗?')],
                    reprompt: '方便告诉我一下你的QQ号吗?',
                    outputSpeech: '方便告诉我一下你的QQ号吗?',
                    resource: {
                        type: 1
                    }
                };
            }
            return this.testQqFate();
        });
    }

    /**
     * 消息处理函数。
     *
     * @return {Object} 获取的消息
     */
    testQqFate() {
        let qq = this.getSlot('qqNumber');

        //  构造接口url
        let url = `http://japi.juhe.cn/qqevaluate/qq?key=${Bot.appkey}&qq=${qq}`;
        return Request.getHttpJson(url).then(data => {
            if (data && !data.error_code) {
                let fate = data.result.data;

                let template = this.getTemplate3(qq + '\r\n'
                    + '运势:' + '\r\n' + fate.conclusion + '\r\n'
                    + '运势分析:' + '\r\n' + fate.analysis);
                return {
                    directives: [template],
                    outputSpeech: `${qq} 运势: ${fate.conclusion} ,运势分析: ${fate.analysis}`
                };
                //  console.log(`error_code: ${data.reason}`);
            }
            else {
                return {
                    directives: [this.getTemplate3('查无此号, 可能是API请求异常导致')],
                    outputSpeech: '查无此号'
                };
            }
        });
    }

    /**
     *  获取文本展现模板
     *
     *  @param {string} text 一级标题
     *  @return {RenderTemplate} 渲染模版
     */
    getTemplate3(text) {
        let bodyTemplate = new BaseBot.Directive.Display.Template.BodyTemplate3();
        bodyTemplate.setPlainContent(text);
        bodyTemplate.setBackGroundImage(Bot.picUrl);
        bodyTemplate.setImage(Bot.image);
        let renderTemplate = new BaseBot.Directive.Display.RenderTemplate(bodyTemplate);
        return renderTemplate;
    }

}

//  获得权限的appkey
Bot.appkey = '96e651aba46125748ab8850630609186';
//  欢迎页图片url
Bot.picUrl = 'http://img.25pp.com/uploadfile/soft/images/2014/0226/20140226041227784.jpg';

Bot.image = 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2958518472,3404372203&fm=179&app=42&f=JPEG?w=121&h=140';
module.exports = Bot;
