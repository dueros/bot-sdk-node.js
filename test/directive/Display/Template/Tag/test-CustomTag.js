/**
 * @file AuditionTag test
 * @author yelvye@baidu.com
 */

require('should');
const Bot = require('../../../../../lib/Bot');
const CustomTag = Bot.Directive.Display.Template.Tag.CustomTag;

describe('Test Display.Template.Tag.CustomTag.js', () => {
    let customTag = new CustomTag();
    customTag.setBackgroundColor('red');
    customTag.setColor('black');
    customTag.setText('text');
    customTag.setType('type');

    it('#getData', () => {
        let data = customTag.getData();
        data.should.deepEqual({
            type: 'type',
            text: 'text',
            backgroundColor: 'red',
            color: 'black'
        });
    });
});
