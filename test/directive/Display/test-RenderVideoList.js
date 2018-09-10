/**
 * @file RenderVideoList test
 * @author yelvye@baidu.com
 */

require('should');
const Bot = require('../../../lib/Bot');
const RenderVideoList = Bot.Directive.Display.RenderVideoList;
const VideoItem = require('../../../lib/directive/Display/VideoListItem');

describe('Test Display/RenderTemplate.js', () => {
    let renderVideoList = new RenderVideoList('video_list_title');
    renderVideoList.setToken('video_list_token');
    let videoItem = new VideoItem('video_item_title_1', 'titleSubtext1_1');
    videoItem.setMediaLengthInMilliseconds(10000);
    videoItem.setFavorited(true);
    videoItem.setImage('image.png');
    videoItem.setToken('token');
    videoItem.setTitleSubtext2('titleSubtext2');
    renderVideoList.addVideoItem(videoItem);

    let videoItem2 = new VideoItem('video_item_title_2', 'titleSubtext1_2');
    videoItem2.setMediaLengthInMilliseconds(10000);
    videoItem2.setFavorited(true);
    videoItem2.setImage('image2.png');
    videoItem2.setToken('token2');
    videoItem2.setTitleSubtext2('titleSubtext2_2');
    renderVideoList.addVideoItem(videoItem2);

    it('#getData', () => {
        let data = renderVideoList.getData();
        data.should.deepEqual({
            type: 'Display.RenderVideoList',
            token: 'video_list_token',
            title: 'video_list_title',
            behavior: 'REPLACE',
            size: 2,
            videoItems :[
                {
                    title: 'video_item_title_1',
                    titleSubtext1: 'titleSubtext1_1',
                    token: 'token',
                    mediaLengthInMilliseconds: 10000,
                    isFavorited: true,
                    image: {
                        src: 'image.png'
                    },
                    titleSubtext2: 'titleSubtext2'
                },
                {
                    title: 'video_item_title_2',
                    titleSubtext1: 'titleSubtext1_2',
                    token: 'token2',
                    mediaLengthInMilliseconds: 10000,
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
