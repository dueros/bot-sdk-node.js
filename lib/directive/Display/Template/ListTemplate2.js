/**
 * @file 纵向列表模板
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
 * @class ListTemplate2 纵向列表模板
 * @extends {ListTemplate}
 * @example
 * let listTemplate = new ListTemplate2();
 * listTemplate.setToken('token');
 * listTemplate.setBackGroundImage('https://skillstore.cdn.bcebos.com/icon/100/c709eed1-c07a-be4a-b242-0b0d8b777041.jpg');
 * listTemplate.setTitle('托尔斯泰的格言');
 *
 * //设置列表数组listItems其中一项
 * let listTemplateItem = new ListTemplateItem();
 * listTemplateItem.setToken('token');
 * listTemplateItem.setImage('https://skillstore.cdn.bcebos.com/icon/100/c709eed1-c07a-be4a-b242-0b0d8b777041.jpg');
 * listTemplateItem.setPlainPrimaryText('一级标题');
 * listTemplateItem.setPlainSecondaryText('二级标题');
 * listTemplateItem.setPlainTertiaryText('三级标题');
 *
 * //把listTemplateItem添加到模版listItems
 * listTemplate.addItem(listTemplateItem);
 */

let ListTemplate = require('./ListTemplate');

class ListTemplate2 extends ListTemplate {

    /**
     * ListTemplate2 构造方法.
     */
    constructor() {
        super('ListTemplate2');
    }
}

module.exports = ListTemplate2;
