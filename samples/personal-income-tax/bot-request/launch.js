/**
 * @file 唤醒意图
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
        type: 'LaunchRequest'
    }
};

console.log(JSON.stringify(data));


