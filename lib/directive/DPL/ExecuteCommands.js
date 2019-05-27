/**
 * @file ExecuteCommands指令
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

const BaseDirective = require('../BaseDirective');
const BaseCommand = require('./Commands/BaseCommand');

class ExecuteCommands extends BaseDirective {

    /**
     * ExecuteCommands 构造方法.
     */
    constructor() {
        super('DPL.ExecuteCommands');
    }

    /**
     * 设置token
     *
     * @param {string} token token
     * @public
     */
    setToken(token) {
        if (token) {
            this.data.token = token;
        }
    }

    /**
     * 设置指令
     *
     * @param {BaseCommand|Array} commands 指令对象集合
     * @public
     */
    setCommands(commands) {
        if (!this.data.commands) {
            this.data.commands = [];
        }

        if (commands instanceof BaseCommand) {
            this.data.commands = [commands.getData()];
        }
        if (commands instanceof Array) {
            this.data.commands = commands.map(function (item) {
                if (item instanceof BaseCommand) {
                    return item.getData();
                }
            }).filter(function (item) {
                return !!item;
            });
        }
    }

}

module.exports = ExecuteCommands;
