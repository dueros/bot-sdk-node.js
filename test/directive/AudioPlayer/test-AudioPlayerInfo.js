/**
 * @file AudioPlayerInfo test
 * @author yelvye@baidu.com
 */

require('should');
const Bot = require('../../../lib/Bot');
const AudioPlayerInfo = require('../../../lib/directive/AudioPlayer/AudioPlayerInfo');
const AudioPlayerInfoContent = require('../../../lib/directive/AudioPlayer/AudioPlayerInfoContent');
const NextButton = Bot.Directive.AudioPlayer.Control.NextButton;
const FavoriteButton = Bot.Directive.AudioPlayer.Control.FavoriteButton;
describe('Test AudioPlayer/AudioPlayerInfo.js', () => {
    let audioPlayerInfoContent = new AudioPlayerInfoContent();
    audioPlayerInfoContent.setArt('art_1');
    audioPlayerInfoContent.setAudioItemType(AudioPlayerInfoContent.FORMAT_LRC);
    audioPlayerInfoContent.setLyric('http://lyric');
    audioPlayerInfoContent.setMediaLengthInMs(12222122121);
    audioPlayerInfoContent.setProvider('test_provider1', 'http://logo');
    audioPlayerInfoContent.setTitle('test_title');
    audioPlayerInfoContent.setTitleSubtext1('sub_text_1');
    audioPlayerInfoContent.setTitleSubtext2('sub_text_2');

    let controls = [new NextButton(), new FavoriteButton()];
    let audioPlayerInfo = new AudioPlayerInfo(audioPlayerInfoContent, controls);

    it('#getData', () => {
        audioPlayerInfo.getData().should.deepEqual({
            content: {
                audioItemType: 'MUSIC'
            },
            controls: [
                {
                    type: 'BUTTON',
                    name: 'NEXT',
                    enabled: true,
                    selected: false
                },
                {
                    type: 'BUTTON',
                    name: 'FAVORITE',
                    enabled: true,
                    selected: false
                }
            ]
        });
    });
});
