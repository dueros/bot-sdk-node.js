/**
 * @file 播放信息类
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
 * @class PlayerInfo 播放信息类
 */
let BaseButton = require('./Control/BaseButton');

class PlayerInfo {

    /**
     * 构造方法
     */
    constructor() {
        this.data = {
            content: {
                audioItemType: PlayerInfo.AUDIO_TYPE_MUSIC
            }
        };
    }

    /**
     * 设置audioItemType值
     *
     * @param {string} type 类型值
     * @public
     */
    setAudioItemType(type) {
        if (PlayerInfo.AUDIO_TYPE_ARR.indexOf(type) !== -1) {
            this.data.content.audioItemType = type;
        }
        else {
            this.data.content.audioItemType = PlayerInfo.AUDIO_TYPE_MUSIC;
        }
    }

    /**
     * 设置title值
     *
     * @param {string} title 音频的标题
     * @public
     */
    setTitle(title) {
        if (typeof title === 'string') {
            this.data.content.title = title;
        }
    }

    /**
     * 设置音频子标题1
     *
     * @param {string} titleSubtext1 音频子标题1
     * @public
     */
    setTitleSubtext1(titleSubtext1) {
        if (typeof titleSubtext1 === 'string') {
            this.data.content.titleSubtext1 = titleSubtext1;
        }
    }

    /**
     * 设置音频子标题2
     *
     * @param {string} titleSubtext2 音频子标题2
     * @public
     */
    setTitleSubtext2(titleSubtext2) {
        if (typeof titleSubtext2 === 'string') {
            this.data.content.titleSubtext2 = titleSubtext2;
        }
    }

    /**
     * 设置歌词url
     *
     * @param {string} url 歌词url
     * @public
     */
    setLyric(url) {
        if (typeof url === 'string') {
            if (!this.data.content.lyric) {
                this.data.content.lyric = {};
            }
            this.data.content.lyric.url = url;
            this.data.content.lyric.format = PlayerInfo.FORMAT_LRC;
        }
    }

    /**
     * 设置音频流的长度，单位为ms
     *
     * @param {number} mediaLengthInMs 音频流的长度，单位为ms
     * @public
     */
    setMediaLengthInMs(mediaLengthInMs) {
        if (typeof mediaLengthInMs === 'number') {
            let mediaLengthInMilliseconds = parseInt(mediaLengthInMs, 10);
            this.data.content.mediaLengthInMilliseconds = mediaLengthInMilliseconds;
        }
    }

    /**
     * 设置音频封面图片
     *
     * @param {string} src 图片地址
     * @public
     */
    setArt(src) {
        if (typeof src === 'string') {
            if (!this.data.content.art) {
                this.data.content.art = {};
            }
            this.data.content.art.src = src;
        }
    }

    /**
     * 设置资源提供方信息
     *
     * @param {string} name 资源提供方的名字
     * @param {string} logo 资源提供方的logo
     * @public
     */
    setProvider(name, logo) {
        if (!this.data.content.provider) {
            this.data.content.provider = {};
        }
        if (typeof name === 'string') {
            this.data.content.provider.name = name;
        }

        if (typeof logo === 'string') {
            if (this.data.content.provider && !this.data.content.provider.logo) {
                this.data.content.provider.logo = {};
            }
            this.data.content.provider.logo.src = logo;
        }
    }

    /**
     * 设置控件列表
     *
     * @param {(Control|Array)} controls 单个控件或者控件列表
     * @public
     */
    setControls(controls) {
        if (!(this.controls instanceof Array)) {
            this.controls = [];
        }

        if (controls instanceof Array) {
            this.controls = this.controls.concat(controls);
        }
        else {
            this.addControl(controls);
        }
    }

    /**
     * 增加一个控件
     *
     * @param {Control} control 控件
     * @public
     */
    addControl(control) {
        if (!(this.controls instanceof Array)) {
            this.controls = [];
        }

        if (control instanceof BaseButton) {
            this.controls.push(control);
        }
    }

    /**
     * 获取data
     *
     * @return {Object}
     * @public
     */
    getData() {
        if (this.controls instanceof Array) {
            this.data.controls = this.controls.map(function (control) {
                if (control instanceof BaseButton) {
                    return control.getData();
                }
                return null;
            }).filter(function (control) {
                return !!control;
            });
        }
        return this.data;
    }

}

PlayerInfo.AUDIO_TYPE_MUSIC = 'MUSIC';
PlayerInfo.FORMAT_LRC = 'LRC';

PlayerInfo.AUDIO_TYPE_ARR = [
    PlayerInfo.AUDIO_TYPE_MUSIC,
    PlayerInfo.FORMAT_LRC
];


module.exports = PlayerInfo;
