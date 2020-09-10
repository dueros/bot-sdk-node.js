/**
 * @file CreateReminder test
 * @author yelvye@baidu.com
 */

require('should');
const Bot = require('../../../lib/Bot');
const UpdateReminder = Bot.Directive.Reminder.UpdateReminder;

describe('Test Directive.Reminder.UpdateReminder.js', () => {
    let updateReminder = new UpdateReminder();
    updateReminder.setToken('updateReminder_token');
    updateReminder.setAlertToken('token1');
    updateReminder.setScheduledDate('2019-10-10');
    updateReminder.setFreq('DAILY');
    //  console.log(JSON.stringify(updateReminder.getData()));
    it('#getData', () => {
        updateReminder.getData().should.deepEqual({
            "type":"Reminder.UpdateReminder",
            "token":"updateReminder_token",
            "alertToken":"token1",
            "trigger":{
                "scheduledDate":"2019-10-10",
                "recurrence":{
                    "freq":"DAILY"
                }
            }
        });
    });
});
