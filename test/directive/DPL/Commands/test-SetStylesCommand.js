/**
 * @file SetStylesCommand test
 * @author jiaoyang08@baidu.com
 */

require('should');
const Bot = require('../../../../lib/Bot');

const SetStylesCommand = Bot.Directive.DPL.Commands.SetStylesCommand;

describe('Test Commands/SetStylesCommand.js', () => {
    let setStylesCommand = new SetStylesCommand();
    setStylesCommand.setComponentId('componentId');
    setStylesCommand.setDWhen('dwhen string');
    setStylesCommand.setDelay(0);
    setStylesCommand.setStyles({
        "width": "100%"
    });

    it('#getData', () => {
        setStylesCommand.getData().should.deepEqual({
            type: 'SetStyles',
            componentId: "componentId",
            delay: 0,
            dWhen: 'dwhen string',
            styles: {
                "width": "100%"
            }
        });
    });
});