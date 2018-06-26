/**
 * @file 月薪填槽
 * @author yelvye@baidu.com
 */

let data = {
    version: '2.0',
    session: {
        new: true,
        sessionId: 'sessionId',
        attributes: []
    },
    context: {
        System: {
            application: {
                applicationId: 'sample_personal_tax'
            }
        }
    },
    request: {
        type: 'IntentRequest',
        intents: [
            {
                name: 'personal_income_tax.inquiry',
                slots: {
                    monthlysalary: {
                        name: 'monthlysalary',
                        value: ''
                    },
                    location: {
                        name: 'location',
                        value: '北京'
                    }
                }
            }
        ]
    }
};

console.log(JSON.stringify(data));


