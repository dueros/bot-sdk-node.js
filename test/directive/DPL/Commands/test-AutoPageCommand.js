/**
 * @file AutoPageCommand test
 * @author yelvye@baidu.com
 */

require('should');
const Bot = require('../../../../lib/Bot');

const AutoPageCommand = Bot.Directive.DPL.Commands.AutoPageCommand;

describe('Test Commands/AutoPageCommand.js', () => {
    let autoPageCommand = new AutoPageCommand();
    autoPageCommand.setDurationInMillisecond(1000);
    autoPageCommand.setComponentId('componentId');

    it('#getData', () => {
        autoPageCommand.getData().should.deepEqual({
            type: 'AutoPage',
            componentId: 'componentId',
            durationInMillisecond: 1000
        });
    });
});
