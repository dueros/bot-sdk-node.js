/**
 * @file NewTag test
 * @author yelvye@baidu.com
 */

require('should');
const Bot = require('../../../../../lib/Bot');
const NewTag = Bot.Directive.Display.Template.Tag.NewTag;

describe('Test Display.Template.Tag.NewTag.js', () => {
    let newTag = new NewTag();
    newTag.setBackgroundColor('red');
    newTag.setColor('black');
    newTag.setText('text');
    newTag.setType('type');

    it('#getData', () => {
        let data = newTag.getData();
        data.should.deepEqual({
            type: 'type',
            text: 'text',
            backgroundColor: 'red',
            color: 'black'
        });
    });
});
