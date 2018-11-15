/**
 * @file TTSTemplate TTS模版
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
const TTSTemplateItem = require('./TTSTemplateItem');

/**
 * TTS模版
 *
 * @class {TTSTemplate} TTS模版
 */
class TTSTemplate {

    /**
     * 构造方法
     *
     * @param {TTSTemplateItem|Array}  ttsTemplates 话术模板项
     */
    constructor(ttsTemplates = []) {
        this.data = {
            'type': 'TTSTemplate'
        };
        if (ttsTemplates instanceof Array && ttsTemplates.length > 0) {
            this.data.ttsTemplates = ttsTemplates.map(function (ttsTemplateItem) {
                if (ttsTemplateItem instanceof TTSTemplateItem) {
                    return ttsTemplateItem.getData();
                }
            });
        }
    }


    /**
     * 添加TTSTemplateItem
     *
     * @param {TTSTemplateItem} ttsTemplateItem 槽位名称
     */
    addTTSTemplate(ttsTemplateItem) {
        if (ttsTemplateItem instanceof TTSTemplateItem) {
            if (!(this.data.ttsTemplates instanceof Array)) {
                this.data.ttsTemplates = [];
            }
            this.data.ttsTemplates.push(ttsTemplateItem.getData());
        }
    }

    /**
     * 清除话术模板的槽位信息
     */
    clearTTSTemplates() {
        this.data.ttsTemplates = [];
    }

    /**
     * 获取数据
     *
     * @return {Object}
     */
    getData() {
        return this.data;
    }
}

module.exports = TTSTemplate;
