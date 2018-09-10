/**
 * @file 媒体列表项基类
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
 * @class BaseMediaListItem
 * @extends BaseDirective
 */

const BaseDirective = require('../BaseDirective');
class BaseMediaListItem extends BaseDirective {

    /**
     * 构造方法
     *
     * @param {string} title 音频|视频类型
     * @param {string} titleSubtext1 音频|视频类型
     */
    constructor(title, titleSubtext1) {
        super();
        this.data = {
            title: title,
            titleSubtext1: titleSubtext1,
            token: this.genToken()
        };
    }

    /**
     * 设置token
     *
     * @param {string} token token
     */
    setToken(token) {
        if (token && typeof token === 'string') {
            this.data.token = token;
        }
    }

    /**
     * 设置isFavorited
     *
     * @param {boolean} bool 是否是喜欢的
     */
    setFavorited(bool) {
        if (bool && typeof bool === 'boolean') {
            this.data.isFavorited = bool;
        }
    }

    /**
     * 设置image
     *
     * @param {string} image 图片url
     */
    setImage(image) {
        if (image && typeof image === 'string') {
            this.data.image = {
                src: image
            };
        }
    }

    /**
     * 设置titleSubtext1
     *
     * @param {string} titleSubtext1 一级子标题
     */
    setTitleSubtext1(titleSubtext1) {
        if (titleSubtext1 && typeof titleSubtext1 === 'string') {
            this.data.titleSubtext1 = titleSubtext1;
        }
    }

    /**
     * 设置titleSubtext2
     *
     * @param {string} titleSubtext2 二级子标题
     */
    setTitleSubtext2(titleSubtext2) {
        if (titleSubtext2 && typeof titleSubtext2 === 'string') {
            this.data.titleSubtext2 = titleSubtext2;
        }
    }
}

module.exports = BaseMediaListItem;


