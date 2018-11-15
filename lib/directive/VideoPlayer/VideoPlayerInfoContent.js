/**
 * @file 用于生成VideoPlayerInfoContent的类
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
const BasePlayerInfoContent = require('../Base/BasePlayerInfoContent');

/**
 * 视频播放信息
 *
 * @class {VideoPlayerInfoContent} 视频播放信息
 */
class VideoPlayerInfoContent extends BasePlayerInfoContent {

    /**
     * 构造方法
     *
     * @param {string} title 标题
     * @param {number} mediaLengthInMilliseconds 媒体长度
     */
    constructor(title = '', mediaLengthInMilliseconds = 0) {
        super();
        this.setTitle(title);
        this.setMediaLengthInMilliseconds(mediaLengthInMilliseconds);
    }

    /**
     * 设置title值
     *
     * @param {string} title 视频的标题
     */
    setTitle(title) {
        if (typeof title === 'string') {
            this.data.title = title;
        }
    }

    /**
     * 设置视频流的长度
     *
     * @param {number} mediaLengthInMilliseconds 视频流的长度
     */
    setMediaLengthInMilliseconds(mediaLengthInMilliseconds) {
        if (typeof mediaLengthInMilliseconds === 'number') {
            let milliseconds = parseInt(mediaLengthInMilliseconds, 10);
            this.data.mediaLengthInMilliseconds = milliseconds;
        }
    }

}

module.exports = VideoPlayerInfoContent;


