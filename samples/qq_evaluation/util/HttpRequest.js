/**
 * @file http工具类
 * @author yelvye@baidu.com
 */

'use strict';

const Request = require('request');

class HttpRequest {

    /**
     * post请求方法
     *
     * @param {string} url 请求地址
     * @param {Object} data body参数
     * @param {Object} head headers请求头参数
     * @return {Promise} post请求的结果
     * @public
     */
    static postHttpJson(url, data, head = {}) {
        let postData = {
            url: url,
            formData: data,
            headers: head
        };

        return new Promise((resolve, reject) => {
            Request.post(postData, (error, response, body) => {
                if (!error && response.statusCode === 200) {
                    let info = JSON.parse(body);
                    resolve(info);
                }
                else {
                    reject(`postHttpJson request error ${response.statusCode}`);
                }
            });
        });
    }

    /**
     * get请求方法
     *
     * @param {string} url 地址
     * @param {Object} head headers请求头参数
     * @return {Promise} get请求结果
     * @public
     */
    static getHttpJson(url, head = {}) {
        return new Promise((resolve, reject) => {
            Request.post(url, head, (error, response, body) => {
                if (!error && response.statusCode === 200) {
                    let info = JSON.parse(body);
                    resolve(info);
                }
                else if (response.statusCode === 404) {
                    //  如果api地址已经失效就返回默认的mock数据
                    resolve('404');
                }
                else {
                    reject(`getHttpJson request error ${response.statusCode}`);
                }
            });
        });
    }
}

module.exports = HttpRequest;
