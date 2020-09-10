/**
 * @file ResetNonInteractionExitTimeCommand test
 * @author jiaoyang08@baidu.com
 */

require('should');
const Bot = require('../../../../lib/Bot');

const ResetNonInteractionExitTimeCommand = Bot.Directive.DPL.Commands.ResetNonInteractionExitTimeCommand;

describe('Test Commands/ResetNonInteractionExitTimeCommand.js', () => {
    let resetNonInteractionExitTimeCommand = new ResetNonInteractionExitTimeCommand();
    resetNonInteractionExitTimeCommand.setDWhen('dwhen string');
    resetNonInteractionExitTimeCommand.setDelay(0);
    resetNonInteractionExitTimeCommand.setDuration(10)

    it('#getData', () => {
        resetNonInteractionExitTimeCommand.getData().should.deepEqual({
            type: 'ResetNonInteractionExitTime',
            componentId: '',
            delay: 0,
            dWhen: 'dwhen string',
            duration: 10,
        });
    });
});