/**
 * @file SequentialCommand test
 * @author yelvye@baidu.com
 */

require('should');
const Bot = require('../../../../lib/Bot');

const SequentialCommand = Bot.Directive.DPL.Commands.SequentialCommand;
const ScrollCommand = Bot.Directive.DPL.Commands.ScrollCommand;
const AutoPageCommand = Bot.Directive.DPL.Commands.AutoPageCommand;

describe('Test Commands/SequentialCommand.js', () => {
    let autoPageCommand = new AutoPageCommand();
    autoPageCommand.setDurationInMillisecond(1000);
    autoPageCommand.setComponentId('componentId1');
    let scrollCommand = new ScrollCommand();
    scrollCommand.setDistance('100dp');
    scrollCommand.setComponentId('componentId2');
    let sequentialCommand = new SequentialCommand();
    sequentialCommand.setDelayInMilliseconds(1000);
    sequentialCommand.setRepeatCount(2);
    sequentialCommand.setComponentId('componentId3');
    sequentialCommand.setCommands([autoPageCommand, scrollCommand]);

    it('#getData', () => {
        sequentialCommand.getData().should.deepEqual({
            type: 'Sequential',
            componentId: 'componentId3',
            delayInMilliseconds: 1000,
            repeatCount: 2,
            commands: [
                {
                    type: 'AutoPage',
                    componentId: 'componentId1',
                    durationInMillisecond: 1000
                },
                {
                    type: 'Scroll',
                    componentId: 'componentId2',
                    distance: '100dp'
                }
            ]
        });
    });
});
