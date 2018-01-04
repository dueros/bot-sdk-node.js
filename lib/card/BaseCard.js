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
 * @file 卡片基础类
 * @author yuanpeng01@baidu.com
 *
 * @class BaseCard 抽象类. 卡片基类
 **/
class BaseCard{

    /**
     * 构造函数
     *
     * @param {Array} fields 字段名列表  能够设置的字段名列表。通过set`FieldName`来设置的字段名
     **/
    constructor (fields = []) {
        this.data = {};
        this.supportSetField = fields; 
        this._extendFunction(fields);
    }

    /**
     * 生成set函数，比如setTitle
     *
     * @param {Array} fields  字段名列表
     * @private
     **/
    _extendFunction (fields) {
        for (let name of fields) {
            if(!name) {
                continue; 
            }

            this['set' + this._ucfirst(name)] = (value) => {
                this.data[name] = value;
            }
        }
    }

    /**
     * 首字母大写
     *
     * @param {string} str  待处理的字符串
     * @return {string}
     * @private
     **/
    _ucfirst (str) {
        if (!str) {
            return ""; 
        }

        return str.slice(0, 1).toUpperCase() + str.slice(1);
    }

    /**
     *  添加用户操作提示。所有卡片都可以添加引导提升
     *
     *  @example
     *  this.addCueWords(['十元', '二十元']);
     *
     *  @param {Array} arr 提示的话术
     *  @return {BaseCard} 返回自己
     *  @public
     **/
    addCueWords (arr) {
        if (arr) {
            if (typeof arr == 'string') {
                arr = [arr]; 
            }

            this.data.cueWords = this.data.cueWords || [];
            this.data.cueWords.push(...arr);
        }

        return this;
    }

    /**
     * 设置"查看更多" ，设置卡片锚点
     *
     * @param {string} url  链接地址
     * @param {string}  anchorText 锚点展现的文字，可选。如果不设置，默认为"查看更多"
     * @return {BaseCard} 返回自己
     * @public
     **/
    setAnchor(url, anchorText = ''){
        if (url) {
            this.data.url = url; 

            if (anchorText) {
                this.data.anchorText = anchorText; 
            }
        }

        return this;
    }
    
    /**
     * 获取卡片数据，或者某个字段的值
     * Example:
     *      this.getData();
     *      this.getData('fieldName');
     *
     * @param {string} key 字段名，可选。如果不提供字段名，返回整个卡片数据
     * @return {mixed}
     * @public
     **/
    getData (key = '') {
        if (key) {
            return this.data[key]; 
        }

        return this.data; 
    }
}

module.exports = BaseCard;
