/**
 * @file SetPageCommand test
 * @author yelvye@baidu.com
 */

require('should');
const Bot = require('../../../../lib/Bot');

const SetPageCommand = Bot.Directive.DPL.Commands.SetPageCommand;

describe('Test Commands/SetPageCommand.js', () => {
    let setPageCommand = new SetPageCommand();
    setPageCommand.setPosition('relative');
    setPageCommand.setValue(1);
    setPageCommand.setComponentId('componentId');
    it('#getData', () => {
        setPageCommand.getData().should.deepEqual({
            type: 'SetPage',
            componentId: 'componentId',
            position: 'relative',
            value: 1
        });
    });
});
