/**
 * @file PlayPauseButton test
 * @author yelvye@baidu.com
 */

require('should');
const Bot = require('../../../../lib/Bot');
const PlayPauseButton = Bot.Directive.AudioPlayer.Control.PlayPauseButton;

describe('Test AudioPlayer/Control/PlayPauseButton.js', () => {
    let playPauseButton = new PlayPauseButton();
    playPauseButton.setEnabled(false);
    playPauseButton.setSelected(true);

    it('#getData', () => {
        playPauseButton.getData().should.deepEqual({
            type: 'BUTTON',
            name: PlayPauseButton.NAME,
            enabled: false,
            selected: true
        });
    });
});
