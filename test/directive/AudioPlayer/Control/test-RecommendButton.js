/**
 * @file RecommendButton test
 * @author yelvye@baidu.com
 */

require('should');
const Bot = require('../../../../lib/Bot');
const RecommendButton = Bot.Directive.AudioPlayer.Control.RecommendButton;

describe('Test AudioPlayer/Control/RecommendButton.js', () => {
    let recommendButton = new RecommendButton();
    recommendButton.setEnabled(false);
    recommendButton.setSelected(true);

    it('#getData', () => {
        recommendButton.getData().should.deepEqual({
            type: 'BUTTON',
            name: RecommendButton.NAME,
            enabled: false,
            selected: true
        });
    });
});
