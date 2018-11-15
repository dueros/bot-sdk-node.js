/**
 * @file TimeTag test
 * @author yelvye@baidu.com
 */

require('should');
const Bot = require('../../../../../lib/Bot');
const TimeTag = Bot.Directive.Display.Template.Tag.TimeTag;

describe('Test Display.Template.Tag.TimeTag.js', () => {
    let timeTag = new TimeTag();
    timeTag.setBackgroundColor('red');
    timeTag.setColor('black');
    timeTag.setText('text');
    timeTag.setType('type');

    it('#getData', () => {
        let data = timeTag.getData();
        data.should.deepEqual({
            type: 'type',
            text: 'text',
            backgroundColor: 'red',
            color: 'black'
        });
    });
});
