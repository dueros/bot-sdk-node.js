/**
 * @file BaseRenderPlayerInfo 用于生成RenderAudioPlayerInfo指令的类
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
const BaseDirective = require('../BaseDirective');

/**
 * 用于生成RenderAudioPlayerInfo指令的类
 *
 * @class {BaseRenderPlayerInfo} 用于生成RenderAudioPlayerInfo指令的类
 */
class BaseRenderPlayerInfo extends BaseDirective {

    /**
     * 构造方法
     *
     * @param {string} type 指令类型
     * @param {BasePlayerInfoContent} content  内容
     * @param {BaseButton|Array} controls 控件
     */
    constructor(type, content = null, controls = []) {
        super(type);
        this.data.token = this.genToken();
        this.setContent(content);
        this.setControls(controls);
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
     * 设置控件列表
     *
     * @param {BaseButton|Array} controls 控件列表
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
            }).filter(function (control) {
                return !!control;
            }));
        }
    }

    /**
     * 增加一个控件
     *
     * @param {Control} control 控件
     */
    addControl(control) {
        if (!(this._controls instanceof Array)) {
            this._controls = [];
        }
        if (control instanceof BaseButton) {
            this._controls.push(control);
        }
    }

    /**
     * 设置content
     *
     * @param {BasePlayerInfoContent} content 播放信息内容
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
                if (control instanceof BaseButton) {
                    return control.getData();
                }
            }).filter(function (control) {
                return !!control;
            });
        }
        return this.data;
    }
}

module.exports = BaseRenderPlayerInfo;
