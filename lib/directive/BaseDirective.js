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
 * @file 指令基础类
 * @author yuanpeng01@baidu.com
 *
 * @class BaseDirective 抽象类. 指令基类
 **/
class BaseDirective{

    /**
     * 构造函数
     *
     * @param {Array} fields 字段名列表  能够设置的字段名列表。通过set`FieldName`来设置的字段名
     **/
    constructor (type) {
        this.data = {
            type: type 
        };
    }

    genToken () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            let r = Math.random() * 16|0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        }); 
    }

    getData () {
        return this.data; 
    }
}

module.exports = BaseDirective;
