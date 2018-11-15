/**
 * @file RenderVideoPlayerInfo test
 * @author yelvye@baidu.com
 */

require('should');
const Bot = require('../../../lib/Bot');
const RenderVideoPlayerInfo = Bot.Directive.Display.RenderVideoPlayerInfo;
const VideoPlayerInfoContent = require('../../../lib/directive/VideoPlayer/VideoPlayerInfoContent');
const NextButton = Bot.Directive.AudioPlayer.Control.NextButton;
const FavoriteButton = Bot.Directive.AudioPlayer.Control.FavoriteButton;
describe('Test Display/RenderVideoPlayerInfo.js', () => {
    let videoPlayerInfoContent = new VideoPlayerInfoContent();
    videoPlayerInfoContent.setTitle('test_title');
    videoPlayerInfoContent.setMediaLengthInMilliseconds(100000);

    let controls = [new NextButton(), new FavoriteButton(), null];
    let renderVideoPlayerInfo = new RenderVideoPlayerInfo(videoPlayerInfoContent, controls);
    renderVideoPlayerInfo.setToken('fff9900f-6cea-4e6e-8ff2-445d6b735612');

    it('#getData', () => {
        renderVideoPlayerInfo.getData().should.deepEqual({
            type: 'Display.RenderVideoPlayerInfo',
            token: 'fff9900f-6cea-4e6e-8ff2-445d6b735612',
            content: {
                title: 'test_title',
                mediaLengthInMilliseconds: 100000
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