/**
 * @file 模版列表基础类
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
 * @class ListTemplate 模版列表基础类
 * @extends {BaseTemplate}
 */

let BaseTemplate = require('./BaseTemplate');
let ListTemplateItem = require('./ListTemplateItem');

class ListTemplate extends BaseTemplate {

    /**
     * TextImageTemplate constructor.
     *
     * @param {string} type 模版类型
     */
    constructor(type) {
        super(['token', 'title']);
        this.data.type = type;
    }

    /**
     * 添加列表项
     *
     * @param {ListTemplateItem} listTemplateItem 列表项
     * @return {ListTemplate} 对象本身
     * @public
     */
    addItem(listTemplateItem) {
        if (listTemplateItem instanceof ListTemplateItem) {
            if (!(this.data.listItems instanceof Array)) {
                this.data.listItems = [];
            }
            this.data.listItems.push(listTemplateItem.getData());
        }
        return this;
    }

}

module.exports = ListTemplate;
