/**
 * @file 加载收藏列表按钮
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
 * @class ShowFavoriteListButton  加载收藏列表按钮
 * @extends {Button}
 */

let Button = require('./Button');

class ShowFavoriteListButton extends Button {

    /**
     *  ShowFavoriteListButton 构造函数.
     */
    constructor() {
        super(ShowFavoriteListButton.NAME);
    }

}

ShowFavoriteListButton.NAME = 'SHOW_FAVORITE_LIST';
module.exports = ShowFavoriteListButton;
