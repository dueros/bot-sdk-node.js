/**
 * @file 文档渲染指令
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

const BaseDirective = require('../BaseDirective');
const Document = require('./Document');

class RenderDocument extends BaseDirective {

    /**
     * Document 构造方法.
     */
    constructor() {
        super('DPL.RenderDocument');
        this.data.token = this.genToken();
    }

    /**
     * 设置token
     *
     * @param {string} token token
     * @public
     */
    setToken(token) {
        if (token) {
            this.data.token = token;
        }
    }

    /**
     * 设置文档对象
     *
     * @param {Document} document 文档对象
     * @public
     */
    setDocument(document) {
        if (document instanceof Document) {
            this.data.document = document.getData();
        }
    }

    /**
     * 设置数据源
     *
     * @param {Object} dataSources 数据源
     * @public
     */
    setDataSources(dataSources) {
        if (dataSources && typeof dataSources === 'object') {
            this.data.dataSources = dataSources;
        }
    }
}


module.exports = RenderDocument;
