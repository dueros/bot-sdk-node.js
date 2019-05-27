/**
 * @file 基础指令类
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

class BaseCommand {

    /**
     * BaseCommand 构造方法
     *
     * @param {string} type Command类型
     */
    constructor(type) {
        this.data = {
            type: type,
            componentId: ''
        };
    }

    /**
     * 设置指令绑定的组件id
     *
     * @param {string} componentId 组件id
     * @public
     */
    setComponentId(componentId) {
        if (componentId) {
            this.data.componentId = componentId;
        }
    }

    /**
     * 获取指令的data
     *
     * @return {Object} 返回数据
     * @public
     */
    getData() {
        return this.data;
    }
}

module.exports = BaseCommand;
