/**
 * @file 串行执行指令
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
 * @class SequentialCommand 串行执行指令
 * @extends {BaseCommand}
 * @example
 * let autoPageCommand = new AutoPageCommand();
 * autoPageCommand.setDurationInMillisecond(1000);
 * autoPageCommand.setComponentId('componentId1');
 * let scrollCommand = new ScrollCommand();
 * scrollCommand.setDistance('100dp');
 * scrollCommand.setComponentId('componentId2');
 * let sequentialCommand = new SequentialCommand();
 * sequentialCommand.setDelayInMilliseconds(1000);
 * sequentialCommand.setRepeatCount(2);
 * sequentialCommand.setComponentId('componentId3');
 * sequentialCommand.setCommands([autoPageCommand, scrollCommand]);
 */

const BaseCommand = require('./BaseCommand');

class SequentialCommand extends BaseCommand {

    /**
     * SequentialCommand 构造方法.
     */
    constructor() {
        super('Sequential');
    }

    /**
     * 设置延迟执行时间
     *
     * @param {number} delayMs 延迟执行时间
     * @public
     */
    setDelayInMilliseconds(delayMs) {
        if (typeof delayMs === 'number') {
            this.data.delayInMilliseconds = delayMs;
        }
    }

    /**
     * 设置滚动的距离
     *
     * @param {number} repeatCount 重复执行次数
     * @public
     */
    setRepeatCount(repeatCount) {
        if (typeof repeatCount === 'number') {
            this.data.repeatCount = repeatCount;
        }
    }

    /**
     * 设置滚动的距离
     *
     * @param {string} distance 滚动的距离
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

module.exports = SequentialCommand;
