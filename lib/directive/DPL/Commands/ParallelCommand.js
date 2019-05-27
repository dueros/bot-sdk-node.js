/**
 * @file 并行执行指令
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
 * @class ParallelCommand 并行执行指令
 * @extends {BaseCommand}
 * @example
 * let autoPageCommand1 = new AutoPageCommand()
 * autoPageCommand1.setDurationInMillisecond(1000);
 * autoPageCommand1.setComponentId('componentId1');
 * let autoPageCommand2 = new AutoPageCommand()
 * autoPageCommand2.setDurationInMillisecond(1000);
 * autoPageCommand2.setComponentId('componentId2');
 * let parallelCommand = new ParallelCommand();
 * parallelCommand.setDelayInMilliseconds(1000);
 * parallelCommand.setComponentId('componentId3');
 * parallelCommand.setCommands([autoPageCommand1, autoPageCommand2]);
 */

const BaseCommand = require('./BaseCommand');

class ParallelCommand extends BaseCommand {

    /**
     * AnimationCommand 构造方法.
     */
    constructor() {
        super('Parallel');
    }

    /**
     * 设置延迟时间间隔
     *
     * @param {number} delayMs 延迟时间间隔
     * @public
     */
    setDelayInMilliseconds(delayMs) {
        if (typeof delayMs === 'number') {
            this.data.delayInMilliseconds = delayMs;
        }
    }

    /**
     * 设置并行执行的指令集合
     *
     * @param {BaseCommand|Array} commands 指令集合
     * @public
     */
    setCommands(commands) {
        if (commands instanceof BaseCommand) {
            this.data.commands = [commands.getData()];
        }
        if (commands instanceof Array) {
            this.data.commands = commands.map(function (item) {
                if (item instanceof BaseCommand) {
                    return item.getData();
                }
            }).filter(function (item) {
                return !!item;
            });
        }
    }
}

module.exports = ParallelCommand;
