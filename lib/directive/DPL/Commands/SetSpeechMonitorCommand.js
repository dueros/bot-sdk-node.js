/**
 * @file 监听该指令被执行时进行中的 outspeech 内容的播放状态
 * @author jiaoyang08@baidu.com
 */

/**
 * Copyright (c) 2017 Baidu, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';
/**
 * @class SetSpeechMonitorCommand 监听该指令被执行时进行中的 outspeech 内容的播放状态
 * @extends {BaseCommand}
 * @example
 * let setSpeechMonitorCommand = new SetSpeechMonitorCommand()
 * setSpeechMonitorCommand.setComponentId('componentId');
 */

const BaseCommand = require('./BaseCommand');
const SendEventCommand = require('./SendEventCommand');

class SetSpeechMonitorCommand extends BaseCommand {
    /**
     * SetSpeechMonitorCommand 构造方法.
     */
    constructor() {
        super('SetSpeechMonitor');
    }

    /**
     * 标识为 speech 播放完成需要达到的 ttsposition 值（必填，且大于0）,speech 播报中 ttsposition 位置值在逐增过程中第一次达到 speechFinishedPosition 值时，执行 onFinished 并结束本次监听；
     * @param {number} speechFinishedPosition 
     */
    setSpeechFinishedPosition(speechFinishedPosition) {
        if (typeof speechFinishedPosition === 'number') {
            this.data.speechFinishedPosition = speechFinishedPosition;
        }
    }

    /**
     * 标识为播放完成后可执行的指令（目前限定为仅可使用 SendEvent 指令反馈监听结果）
     * @param {SendEventCommand} onFinished 
     */
    setOnFinished(onFinished){
        if (onFinished instanceof SendEventCommand) {
            this.data.onFinished = onFinished.getData();
        }
    }

    /**
     * 标识为播放被中断后可执行的指令（目前限定为仅可使用 SendEvent 指令反馈监听结果）
     * @param {SendEventCommand} onInterrupted 
     */
    setOnInterrupted(onInterrupted){
        if (onInterrupted instanceof SendEventCommand) {
            this.data.onInterrupted = onInterrupted.getData();
        }
    }

}

module.exports = SetSpeechMonitorCommand;