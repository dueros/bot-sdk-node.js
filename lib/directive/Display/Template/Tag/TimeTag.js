/**
 * @file TimeTag 时间标签
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
const BaseTag = require('./BaseTag');

/**
 * 时间标签
 *
 * @class {TimeTag} 时间标签
 */
class TimeTag extends BaseTag {

    /**
     * 构造方法
     *
     * @param {string} time 时间
     */
    constructor(time) {
        super(TimeTag.TIME_TYPE, time);
    }

}

TimeTag.TIME_TYPE = 'TIME';
module.exports = TimeTag;
