/**
 * @file AmountTag test
 * @author yelvye@baidu.com
 */

require('should');
const Bot = require('../../../../../lib/Bot');
const AmountTag = Bot.Directive.Display.Template.Tag.AmountTag;

describe('Test Display.Template.Tag.AmountTag.js', () => {
    let amountTag = new AmountTag();
    amountTag.setBackgroundColor('red');
    amountTag.setColor('black');
    amountTag.setText('text');
    amountTag.setType('type');

    it('#getData', () => {
        let data = amountTag.getData();
        data.should.deepEqual({
            type: 'type',
            backgroundColor: 'red',
            color: 'black',
            text: 'text'
        });
    });
});
