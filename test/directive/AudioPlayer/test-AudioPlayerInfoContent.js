/**
 * @file AudioPlayerInfoContent test
 * @author yelvye@baidu.com
 */

require('should');
const Bot = require('../../../lib/Bot');
const AudioPlayerInfoContent = require('../../../lib/directive/AudioPlayer/AudioPlayerInfoContent');

describe('Test AudioPlayer/AudioPlayerInfoContent.js', () => {
    let audioPlayerInfoContent = new AudioPlayerInfoContent();
    audioPlayerInfoContent.setArt('art_1');
    audioPlayerInfoContent.setAudioItemType(AudioPlayerInfoContent.FORMAT_LRC);
    audioPlayerInfoContent.setLyric('http://lyric');
    audioPlayerInfoContent.setMediaLengthInMs(12222122121);
    audioPlayerInfoContent.setProvider('test_provider1', 'http://logo');
    audioPlayerInfoContent.setTitle('test_title');
    audioPlayerInfoContent.setTitleSubtext1('sub_text_1');
    audioPlayerInfoContent.setTitleSubtext2('sub_text_2');

    it('#getData', () => {
        audioPlayerInfoContent.getData().should.deepEqual({
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
        });
    });
});