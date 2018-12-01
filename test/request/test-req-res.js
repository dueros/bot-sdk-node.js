/**
 * @file Request/Response test
 * @author yelvye@baidu.com
 */

require('should');
const data = require('../../data/intent-params');
const BaseBot = require('../../lib/Bot');

class Bot extends BaseBot {
    constructor(postData) {
        super(postData);
        this.addIntentHandler('near_by', () => {
            this.response.addExpectSlotResponse('test_slot');
            this.response.addExpectTextResponse('test_text_slot');
            this.setSessionAttribute('testAttr', 'value');
            return {
                outputSpeech: 'test_output_speech'
            };
        });
    }
}

describe('Test Display/Response.js', () => {
    let bot = new Bot(data);
    it('response#getData', () => {
        bot.run().then(ret => {
            ret.should.deepEqual({
                version: '2.0',
                context: {
                    intent: {
                        intent: {
                            name: 'near_by',
                            confirmationStatus: 'NONE',
                            slots: []
                        }
                    },
                    expectResponse: [
                        {
                            type: 'Slot',
                            slot: 'test_slot'
                        },
                        {
                            type: 'PlainText',
                            text: 'test_text_slot'
                        }
                    ]
                },
                session: {
                    attributes: {
                        testAttr: 'value'
                    }
                },
                response: {
                    directives: [],
                    shouldEndSession: true,
                    card: null,
                    outputSpeech: {
                        type: 'PlainText',
                        text: 'test_output_speech'
                    },
                    reprompt: null,
                    needDetermine: false,
                    fallBack: false
                }
            });
        });
    });
});
