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
const BaseTemplate = require('./BaseTemplate');
const BaseTag = require('./Tag/BaseTag');

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
     * 设置图片tags
     *
     * @param {BaseTag|Array} tags 图片标签
     * @public
     */
    setImageTags(tags) {
        if (!tags) {
            return;
        }
        if (!this.imageTags) {
            this.imageTags = [];
        }
        if (tags && tags instanceof BaseTag) {
            this.imageTags.push(tags);
        }
        if (tags && tags instanceof Array) {
            this.imageTags = this.imageTags.concat(tags.map(function (tag) {
                if (tag instanceof BaseTag) {
                    return tag;
                }
                return null;
            }).filter(function (tag) {
                return !!tag;
            }));
        }
    }

    /**
     * 获取imageTags的数据
     *
     * @param {BaseTag|Array} tags 图片标签
     * @return {Array}
     */
    getImageTagsData(tags) {
        let data = [];
        if (!tags || !(tags instanceof Array)) {
            return data;
        }
        data = tags.map(function (tag) {
            if (tag instanceof BaseTag) {
                return tag.getData();
            }
            return null;
        }).filter(function (tag) {
            return !!tag;
        });

        return data;
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

    /**
     * 设置列表元素标题
     *
     * @param {string} text 文本内容
     */
    setContent(text) {
        let textStructure = this.createTextStructure(text, ListTemplateItem.PLAIN_TEXT);
        if (textStructure) {
            this.data.content = textStructure;
        }
    }

    /**
     * 返回数据
     *
     * @param {string} key key
     * @return {Object}
     */
    getData(key = '') {
        if (this.data.image && this.imageTags) {
            this.data.image.tags = this.getImageTagsData(this.imageTags);
        }
        if (key) {
            return this.data[key];
        }
        return this.data;
    }

    /**
     * 设置当前元素的名字
     *
     * @param {string} anchorWord 名称
     */
    setAnchorWord(anchorWord) {
        if (anchorWord && typeof anchorWord === 'string') {
            this.data.anchorWord = anchorWord;
        }
    }

}

module.exports = ListTemplateItem;
