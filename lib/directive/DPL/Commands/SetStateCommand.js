/**
 * @file 改变属性指令
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
 * @class SetStateCommand 动画指令
 * @extends {BaseCommand}
 * @example
 * let setStateCommand = new SetStateCommand()
 * setStateCommand.setState('src');
 * setStateCommand.setValue('http://img-url/1.jpg');
 * setStateCommand.setComponentId('componentId');
 */

const BaseCommand = require('./BaseCommand');

class SetStateCommand extends BaseCommand {

    /**
     * SetStateCommand 构造方法.
     */
    constructor() {
        super('SetState');
    }

    /**
     * 设置属性名称
     *
     * @param {string} state 属性名称
     * @public
     */
    setState(state) {
        if (state) {
            this.data.state = state;
        }
    }

    /**
     * 设置属性值
     *
     * @param {string} value 属性值
     * @public
     */
    setValue(value) {
        if (value) {
            this.data.value = value;
        }
    }

    /**
     * 设置属性值
     *
     * @param {string} value 属性值
     * @public
     */
    setStateType(stateType) {
        if (SetStateCommand.stateTypeArr.indexOf(stateType) !== -1) {
            this.data.stateType = stateType;
        }
    }
}

SetStateCommand.stateTypeArr = [
    "PROP",
    "STYLE"
];

module.exports = SetStateCommand;
