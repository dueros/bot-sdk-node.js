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
 * @file Bot class
 * @author kira3007<yuanpeng01@baidu.com>
 */

'use strict';

const Request = require('./Request');
const Response = require('./Response');

/**
 * Bot基类. 请继承此类
 * Example:
 *      const BaseBot = require('bot-sdk');
 *      class MyBot extends BaseBot {
 *          constructor(postData) {
 *              super(postData);
 *              //...
 *          }
 *      }
 */
class Bot {

    /**
     * 构造函数，以及DuerOS请求bot的request为参数，request协议参考[http://TODO]
     *
     * @param {Object} postData. DuerOS请求body
     */
    constructor(postData) {
        this.request = new Request(postData);

        this.session = this.request.getSession();

        this.nlu = this.request.getNlu();
        this.response = new Response(this.request, this.session, this.nlu); 

        this._eventHandler = new Map();
        this._intentHandler= new Map();
    }

    /**
     * 对一个intent添加处理函数
     *
     * Example:
     *      this.addIntentHandler('#intentName', ()=>{
     *          //this.getSlot('slotName');
     *      });
     *
     * @param {string} intent 意图名：'#intentName'， 以‘#’ 开头
     * @param {Function} func 意图处理函数。返回值非null，将作为bot的response返回DuerOS
     * @return {Object} 返回自己
     * @public
     */
    addIntentHandler(intent, func) {
        this._intentHandler.set(intent, () => {
            return func.call(this); 
        });
        return this;
    }

    /**
     * 对一个事件添加处理函数。比如设备端反馈的音频播放开始事件
     *
     * Example:
     *      this.addEventListener('Audio', (event)=>{
     *          // event 为事件数据 
     *          // 具体数据结构参考[TODO]
     *      });
     *
     * @param {string} event  事件名
     * @param {Function} func 事件处理函数。返回值非null，将作为bot的response返回DuerOS
     * @return {Object} 返回自己
     * @public
     */
    addEventListener(event, func) {
        this._eventHandler.set(event, () => {
            return func.call(this); 
        });
        return this;
    }

    /**
     * 获取DuerOS请求中的意图名
     *
     * @param {null}
     * @return {string|null}
     * @public
     */
    getIntentName() {
        if (this.nlu) {
            return this.nlu.getIntentName();
        }
    }

    /**
     * 获取session的一个字段对应的值
     *
     * @param {string} field 字段名
     * @param {Mixed} def  默认值
     * @return {Mixied}
     * @public
     */
    getSessionAttribute(field = null, def = null) {
        return this.session.getData(field, def);
    }

    /**
     * 设置session的一个字段的值
     *
     * @param {string} field 字段名
     * @param {Mixed} value 字段对应的值
     * @param {Mixed} def  默认值
     * @return {null}
     * @public
     */

    setSessionAttribute(field, value, def = null) {
        return this.session.setData(field, value, def); 
    }

    /**
     * 清空session的所有字段
     *
     * @param {null} 
     * @return {null}
     * @public
     */
    clearSessionAttribute() {
        return this.session.clear(); 
    }

    /**
     * 根据槽位名获取槽位对应的值
     *
     * @param {string} field  槽位名
     * @return {string} 
     * @public
     */
    getSlot(field) {
        if (this.nlu) {
            return this.nlu.getSlot(field);
        }
    }

    /**
     * 设置槽位的值。如果该槽位不存在，新增一个槽位名，并设置对于的值
     *
     * @param {string} field 槽位名
     * @param {string} value 值
     * @return {null}
     * @public
     */
    setSlot(field, value) {
        if (this.nlu) {
            return this.nlu.setSlot(field, value);
        }
    }

    /**
     * 设置多轮继续，等待用户回复
     *
     * @param {null}
     * @return {null}
     * @public
     */
    waitAnswer() {
        //should_end_session 
        this.response.setShouldEndSession(false);
    }
    
    /**
     * 设置多轮结束，此时bot结束多轮对话
     *
     * @param {null}
     * @public
     */
    endDialog() {
        this.response.setShouldEndSession(true);
    }

