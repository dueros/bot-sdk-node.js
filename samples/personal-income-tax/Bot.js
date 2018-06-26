/**
 * @file 意图处理类
 * @author yelvye@baidu.com
 */

let BaseBot = require('./lib/Bot');

class Bot extends BaseBot {
    constructor(postData) {
        super(postData);

        this.addLaunchHandler(() => {
            return {
                outputSpeech: '欢迎使用!'
            };
        });

        this.addIntentHandler('personal_income_tax.inquiry', () => {
            let loc = this.getSlot('location');
            let monthlySalary = this.getSlot('monthlysalary');

            if (!monthlySalary) {
                this.nlu.ask('monthlySalary');
                //  let card = new Bot.Card.TextCard('你工资多少呢');

                // 如果有异步操作，可以返回一个promise
                return new Promise(function (resolve, reject) {
                    resolve({
                        directives: [this.getTemplate1('你工资多少呢')],
                        outputSpeech: '你工资多少呢'
                    });
                });
            }

            if (!loc) {
                //  let card = new Bot.Card.TextCard('你在哪呢');
                this.nlu.ask('location');
                return {
                    directives: [this.getTemplate1('你在哪呢')],
                    outputSpeech: '你在哪呢'
                };

            }
        });
    }

    /**
     *  获取文本展现模板
     *
     *  @param {string} text 歌曲详情
     *  @return {RenderTemplate} 渲染模版
     */
    getTemplate1(text) {
        let bodyTemplate = new BaseBot.Directive.Display.Template.BodyTemplate1();
        bodyTemplate.setPlainTextContent(text);
        let renderTemplate = new BaseBot.Directive.Display.RenderTemplate(bodyTemplate);
        return renderTemplate;
    }
}

module.exports = Bot;
