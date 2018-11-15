/**
 * @file PurchasedTag test
 * @author yelvye@baidu.com
 */

require('should');
const Bot = require('../../../../../lib/Bot');
const PurchasedTag = Bot.Directive.Display.Template.Tag.PurchasedTag;

describe('Test Display.Template.Tag.PayTag.js', () => {
    let purchasedTag = new PurchasedTag();
    purchasedTag.setBackgroundColor('red');
    purchasedTag.setColor('black');
    purchasedTag.setText('text');
    purchasedTag.setType('type');

    it('#getData', () => {
        let data = purchasedTag.getData();
        data.should.deepEqual({
            type: 'type',
            text: 'text',
            backgroundColor: 'red',
            color: 'black'
        });
    });
});
