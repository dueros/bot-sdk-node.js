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

const crypto = require('crypto');
const fs = require('fs');
const request = require('request');

/**
 * 认证
 **/
class Certificate {
    /**
     * @param {Object} headers http请求的header
     * @param {string} requestBody 请求体
     * @param {string} privateKeyContent 私钥. 用于请求DuerOS参数签名
     **/
    constructor (headers, requestBody, privateKeyContent = '') {
        this.data = requestBody;  
        this.headers = headers;
        this.privateKey = privateKeyContent;
        this.verifyRequestSign = false;
    }

    /**
     * 开启验证请求参数签名，阻止非法请求
     *
     * @return {boolean}
     * @public
     */
    enableVerifyRequestSign() {
        this.verifyRequestSign = true; 
        return this;
    }
    /**
     * 关闭验证请求参数签名
     *
     * @return {boolean}
     * @public
     */
    disableVerifyRequestSign() {
        this.verifyRequestSign = false; 
        return this;
    }

    /**
     * @return promise
     * @private
     */
    _getRequestPublicKey() {
        var _this = this;
        return new Promise(function(resolve, reject){
            var url = _this.headers.signaturecerturl;
            if(!url) {
                reject(); 
            }

            var hash = crypto.createHash('md5');
            var cache = __dirname + '/' + hash.update(url).digest('hex');

            let content = '';
            fs.access(cache, (err) => {
                if(err) {
                    request({
                        url: url,
                        method: 'GET',
                    }, function(error, response, body){
                        let content = body;

                        if(!content) {
                            return reject(); 
                        }

                        fs.writeFile(cache, content, {encoding: "utf8"}, (err) => {
                            if (err) {
                                console.error(err); 
                            } 

                            // 缓存失败，但内容已经获取了
                            resolve(content);
                        });
                    });
                } else {
                    fs.readFile(cache, {encoding: "utf8"}, (err, data) => {
                        if(err) {
                            console.error(err); 
                            reject();
                        } else {
                            resolve(data); 
                        }
                    });
                }
            });
        });
    }


    /**
     * @desc 验证请求者是否合法
     * @return promise
     * @public
     */
    verifyRequest() {
        var _this = this;
        return new Promise(function(resolve, reject){
            var verify = crypto.createVerify('RSA-SHA1');

            if(!_this.verifyRequestSign) {
                resolve(true);
            }

            _this._getRequestPublicKey().then(function(publicKey){

                if(!publicKey || !_this.data) {
                    reject();
                }

                verify.update(_this.data);
                let isSignatureValid = verify.verify(publicKey.toString(), _this.getRequestSig(), 'base64');
                if(isSignatureValid) {
                    resolve(isSignatureValid);
                }else {

                    reject();
                }

            }, function(){
                reject();
            }); 
        });
    }

    /**
     * @return string
     * @public
     */
    getRequestSig() {
        return this.headers.signature;
    }
}
 
module.exports = Certificate;
