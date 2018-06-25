/**
 * @file Bot入口文件
 * @author yelvye@baidu.com
 */


const BaseBot = require('./lib/Bot');
const Request = require('./util/HttpRequest');
const PageSpider = require('./util/PageSpider');

class Bot extends BaseBot {

    /**
    * 构造函数
    *
    * @param {Object} postData bot请求入参
    */
    constructor(postData) {
        super(postData);

        //  添加对LaunchRequest 的处理函数
        this.addLaunchHandler(() => {
            this.waitAnswer();
            return {
                directives: [this.getTemplate2('欢迎使用‘历史上的今天’')],
                reprompt: '要说什么呢？',
                outputSpeech: '欢迎使用‘历史上的今天’'
            };
        });

        //  添加对SessionEndedRequest 的处理函数
        this.addSessionEndedHandler(() => {
            return {
                directives: [this.getTemplate2('感谢使用‘历史上的今天’')],
                outputSpeech: '再见，欢迎再次使用～'
            };
        });

        //  添加对特定意图的处理函数
        this.addIntentHandler('historyToday', () => {
            if (!this.getSlot('currentDate')) {
                this.nlu.ask('currentDate');
                this.waitAnswer();
                return {
                    directives: [this.getTemplate2('请问您要知道几月几日的事儿呢?'), this.getHint(['3月3日', '2.14'])],
                    reprompt: '请问您要知道几月几日的事儿呢？',
                    outputSpeech: '请问您要知道几月几日的事儿呢？',
                    resource: {
                        type: 1
                    }
                };
            }
            return this.getHistory();
        });

        //  多轮对话时对意图的识别
        this.addIntentHandler('otherHistoryToday', () => {
            if (!this.getSlot('currentDate')) {
                this.nlu.ask('currentDate');
                this.waitAnswer();
                return {
                    directives: [this.getTemplate2('请问您要知道几月几日的事儿呢?'), this.getHint(['3月3日', '2.14'])],
                    reprompt: '请问您要知道几月几日的事儿呢？',
                    outputSpeech: '请问您要知道几月几日的事儿呢？'
                };
            }
            return this.getHistory();
        });

    }

    /**
     * 获取数据。条件匹配，随机返回：
     *       1.获取该日期相应的数据，有返回值则停止
     *       2.如果error_code为0，随机返回单一数据
     *
     * @return {Promise} 当前日期的历史事例
     */
    getHistory() {
        let currentDate = this.getSlot('currentDate');
        let dateArr = currentDate.split('-');
        let month = dateArr[1];
        let day = dateArr[2];
        let requestUrl = `${Bot.url}month=${month}&day=${day}`;
        //  查询数据
        return Request.getHttpJson(requestUrl).then(historyData => {
            if (historyData) {
                let randNum = Math.floor(Math.random() * historyData.length);
                return this.getHistoryDetail(historyData[randNum].url).then(content => {
                    let text = `历史上的${historyData[randNum].solaryear}年${month}月${day}日: ${historyData[randNum].title}`;
                    return {
                        directives: [this.getTemplate2(text)],
                        outputSpeech: historyData[randNum].description
                    };
                });
            }
            return {
                directives: [this.getTemplate2('历史上的今天没有发生事情！')],
                outputSpeech: '历史上的今天没有发生事情~'
            };
        });
    }

    /**
     * 获取事件的详细信息
     *
     * @param {string} hisUrl 事件信息
     * @return {Promise} 事件详细信息
     */
    getHistoryDetail(hisUrl) {
        return PageSpider.resolveHistortyDetailPage(hisUrl);
    }

    /**
     *  获取文本展现模板
     *
     *  @param {string} text 一级标题
     *  @return {RenderTemplate} 渲染模版
     */
    getTemplate2(text) {
        let bodyTemplate = new BaseBot.Directive.Display.Template.BodyTemplate2();
        bodyTemplate.setPlainContent(text);
        bodyTemplate.setBackGroundImage(Bot.pUrl);
        let renderTemplate = new BaseBot.Directive.Display.RenderTemplate(bodyTemplate);
        return renderTemplate;
    }

    /**
     *  获取Hint
     *
     *  @param  {(string|Array)} text 提示语
     *  @return {Hint} 渲染模版
     */
    getHint(text) {
        return new BaseBot.Directive.Display.Hint(text);
    }


}

//  接口url
Bot.url = 'http://www.todayonhistory.com/index.php?m=content&c=index&a=json_event&page=1&pagesize=40&';
//  欢迎页图片url
Bot.pUrl = 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3892410230,3126045607&fm=27&gp=0.jpg';

module.exports = Bot;
