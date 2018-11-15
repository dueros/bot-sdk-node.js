/**
 * @file LyricButton test
 * @author yelvye@baidu.com
 */

require('should');
const Bot = require('../../../lib/Bot');
const LaunchBrowser = Bot.Directive.WebBrowser.LaunchBrowser;

describe('Test AudioPlayer/Control/LyricButton.js', () => {
    let launchBrowser = new LaunchBrowser('https://baidu.com');
    launchBrowser.setToken('token_1');

    it('#getData', () => {
        launchBrowser.getData().should.deepEqual({
            type: 'WebBrowser.LaunchBrowser',
            url: 'https://baidu.com',
            token: 'token_1'
        });
    });
});
