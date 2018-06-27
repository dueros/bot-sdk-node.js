/**
 * @file 用于生成Hint指令的类
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
 * @class Hint 用于生成Hint指令的类
 * @extends {BaseDirective}
 */

let BaseDirective = require('../BaseDirective');

class Hint extends BaseDirective {

    /**
     * Hint 构造函数.
     *
     * @param {Mixed} text 提示文本
     */
    constructor(text) {
        super('Hint');
        if (text && typeof text === 'string') {
            text = [text];
        }

        if (text instanceof Array) {
            this.data.hints = text.map(function (item) {
                return {
                    type: 'PlainText',
                    text: item
                };
            });
        }
    }

}

module.exports = Hint;
