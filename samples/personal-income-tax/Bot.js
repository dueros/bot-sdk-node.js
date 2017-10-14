
var BaseBot = require('./../../index');

class Bot extends BaseBot{
    constructor (postData) {
        super(postData);

        this.addLaunchHandler(()=>{
            return {
                outputSpeech : '欢迎使用!'
            };
        });

        this.addIntentHandler('personal_income_tax.inquiry', ()=>{
            let loc = this.getSlot('location');    
            let monthlySalary = this.getSlot('monthlysalary');

            if(!monthlySalary) {
                this.nlu.ask('monthlySalary');
                let card = new Bot.Card.TextCard('你工资多少呢');

                return {
                    card : card,
                    outputSpeech : '你工资多少呢'
                };
            }

            if(!loc) {
                let card = new Bot.Card.TextCard('你在哪呢');
                this.nlu.ask('location');
                return {
                    card : card,
                    outputSpeech : '你在哪呢'
                };

            }
        });
    }
}

module.exports = Bot;
