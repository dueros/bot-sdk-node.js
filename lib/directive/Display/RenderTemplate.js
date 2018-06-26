/**
 * @file 模版渲染类
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
 * @class RenderTemplate 模版渲染类
 * @extends {BaseDirective}
 */

let BaseDirective = require('../BaseDirective');
let BaseTemplate = require('./Template/BaseTemplate');

class RenderTemplate extends BaseDirective {

    /**
     * 构造方法
     *
     * @param {BaseTemplate} template 模版
     */
    constructor(template = null) {
        super('Display.RenderTemplate');
        this.setTemplate(template);
    }

    /**
     * 设置模版类别
     *
     * @param {BaseTemplate} template 模版类型
     * @public
     */
    setTemplate(template) {
        if (template instanceof BaseTemplate) {
            this.data.template = template.getData();
        }
    }
}

module.exports = RenderTemplate;
