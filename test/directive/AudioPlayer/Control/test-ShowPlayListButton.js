/**
 * @file ShowPlayListButton test
 * @author yelvye@baidu.com
 */

require('should');
const Bot = require('../../../../lib/Bot');
const ShowPlayListButton = Bot.Directive.AudioPlayer.Control.ShowPlayListButton;

describe('Test AudioPlayer/Control/ShowPlayListButton.js', () => {
    let showPlayListButton = new ShowPlayListButton();
    showPlayListButton.setEnabled(false);
    showPlayListButton.setSelected(true);

    it('#getData', () => {
        showPlayListButton.getData().should.deepEqual({
            type: 'BUTTON',
            name: ShowPlayListButton.NAME,
            enabled: false,
            selected: true
        });
    });
});
