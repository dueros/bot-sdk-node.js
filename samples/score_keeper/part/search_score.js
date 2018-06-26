/**
 * @file 测试json文件
 * @author yelvye@baidu.com
 */

let data = {
    version: '2.0',
    session: {
        new: true,
        sessionId: '3d591664-1445-4fcb-85e3-9fe208a107ad',
        attributes: {}
    },
    context: {
        System: {
            user: {
                userId: '123456',
                userInfo: {
                    account: []
                }
            },
            application: {
                applicationId: 'edb022af-c75a-86f3-700b-f535ad32d0a9'
            }
        }
    },
    request: {
        type: 'IntentRequest',
        intent: {
            name: 'search_score',
            slots: [
                {
                    name: 'player',
                    value: '张三'
                }
            ]
        }
    }
};

console.log(JSON.stringify(data));
