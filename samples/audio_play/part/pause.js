/**
 * @file 测试json文件
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
                name: 'ai.dueros.common.pause_intent',
                confirmationStatus: 'NONE',
                slots: []
            }
        ]
    }
};



