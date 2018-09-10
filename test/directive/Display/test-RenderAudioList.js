/**
 * @file RenderAudioList test
 * @author yelvye@baidu.com
 */

require('should');
const Bot = require('../../../lib/Bot');
const RenderAudioList = Bot.Directive.Display.RenderAudioList;
const AudioItem = require('../../../lib/directive/Display/AudioListItem');

describe('Test Display/RenderAudioList.js', () => {
    let renderAudioList = new RenderAudioList();
    renderAudioList.setToken('audio_list_token');
    let audioItem = new AudioItem('audio_item_title', 'titleSubtext1');
    audioItem.setMusicVideoTag(true);
    audioItem.setFavorited(true);
    audioItem.setImage('image.png');
    audioItem.setToken('token');
    audioItem.setTitleSubtext2('titleSubtext2');
    renderAudioList.addAudioItem(audioItem);

    let audioItem2 = new AudioItem('audio_item_title_2', 'titleSubtext1_2');
    audioItem2.setMusicVideoTag(true);
    audioItem2.setFavorited(true);
    audioItem2.setImage('image2.png');
    audioItem2.setToken('token2');
    audioItem2.setTitleSubtext2('titleSubtext2_2');
    renderAudioList.addAudioItem(audioItem2);
    it('#getData', () => {
        let data = renderAudioList.getData();
        data.should.deepEqual({
            type: 'Display.RenderAudioList',
            token: 'audio_list_token',
            behavior: 'REPLACE',
            size: 2,
            audioItems:[
                {
                    title: 'audio_item_title',
                    titleSubtext1: 'titleSubtext1',
                    token: 'token',
                    isMusicVideo: true,
                    isFavorited: true,
                    image: {
                       src: 'image.png'
                    },
                    titleSubtext2: 'titleSubtext2'
                },
                {
                    title: 'audio_item_title_2',
                    titleSubtext1: 'titleSubtext1_2',
                    token: 'token2',
                    isMusicVideo: true,
                    isFavorited: true,
                    image: {
                        src: 'image2.png'
                    },
                    titleSubtext2: 'titleSubtext2_2'
                }
            ]
        });
    });
});