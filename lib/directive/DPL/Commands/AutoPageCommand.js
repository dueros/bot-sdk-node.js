/**
 * @file 自动翻页指令
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
 * @class AutoPageCommand 自动翻页指令
 * @extends {BaseCommand}
 * @example
 * let autoPageCommand = new AutoPageCommand()
 * autoPageCommand.setDurationInMillisecond(1000);
 * autoPageCommand.setComponentId('componentId');
 */

const BaseCommand = require('./BaseCommand');

class AutoPageCommand extends BaseCommand {

    /**
     * AutoPageCommand 构造方法.
     */
    constructor() {
        super('AutoPage');
    }

    /**
     * 设置切换页面的时间间隔
     *
     * @param {number} durationMs 切换页面的时间间隔
     * @public
     */
    setDurationInMillisecond(durationMs) {
        if (typeof durationMs === 'number') {
            this.data.durationInMillisecond = durationMs;
        }
    }
}

module.exports = AutoPageCommand;
