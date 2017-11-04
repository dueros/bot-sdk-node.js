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

var TextCard = require('./card/TextCard');
var ImageCard = require('./card/ImageCard');
var ListCard = require('./card/ListCard');
var StandardCard = require('./card/StandardCard');
var BaseDirective = require('./directive/BaseDirective');

/**
 * 按照Bot协议，打包返回结果
 **/
class Response {
    
    /**
     * @param {Requset} request  请求
     * @param {Session} session  session
     * @param {Nlu} nlu  query解析对象
     **/
    constructor (request, session, nlu) {
        this._request = request;
        this._session = session;
        this._nlu = nlu;
        this._shouldEndSession = true;
    }

    /**
     * 设置结束对话
     * 
     * @param {boolean} val   true: 结束对话   false: 继续对话
     **/
    setShouldEndSession(val) {
        if(val === undefined) {
            return; 
        }

        this._shouldEndSession = !!val;
    }

    defaultResult () {
        return new Promise(function(resolve, reject){
            resolve(JSON.stringify({status: 0, msg: null})); 
        }); 
    }

    /**
     * 非法请求
     *
     * @return {Promise}
     */
    illegalRequest () {
        return new Promise(function(resolve, reject){
            resolve(JSON.stringify({status: 1, msg: '非法请求'})); 
        }); 
    }


    /**
     * 打包返回的结果
     *
     * @example
     * this.build({
     *      'outputSpeech' : '你好',
     *      'reprompt' : '再请问一次，你是要干嘛呢'
     * });
     *
     * this.build({
     *      'card' : new TextCard('欢迎进入')
     * });
     *
     * this.build({
     *      // 与 'outputSpeech' : '你好', 效果一样
     *      'outputSpeech' : {
     *          'type':'PlainText',
     *          'text': '你好'
     *      }
     * });
     *
     * @param {Object} data  返回的数据
     * @param {Array} data.directives  返回的指令
     * @param {BaseCard} data.card   返回的卡片
     * @param {string|Object} data.outputSpeech  返回的tts文本。可以是纯文本，或者是有SSML标签的文本(TODO:SSML说明文档)
     * @param {string|Object} data.reprompt 纯文本或者带SSML标签的文本
     * @return {Promise}
     * @public
     **/
    build (data) {
        var _this = this;
        return new Promise(function(resolve, reject){
            if (data instanceof Promise) {
                data.then(function(d){
                    resolve(_this.buildResult(d)); 
                }, function(d){
                    resolve(_this.buildResult(d)); 
                });
            } else {
                resolve(_this.buildResult(data)); 
            }
        });
    }

    /**
     *
     * return {string}
     * @private
     */
    buildResult (data) {
        if (this._nlu && this._nlu.hasAsked()) {
            this._shouldEndSession = false;
        }

        data = data || {};
        let directives = data.directives || [];
        // directive to data
        directives = directives.map((directive)=>{
            if (directive instanceof BaseDirective) {
                return directive.getData(); 
            }
        }).filter((item)=>{
            return !!item;
        });

        if (this._nlu) {
            let arr = this._nlu.toDirective();
            if (arr) {
                directives.push(arr);
            }
        }

        if (!data.outputSpeech && data.card && data.card instanceof TextCard) {
            data.outputSpeech = data.card.getData('content');
        }     

        let ret = {
            version: '2.0',
            context: this._nlu ? this._nlu.toUpdateIntent() : {}, 
            session: this._session.toResponse(),
            response: {
                directives: directives,
                shouldEndSession: this._shouldEndSession,
                card: data.card ? data.card.getData():null,
                outputSpeech: data.outputSpeech ? this.formatSpeech(data.outputSpeech):null,
                reprompt: data.reprompt ? {
                    outputSpeech: this.formatSpeech(data.reprompt)
                }:null
            }
        };

        
        let str = JSON.stringify(ret);
        return str;
    }

    /**
     * 自动识别SSML和纯文体
     *
     * @param {string|Object} mix 文字
     * @return {Object}
     * @private
     **/
    formatSpeech (mix) {
        if (mix instanceof Array) {
            return mix; 
        }

        if (mix.match(/^<speak>/)) {
            return {
                type: 'SSML',
                ssml: mix
            }; 
        }

        return {
            type: 'PlainText',
            text: mix
        };
    }
}


module.exports = Response;
