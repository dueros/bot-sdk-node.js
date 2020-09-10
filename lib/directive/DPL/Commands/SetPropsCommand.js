/**
 * @file 修改组件的可使用 prop 功能属性
 * @author jiaoyang08@baidu.com
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
 * @class SetPropsCommand 修改组件的可使用 prop 功能属性
 * @extends {BaseCommand}
 * @example
 * let setPropsCommand = new SetPropsCommand()
 * setPropsCommand.setComponentId("componentId");
 * setPropsCommand.setDocument({...});
 */

const BaseCommand = require('./BaseCommand');

class SetPropsCommand extends BaseCommand {
    /**
     * SetPropsCommand 构造方法.
     */
    constructor() {
        super('SetProps');
    }

    /**
     * 样式属性对象
     * 
     * @param {Object} data 
     */
    setProps(props) {
        if(typeof props == "object") {
            this.data.props = props;
        }
    }

}

module.exports = SetPropsCommand;