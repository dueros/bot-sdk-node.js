/**
 * @file InvokeMethodCommand test
 * @author jiaoyang08@baidu.com
 */

require('should');
const Bot = require('../../../../lib/Bot');

const InvokeMethodCommand = Bot.Directive.DPL.Commands.InvokeMethodCommand;

describe('Test Commands/InvokeMethodCommand.js', () => {
    let invokeMethodCommand = new InvokeMethodCommand();
    invokeMethodCommand.setComponentId('componentId');
    invokeMethodCommand.setDWhen('dwhen string');
    invokeMethodCommand.setDelay(0);
    invokeMethodCommand.setMethodName('testMethod');
    invokeMethodCommand.setParams({
        "arguments": ['a','b','c']
    });

    it('#getData', () => {
        invokeMethodCommand.getData().should.deepEqual({
            type: 'InvokeMethod',
            componentId: 'componentId',
            delay: 0,
            dWhen: 'dwhen string',
            methodName: 'testMethod',
            params: {
                "arguments": ['a','b','c']
            }
        });
    });
});