/**
 * @file 异步更新指令
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
 * @class UpdateComponentCommand 异步更新指令
 * @extends {BaseCommand}
 * @example
 * let updateComponentCommand = new UpdateComponentCommand()
 * updateComponentCommand.setComponentId("componentId");
 * updateComponentCommand.setDocument({...});
 */

const BaseCommand = require('./BaseCommand');
const Document = require('../Document');

class UpdateComponentCommand extends BaseCommand {

    /**
     * UpdateComponentCommand 构造方法.
     */
    constructor() {
        super('UpdateComponent');
    }

    /**
     * 设置替换文档
     *
     * @param {Document} doc 替换的文档对象
     * @public
     */
    setDocument(doc) {
        if (doc instanceof Document) {
            this.data.document = doc.getData();
        }
    }
}

module.exports = UpdateComponentCommand;
