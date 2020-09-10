/**
 * @file PageDestroyCommand test
 * @author jiaoyang08@baidu.com
 */

require('should');
const Bot = require('../../../../lib/Bot');

const PageDestroyCommand = Bot.Directive.DPL.Commands.PageDestroyCommand;

describe('Test Commands/PageDestroyCommand.js', () => {
    let pageDestroyCommand = new PageDestroyCommand();
    pageDestroyCommand.setDWhen('dwhen string');
    pageDestroyCommand.setDelay(0);

    it('#getData', () => {
        pageDestroyCommand.getData().should.deepEqual({
            type: 'PageDestroy',
            componentId: '',
            delay: 0,
            dWhen: 'dwhen string',
        });
    });
});