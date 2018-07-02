/**
 * @file VideoPlayer/Play test
 * @author yelvye@baidu.com
 */

require('should');
const Bot = require('../../../lib/Bot');
const Play = Bot.Directive.VideoPlayer.Play;
describe('Test VideoPlayer/Play.js', () => {

    let url = 'http://dbp-resource.gz.bcebos.com/zhaojing_demo/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E5%91%8A%E7%99%BD%E6%B0%94%E7%90%83.mp3?authorization=bce-auth-v1%2Fbc881876e7a94578935a868716b6cf69%2F2018-05-29T08%3A13%3A27Z%2F-1%2Fhost%2Fbff1c88a876764a98d3f3f35bc2a4952835190339b64a39c7020e8a4b190b3b9';
    let play1 = new Play(url, Play.REPLACE_ENQUEUED);
    play1.setOffsetInMilliseconds(121321.223);
    play1.setExpiryTime('123213223');
    play1.setExpectedPreviousToken('asdsd-1233-dsew-39FG');
    play1.setReportDelayInMs(1234.12212);
    play1.setReportIntervalInMs(123);
    play1.setToken('AGDG-SAHSHD_ASDS_123');
    play1.setUrl('http://set-url.com');

    let play2 = new Play(url, 'invalid type');
    play2.setOffsetInMilliseconds('invalid_seconds');
    play2.setExpiryTime('123213223');
    play2.setExpectedPreviousToken('asdsd-1233-dsew-39FG');
    play2.setReportDelayInMs(123.12212);
    play2.setReportIntervalInMs(123);

    it('Init Play By invalid media type', () => {
        play2.getData().playBehavior.should.equal(Play.REPLACE_ALL)
    });

    it('#getToken', () => {
        play1.getToken().should.equal('AGDG-SAHSHD_ASDS_123');
        play2.getToken().should.not.equal('');
    });

    it('#getData', () => {
        let data = play1.getData();
        data.videoItem.videoItemId = 'AGDG-SAHSHD_ASDS_123';
        data.should.deepEqual({
            type:'VideoPlayer.Play',
            playBehavior: Play.REPLACE_ENQUEUED,
            videoItem:{
                videoItemId: 'AGDG-SAHSHD_ASDS_123',
                stream:{
                    url: 'http://set-url.com',
                    offsetInMilliseconds: 121321,
                    token: 'AGDG-SAHSHD_ASDS_123',
                    expiryTime: '123213223',
                    expectedPreviousToken: 'asdsd-1233-dsew-39FG',
                    progressReport: {
                        progressReportDelayInMilliseconds: 1234,
                        progressReportIntervalInMilliseconds: 123
                    }
                }
            }
        });
    });
});

