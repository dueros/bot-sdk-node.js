/**
 * @file LyricButton test
 * @author yelvye@baidu.com
 */

require('should');
const Bot = require('../../../../lib/Bot');
const LyricButton = Bot.Directive.AudioPlayer.Control.LyricButton;

describe('Test AudioPlayer/Control/LyricButton.js', () => {
    let lyricButton = new LyricButton();
    lyricButton.setEnabled(false);
    lyricButton.setSelected(true);

    it('#getData', () => {
        lyricButton.getData().should.deepEqual({
            type: 'BUTTON',
            name: LyricButton.NAME,
            enabled: false,
            selected: true
        });
    });
});
