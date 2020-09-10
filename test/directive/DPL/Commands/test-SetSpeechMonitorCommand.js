/**
 * @file SetSpeechMonitorCommand test
 * @author jiaoyang08@baidu.com
 */

require('should');
const Bot = require('../../../../lib/Bot');

const SetSpeechMonitorCommand = Bot.Directive.DPL.Commands.SetSpeechMonitorCommand;
const SendEvent = Bot.Directive.DPL.Commands.SendEventCommand;

describe('Test Commands/SetSpeechMonitorCommand.js', () => {
    let setSpeechMonitorCommand = new SetSpeechMonitorCommand();
    setSpeechMonitorCommand.setComponentId('componentId');
    setSpeechMonitorCommand.setDWhen('dwhen string');
    setSpeechMonitorCommand.setDelay(0);
    setSpeechMonitorCommand.setSpeechFinishedPosition(10);

    let argArr = ['arg1','arg2'];
    let sendEventOnFinished = new SendEvent();
    sendEventOnFinished.setComponentId("OnFinished");
    sendEventOnFinished.setDelay(10);
    sendEventOnFinished.setDWhen('test dwhen');
    sendEventOnFinished.setDialogType('CURRENT');
    sendEventOnFinished.addArguments(argArr);

    let sendEventOnInterrupted = new SendEvent();
    sendEventOnInterrupted.setComponentId("onInterrupted");
    sendEventOnInterrupted.setDelay(10);
    sendEventOnInterrupted.setDWhen('test dwhen2');
    sendEventOnInterrupted.setDialogType('CURRENT');
    sendEventOnInterrupted.addArguments(argArr);

    setSpeechMonitorCommand.setOnFinished(sendEventOnFinished);
    setSpeechMonitorCommand.setOnInterrupted(sendEventOnInterrupted);

    it('#getData', () => {
        setSpeechMonitorCommand.getData().should.deepEqual({
            type: 'SetSpeechMonitor',
            componentId: "componentId",
            delay: 0,
            dWhen: 'dwhen string',
            speechFinishedPosition: 10,
            onFinished: {
                type: 'SendEvent',
                componentId: 'OnFinished',
                delay: 10,
                dWhen: 'test dwhen',
                dialogType: 'CURRENT'
              },
            onInterrupted: {
                type: 'SendEvent',
                componentId: 'onInterrupted',
                delay: 10,
                dWhen: 'test dwhen2',
                dialogType: 'CURRENT'
              }
        });
    });
});