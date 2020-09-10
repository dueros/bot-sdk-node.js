/**
 * @file ScrollToElementCommand test
 * @author jiaoyang08@baidu.com
 */

require('should');
const Bot = require('../../../../lib/Bot');

const ScrollToElementCommand = Bot.Directive.DPL.Commands.ScrollToElementCommand;

describe('Test Commands/ScrollToElementCommand.js', () => {
    let scrollToElementCommand = new ScrollToElementCommand();
    scrollToElementCommand.setComponentId("componentId");
    scrollToElementCommand.setDWhen('dwhen string');
    scrollToElementCommand.setDelay(0);
    scrollToElementCommand.setDuration(10);
    scrollToElementCommand.setTargetComponentId("targetComponentId");
    scrollToElementCommand.setAlign('first');

    it('#getData', () => {
        scrollToElementCommand.getData().should.deepEqual({
            type: 'ScrollToElement',
            componentId: 'componentId',
            delay: 0,
            dWhen: 'dwhen string',
            duration: 10,
            targetComponentId: 'targetComponentId',
            align: 'first'
        });
    });
});