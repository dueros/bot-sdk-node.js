/**
 * @file DPL文档对象
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

const fs = require('fs');

class Document {

    /**
     * Document 构造方法.
     *
     * @param {Object} doc 初始化json
     */
    constructor(doc) {
        this.data = {};
        if (doc && typeof doc === 'object') {
            this.data = doc;
        }
    }

    /**
     * 从path中读取document配置文件生成文档对象数据
     *
     * @param {string} path 绝对路径-path.join(__dirname,'doc.json')
     * @return {Promise}
     * @public
     */
    getDocumentFromPath(path) {
        return new Promise((resolve, reject) => {
            fs.stat(path, (err, stats) => {
                if (err) {
                    reject('read file error, check your path!');
                }
                else {
                    this.data = JSON.parse(fs.readFileSync(path).toString());
                    resolve(this.data);
                }
            });
        });
    }

    /**
     * 获取data
     *
     * @return {Object} 返回文档对象数据
     * @public
     */
    getData() {
        return this.data;
    }

    /**
     * 初始化文档对象数据
     *
     * @param {Object} data 初始化数据
     * @public
     */
    initDocument(data) {
        if (data && typeof data === 'object') {
            this.data = data;
        }
    }

    /**
     * 设置模版渲染停留时间
     *
     * @param {number} duration 初始化数据
     * @public
     */
    setDocumentDuration(duration) {
        if (duration && typeof duration === 'number') {
            this.data.duration = duration;
        }
    }
}

module.exports = Document;
