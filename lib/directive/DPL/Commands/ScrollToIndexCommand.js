/**
 * @file 滚动到指定index的指令
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
 * @class ScrollToIndexCommand 滚动到指定index的指令
 * @extends {BaseCommand}
 * @example
 * let scrollToIndexCommand = new ScrollToIndexCommand()
 * scrollToIndexCommand.setIndex(1);
 * scrollToIndexCommand.setAlign('center');
 * scrollToIndexCommand.setComponentId('componentId');
 */

const BaseCommand = require('./BaseCommand');

class ScrollToIndexCommand extends BaseCommand {

    /**
     * ScrollToIndexCommand 构造方法.
     */
    constructor() {
        super('ScrollToIndex');
    }

    /**
     * 设置index索引值
     *
     * @param {number} index index索引值
     * @public
     */
    setIndex(index) {
        if (typeof index === 'number') {
            this.data.index = index;
        }
    }

    /**
     * 设置滚动后视图的位置
     *
     * @param {string} align 视图的位置
     * @public
     */
    setAlign(align) {
        if (ScrollToIndexCommand.alignArr.indexOf(align) !== -1) {
            this.data.align = align;
        }
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

ScrollToIndexCommand.alignArr = [
    'first',
    'center',
    'last',
    'visible'
];

module.exports = ScrollToIndexCommand;
