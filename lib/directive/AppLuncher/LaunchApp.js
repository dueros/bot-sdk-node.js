/**
 * @file 用于调用app的指令类
 * @author yelvye@baidu.com
 */

/**
 * Copyright (c) 2017 Baidu, Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


'use strict';
let BaseDirective = require('../BaseDirective');
const extend = require('node.extend');
class LaunchApp extends BaseDirective {

    /**
     * LaunchApp构造函数
     *
     * @param {string} appName 应用的名称
     * @param {string} packageName 应用的包名
     * @param {string} deepLink 打开应用指定功能
     *     注意：以上appName，packageName和deepLink三个参数至少一个
     */
    constructor(appName, packageName, deepLink) {
        super('AppLauncher.LaunchApp');
        this.data = extend(true, this.data, {
            appName: appName,
            packageName: packageName,
            deepLink: deepLink,
            token: this.genToken()
        });
    }

    /**
     * 设置directive的token. 默认在构造时自动生成了token，可以覆盖
     *
     * @param {string} token token
     */
    setToken(token) {
        if (token) {
            this.data.token = token;
        }
    }

    /**
     * 获取directive的token. 默认在构造时自动生成了token
     *
     * @return {string} token
     */
    getToken() {
        return this.data.token;
    }

    /**
     * 设置应用的名称
     *
     * @param {string} appName 应用的名称
     */
    setAppName(appName) {
        if (appName) {
            this.data.appName = appName;
        }
    }

    /**
     * 设置应用的包名
     *
     * @param {string} packageName 应用的包名
     */
    setPackageName(packageName) {
        if (packageName) {
            this.data.packageName = packageName;
        }
    }

    /**
     * 设置deepLink
     *
     * @param {string} deepLink 应用指定功能
     */
    setDeepLink(deepLink) {
        if (deepLink) {
            this.data.deepLink = deepLink;
        }
    }
}

module.exports = LaunchApp;
