/**
 * @file RefreshButton test
 * @author yelvye@baidu.com
 */

require('should');
const Bot = require('../../../../lib/Bot');
const RefreshButton = Bot.Directive.AudioPlayer.Control.RefreshButton;

describe('Test AudioPlayer/Control/RefreshButton.js', () => {
    let refreshButton = new RefreshButton();
    refreshButton.setEnabled(false);
    refreshButton.setSelected(true);

    it('#getData', () => {
        refreshButton.getData().should.deepEqual({
            type: 'BUTTON',
            name: RefreshButton.NAME,
            enabled: false,
            selected: true
        });
    });
});
