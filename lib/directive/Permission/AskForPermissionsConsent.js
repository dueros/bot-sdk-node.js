/**
 * @file AskForPermissionsConsent 用户授权
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

/**
 * 技能需要获取某个用户个性化权限时，通过返回权限指令来让用户进行授权。
 * 在用户同意授权、拒绝授权或授权失败时会发送事件给技能。
 * 授权成功事件：Permission.Granted
 * 授权拒绝事件：Permission.Rejected
 * 授权失败事件：Permission.GrantFailed
 */

'use strict';

const BaseDirective = require('../BaseDirective');

/**
 * 用户授权
 *
 * @class {AskForPermissionsConsent} 用户授权
 */
class AskForPermissionsConsent extends BaseDirective {

    /**
     * 构造方法
     */
    constructor() {
        super('Permission.AskForPermissionsConsent');
        this.data.token = this.genToken();
    }

    /**
     * 设置directive的token. 默认在构造时自动生成了token，可以覆盖
     *
     * @param {string} token token
     */
    setToken(token) {
        if (typeof token === 'string') {
            this.data.token = token;
        }
    }

    /**
     * 增加权限
     *
     * @param {string} name 权限名称
     */
    addPermission(name) {
        if (AskForPermissionsConsent.permissions.indexOf(name) !== -1) {
            if (!(this.data.permissions instanceof Array)) {
                this.data.permissions = [];
            }
            this.data.permissions.push({
                'name': name
            });
        }
    }
}

AskForPermissionsConsent.READ_USER_PROFILE = 'READ::USER:PROFILE';
AskForPermissionsConsent.READ_DEVICE_LOCATION = 'READ::DEVICE:LOCATION';
AskForPermissionsConsent.WRITE_SMARTHOME_PRINTER = 'WRITE::SMARTHOME:PRINTER';
AskForPermissionsConsent.RECORD_SPEECH = 'RECORD::SPEECH';
AskForPermissionsConsent.RECORD_REMINDER = 'RECORD::REMINDER';

AskForPermissionsConsent.permissions = [
    AskForPermissionsConsent.READ_USER_PROFILE,
    AskForPermissionsConsent.READ_DEVICE_LOCATION,
    AskForPermissionsConsent.WRITE_SMARTHOME_PRINTER,
    AskForPermissionsConsent.RECORD_SPEECH,
    AskForPermissionsConsent.RECORD_REMINDER
];

module.exports = AskForPermissionsConsent;
