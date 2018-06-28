/**
 * @file 用于生成Charge指令的类
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
 * @class Charge 用于生成Charge指令的类
 */
let BaseDirective = require('../BaseDirective');
class Charge extends BaseDirective {

    /**
     * Charge构造方法
     *
     * @param {string} amount 数量
     * @param {string} sellerOrderId 卖家ID
     * @param {string} productName 产品名称
     * @param {string} description 描述
     */
    constructor(amount, sellerOrderId, productName, description) {
        super('Connections.SendRequest');
        this.data.name = 'Charge';
        this.data.token = this.genToken();
        this.data.payload = {
            chargeBaiduPay: {
                authorizeAttributes: {
                    authorizationAmount: {
                        currencyCode: Charge.CODE_CNY
                    }
                },
                sellerOrderAttributes: {}
            }
        };
        this.setAmount(amount);
        this.setSellerOrderId(sellerOrderId);
        this.setProductName(productName);
        this.setDescription(description);
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
     * set amount
     *
     * @param {string} amount 数量
     * @param {string} currencyCode 币种
     * @public
     */
    setAmount(amount, currencyCode = Charge.CODE_CNY) {
        if (amount && typeof amount === 'string') {
            this.data.payload.chargeBaiduPay.authorizeAttributes.authorizationAmount.amount = amount;
        }
        this.data.payload.chargeBaiduPay.authorizeAttributes.authorizationAmount.currencyCode = Charge.CODE_CNY;
        if (Charge.CURRENCY_CODE_ARR.indexOf(currencyCode) !== -1) {
            this.data.payload.chargeBaiduPay.authorizeAttributes.authorizationAmount.currencyCode = currencyCode;
        }
    }

    /**
     * 设置sellerAuthorizationNote
     *
     * @param {string} sellerAuthorizationNote 卖家授权
     * @public
     */
    setSellerAuthorizationNote(sellerAuthorizationNote) {
        if (sellerAuthorizationNote && typeof sellerAuthorizationNote === 'string') {
            this.data.payload.chargeBaiduPay.authorizeAttributes.sellerAuthorizationNote = sellerAuthorizationNote;
        }
    }

    /**
     * set sellerOrderId
     *
     * @param {string} sellerOrderId 卖家ID
     * @public
     */
    setSellerOrderId(sellerOrderId) {
        if (sellerOrderId && typeof sellerOrderId === 'string') {
            this.data.payload.chargeBaiduPay.sellerOrderAttributes.sellerOrderId = sellerOrderId;
        }
    }

    /**
     * set productName
     *
     * @param {string} productName 商品名称
     * @public
     */
    setProductName(productName) {
        if (productName && typeof productName === 'string') {
            this.data.payload.chargeBaiduPay.sellerOrderAttributes.productName = productName;
        }
    }

    /**
     * set description
     *
     * @param {string} description 描述
     * @public
     */
    setDescription(description) {
        if (description && typeof description === 'string') {
            this.data.payload.chargeBaiduPay.sellerOrderAttributes.description = description;
        }
    }

    /**
     * set sellerNode
     *
     * @param {string} sellerNode sellerNode
     * @public
     */
    setSellerNode(sellerNode) {
        if (sellerNode && typeof sellerNode === 'string') {
            this.data.payload.chargeBaiduPay.sellerOrderAttributes.sellerNode = sellerNode;
        }
    }
}

Charge.CODE_CNY = 'CNY';
Charge.CURRENCY_CODE_ARR = [
    Charge.CODE_CNY
];

module.exports = Charge;

