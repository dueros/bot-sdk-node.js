/**
 * @file CreateReminder test
 * @author yelvye@baidu.com
 */

require('should');
const Bot = require('../../../lib/Bot');
const CreateReminder = Bot.Directive.Reminder.CreateReminder;

describe('Test Directive.Reminder.CreateReminder.js', () => {
    let createReminder = new CreateReminder();
    createReminder.setToken('createReminder_token');
    createReminder.setAlertInfo('看书');
    createReminder.setFreq('WEEKLY');
    createReminder.setScheduledDate('2019-09-10');
    createReminder.setScheduledTime('9:00');
    createReminder.setWeekDay([
        'TUE',
        "FRI"
    ]);
    //  console.log(JSON.stringify(createReminder.getData()));
    it('#getData', () => {
        createReminder.getData().should.deepEqual({
            "type":"Reminder.CreateReminder",
            "token":"createReminder_token",
            "alertInfo":{
                "spokenInfo":{
                    "content":[
                        {
                            "type":"plainText",
                            "text":"看书"
                        }
                    ]
                }
            },
            "trigger":{
                "recurrence":{
                    "freq":"WEEKLY",
                    "byDay":[
                        "TUE",
                        "FRI"
                    ]
                },
                "scheduledDate":"2019-09-10",
                "scheduledTime":"9:00"
            }
        });
    });
});
