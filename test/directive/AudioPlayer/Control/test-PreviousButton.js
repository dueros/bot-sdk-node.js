/**
 * @file PreviousButton test
 * @author yelvye@baidu.com
 */

require('should');
const Bot = require('../../../../lib/Bot');
const PreviousButton = Bot.Directive.AudioPlayer.Control.PreviousButton;

describe('Test AudioPlayer/Control/PreviousButton.js', () => {
    let previousButton = new PreviousButton();
    previousButton.setEnabled(false);
    previousButton.setSelected(true);

    it('#getData', () => {
        previousButton.getData().should.deepEqual({
            type: 'BUTTON',
            name: PreviousButton.NAME,
            enabled: false,
            selected: true
        });
    });
});
