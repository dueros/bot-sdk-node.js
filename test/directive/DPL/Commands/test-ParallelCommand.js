/**
 * @file ParallelCommand test
 * @author yelvye@baidu.com
 */

require('should');
const Bot = require('../../../../lib/Bot');

const ParallelCommand = Bot.Directive.DPL.Commands.ParallelCommand;
const AutoPageCommand = Bot.Directive.DPL.Commands.AutoPageCommand;

describe('Test Commands/ParallelCommand.js', () => {
    let autoPageCommand1 = new AutoPageCommand();
    autoPageCommand1.setDurationInMillisecond(1000);
    autoPageCommand1.setComponentId('componentId1');
    let autoPageCommand2 = new AutoPageCommand();
    autoPageCommand2.setDurationInMillisecond(1000);
    autoPageCommand2.setComponentId('componentId2');
    let parallelCommand = new ParallelCommand();
    parallelCommand.setDelayInMilliseconds(1000);
    parallelCommand.setComponentId('componentId3');
    parallelCommand.setCommands([autoPageCommand1, autoPageCommand2]);

    it('#getData', () => {
        parallelCommand.getData().should.deepEqual({
            type: 'Parallel',
            componentId: 'componentId3',
            delayInMilliseconds: 1000,
            commands: [
                {
                    type: 'AutoPage',
                    componentId: 'componentId1',
                    durationInMillisecond: 1000
                },
                {
                    type: 'AutoPage',
                    componentId: 'componentId2',
                    durationInMillisecond: 1000
                }
            ]
        });
    });
});
