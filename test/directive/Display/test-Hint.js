/**
 * @file Hint test
 * @author yelvye@baidu.com
 */

require('should');
const Bot = require('../../../lib/Bot');
const Hint = Bot.Directive.Display.Hint;

describe('Test Display/Hint.js', () => {
    let hint1 = new Hint('text1');
    let hint2 = new Hint(['text2', 'text3']);

    it('hint1#getData', () => {
        hint1.getData().should.deepEqual({
            type: 'Hint',
            hints: [
                {
                    type: 'PlainText',
                    text: 'text1'
                }
            ]
        });
    });

    it('hint2#getData', () => {
        hint2.getData().should.deepEqual({
            type: 'Hint',
            hints: [
                {
                    type: 'PlainText',
                    text: 'text2'
                },
                {
                    type: 'PlainText',
                    text: 'text3'
                }
            ]
        });
    });
});


