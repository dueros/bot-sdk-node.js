/**
 * @file AudioPlayerInfoContent类
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
 * @class AudioPlayerInfoContent类
 */

class AudioPlayerInfoContent extends BasePlayerInfoContent {

    /**
     * 构造方法
     *
     * @param {string} type 音频类型
     */
    constructor(type = AudioPlayerInfoContent.AUDIO_TYPE_MUSIC) {
        super();
        this.data.audioItemType = AudioPlayerInfoContent.AUDIO_TYPE_MUSIC;
        if (type && AudioPlayerInfoContent.FORMAT_ARR.indexOf(type) !== -1) {
            this.data.audioItemType = type;
        }
    }

    /**
     * 设置audioItemType值
     *
     * @param {string} type 类型值
     */
    setAudioItemType(type) {
        if (type && AudioPlayerInfoContent.FORMAT_ARR.indexOf(type) !== -1) {
            this.data.audioItemType = type;
        }
    }

    /**
     * 设置title值
     *
     * @param {string} title 音频的标题
     */
    setTitle(title) {
        if (typeof title === 'string') {
            this.data.title = title;
        }
    }

    /**
     * 设置音频子标题1
     *
     * @param {string} titleSubtext1 音频子标题1
     */
    setTitleSubtext1(titleSubtext1) {
        if (typeof titleSubtext1 === 'string') {
            this.data.titleSubtext1 = titleSubtext1;
        }
    }

    /**
     * 设置音频子标题2
     *
     * @param {string} titleSubtext2 音频子标题2
     */
    setTitleSubtext2(titleSubtext2) {
        if (typeof titleSubtext2 === 'string') {
            this.data.titleSubtext2 = titleSubtext2;
        }
    }

    /**
     * 设置歌词url
     *
     * @param {string} url 歌词url
     */
    setLyric(url) {
        if (typeof url === 'string') {
            if (!this.data.lyric) {
                this.data.lyric = {};
            }
            this.data.lyric.url = url;
            this.data.lyric.format = AudioPlayerInfoContent.FORMAT_LRC;
        }
    }

    /**
     * 设置音频流的长度，单位为ms
     *
     * @param {number} mediaLengthInMs 音频流的长度，单位为ms
     */
    setMediaLengthInMs(mediaLengthInMs) {
        if (typeof mediaLengthInMs === 'number') {
            let offsetInMilliSeconds = parseInt(mediaLengthInMs, 10);
            this.data.mediaLengthInMilliseconds = offsetInMilliSeconds;
        }
    }

    /**
     * 设置音频封面图片
     *
     * @param {string} src 图片地址
     */
    setArt(src) {
        if (typeof src === 'string') {
            if (!this.data.art) {
                this.data.art = {};
            }
            this.data.art.src = src;
        }
    }

    /**
     * 设置资源提供方信息
     *
     * @param {string} name 资源提供方的名字
     * @param {string} logo 资源提供方的logo
     */
    setProvider(name, logo = '') {
        if (typeof name === 'string') {
            if (!this.data.provider) {
                this.data.provider = {};
                this.data.provider.name = name;
            }
        }
        if (typeof logo === 'string') {
            if (!this.data.provider) {
                this.data.provider = {};
            }
            if (!this.data.provider.logo) {
                this.data.provider.logo = {};
                this.data.provider.logo.src = logo;
            }
        }
    }

}

AudioPlayerInfoContent.AUDIO_TYPE_MUSIC = 'MUSIC';

AudioPlayerInfoContent.FORMAT_LRC = 'LRC';

AudioPlayerInfoContent.FORMAT_ARR = [
    AudioPlayerInfoContent.AUDIO_TYPE_MUSIC,
    AudioPlayerInfoContent.FORMAT_LRC
];

module.exports = AudioPlayerInfoContent;


