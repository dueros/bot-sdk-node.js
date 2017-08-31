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

let Session = require('./Session');
let Nlu = require('./Nlu');

/**
 * 对DuerOS请求bot的request body进行封装
 **/
class Request {
    /**
     * @param {Object} data. request body
     **/
    constructor (data) {
        if (!data) {
            throw new Error('data is undefined'); 
        }

        this._data = data;
        if (data && data.request) {
            this._requestType = data.request.type;
        }

        this._session = new Session(data.session);
        if (this._requestType == 'IntentRequest' && data.request) {
            this._nlu = new Nlu(data.request.intents); 
        }
    }

    /**
     * 获取Request 的数据
     *
     * @param {null}
     * @return {Object}
     **/
    getData () {
        return this._data;  
    } 

    /**
     * 获取session 对象
     *
     * @param {null}
     * @return {Session}
     **/
    getSession () {
        return this._session; 
    }

    /**
     * 获取nlu 对象
     *
     * @param {null}
     * @return {Nlu}
     **/
    getNlu () {
        return this._nlu; 
    }

    /**
     * 获取请求类型
     *
     * @param {null}
     * @return {string}
     **/
    getType () {
        return this._requestType; 
    }

    /**
     * 获取用户的user id
     *
     * @return {string}
     **/
    getUserId () {
        if (this._data.context && this._data.context.System && this._data.context.System.user) {
            return this._data.context.System.user.userId;  
        }
    }

    /**
     * 获取请求的query
     *
     * @return {string}
     **/
    getQuery () {
        if (this._requestType == 'IntentRequest' && this._data.request && this._data.request.query) {
            return this._data.request.query.original;
        }

        return '';
    }

    /**
     * 判断是否为调起bot的请求
     *
     * @return {boolean}
     **/
    isLaunchRequest () {
        if (this._data.request) {
            return this._data.request.type == 'LaunchRequest';
        }
    }

    /**
     * 判断是否为结束对话的请求
     *
     * @return {boolean}
     **/
    isSessionEndedRequest () {
        if (this._data.request) {
            return this._data.request.type == 'SessionEndedRequest';
        }
    }

    /**
     * 获取bot id
     *
     * @return {string}
     **/
    getBotId () {
        if (this._data.context && this._data.context.System && this._data.context.System.application) {
            return this._data.context.System.application.applicationId; 
        }
    }

    /**
     * 判断槽位是否填完。针对于填槽多轮。
     *
     * @return {boolean}
     **/
    isDialogStateCompleted() {
        if (this._data.request) {
            return this._data.request.dialogState == 'COMPLETED';
        }
    }
}

module.exports = Request;
