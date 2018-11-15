/**
 * @file PayTag test
 * @author yelvye@baidu.com
 */

require('should');
const Bot = require('../../../../../lib/Bot');
const PayTag = Bot.Directive.Display.Template.Tag.PayTag;

describe('Test Display.Template.Tag.PayTag.js', () => {
    let payTag = new PayTag();
    payTag.setBackgroundColor('red');
    payTag.setColor('black');
    payTag.setText('text');
    payTag.setType('type');

    it('#getData', () => {
        let data = payTag.getData();
        data.should.deepEqual({
            type: 'type',
            text: 'text',
            backgroundColor: 'red',
            color: 'black'
        });
    });
});
