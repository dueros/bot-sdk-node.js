/**
 * @file ExecuteCommands test
 * @author yelvye@baidu.com
 */

require('should');
const Bot = require('../../../lib/Bot');

const ExecuteCommands = Bot.Directive.DPL.ExecuteCommands;
const ScrollCommand = Bot.Directive.DPL.Commands.ScrollCommand;

describe('Test DPL/ExecuteCommands.js', () => {
    let scrollCommand = new ScrollCommand();
    scrollCommand.setDistance('100dp');
    scrollCommand.setComponentId('componentId');
    let executeCommands = new ExecuteCommands();
    executeCommands.setCommands(scrollCommand);
    executeCommands.setToken('test_token');
    it('#getData', () => {
        executeCommands.getData().should.deepEqual({
            type: 'DPL.ExecuteCommands',
            commands: [
                {
                    type: 'Scroll',
                    componentId: 'componentId',
                    distance: '100dp'
                }
            ],
            token: 'test_token'
        });
    });
});
