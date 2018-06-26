/**
 * @file Button按钮类
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
 * @class Button Button按钮类
 * @extends {BaseButton}
 */

let BaseButton = require('./BaseButton');

class Button extends BaseButton {

    /**
     * Button 构造函数.
     *
     * @param {string} name 控件名字
     */
    constructor(name) {
        super(Button.BUTTON, name);
        this.data.enabled = true;
        this.data.selected = false;
    }

    /**
     * 按钮是否可点击
     *
     * @param {boolean} bool 按钮是否可点击，取值为true说明可以点击，取值为false不可点击
     * @public
     */
    setEnabled(bool) {
        if (typeof bool === 'boolean') {
            this.data.enabled = bool;
        }
    }

    /**
     * 按钮是否要渲染为选中状态
     *
     * @param {boolean} bool 按钮是否要渲染为选中状态，取值为true需要渲染为选中状态，取值为false渲染为非选中状态
     * @public
     */
    setSelected(bool) {
        if (typeof bool === 'boolean') {
            this.data.selected = bool;
        }
    }

}

Button.BUTTON = 'BUTTON';

module.exports = Button;
