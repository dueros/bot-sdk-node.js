/**
 * @file 更新引用数据源的部分数据内容，会使 dpl 中通过动态引用方式使用该数据的对应内容同步更新
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
 * @class UpdateDataSourceCommand 异步更新指令
 * @extends {BaseCommand}
 * @example
 * let updateDataSourceCommand = new UpdateDataSourceCommand()
 * updateDataSourceCommand.setComponentId("componentId");
 * updateDataSourceCommand.setDocument({...});
 */

const BaseCommand = require('./BaseCommand');

class UpdateDataSourceCommand extends BaseCommand {
    /**
     * UpdateDataSourceCommand 构造方法.
     */
    constructor() {
        super('UpdateDataSource');
    }

    /**
     * 更新引用数据源的部分数据内容，会使 dpl 中通过动态引用方式使用该数据的对应内容同步更新
     * 
     * @param {Object} data 
     */
    setData(data) {
        if(typeof data == "object") {
            this.data.data = data;
        }
    }

}

module.exports = UpdateDataSourceCommand;