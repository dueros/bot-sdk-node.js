/**
 * @file 窗口滚动指令
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
 * @class ScrollCommand 窗口滚动指令
 * @extends {BaseCommand}
 * @example
 * let scrollCommand = new ScrollCommand()
 * scrollCommand.setDistance("100dp");
 * scrollCommand.setComponentId('componentId');
 */

const BaseCommand = require('./BaseCommand');

class ScrollCommand extends BaseCommand {

    /**
     * ScrollCommand 构造方法.
     */
    constructor() {
        super('Scroll');
    }

    /**
     * 设置滚动的距离
     *
     * @param {string} distance 滚动的距离
     * @public
     */
    setDistance(distance) {
        if (typeof distance === 'string') {
            this.data.distance = distance;
        }
    }
}

module.exports = ScrollCommand;
