/**
 * @file 渲染音频列表
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
 * @class RenderAudioList
 * @extends BaseDirective
 */

const BaseDirective = require('../BaseDirective');
const AudioListItem = require('./AudioListItem');
const extend = require('node.extend');

class RenderAudioList extends BaseDirective {

    /**
     * 构造方法
     *
     * @param {string} title 列表的标题
     * @param {string} behavior 默认替换所有
     *               REPLACE: 清空当前的列表，再渲染，用于首次第一页数据的渲染
     *               APPEND: 当前列表不变，在当前的列表后面渲染，用于往后翻页的渲染
     *               PREPEND:当前列表不变，在当前的列表前面渲染，用于往前翻页的渲染
     *
     */
    constructor(title, behavior = RenderAudioList.REPLACE) {
        super('Display.RenderAudioList');
        this.audioItems = [];
        let data = {
            token: this.genToken(),
            title: title,
            behavior: behavior,
            size: 0,
            audioItems: []
        };
        this.data = extend(true, this.data, data);
    }

    /**
     * 设置directive的token. 默认在构造时自动生成了token，可以覆盖
     *
     * @param {string} token 视频的token
     */
    setToken(token) {
        if (token) {
            this.data.token = token;
        }
    }

    /**
     * 增加audioListItem
     *
     * @param {AudioListItem} audioListItem 音频项
     */
    addAudioItem(audioListItem) {
        if (audioListItem instanceof AudioListItem) {
            this.audioItems.push(audioListItem);
            ++ this.data.size;
        }
    }

    /**
     * 获取数据
     *
     * @return {Object}
     */
    getData() {
        if (this.audioItems instanceof Array && this.audioItems.length > 0) {
            this.data.audioItems = this.audioItems.map(function (audioListItem) {
                return audioListItem.getData();
            });
        }
        return this.data;
    }
}

RenderAudioList.REPLACE = 'REPLACE';
RenderAudioList.APPEND = 'APPEND';
RenderAudioList.PREPEND = 'PREPEND';

module.exports = RenderAudioList;
