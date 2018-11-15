/**
 * @file AskForPermissionsConsent test
 * @author yelvye@baidu.com
 */

require('should');
const Bot = require('../../../lib/Bot');
const AskForPermissionsConsent = Bot.Directive.Permission.AskForPermissionsConsent;

describe('Test Directive.Permission.AskForPermissionsConsent.js', () => {
    let askForPermissionsConsent = new AskForPermissionsConsent();
    askForPermissionsConsent.addPermission('login');
    askForPermissionsConsent.setToken('token1');

    it('#getData', () => {
        askForPermissionsConsent.getData().should.deepEqual({
            type: 'Permission.AskForPermissionsConsent',
            token: 'token1'
        });
    });
});
