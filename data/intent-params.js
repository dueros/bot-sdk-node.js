/**
 * @file Demo data
 * @author yelvye@baidu.com
 */

let data = {
    version: 'v2.0',
    session: {
        new: true,
        sessionId: '4bc7e53d-d830-4c52-9dd8-3856391f67ec'
    },
    context: {
        System: {
            user: {
                userId: '145771863',
                userInfo: {
                    location: {
                        geo: {
                            bd09ll: {
                                longitude: 116.40387397,
                                latitude: 39.91488908
                            },
                            wgs84: {
                                longitude: 116.40387397,
                                latitude: 39.91488908
                            },
                            bd09mc: {
                                longitude: 12958160.970501,
                                latitude: 4825907.7315861
                            }
                        },
                        city: '北京市'
                    },
                    account: []
                }
            },
            application: {
                applicationId: '8edb04e0-4dd6-22a9-a423-8f64ec3a6def'
            },
            device: {
                deviceId: '07ec5fc08906bb1704951c85b2bfcdd2',
                originalDeviceId: '9cb904c84d67066427e886161834e32e',
                supportedInterfaces: {
                    VoiceInput: [],
                    VoiceOutput: [],
                    AudioPlayer: []
                },
                userDeviceId: '8d402538d3604604ec12d36f6ceef762',
                TVControl: {
                    controlType: 'DCSControl',
                    controlStatus: 0
                }
            },
            apiAccessToken: 'AWKHiUr0f8jGu6RuiWablXA1dKV',
            apiEndPoint: 'https://xiaodu.baidu.com',
            avaliableApplicationIds: [
                '8edb04e0-4dd6-22a9-a423-8f64ec3a6def'
            ]
        }
    },
    request: {
        query: {
            type: 'TEXT',
            original: '附近的人'
        },
        dialogState: 'COMPLETED',
        intents: [
            {
                name: 'near_by',
                confirmationStatus: 'NONE',
                slots: []
            }
        ],
        queryInfo: [],
        type: 'IntentRequest',
        requestId: 'daad3c86f3294361b0da27dfba9370b4_0#1_0',
        timestamp: '1543577123',
        dialogRequestId: 'f99e97db-cae4-4a02-90e2-44e45770a232'
    }
};

module.exports = data;
