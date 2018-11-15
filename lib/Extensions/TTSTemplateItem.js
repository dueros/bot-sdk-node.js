/**
 * @file TTSTemplateItem TTS模版项
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
 * TTS模版项
 *
 * @class {TTSTemplateItem} TTS模版项
 */
class TTSTemplateItem {

    /**
     * 构造方法
     *
     * @param {string} ttsKey 每个话术模板对应的唯一key
     */
    constructor(ttsKey = '') {
        this.data = {};
        if (ttsKey && typeof ttsKey === 'string') {
            this.data.ttsKey = ttsKey;
        }
    }

    /**
     * 添加TemplateSlot
     *
     * @param {string} slotKey 槽位名称
     * @param {string} slotValue 槽位值
     */
    addTemplateSlot(slotKey, slotValue) {
        if (!(this.data.templateSlots instanceof Array)) {
            this.data.templateSlots = [];
        }
        if (slotKey && slotValue && typeof slotKey === 'string' && typeof slotValue === 'string') {
            this.data.templateSlots.push({
                'slotKey': slotKey,
                'slotValue': slotValue
            });
        }
    }

    /**
     * 设置话术模板key
     *
     * @param {string} ttsKey 每个话术模板对应的唯一key
     */
    setTtsKey(ttsKey) {
        if (ttsKey && typeof ttsKey === 'string') {
            this.data.ttsKey = ttsKey;
        }
    }

    /**
     * 清除话术模板的槽位信息
     */
    clearTemplateSlots() {
        this.data.templateSlots = [];
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

module.exports = TTSTemplateItem;
