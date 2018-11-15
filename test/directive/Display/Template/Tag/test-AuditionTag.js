/**
 * @file AuditionTag test
 * @author yelvye@baidu.com
 */

require('should');
const Bot = require('../../../../../lib/Bot');
const AuditionTag = Bot.Directive.Display.Template.Tag.AuditionTag;

describe('Test Display.Template.Tag.AuditionTag.js', () => {
    let auditionTag = new AuditionTag();
    auditionTag.setBackgroundColor('red');
    auditionTag.setColor('black');
    auditionTag.setText('text');
    auditionTag.setType('type');

    it('#getData', () => {
        let data = auditionTag.getData();
        data.should.deepEqual({
            type: 'type',
            text: 'text',
            backgroundColor: 'red',
            color: 'black'
        });
    });
});
