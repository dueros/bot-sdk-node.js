const Bot = require('bot-sdk');
const privateKey = require("./rsaKeys.js").privateKey;

class InquiryBot extends Bot {
    constructor(postData) {
        super(postData);

        this.addLaunchHandler(() => {
            this.waitAnswer();
            return {
                outputSpeech: '欢迎使用查个税!'
            };
        });

        this.addSessionEndedHandler(() => {
            this.endSession();
            return {
                outputSpeech: '多谢使用查个税!'
            };
        });

        this.addIntentHandler('inquiry', () => {
            let loc = this.getSlot('city');
            let monthlySalary = this.getSlot('number');
            if (!monthlySalary) {
                this.nlu.ask('number');
                let card = new Bot.Card.TextCard('你工资多少呢？？');
                // 可以返回异步 Promise
                return Promise.resolve({
                    card: card,
                    outputSpeech: '你工资多少呢'
                });
            }

            if (!loc) {
                let card = new Bot.Card.TextCard('你在哪呢');
                this.nlu.ask('city');
                return {
                    card: card,
                    outputSpeech: '你在哪呢'
                };
            }

            if (this.request.isDialogStateCompleted()) {
                let card = new Bot.Card.TextCard('该交1230');
                return {
                    card: card,
                    outputSpeech: '<speak>该交<say-as type="number">1230</say-as></speak>'
                };
            }
        });
    }
}

exports.handler = function(event, context, callback) {
    try {
        let b = new InquiryBot(event);
        // 0: debug  1: online
        b.botMonitor.setEnvironmentInfo(privateKey, 0);
        b.run().then(function(result) {
            callback(null, result);
        }).catch(callback);
    } catch (e) {
        callback(e);
    }
}
