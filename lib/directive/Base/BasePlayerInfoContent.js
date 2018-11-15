/**
 * @file BasePlayerInfoContent 播放信息base类
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
 * @class BasePlayerInfoContent 播放信息base类
 */
class BasePlayerInfoContent {

    /**
     * 构造方法
     */
    constructor() {
        this.data = {};
    }

    /**
     * 获取data
     *
     * @return Object
     */
    getData(){
        return this.data;
    }

}

module.exports = BasePlayerInfoContent;


