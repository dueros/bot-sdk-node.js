/**
 * @file FavoriteButton test
 * @author yelvye@baidu.com
 */

require('should');
const Bot = require('../../../../lib/Bot');
const FavoriteButton = Bot.Directive.AudioPlayer.Control.FavoriteButton;

describe('Test AudioPlayer/Control/FavoriteButton.js', () => {
    let favoriteButton = new FavoriteButton();
    favoriteButton.setEnabled(false);
    favoriteButton.setSelected(true);
    it('#getData', () => {
        favoriteButton.getData().should.deepEqual({
            type: 'BUTTON',
            name: 'FAVORITE',
            enabled: false,
            selected: true
        });
    });
});
