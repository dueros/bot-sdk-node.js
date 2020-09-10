/**
 * @file 追加子组件指令
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
 * @class AppendComponentCommand 追加子组件指令
 * @extends {BaseCommand}
 * @example
 * let appendComponentCommand = new SetPageCommand()
 * let doc = new Document({});
 * appendComponentCommand.setDocument(doc);
 * appendComponentCommand.setComponentId('componentId');
 */

const BaseCommand = require('./BaseCommand');
const Document = require('../Document');

class AppendComponentCommand extends BaseCommand {

    /**
     * AppendComponentCommand 构造方法.
     */
    constructor() {
        super('AppendComponent');
    }

    /**
     * @desc 设置新增文档对象
     * @param {Document} doc 新增的文档对象
     */
    setDocument(doc) {
        if (doc instanceof Document) {
            this.data.document = doc.getData();
        }
    }
}


module.exports = AppendComponentCommand;
