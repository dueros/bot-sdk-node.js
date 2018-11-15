/**
 * @file HotTag test
 * @author yelvye@baidu.com
 */

require('should');
const Bot = require('../../../../../lib/Bot');
const HotTag = Bot.Directive.Display.Template.Tag.HotTag;

describe('Test Display.Template.Tag.HotTag.js', () => {
    let hotTag = new HotTag();
    hotTag.setBackgroundColor('red');
    hotTag.setColor('black');
    hotTag.setText('text');
    hotTag.setType('type');

    it('#getData', () => {
        let data = hotTag.getData();
        data.should.deepEqual({
            type: 'type',
            text: 'text',
            backgroundColor: 'red',
            color: 'black'
        });
    });
});
