/**
 * @file ScrollToIndexCommand test
 * @author yelvye@baidu.com
 */

require('should');
const Bot = require('../../../../lib/Bot');

const ScrollToIndexCommand = Bot.Directive.DPL.Commands.ScrollToIndexCommand;

describe('Test Commands/ScrollToIndexCommand.js', () => {
    let scrollToIndexCommand = new ScrollToIndexCommand();
    scrollToIndexCommand.setIndex(1);
    scrollToIndexCommand.setAlign('center');
    scrollToIndexCommand.setComponentId('componentId');

    it('#getData', () => {
        scrollToIndexCommand.getData().should.deepEqual({
            type: 'ScrollToIndex',
            componentId: 'componentId',
            index: 1,
            align: 'center'
        });
    });
});
