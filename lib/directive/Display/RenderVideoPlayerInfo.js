/**
 * @file RenderVideoPlayerInfo 渲染视频播放内容信息
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

const BaseRenderPlayerInfo = require('./BaseRenderPlayerInfo');

/**
 * 渲染视频播放内容信息
 *
 * @class {RenderVideoPlayerInfo} 渲染视频播放内容信息
 */
class RenderVideoPlayerInfo extends BaseRenderPlayerInfo {

    /**
     * 构造方法
     *
     * @param {BasePlayerInfoContent} content 内容
     * @param {BaseButton|Array} controls 控件
     */
    constructor(content = null, controls = []) {
        super('Display.RenderVideoPlayerInfo', content, controls);
    }
}

module.exports = RenderVideoPlayerInfo;
