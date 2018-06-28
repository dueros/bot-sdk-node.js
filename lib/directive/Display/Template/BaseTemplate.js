/**
 * @file 基础模版类
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
 *
'use strict';

/**
 * @class BaseTemplate 基础模版类
 * @extends {BaseDirective}
 */
const BaseDirective = require('../../BaseDirective');
class BaseTemplate extends BaseDirective {

    /**
     * BaseTemplate constructor.
     *
     * @param {Array} fields 生成属性对应的set方法
     */
    constructor(fields) {
        super();
        this.data.token = this.genToken();
        this.supportSetField = fields;
        this._extendFunction(fields);
    }

    /**
     * 生成set函数，比如setTitle
     *
     * @param {Array} fields  字段名列表
     * @private
     */
    _extendFunction(fields) {
        for (let name of fields) {
            if (!name) {
                continue;
            }

            this['set' + this._ucfirst(name)] = value => {
                this.data[name] = value;
            };
        }
    }

    /**
     * 首字母大写
     *
     * @param {string} str  待处理的字符串
     * @return {string}
     * @private
     */
     _ucfirst(str) {
         if (!str) {
             return '';
         }

         return str.slice(0, 1).toUpperCase() + str.slice(1);
     }

    /**
     * 设置背景图片
     *
     * @param {string} url 图片地址
     * @param {string} widthPixels 图片的像素宽
     * @param {string} heightPixels 图片的像素高
     * @public
     */
    setBackGroundImage(url, widthPixels = '', heightPixels = '') {
        let image = this.createImageStructure(url, widthPixels, heightPixels);
        if (image) {
            this.data.backgroundImage = image;
        }
    }

    /**
     * 构造图片结构体
     *
     * @param {string} url 图片地址
     * @param {string} widthPixels 图片的像素宽
     * @param {string} heightPixels 图片的像素高
     * @return {Object} 图片对象
     * @public
     */
    createImageStructure(url = '', widthPixels, heightPixels) {
        let image = {};
        if (!url) {
            return image;
        }
        image.url = url;

        if (widthPixels) {
            image.widthPixels = widthPixels;
        }
        if (heightPixels) {
            image.heightPixels = heightPixels;
        }

        return image;
    }

    /**
     * 构造文本结构体
     *
     * @param {string} content 文本内容
     * @param {string} type 文本类型
     * @return {Object} 文本对象
     * @public
     */
    createTextStructure(content, type = BaseTemplate.PLAIN_TEXT) {
        let text = {};
        if (!content) {
            return text;
        }

        if (BaseTemplate.textTypeArr.indexOf(type) !== -1) {
            text.type = type;
        }
        else {
            text.type = BaseTemplate.PLAIN_TEXT;
        }

        text.text = content;
        return text;
    }

}

//  文本类型
BaseTemplate.PLAIN_TEXT = 'PlainText';
BaseTemplate.RICH_TEXT = 'RichText';


BaseTemplate.textTypeArr = [
    BaseTemplate.PLAIN_TEXT,
    BaseTemplate.RICH_TEXT
];

module.exports = BaseTemplate;
