/**
 * @file 窗口滚动指令
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
 * @class ScrollToElementCommand 将当前的列表视图（ScrollView、List）滑动到指定 item 所在的列表项处, targetComponentId 表示列表的对应目标子项
 * @extends {BaseCommand}
 * @example
 */

const BaseCommand = require('./BaseCommand');

class ScrollToElementCommand extends BaseCommand {
    /**
     * ScrollToElementCommand 构造方法.
     */
    constructor() {
        super('ScrollToElement');
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

    /**
     * 指定的 item 的 componentId
     * 
     * @param {string} targetComponentId 
     */
    setTargetComponentId(targetComponentId) {
        if (typeof targetComponentId === 'string') {
            this.data.targetComponentId = targetComponentId;
        }
    }

    /**
     * 设置滚动后视图的位置
     *
     * @param {string} align 视图的位置
     */
    setAlign(align) {
        if (ScrollToElementCommand.alignArr.indexOf(align) !== -1) {
            this.data.align = align;
        }
    }
}

ScrollToElementCommand.alignArr = [
    'first',
    'center',
    'last',
    'visible'
];

module.exports = ScrollToElementCommand;

