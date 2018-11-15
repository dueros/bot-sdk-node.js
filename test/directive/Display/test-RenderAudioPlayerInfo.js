/**
 * @file RenderAudioPlayerInfo test
 * @author yelvye@baidu.com
 */

require('should');
const Bot = require('../../../lib/Bot');
const RenderAudioPlayerInfo = Bot.Directive.Display.RenderAudioPlayerInfo;
const AudioPlayerInfoContent = require('../../../lib/directive/AudioPlayer/AudioPlayerInfoContent');
const NextButton = Bot.Directive.AudioPlayer.Control.NextButton;
const FavoriteButton = Bot.Directive.AudioPlayer.Control.FavoriteButton;
describe('Test Display/RenderAudioPlayerInfo.js', () => {
    let audioPlayerInfoContent = new AudioPlayerInfoContent();
    audioPlayerInfoContent.setArt('art_1');
    audioPlayerInfoContent.setAudioItemType(AudioPlayerInfoContent.FORMAT_LRC);
    audioPlayerInfoContent.setLyric('http://lyric');
    audioPlayerInfoContent.setMediaLengthInMs(12222122121);
    audioPlayerInfoContent.setProvider('test_provider1', 'http://logo');
    audioPlayerInfoContent.setTitle('test_title');
    audioPlayerInfoContent.setTitleSubtext1('sub_text_1');
    audioPlayerInfoContent.setTitleSubtext2('sub_text_2');

    let controls = [new NextButton(), new FavoriteButton(), null];
    let renderAudioPlayerInfo = new RenderAudioPlayerInfo(audioPlayerInfoContent, controls);
    renderAudioPlayerInfo.setToken('fff9900f-6cea-4e6e-8ff2-445d6b735612');
    it('#getData', () => {
        renderAudioPlayerInfo.getData().should.deepEqual({
            type: 'Display.RenderAudioPlayerInfo',
            token: 'fff9900f-6cea-4e6e-8ff2-445d6b735612',
            content: {
                audioItemType: 'LRC',
                art: {
                    src: 'art_1'
                },
                lyric: {
                    url: 'http://lyric',
                    format: 'LRC'
                },
                mediaLengthInMilliseconds: 12222122121,
                provider: {
                    name: 'test_provider1',
                    logo: {
                        src: 'http://logo'
                    }
                },
                title: 'test_title',
                titleSubtext1: 'sub_text_1',
                titleSubtext2: 'sub_text_2'
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
