/**
 * @file 渲染视频列表
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
 * @class RenderVideoList
 * @extends BaseDirective
 */

const BaseDirective = require('../BaseDirective');
const extend = require('node.extend');
const VideoListItem = require('./VideoListItem');
class RenderVideoList extends BaseDirective {

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
    constructor(title, behavior = RenderVideoList.REPLACE) {
        super('Display.RenderVideoList');
        this.videoItems = [];
        let data = {
            token: this.genToken(),
            title: title,
            behavior: behavior,
            size: 0,
            videoItems: []
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
     * 增加audioItem
     *
     * @param {VideoListItem} videoListItem 视频项
     */
    addVideoItem(videoListItem) {
        if (videoListItem instanceof VideoListItem) {
            this.videoItems.push(videoListItem);
            ++ this.data.size;
        }
    }

    /**
     * 获取数据
     *
     * @return {Object}
     */
    getData() {
        if (this.videoItems instanceof Array && this.videoItems.length > 0) {
            this.data.videoItems = this.videoItems.map(function (videoListItem) {
                return videoListItem.getData();
            });
        }
        return this.data;
    }

}

RenderVideoList.REPLACE = 'REPLACE';
RenderVideoList.APPEND = 'APPEND';
RenderVideoList.PREPEND = 'PREPEND';

module.exports = RenderVideoList;
