/**
 * @file 重置定时器指令
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
 * @class ResetTimerCommand 重置定时器指令
 * @extends {BaseCommand}
 * @example
 * let resetTimerCommand = new ResetTimerCommand()
 * resetTimerCommand.setDuration(2000);
 * resetTimerCommand.setComponentId('componentId');
 */

const BaseCommand = require('./BaseCommand');

class ResetTimerCommand extends BaseCommand {

    /**
     * ResetTimerCommand 构造方法.
     */
    constructor() {
        super('ResetTimer');
    }

    /**
     * @desc 重置Timer的延迟执行时间
     * @param {number} duration 设置Timer的延迟执行时间
     */
    setDuration(duration) {
        if (typeof duration === 'number') {
            this.data['duration'] = duration;
        }
    }
}


module.exports = ResetTimerCommand;
