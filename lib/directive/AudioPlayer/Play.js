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

var BaseDirective = require('./../BaseDirective');

/**
 * @class Play 音频播放指令
 * @extends {BaseDirective}
 */
class Play extends BaseDirective {
    
    /**
     * @param {string} url 音频地址
     * @param {string} playBehavior 默认替换所有
     *                 REPLACE_ALL: 立即停止当前播放并清除播放队列，立即播放指令中的audio item
     *                 ENQUEUE: 将audio item添加到当前队列的尾部
     *                 REPLACE_ENQUEUED: 替换播放队列中的所有audio item，但不影响当前正在播放的audio item
     */
    constructor (url, playBehavior = Play.REPLACE_ALL) {
        super('AudioPlayer.Play');
        this.data.playBehavior = playBehavior;

        this.data.audioItem = {
            stream: {
                streamFormat: Play.STREAM_FORMAT_MP3, 
                url: url,
                offsetInMilliSeconds: 0,
                token: this.genToken()
            } 
        };
    }

    /**
     * 设置directive的token. 默认在构造时自动生成了token，可以覆盖
     * @param {string} token 音频的token
     */
    setToken (token) {
        if (token) {
            this.data.audioItem.stream.token = token; 
        }
    }

    /**
     * 获取directive的token. 默认在构造时自动生成了token
     *
     * @return {string}
     */
    getToken () {
        return this.data.audioItem.stream.token; 
    }

    /**
     * 设置directive的音频地址url
     * 
     * @param {string} url 音频地址
     */
    setUrl (url) {
        if (url) {
            this.data.audioItem.stream.url = url; 
        }
    }

    /**
     * 设置directive的属性。从指定的offset开始进行播放
     *
     * @param {integer} milliSeconds 毫秒数。比如5分钟的歌曲，播放的长度是5*60*1000毫秒，选择起始的播放位置
     */
    setOffsetInMilliSeconds (milliSeconds) {
        milliSeconds = parseInt(milliSeconds);
        if (milliSeconds) {
            this.data.audioItem.stream.offsetInMilliSeconds = milliSeconds; 
        }
    }

    /**
     * 设置directive的属性。音频流格式，streamFormat 默认STREAM_FORMAT_MP3
     *
     * @param {string} $streamFormat  取值: STREAM_FORMAT_MP3、STREAM_FORMAT_M3U8、STREAM_FORMAT_M4A
     */
    setStreamFormat(streamFormat = Play.STREAM_FORMAT_MP3) {
        let streamFormatArray = [Play.STREAM_FORMAT_MP3, Play.STREAM_FORMAT_M3U8, Play.STREAM_FORMAT_M4A];
        if(streamFormatArray.indexOf(streamFormat) != -1) {
            this.data.audioItem.stream.streamFormat = streamFormat;
        }
    }
}

Play.REPLACE_ALL = 'REPLACE_ALL';
Play.REPLACE_ENQUEUED = 'REPLACE_ENQUEUED';
Play.ENQUEUE = 'ENQUEUE';

Play.STREAM_FORMAT_MP3 = 'AUDIO_MP3';
Play.STREAM_FORMAT_M3U8 = 'AUDIO_M3U8';
Play.STREAM_FORMAT_M4A = 'AUDIO_M4A';

module.exports = Play;
