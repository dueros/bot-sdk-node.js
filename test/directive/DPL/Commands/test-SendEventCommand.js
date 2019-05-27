/**
 * @file SendEventCommand test
 * @author yelvye@baidu.com
 */

require('should');
const Bot = require('../../../../lib/Bot');

const SendEventCommand = Bot.Directive.DPL.Commands.SendEventCommand;

describe('Test Commands/SendEventCommand.js', () => {
    let sendEventCommand = new SendEventCommand();
    sendEventCommand.setComponentId('componentId');

    it('#getData', () => {
        sendEventCommand.getData().should.deepEqual({
            type: 'SendEvent',
            componentId: 'componentId'
        });
    });
});
