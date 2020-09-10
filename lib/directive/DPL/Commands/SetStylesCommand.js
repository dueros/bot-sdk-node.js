/**
 * @file 修改/新增组件的可使用 style 样式属性
 * @author jiaoyang08@baidu.com
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
 * @class SetStylesCommand 修改/新增组件的可使用 style 样式属性
 * @extends {BaseCommand}
 * @example
 * let setStylesCommand = new SetStylesCommand()
 * setStylesCommand.setComponentId("componentId");
 * setStylesCommand.setDocument({...});
 */

const BaseCommand = require('./BaseCommand');

class SetStylesCommand extends BaseCommand {
    /**
     * SetStylesCommand 构造方法.
     */
    constructor() {
        super('SetStyles');
    }

    /**
     * 样式属性对象
     * 
     * @param {Object} data 
     */
    setStyles(styles) {
        if(typeof styles == "object") {
            this.data.styles = styles;
        }
    }

}

module.exports = SetStylesCommand;