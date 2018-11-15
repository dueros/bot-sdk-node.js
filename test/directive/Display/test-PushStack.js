/**
 * @file PushStack test
 * @author yelvye@baidu.com
 */

require('should');
const Bot = require('../../../lib/Bot');
const PushStack = Bot.Directive.Display.PushStack;

describe('Test Display/PushStack.js', () => {
    let pushStack = new PushStack();
    it('#getData', () => {
        pushStack.getData().should.deepEqual({
            type: 'Display.PushStack'
        });
    });
});
