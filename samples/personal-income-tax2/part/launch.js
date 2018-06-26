/**
 * @file 唤醒意图
 * @author yelvye@baidu.com
 */

let data = {
    version: 'v2.0',
    session: {
        new: true,
        sessionId: '2ba77976-2206-47de-9c87-9842f6fc35ec'
    },
    context: {
        System: {
            user: {
                userId: '145771863',
                userInfo: {
                    account: []
                }
            },
            application: {
                applicationId: 'faaded36-7884-5186-76f0-3129bf82ac0b'
            },
            device: {
                deviceId: '49d0ab4d1f13b4530fae3a7f02107cd5',
                supportedInterfaces: {
                    VoiceInput: [],
                    VoiceOutput: [],
                    AudioPlayer: []
                }
            },
            apiAccessToken: '',
            apiEndPoint: 'https://xiaodu.baidu.com'
        }
    },
    request: {
        type: 'LaunchRequest',
        requestId: '5c0c6d1b1e2b4138a2c02033b4d6b21b_0',
        timestamp: '1528969433',
        dialogRequestId: '28318b89-2b4a-446e-a861-de0007d10dc0'
    }
};

console.log(JSON.stringify(data));
