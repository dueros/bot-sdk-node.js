/**
 * @file ScrollCommand test
 * @author yelvye@baidu.com
 */

require('should');
const Bot = require('../../../../lib/Bot');

const ScrollCommand = Bot.Directive.DPL.Commands.ScrollCommand;

describe('Test Commands/ScrollCommand.js', () => {
    let scrollCommand = new ScrollCommand();
    scrollCommand.setDistance('100dp');
    scrollCommand.setComponentId('componentId');

    it('#getData', () => {
        scrollCommand.getData().should.deepEqual({
            type: 'Scroll',
            componentId: 'componentId',
            distance: '100dp'
        });
    });
});
