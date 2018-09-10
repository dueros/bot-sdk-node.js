/**
 * @file 音频item
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
 * @class AudioItem 音频item
 * @extends BaseMediaListItem
 */
const BaseMediaListItem = require('./BaseMediaListItem');
class AudioListItem extends BaseMediaListItem {

    /**
     * 构造方法
     *
     * @param {string} title 音频类型
     * @param {string} titleSubtext1 音频类型
     */
    constructor(title, titleSubtext1) {
        super(title, titleSubtext1);
    }

    /**
     * 设置isMusicVideo
     *
     * @param {boolean} bool 是否是音乐音频
     */
    setMusicVideoTag(bool) {
        if (typeof bool === 'boolean') {
            this.data.isMusicVideo = bool;
        }
    }
}


module.exports = AudioListItem;


