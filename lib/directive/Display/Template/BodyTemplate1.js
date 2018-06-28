/**
 * @file 文本展现模板
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
 * @class BodyTemplate1 文本展现模板
 * @extends {BaseTemplate}
 * @example
 * let bodyTemplate = new BodyTemplate1()
 * bodyTemplate.setToken('token');
 * bodyTemplate.setBackGroundImage('https://skillstore.cdn.bcebos.com/icon/100/c709eed1-c07a-be4a-b242-0b0d8b777041.jpg');
 * bodyTemplate.setTitle('托尔斯泰的格言');
 * bodyTemplate.setPlainTextContent('拖尔斯泰-理想的书籍是智慧的钥匙');
 */

let BaseTemplate = require('./BaseTemplate');

class BodyTemplate1 extends BaseTemplate {

    /**
     * BodyTemplate1 构造方法.
     */
     constructor() {
         super(['token', 'title']);
         this.data.type = 'BodyTemplate1';
     }

    /**
     * 设置plain类型的文本结构
     *
     * @param {string} text 文本内容
     * @param {string} position 文本位置
     * @return {BodyTemplate1} 当前this对象
     * @public
     */
     setPlainTextContent(text, position = BodyTemplate1.BOTTOM_LEFT) {
         let textStructure = this.createTextStructure(text, BodyTemplate1.PLAIN_TEXT);
         if (!textStructure) {
             return this;
         }

         this.data.textContent = {};
         this.data.textContent.text = textStructure;

         if (BodyTemplate1.POSITION_ARR.indexOf(position) !== -1) {
             this.data.textContent.position = position;
         }
         else {
             this.data.textContent.position = BodyTemplate1.TOP_LEFT;
         }
         return this;
     }

}

//  文本位置
BodyTemplate1.TOP_LEFT = 'TOP-LEFT';
BodyTemplate1.CENTER = 'CENTER';
BodyTemplate1.BOTTOM_LEFT = 'BOTTOM-LEFT';

BodyTemplate1.POSITION_ARR = [
    BodyTemplate1.TOP_LEFT,
    BodyTemplate1.BOTTOM_LEFT,
    BodyTemplate1.CENTER
];

module.exports = BodyTemplate1;
