/**
 * @file SetStateCommand test
 * @author yelvye@baidu.com
 */

require('should');
const Bot = require('../../../../lib/Bot');

const SetStateCommand = Bot.Directive.DPL.Commands.SetStateCommand;

describe('Test Commands/SetStateCommand.js', () => {
    let setStateCommand = new SetStateCommand();
    setStateCommand.setState('src');
    setStateCommand.setValue('http://img-url/1.jpg');
    setStateCommand.setComponentId('componentId');

    it('#getData', () => {
        setStateCommand.getData().should.deepEqual({
            type: 'SetState',
            componentId: 'componentId',
            state: 'src',
            value: 'http://img-url/1.jpg'
        });
    });
});
