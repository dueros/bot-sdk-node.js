/**
 * @file Response类
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

var TextCard = require('./card/TextCard');
var ImageCard = require('./card/ImageCard');
var ListCard = require('./card/ListCard');
var StandardCard = require('./card/StandardCard');
var BaseDirective = require('./directive/BaseDirective');

/**
 * 按照Bot协议，打包返回结果
 */
class Response {

    /**
     * 构造方法
     *
     * @param {Request} request  请求
     * @param {Session} session  session
     * @param {Nlu} nlu  query解析对象
     */
    constructor(request, session, nlu) {
        this._request = request;
        this._session = session;
        this._nlu = nlu;
        this._shouldEndSession = true;
        this._needDetermine = false;
        this._fallBack = false;
    }

    /**
     * 设置结束对话
     *
     * @param {boolean} val   true: 结束对话,false: 继续对话
     */
    setShouldEndSession(val) {
        if (val === undefined) {
            return;
        }
        this._shouldEndSession = !!val;
    }

    /**
     * 通过控制expectSpeech来控制麦克风开关
     *
     * @param {boolean} expectSpeech 麦克风是否开启
     */
    setExpectSpeech(expectSpeech) {
        if (typeof expectSpeech === 'boolean') {
            this.expectSpeech = expectSpeech;
        }
    }

    defaultResult() {
        return new Promise((resolve, reject) => {
            resolve(JSON.stringify({status: 0, msg: null}));
        });
    }

    /**
     * 非法请求
     *
     * @return {Promise}
     */
    illegalRequest() {
        return new Promise((resolve, reject) => {
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
     */
    build(data) {
        let self = this;
        return new Promise((resolve, reject) => {
            if (data instanceof Promise) {
                data.then(function (d) {
                    resolve(self.buildResult(d));
                }, function (d) {
                    resolve(self.buildResult(d));
                });
            }
            else {
                resolve(self.buildResult(data));
            }
        });
    }

    /**
     * 构建返回结果
     *
     * @param {Object} data 参数
     * @return {string} json字符串
     * @private
     */
    buildResult(data) {
        if (this._nlu && this._nlu.hasAsked()) {
            this._shouldEndSession = false;
        }

        data = data || {};
        let directives = data.directives || [];
        // directive to data
        directives = directives.map(function (directive) {
            if (directive instanceof BaseDirective) {
                return directive.getData();
            }
            return null;
        }).filter(item => {
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
            context: this._buildContext(),
            session: this._session.toResponse(),
            response: {
                directives: directives,
                shouldEndSession: this._shouldEndSession,
                card: data.card ? data.card.getData() : null,
                outputSpeech: data.outputSpeech ? this.formatSpeech(data.outputSpeech) : null,
                reprompt: data.reprompt ? {
                    outputSpeech: this.formatSpeech(data.reprompt)
                } : null
            }
        };

        if (typeof this._needDetermine === 'boolean') {
            ret.response.needDetermine = this._needDetermine;
        }

        if (typeof this.expectSpeech === 'boolean') {
            ret.response.expectSpeech = this.expectSpeech;
        }

        if (typeof this._fallBack === 'boolean') {
            ret.response.fallBack = this._fallBack;
        }

        if (this._directivesArrangement) {
            ret.response.directivesArrangement = this._directivesArrangement;
        }

        let str = JSON.stringify(ret);
        return str;
    }

    /**
     * 自动识别SSML和纯文体
     *
     * @param {string|Object} mix 文字
     * @return {Object}
     * @private
     */
    formatSpeech(mix) {
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

    /**
     * 设置needDetermine为true
     */
    setNeedDetermine() {
        this._needDetermine = true;
    }

    /**
     * 表示本次返回的结果是否为兜底结果
     */
    setFallBack() {
        this._fallBack = true;
    }

    /**
     * 表示directives中指令顺序随机
     */
    setAutoDirectivesArrangement() {
        this._directivesArrangement = 'AUTO';
    }

    /**
     * 表示directives中指令保持相对顺序不变 (directives中指令可能会被过滤)
     */
    setStrictDirectivesArrangement() {
        this._directivesArrangement = 'STRICT';
    }

    /**
     * 技能所期待的用户回复，技能将该信息反馈给DuerOS，有助于DuerOS在语音识别以及识别纠错时向该信息提权。
     *
     * @param {string} text 普通文本内容类型回复表达的回复内容。
     */
    addExpectTextResponse(text) {
        if (text && typeof text === 'string') {
            if (this._expectResponse && this._expectResponse instanceof Array) {
                this._expectResponse.push({
                    type: 'PlainText',
                    text: text
                });
            } else {
                this._expectResponse = [{
                    type: 'PlainText',
                    text: text
                }];
            }

        }
    }

    /**
     * 技能所期待的用户回复，技能将该信息反馈给DuerOS，有助于DuerOS在语音识别以及识别纠错时向该信息提权。
     *
     * @param {string} slot 槽位类型回复表达的槽位名称。
     */
    addExpectSlotResponse(slot) {
        if (slot && typeof slot === 'string') {
            if (this._expectResponse && this._expectResponse instanceof Array) {
                this._expectResponse.push({
                    type: 'Slot',
                    slot: slot
                });
            } else {
                this._expectResponse = [{
                    type: 'Slot',
                    slot: slot
                }];
            }
        }
    }

    /**
     * 构造context结果
     *
     * @return {Object}
     * @private
     */
    _buildContext() {
        let context = {};
        if (this._nlu && this._nlu.toUpdateIntent()) {
            context = this._nlu.toUpdateIntent();
        }
        if (this._expectResponse) {
            context.expectResponse = this._expectResponse;
        }
        if (this._nlu) {
            let afterSearchScore = this._nlu.getAfterSearchScore();
            if (afterSearchScore && typeof afterSearchScore === 'number') {
                context.afterSearchScore = afterSearchScore;
            }
        }

        return context;
    }
}


module.exports = Response;
