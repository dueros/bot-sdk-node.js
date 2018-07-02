/**
 * @file 用于生成Play指令的类
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
 * @class Play 用于生成Play指令的类
 * @extends {BaseDirective}
 */
let BaseDirective = require('../BaseDirective');

class Play extends BaseDirective {

    /**
     * 构造方法
     *
     * @param {string} url 音频播放地址
     * @param {string} playBehavior 默认替换所有
     *               REPLACE_ALL: 立即停止当前播放并清除播放队列，立即播放指令中的audio item。
     *               ENQUEUE: 将audio item添加到当前队列的尾部。
     *               REPLACE_ENQUEUED: 替换播放队列中的所有audio item，但不影响当前正在播放的audio item。
     *
     * @public
     */
    constructor(url, playBehavior = Play.REPLACE_ALL) {
        super('VideoPlayer.Play');
        this.data.playBehavior = Play.REPLACE_ALL;
        if (Play.PLAY_ARR.indexOf(playBehavior) !== -1) {
            this.data.playBehavior = playBehavior;
        }
        this.data.videoItem = {
            videoItemId: this.genToken(),
            stream: {
                url: url,
                offsetInMilliseconds: 0,
                token: this.genToken()
            }
        };
    }

    /**
     * 设置directive的token. 默认在构造时自动生成了token，可以覆盖
     *
     * @param {string} token 视频的token
     * @public
     */
    setToken(token) {
        if (typeof token === 'string') {
            this.data.videoItem.stream.token = token;
        }
    }

    /**
     * 获取directive的token. 默认在构造时自动生成了token
     *
     * @return {string}
     * @public
     */
    getToken() {
        return this.data.videoItem.stream.token;
    }

    /**
     * 设置directive的视频地址url
     *
     * @param {string} url 视频地址
     * @public
     */
    setUrl(url) {
        if (typeof url === 'string') {
            this.data.videoItem.stream.url = url;
        }
    }

    /**
     * 设置directive的属性。从指定的offset开始进行播放
     *
     * @param {number} milliSeconds 毫秒数,比如5分钟的视频，播放的长度是5*60*1000毫秒，选择起始的播放位置
     * @public
     */
    setOffsetInMilliseconds(milliSeconds) {
        if (typeof milliSeconds === 'number') {
            let offSetMilliSeconds = parseInt(milliSeconds, 10);
            this.data.videoItem.stream.offsetInMilliseconds = offSetMilliSeconds;
        }
    }

    /**
     * stream过期时间
     *
     * @param {string} expiryTime 过期时间
     * @public
     */
    setExpiryTime(expiryTime) {
        if (typeof expiryTime === 'string') {
            this.data.videoItem.stream.expiryTime = expiryTime;
        }
    }

    /**
     * 设置directive的属性。如果此字段存在，则设备端在播放该video item时，播放到所指定时间之后应该上报ProgressReportDelayElapsed事件；如果此字段不存在，则设备端端不需要上报ProgressReportDelayEsapsed事件
     *
     * @param {number} reportDelayMs  毫秒数。
     * @public
     */
    setReportDelayInMs(reportDelayMs) {
        if (typeof reportDelayMs === 'number') {
            let delayMs = parseInt(reportDelayMs, 10);
            if (!this.data.videoItem.stream.progressReport) {
                this.data.videoItem.stream.progressReport = {};
            }
            this.data.videoItem.stream.progressReport.progressReportDelayInMilliseconds = delayMs;
        }
    }

    /**
     * 设置directive的属性。定时上报事件的间隔时间,如果此字段存在，则设备端在播放该video item时，每隔指定时间上报ProgressReportIntervalElapsed事件；如果此字段不存在，则设备端不需要上报ProgressReportIntervalElapsed事件
     *
     * @param {number} intervalMs  毫秒数。
     * @public
     */
    setReportIntervalInMs(intervalMs) {
        if (typeof intervalMs === 'number') {
            let reportIntervalMs = parseInt(intervalMs, 10);
            if (!this.data.videoItem.stream.progressReport) {
                this.data.videoItem.stream.progressReport = {};
            }
            this.data.videoItem.stream.progressReport.progressReportIntervalInMilliseconds = reportIntervalMs;
        }
    }

    /**
     * 设置directive的属性。如果此字段存在，则应当匹配前一个video item中的token，如果不匹配则不执行本Play指令
     *
     * @param {string} previousToken 上一首的token。
     * @public
     */
    setExpectedPreviousToken(previousToken) {
        if (typeof previousToken === 'string') {
            this.data.videoItem.stream.expectedPreviousToken = previousToken;
        }
    }

    /**
     * 播放到指定的offset后停止播放，并且会上报PlaybackScheduledStopReached事件
     *
     * @param {(number|Array)} stopPoints 停止点。
     * @public
     */
    setStopPointsInMilliseconds(stopPoints) {
        let points = [];
        if (typeof stopPoints === 'number') {
            let stopPoint = parseInt(stopPoints, 10);
            points.push(stopPoint);
        }
        if (stopPoints instanceof Array && stopPoints.length > 0) {
            points = stopPoints.filter(function (item) {
                return typeof item === 'number';
            }).map(function (item) {
                return parseInt(item, 10);
            });
        }
        let stopPointsInMilliseconds = this.data.videoItem.stream.stopPointsInMilliseconds || [];
        this.data.videoItem.stream.stopPointsInMilliseconds = stopPointsInMilliseconds.concat(points);
    }
}

Play.REPLACE_ALL = 'REPLACE_ALL';
Play.REPLACE_ENQUEUED = 'REPLACE_ENQUEUED';
Play.ENQUEUE = 'ENQUEUE';

Play.PLAY_ARR = [
    Play.REPLACE_ALL,
    Play.REPLACE_ENQUEUED,
    Play.ENQUEUE
];

module.exports = Play;

