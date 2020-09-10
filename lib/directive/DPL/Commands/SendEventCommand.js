/**
 * @file 绑定端触发UserEvent指令
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
 * @class SendEventCommand 绑定端触发UserEvent指令
 * @extends {BaseCommand}
 * @example
 * let sendEventCommand = new SendEventCommand()
 */

const BaseCommand = require('./BaseCommand');

class SendEventCommand extends BaseCommand {

    /**
     * SendEventCommand 构造方法.
     */
    constructor() {
        super('SendEvent');
    }

    /**
     * @desc 添加用户自定义参数
     * @param  {array} args 自定义参数数组
     */
    addArguments(args) {
        if(arguments instanceof Array){
            this.data['arguments'] = args;
        }
    }

    /**
     * 标识用户基于该事件请求上报时，携带当前会话状态的类型，枚举，取值如下
     * 
     * @param {string} dialogType 
     */
    setDialogType(dialogType) {
        if (SendEventCommand.dialogTypeArr.indexOf(dialogType) !== -1) {
            this.data.dialogType = dialogType;
        }
    }

}

SendEventCommand.dialogTypeArr = [
    "CURRENT",
    "NEW"
];

module.exports = SendEventCommand;
