/**
 * @file ShowFavoriteListButton test
 * @author yelvye@baidu.com
 */

require('should');
const Bot = require('../../../../lib/Bot');
const ShowFavoriteListButton = Bot.Directive.AudioPlayer.Control.ShowFavoriteListButton;

describe('Test AudioPlayer/Control/ShowFavoriteListButton.js', () => {
    let showFavoriteListButton = new ShowFavoriteListButton();
    showFavoriteListButton.setEnabled(false);
    showFavoriteListButton.setSelected(true);

    it('#getData', () => {
        showFavoriteListButton.getData().should.deepEqual({
            type: 'BUTTON',
            name: ShowFavoriteListButton.NAME,
            enabled: false,
            selected: true
        });
    });
});
