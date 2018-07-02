/**
 * @file PlayerInfo test
 * @author yelvye@baidu.com
 */

require('should');
const Bot = require('../../../lib/Bot');
const PlayerInfo = Bot.Directive.AudioPlayer.PlayerInfo;

describe('Test AudioPlayer/PlayerInfo.js', () => {
    let playerInfo = new PlayerInfo('invalid type', 'invalid seconds');
    playerInfo.setProvider('yly', 'http://uri-logo.com');
    playerInfo.setProvider('yyy-second');
    playerInfo.setLyric('http://uri-lrc.com');
    playerInfo.setArt('art');
    playerInfo.setTitle('title');
    playerInfo.setTitleSubtext1('sub text1');
    playerInfo.setTitleSubtext2('sub text2');
    playerInfo.setAudioItemType(PlayerInfo.FORMAT_LRC);
    playerInfo.setMediaLengthInMs(12321.232);
    let favoriteButton = new Bot.Directive.AudioPlayer.Control.FavoriteButton();
    favoriteButton.setEnabled(false);
    playerInfo.addControl(favoriteButton);
    let showPlayListButton = new Bot.Directive.AudioPlayer.Control.ShowPlayListButton();
    showPlayListButton.setSelected(true);
    playerInfo.setControls(showPlayListButton);
    let showFavoriteListButton = new Bot.Directive.AudioPlayer.Control.ShowFavoriteListButton();
    let RepeatButton = new Bot.Directive.AudioPlayer.Control.RepeatButton();
    playerInfo.setControls([showFavoriteListButton, RepeatButton]);

    it('#getData', () => {
        playerInfo.getData().should.deepEqual({
            content: {
                audioItemType: 'LRC',
                mediaLengthInMilliseconds: 12321,
                provider: {
                    name: 'yyy-second',
                    logo: {
                        src: 'http://uri-logo.com'
                    }
                },
                lyric: {
                    url: 'http://uri-lrc.com',
                    format: 'LRC'
                },
                art: {
                    src: 'art'
                },
                title: 'title',
                titleSubtext1: 'sub text1',
                titleSubtext2: 'sub text2'
            },
            controls: [
                {
                    type: 'BUTTON',
                    name: 'FAVORITE',
                    enabled: false,
                    selected: false
                },
                {
                    type: 'BUTTON',
                    name: 'SHOW_PLAYLIST',
                    enabled: true,
                    selected: true
                },
                {
                    type: 'BUTTON',
                    name: 'SHOW_FAVORITE_LIST',
                    enabled: true,
                    selected: false
                },
                {
                    type: 'RADIO_BUTTON',
                    name: 'REPEAT',
                    selectedValue: 'REPEAT_ONE'
                }
            ]
        });
    });
});
