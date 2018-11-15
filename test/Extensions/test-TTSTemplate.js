/**
 * @file LyricButton test
 * @author yelvye@baidu.com
 */

require('should');
const Bot = require('../../lib/Bot');
const TTSTemplate = Bot.Extensions.TTSTemplate;
const TTSTemplateItem = Bot.Extensions.TTSTemplate.TTSTemplateItem;

describe('Test AudioPlayer/Control/LyricButton.js', () => {
    let ttsTemplate = new TTSTemplate();
    let ttsItem1 = new TTSTemplateItem();
    ttsItem1.addTemplateSlot('key1', 'val1');
    ttsItem1.setTtsKey('key_new1');

    let ttsItem2 = new TTSTemplateItem();
    ttsItem2.addTemplateSlot('key2', 'val2');
    ttsItem2.setTtsKey('key_new2');

    let ttsItem3 = new TTSTemplateItem();
    ttsItem3.addTemplateSlot('key3', 'val3');
    ttsItem3.setTtsKey('key_new3');

    ttsTemplate.addTTSTemplate(ttsItem1);
    ttsTemplate.addTTSTemplate(ttsItem2);
    ttsTemplate.addTTSTemplate(ttsItem3);

    it('#getData', () => {
        ttsTemplate.getData().should.deepEqual({
            type: 'TTSTemplate',
            ttsTemplates: [
                {
                    templateSlots: [
                        {
                            slotKey: 'key1',
                            slotValue: 'val1'
                        }
                    ],
                    ttsKey: 'key_new1'
                },
                {
                    templateSlots: [
                        {
                            slotKey: 'key2',
                            slotValue: 'val2'
                        }
                    ],
                    ttsKey: 'key_new2'
                },
                {
                    templateSlots: [
                        {
                            slotKey: 'key3',
                            slotValue: 'val3'
                        }
                    ],
                    ttsKey: 'key_new3'
                }
            ]
        });
    });
});
