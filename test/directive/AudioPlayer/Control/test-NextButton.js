/**
 * @file NextButton test
 * @author yelvye@baidu.com
 */

require('should');
const Bot = require('../../../../lib/Bot');
const NextButton = Bot.Directive.AudioPlayer.Control.NextButton;

describe('Test AudioPlayer/Control/NextButton.js', () => {
    let nextButton = new NextButton();
    nextButton.setEnabled(false);
    nextButton.setSelected(true);

    it('#getData', () => {
        nextButton.getData().should.deepEqual({
            type: 'BUTTON',
            name: NextButton.NAME,
            enabled: false,
            selected: true
        });
    });
});
