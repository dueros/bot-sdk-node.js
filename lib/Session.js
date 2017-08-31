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
 * 封装对session的操作。DuerOS提过了多轮对话的能力，也能替Bot管理多轮对话，无须Bot自己维护session状态。
 * 同时，也提供了Session存储，Bot还可以将对话的状态保存session中，自己处理多轮逻辑。
 * 但是，存储在session中的数据，DuerOS是无法将其自动应用到下一轮的query解析中，对话状态的维护需要Bot自己完成
 **/
class Session  {

    /**
     * @param {array} data. 请求bot的session数据
     **/
    constructor (data) {
        this._data = data;
        this.sessionId = data.sessionId;
        this.isNew = data.new;
    }

    /**
     * 清空session的所有attributed
     *
     * @param {null}
     **/
    clear () {
        this._data = {}; 
    }

    /**
     * @param {null}
     * @return {Object}
     **/
    toResponse () {
        return {
            attributes: this._data
        }; 
    }

    /**
     * 从session中获取一个属性的值
     * Example:
     *      this.getData('status');
     *      this.getData('status', '1');
     *
     * @param {string} field  属性名称
     * @param {string} def 默认值
     * @return {string}
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
     * Example:
     *      this.setData('status', '1');
     *      this.setData('status', '1', '8');
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
