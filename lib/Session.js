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

const extend = require('node.extend');

/**
 * 封装对session的操作。DuerOS提过了多轮对话的能力，也能替Bot管理多轮对话，无须Bot自己维护session状态。
 * 同时，也提供了Session存储，Bot还可以将对话的状态保存session中，自己处理多轮逻辑。
 * 但是，存储在session中的数据，DuerOS是无法将其自动应用到下一轮的query解析中，对话状态的维护需要Bot自己完成
 *
 * @class Session 
 **/
class Session  {

    /**
     * @param {Object} data 请求bot的session数据
     **/
    constructor (data) {
        let attributes = data.attributes;
        // 如果session是空数组，改为空对象
        if (attributes instanceof Array && attributes.length == 0) {
            attributes = {}; 
        }

        this._data = extend(true, {}, attributes);
        this.sessionId = data.sessionId;
        this.isNew = data['new'];

        // request 中原始session attributes
        this.requestSessionAttribute = attributes;
    }

    /**
     * 清空session的所有attributes
     *
     * @public
     **/
    clear () {
        this._data = {}; 
    }

    /**
     * 将session输出response的格式
     *
     * @return {Object}
     **/
    toResponse () {
        return {
            attributes: this._data
        }; 
    }

    /**
     * 从session中获取一个属性的值
     *
     * @example
     * this.getData('status');
     * this.getData('status', '1');
     *
     * @param {string} field  属性名称
     * @param {string} def 默认值
     * @return {string|Object}
     * @public
     **/
    getData (field, def = null) {
        if(field === null) {
            return this._data; 
        }

        let tmp = this._data;

        for (let f of field.split('.')) {
            if(!tmp.hasOwnProperty(f)) {
                return def; 
            }

            tmp = tmp[f];
        }

        return tmp;
    }

    /**
     * 将一个值存储到session中
     * 注意：
     *      value必须是字符串
     *
     * @example
     * this.setData('status', '1');
     * this.setData('status', '1', '8');
     *
     * @param {string} field  属性名称
     * @param {string} value  属性值
     * @param {string} def 默认值
     * @return {null}
     * @public
     **/
    setData (field, value, def = null) {
        if(field === null) {
            return this._data; 
        }

        let tmp = this._data;

        let arr = field.split('.'); 
        let lastField = arr.pop();

        for (let f of arr) {
            if(!tmp.hasOwnProperty(f)) {
                tmp[f] = {};
            }

            tmp = tmp[f];
        }

        if(def !== null && value === null) {
            value = def; 
        }

        tmp[lastField] = value;
    }
}

module.exports = Session;
