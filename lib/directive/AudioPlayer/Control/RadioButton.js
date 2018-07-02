/**
 * @file 单选按钮
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
 * @class RadioButton 单选按钮
 * @extends {BaseButton}
 */

let BaseButton = require('./BaseButton');
class RadioButton extends BaseButton {

    /**
     * RadioButton 构造方法.
     *
     * @param {string} name 控件名字
     * @param {string} selectedValue 选中的选项值，设备端应该根据此选项值把对应的按钮渲染为选中状态
     * @public
     */
    constructor(name = '', selectedValue = '') {
        super(RadioButton.RADIO_BUTTON, name);
        this.setSelectedValue(selectedValue);
    }

    /**
     * 设置选中的选项值
     *
     * @param {string} selectedValue 选中的选项值
     * @public
     */
    setSelectedValue(selectedValue) {
        this.data.selectedValue = selectedValue;
    }
}

RadioButton.RADIO_BUTTON = 'RADIO_BUTTON';

module.exports = RadioButton;

