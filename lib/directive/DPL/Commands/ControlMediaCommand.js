/**
 * @file 媒体控制指令
 * @author yelvye@baidu.com
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
 * @class ControlMediaCommand 媒体控制指令
 * @extends {BaseCommand}
 * @example
 * let controlMediaCommand = new ControlMediaCommand()
 * controlMediaCommand.setAttribute('width');
 * controlMediaCommand.setFrom('10dp');
 * controlMediaCommand.setTo('100dp');
 * controlMediaCommand.setEasing('ease-in');
 */

const BaseCommand = require('./BaseCommand');

class ControlMediaCommand extends BaseCommand {

    /**
     * ControlMedia 构造方法.
     */
    constructor() {
        super('ControlMedia');
        this.data.componentId = '';
        this.data.command = '';
    }


    /**
     * 设置动作属性
     *
     * @param {string} command 名称
     * @public
     */
    setCommand(command) {
        if (ControlMediaCommand.commands.indexOf(command) !== -1) {
            this.data.command = command;
        }
    }

}

ControlMediaCommand.commands = [
    'play',
    'pause',
    'next',
    'previous',
    'screenBulletOn',
    'screenBulletOff'
];

module.exports = ControlMediaCommand;
