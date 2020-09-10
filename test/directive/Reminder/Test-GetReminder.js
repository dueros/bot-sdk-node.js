/**
 * @file RecordSpeech test
 * @author yelvye@baidu.com
 */

require('should');
const Bot = require('../../../lib/Bot');
const GetReminder = Bot.Directive.Reminder.GetReminder;

describe('Test Directive.Reminder.GetReminder.js', () => {
    let getReminder = new GetReminder();
    getReminder.setToken('reminder_token');
    //  console.log(JSON.stringify(getReminder.getData()));
    it('#getData', () => {
        getReminder.getData().should.deepEqual({
            "type":"Reminder.GetReminder",
            "token":"reminder_token"
        });
    });
});
