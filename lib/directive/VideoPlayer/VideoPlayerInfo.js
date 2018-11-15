/**
 * @file VideoPlayerInfo 视频播放信息
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
const BaseButton = require('../AudioPlayer/Control/BaseButton');
const BasePlayerInfoContent = require('../Base/BasePlayerInfoContent');

/**
 * 视频播放信息
 *
 * @class {VideoPlayerInfo} 视频播放信息
 */
class VideoPlayerInfo {

    /**
     * 构造方法
     *
     * @param {BasePlayerInfoContent} content 播放信息
     * @param {BaseButton|Array} controls 控制按钮
     */
    constructor(content = null, controls = []) {
        this.data = {};
        this.setContent(content);
        this.setControls(controls);
    }

    /**
     * 设置控件列表
     *
     * @param {Control|Array} controls 控件列表
     */
    setControls(controls) {
        if (!(this._controls instanceof Array)) {
            this._controls = [];
        }
        if (controls instanceof BaseButton) {
            this._controls.push(controls);
        }
        if (controls instanceof Array && controls.length > 0) {
            this._controls = this._controls.concat(controls.map(function (control) {
                if (control instanceof BaseButton) {
                    return control;
                }
            }));
        }
    }

    /**
     * 增加一个控件
     *
     * @param {BaseButton} control 控件
     */
    addControl(control) {
        if (control instanceof BaseButton) {
            if (!(this._controls instanceof Array)) {
                this._controls = [];
            }
            this._controls.push(control);
        }
    }

    /**
     * 设置content
     *
     * @param {BasePlayerInfoContent} content 播放内容
     */
    setContent(content) {
        if (content instanceof BasePlayerInfoContent) {
            this._content = content;
        }
    }

    /**
     * 获取data
     *
     * @return {Object}
     */
    getData() {
        if (this._content) {
            this.data.content = this._content.getData();
        }
        if (this._controls instanceof Array && this._controls.length > 0) {
            this.data.controls = this._controls.map(function (control) {
                return control.getData();
            });
        }

        return this.data;
    }
}

module.exports = VideoPlayerInfo;


