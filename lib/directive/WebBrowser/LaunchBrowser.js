/**
 * @file LaunchBrowser 运行浏览器
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

/**
 * 运行浏览器
 *
 * @class {LaunchBrowser} 运行浏览器
 */
class LaunchBrowser extends BaseDirective {

    /**
     * 构造方法
     *
     * @param {string} url 连接地址
     */
    constructor(url = '') {
        super('WebBrowser.LaunchBrowser');
        this.data.url = url;
        this.data.token = this.genToken();
    }

    /**
     * 设置directive的token. 默认在构造时自动生成了token，可以覆盖
     *
     * @param {string} token token
     */
    setToken(token) {
        if (token && typeof token === 'string') {
            this.data.token = token;
        }
    }

    /**
     * 获取directive的token. 默认在构造时自动生成了token
     *
     * @return {string}
     */
    getToken() {
        return this.data.token;
    }
}

module.exports = LaunchBrowser;
