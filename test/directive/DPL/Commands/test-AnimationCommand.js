/**
 * @file AnimationCommand test
 * @author yelvye@baidu.com
 */

require('should');
const Bot = require('../../../../lib/Bot');

const AnimationCommand = Bot.Directive.DPL.Commands.AnimationCommand;
const AutoPageCommand = Bot.Directive.DPL.Commands.AutoPageCommand;

describe('Test Commands/AnimationCommand.js', () => {
    let animationCommand = new AnimationCommand();
    animationCommand.setAttribute('width');
    animationCommand.setFrom('10dp');
    animationCommand.setTo('100dp');
    animationCommand.setEasing('ease-in');
    animationCommand.setRepeatCount('3');
    animationCommand.setRepeatMode('reverse');
    animationCommand.setComponentId('componentId');

    let autoPageCommand = new AutoPageCommand();
    autoPageCommand.setDurationInMillisecond(1000);
    autoPageCommand.setComponentId('childComponentId');
    animationCommand.addCompleteCommands(autoPageCommand);
    it('#getData', () => {
        animationCommand.getData().should.deepEqual({
            type: 'Animation',
            componentId: 'componentId',
            attribute: 'width',
            from: '10dp',
            to: '100dp',
            easing: 'linear',
            duration: 1000,
            repeatCount: '3',
            repeatMode: 'reverse',
            onComplete: [
                {
                    type: 'AutoPage',
                    componentId: 'childComponentId',
                    durationInMillisecond: 1000
                }
            ]
        });
    });
});
