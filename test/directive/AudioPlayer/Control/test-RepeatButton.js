/**
 * @file RepeatButton test
 * @author yelvye@baidu.com
 */

require('should');
const Bot = require('../../../../lib/Bot');
const RepeatButton = Bot.Directive.AudioPlayer.Control.RepeatButton;

describe('Test AudioPlayer/Control/RepeatButton.js', () => {
    let repeatButton = new RepeatButton();
    repeatButton.setSelectedValue('selected value');
    it('#getData', () => {
        repeatButton.getData().should.deepEqual({
            type: 'RADIO_BUTTON',
            name: 'REPEAT',
            selectedValue: 'REPEAT_ONE'
        });
    });
});
