/**
 * @file  BaseTag tag基类
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
 * 标签基础类
 *
 * @class {BaseTag} tag基类
 */
class BaseTag {

    /**
     * 构造方法
     *
     * @param {string} type 类型
     * @param {string} text text
     */
    constructor(type, text = '') {
        this.data = {};
        this.setType(type);
        this.setText(text);
    }

    /**
     * 设置类型
     *
     * @param {string} type 类型
     */
    setType(type) {
        if (type && typeof type === 'string') {
            this.data.type = type;
        }
    }


    /**
     * 设置文本
     *
     * @param {string} text 文本
     */
    setText(text) {
        if (text && typeof text === 'string') {
            this.data.text = text;
        }
    }

    /**
     * 设置color
     *
     * @param {string} color 颜色
     */
    setColor(color) {
        if (color && typeof color === 'string') {
            this.data.color = color;
        }
    }

    /**
     * 设置backgroundColor
     *
     * @param {string} backgroundColor 背景颜色
     */
    setBackgroundColor(backgroundColor) {
        if (backgroundColor && typeof backgroundColor === 'string') {
            this.data.backgroundColor = backgroundColor;
        }
    }

    /**
     * 返回数据
     *
     * @return {Object}
     */
    getData() {
        return this.data;
    }

}

module.exports = BaseTag;

