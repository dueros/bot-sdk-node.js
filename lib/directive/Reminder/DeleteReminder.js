/**
 * @file DeleteReminder 删除提醒指令
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

/**
 * 删除提醒指令
 *
 * @class {DeleteReminder} 删除提醒指令
 */
class DeleteReminder extends BaseDirective {
    constructor() {
        super("Reminder.DeleteReminder");
        this.data.token = this.genToken();
    }

    /**
     * @desc 设置要删除提醒的Token
     * @param {string}  alertToken 闹钟token
     */
    setAlertToken(alertToken) {
        if(typeof alertToken === 'string') {
            this.data.alertToken = alertToken;
        }
    }

    /**
     * @desc 设置Token
     * @param {string} token
     */
    setToken(token) {
        if(typeof token === 'string') {
            this.data.token = token;
        }
    }
}

module.exports = DeleteReminder;

