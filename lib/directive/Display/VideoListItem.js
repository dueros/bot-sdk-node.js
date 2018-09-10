/**
 * @file 视频item
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
 * @class VideoListItem
 * @extends BaseMediaListItem
 */

const BaseMediaListItem = require('./BaseMediaListItem');
class VideoListItem extends BaseMediaListItem {

    /**
     * 构造方法
     *
     * @param {string} title 视频类型
     * @param {string} titleSubtext1 视频类型
     */
    constructor(title, titleSubtext1) {
        super(title, titleSubtext1);
    }

    /**
     * 设置mediaLengthInMilliseconds
     *
     * @param {number} milliseconds 视频时长
     */
    setMediaLengthInMilliseconds(milliseconds) {
        if (typeof milliseconds === 'number') {
            let mediaLengthInMilliseconds = parseInt(milliseconds, 10);
            this.data.mediaLengthInMilliseconds = mediaLengthInMilliseconds;
        }
    }
}

module.exports = VideoListItem;


