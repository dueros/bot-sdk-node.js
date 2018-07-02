/**
 * @file 列表模版项
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
 * @class ListTemplateItem 列表模版项
 * @extends {BaseTemplate}
 */
let BaseTemplate = require('./BaseTemplate');

class ListTemplateItem extends BaseTemplate {

    /**
     * ListTemplateItem 构造方法.
     */
    constructor() {
        super(['token']);
        delete this.data.type;
    }

    /**
     *  设置图片
     *
     * @param {string} url 图片地址
     * @param {string} widthPixels 图片像素宽
     * @param {string} heightPixels 图片像素高
     * @public
     */
    setImage(url, widthPixels = '', heightPixels = '') {
        let imageStructure = this.createImageStructure(url, widthPixels, heightPixels);
        if (imageStructure) {
            this.data.image = imageStructure;
        }
    }

    /**
     * 设置列表元素一级标题
     *
     * @param {string} text 文本内容
     * @public
     */
    setPlainPrimaryText(text) {
        let textStructure = this.createTextStructure(text, BaseTemplate.PLAIN_TEXT);
        if (textStructure) {
            if (!this.data.textContent) {
                this.data.textContent = {};
            }
            this.data.textContent.primaryText = textStructure;
        }
    }

    /**
     * 设置列表元素二级标题
     *
     * @param {string} text 文本内容
     * @public
     */
    setPlainSecondaryText(text) {
        let textStructure = this.createTextStructure(text, BaseTemplate.PLAIN_TEXT);
        if (textStructure) {
            if (!this.data.textContent) {
                this.data.textContent = {};
            }
            this.data.textContent.secondaryText = textStructure;
        }
    }

    /**
     * 设置列表元素三级标题
     *
     * @param {string} text 文本内容
     * @public
     */
    setPlainTertiaryText(text) {
        let textStructure = this.createTextStructure(text, BaseTemplate.PLAIN_TEXT);
        if (textStructure) {
            if (!this.data.textContent) {
                this.data.textContent = {};
            }
            this.data.textContent.tertiaryText = textStructure;
        }
    }

}

module.exports = ListTemplateItem;
