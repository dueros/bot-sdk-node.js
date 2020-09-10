/**
 * @file 通用方法调用指令
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
 * @class InvokeMethodCommand 通用方法调用指令
 * @extends {BaseCommand}
 * @example
 * let invokeMethodCommand = new InvokeMethodCommand()
 * invokeMethodCommand.setComponentId("componentId");
 * invokeMethodCommand.setDocument({...});
 */

const BaseCommand = require('./BaseCommand');

class InvokeMethodCommand extends BaseCommand {
    /**
     * InvokeMethodCommand 构造方法.
     */
    constructor() {
        super('InvokeMethod');
    }

    /**
     * 调用方法名
     * 
     * @param {string} data 
     */
    setMethodName(methodName) {
        if(typeof methodName == "string") {
            this.data.methodName = methodName;
        }
    }

    /**
     * TODO 指令参数 
     * @param {object} params 指令参数
     * 指令参数
     *  arguments 指令调用方法的接收参数，数组类型
     *  arguments数组中参数类型支持任意类型（string、object、array、number、boolean）；
     *  arguments数组中参数类型支持获取事件触发的绑定参数（在事件触发指令执行的场景下），如："arguments":["$EVENT_ARGS.0", 1], 代表该指令会将事件触发该指令时，事件触发携带的参数的第一个，作为arguments的第一个参数（其结构支持多层级取值）。
     */
    setParams(params) {
        if(typeof params == "object") {
            this.data.params = params;
        }
    }

}

module.exports = InvokeMethodCommand;