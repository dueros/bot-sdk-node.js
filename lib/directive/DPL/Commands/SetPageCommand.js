/**
 * @file 页面切换指令
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
 * @class SetPageCommand 页面切换指令
 * @extends {BaseCommand}
 * @example
 * let setPageCommand = new SetPageCommand()
 * setPageCommand.setPosition('relative');
 * setPageCommand.setValue(1);
 * setPageCommand.setComponentId('componentId');
 */

const BaseCommand = require('./BaseCommand');

class SetPageCommand extends BaseCommand {

    /**
     * SetPageCommand 构造方法.
     */
    constructor() {
        super('SetPage');
    }

    /**
     * 设置属性值
     *
     * @param {string} position 相对或者绝对
     * @public
     */
    setPosition(position = 'relative') {
        if (SetPageCommand.positionArr.indexOf(position) !== -1) {
            this.data.position = position;
        }
    }

    /**
     * 设置切换步长
     *
     * @param {number} value 步长
     * @public
     */
    setValue(value) {
        if (typeof value === 'number') {
            this.data.value = value;
        }
    }
}

SetPageCommand.positionArr = [
    'relative',
    'absolute'
];

module.exports = SetPageCommand;
