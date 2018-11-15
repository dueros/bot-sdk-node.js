/**
 * @file AuditionTag test
 * @author yelvye@baidu.com
 */

require('should');
const Bot = require('../../../../../lib/Bot');
const FreeTag = Bot.Directive.Display.Template.Tag.FreeTag;

describe('Test Display.Template.Tag.CustomTag.js', () => {
    let freeTag = new FreeTag();
    freeTag.setBackgroundColor('red');
    freeTag.setColor('black');
    freeTag.setText('text');
    freeTag.setType('type');

    it('#getData', () => {
        let data = freeTag.getData();
        data.should.deepEqual({
            type: 'type',
            text: 'text',
            backgroundColor: 'red',
            color: 'black'
        });
    });
});
