/**
 * @file RadioButton test
 * @author yelvye@baidu.com
 */

require('should');
const Bot = require('../../../../lib/Bot');
const RadioButton = Bot.Directive.AudioPlayer.Control.RadioButton;

describe('Test AudioPlayer/Control/RadioButton.js', () => {
    let radioButton = new RadioButton();
    radioButton.setSelectedValue('selected value');

    it('#getData', () => {
        console.log(JSON.stringify(radioButton.getData()));
        radioButton.getData().should.deepEqual({
            name: '',
            type: 'RADIO_BUTTON',
            selectedValue: 'selected value'
        });
    });
});
