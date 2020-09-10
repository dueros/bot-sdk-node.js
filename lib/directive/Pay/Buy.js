/**
 * @file 用于生成Buy指令的类
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
 * @class Buy 用于生成Buy指令的类
 */
let BaseDirective = require('../BaseDirective');

class Buy extends BaseDirective {

    /**
     * 构造函数
     * @param {商品ID} productId 
     */
    constructor(productId){
        super('Connections.SendRequest.Buy');
        this.data.token = this.genToken();
        this.data.payload = {
            productId: ''
        };
        this.setProductId(productId);
    }

    /**
     * 设置directive的token. 默认在构造时自动生成了token，可以覆盖
     *
     * @param {string} token 视频的token
     * @public
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
     * @public
     */
    getToken() {
        return this.data.token;
    }

    /**
     * 设置商品ID
     * 
     * @param {string} productId 商品ID
     */
    setProductId(productId) {
        if(productId) {
            this.data.payload.productId = productId;
        }
    }
}

module.exports = Buy;