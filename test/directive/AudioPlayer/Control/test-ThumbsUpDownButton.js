/**
 * @file ThumbsUpDownButton test
 * @author yelvye@baidu.com
 */

require('should');
const Bot = require('../../../../lib/Bot');
const ThumbsUpDownButton = Bot.Directive.AudioPlayer.Control.ThumbsUpDownButton;

describe('Test AudioPlayer/Control/ThumbsUpDownButton.js', () => {
    let thumbsUpDownButton = new ThumbsUpDownButton();
    thumbsUpDownButton.setSelectedValue('selected value');

    console.log(JSON.stringify(thumbsUpDownButton.getData()));
    it('#getData', () => {
        thumbsUpDownButton.getData().should.deepEqual({
            type: 'RADIO_BUTTON',
            name: 'THUMBS_UP_DOWN',
            selectedValue: 'THUMBS_UP'
        });
    });
});
