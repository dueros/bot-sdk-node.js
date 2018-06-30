/**
 * @file LaunchApp test
 * @author yelvye@baidu.com
 */

require('should');
const LaunchApp = require('../../../lib/directive/AppLuncher/LaunchApp');

describe('Test AppLuncher/LaunchApp.js', () => {
    let launchApp = new LaunchApp('appName', 'packageName', 'deepLink');
    launchApp.setAppName('appName by set');
    launchApp.setDeepLink('deepLink by set');
    launchApp.setPackageName('packageName by set');
    launchApp.setToken('token by set');

    it('#getData', () => {
        launchApp.getData().should.deepEqual({
            type: 'AppLauncher.LaunchApp',
            appName: 'appName by set',
            packageName: 'packageName by set',
            deepLink: 'deepLink by set',
            token: 'token by set'
        });
    });
});