    /**
     * bot执行的入口
     *
     * @param {boolean} build 是否需要打包response，输出JSON String
     * @return {string} 返回JSON
     * @public
     */
    run(build = true) {
        //handler event
        //$eventHandler = $this->getRegisterEventHandler();
        let eventHandler;

        //check domain
        if (this.request.getType() == 'IntentRequset' && !this.nlu && !eventHandler) {
            return this.response.defaultResult(); 
        }

        //intercept beforeHandler
        let ret;

        //event process
        if (eventHandler) {
            //let event = $this->request->getDeviceData()['device_event'];
            //ret = $this->callFunc($eventHandler, $event); 
        } else {
            ret = this._dispatch();
        }

        if (!build) {
            return ret; 
        }
        return this.response.build(ret);
    }

    /**
     * @param {null}
     * @return {Object}
     * @private
     */
    _dispatch() {
        if (!this._intentHandler.size) {
            return; 
        }

        let rules = this._intentHandler.keys();
        for (let rule of rules) {

            if (this._checkHandler(rule)) {
                let ret = this._intentHandler.get(rule)();
                
                if (ret) {
                    return ret;
                }
            }
        }
    }

    /**
     * @param {string} rule 判断条件
     * @return {boolean}
     * @private
     */
    _checkHandler(rule) {
        let token = this._getToken(rule);
        if (!token instanceof Array) {
            return false; 
        }

        let arr = []; 
        for (let t of token) {
            if (t.type == 'str') {
                arr.push(t.value); 
            } else {
                arr.push(this._tokenValue(t.value)); 
            }
        }
        
        let str = arr.join('');
        let func = new Function('', 'return ' +  str + ';');
        return func();
    }

    /**
     * @param {string} ruleString 判断条件
     * @return {Array}
     * @private
     */
    _getToken(ruleString) {
        function tokenize(token, rule) {
            if (rule === '' || rule === null) {
                return token; 
            }

            token = token || [];
            let rgCom = /[^"']*/;
            let m = rgCom.exec(rule);
            token.push({
                type: 'no_str',
                value: m[0]
            });

            let last = rule.substring(m[0].length);
            if (last !== '' || last !== null) {
                for (let i = 1; i < last.length; i++) {
                    let c = last[i];
                    if (c == '\\'){
                        ++i;
                        continue;
                    }

                    if (c == last[0]) {
                        let s = last.substr(0, i + 1);
                        last = last.substring(s.length);
                        token.push({
                            type: 'str',
                            value: s,
                        });

                        break;
                    }
                }
            }

            if (last) {
                return tokenize(token, last);
            }

            return token;
        }

        let token = [];
        return tokenize(token, ruleString);
    }

    /**
     * @param {string} str 字符串片段
     * @return {string}
     * @private
     */
    _tokenValue (str) {
        if (str === '' || str === null) {
            return ''; 
        }

        let rg = new Map([
                ['intent', /#([\w\.\d_]+)/],
                ['session', /session\.([\w\.\d_]+)/],
                ['slot', /slot\.([\w\d_]+)/],
                ['requestType', /^(LaunchRequest|SessionEndedRequest)$/]
            ]);

        let self = this;
        for(let [k, r] of rg) {
            str = str.replace(r, function() {
                let m = arguments[1];

                if (k == 'intent') {
                    return (self.getIntentName() == m).toString();
                } else if (k == 'session') {
                    return '"' + (self.getSessionAttribute(m)).toString() + '"';
                } else if (k == 'slot') {
                    return '"' + (self.getSlot(m)).toString() + '"';
                } else if (k == 'requestType') {
                    return (self.request.getType() == m).toString();
                }
            });
        }

        return str;  
    }
}

/**
 * Bot可以返回的卡片
 */
Bot.Card = {};
Bot.Card.TextCard = require('./card/TextCard');
Bot.Card.ImageCard = require('./card/ImageCard');
Bot.Card.StandardCard = require('./card/StandardCard');
Bot.Card.ListCard = require('./card/ListCard');

module.exports = Bot;
