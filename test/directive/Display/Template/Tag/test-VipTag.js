/**
 * @file VipTag test
 * @author yelvye@baidu.com
 */

require('should');
const Bot = require('../../../../../lib/Bot');
const VipTag = Bot.Directive.Display.Template.Tag.VipTag;

describe('Test Display.Template.Tag.VipTag.js', () => {
    let vipTag = new VipTag();
    vipTag.setBackgroundColor('red');
    vipTag.setColor('black');
    vipTag.setText('text');
    vipTag.setType('type');

    it('#getData', () => {
        let data = vipTag.getData();
        data.should.deepEqual({
            type: 'type',
            text: 'text',
            backgroundColor: 'red',
            color: 'black'
        });
    });
});
