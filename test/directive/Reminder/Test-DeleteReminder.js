/**
 * @file DeleteReminder test
 * @author yelvye@baidu.com
 */

require('should');
const Bot = require('../../../lib/Bot');
const DeleteReminder = Bot.Directive.Reminder.DeleteReminder;

describe('Test Directive.Reminder.DeleteReminder.js', () => {
    let deleteReminder = new DeleteReminder();
    deleteReminder.setToken('DeleteReminder_token');
    deleteReminder.setAlertToken('token1');
    //  console.log(JSON.stringify(deleteReminder.getData()));
    it('#getData', () => {
        deleteReminder.getData().should.deepEqual({
            "type":"Reminder.DeleteReminder",
            "token":"DeleteReminder_token",
            "alertToken":"token1"
        });
    });
});
