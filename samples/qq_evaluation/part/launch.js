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
                applicationId: 'qqEvaluation.inquiry'
            }
        }
    },
    request: {
        type: 'LaunchRequest'
    }
};



console.log(JSON.stringify(data));
