/**
 * @file 重新指定页面无交互退出时间
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
 * @class ResetNonInteractionExitTimeCommand 重新指定页面无交互退出时间
 * @extends {BaseCommand}
 * @example
 * let resetNonInteractionExitTimeCommand = new ResetNonInteractionExitTimeCommand()
 * resetNonInteractionExitTimeCommand.setComponentId('componentId');
 */

const BaseCommand = require('./BaseCommand');

class ResetNonInteractionExitTimeCommand extends BaseCommand {
    /**
     * ResetNonInteractionExitTimeCommand 构造方法.
     */
    constructor() {
        super('ResetNonInteractionExitTime');
    }

    /**
     * 滚动动画持续时间，单位毫秒，默认 500 毫秒
     * 
     * @param {number} duration 
     */
    setDuration(duration) {
        if (typeof duration === 'number') {
            this.data.duration = duration;
        }
    }

}

module.exports = ResetNonInteractionExitTimeCommand;