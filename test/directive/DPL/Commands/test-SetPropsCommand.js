/**
 * @file SetPropsCommand test
 * @author jiaoyang08@baidu.com
 */

require('should');
const Bot = require('../../../../lib/Bot');

const SetPropsCommand = Bot.Directive.DPL.Commands.SetPropsCommand;

describe('Test Commands/SetPropsCommand.js', () => {
    let setPropsCommand = new SetPropsCommand();
    setPropsCommand.setComponentId('componentId');
    setPropsCommand.setDWhen('dwhen string');
    setPropsCommand.setDelay(0);
    setPropsCommand.setProps({
        "width": "100%"
    });

    it('#getData', () => {
        setPropsCommand.getData().should.deepEqual({
            type: 'SetProps',
            componentId: "componentId",
            delay: 0,
            dWhen: 'dwhen string',
            props: {
                "width": "100%"
            }
        });
    });
});