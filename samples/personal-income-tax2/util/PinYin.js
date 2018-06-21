/**
 * @file 汉字转拼音工具类
 * @author yelvye@baidu.com
 */

'use strict';

const Dic = require('./Dic');

class Pinyin {

    /**
     * 汉字转拼音
     *
     * @param {string} str 汉字字符串
     * @return {string} 汉字拼音
     * @public
     */
    static chineseToPinyin(str) {
        let arr = str.split('');
        let pinyin = '';
        for (let i = 0, len = arr.length; i < len; i++) {
            if (Dic[arr[i]]) {
                pinyin += Dic[arr[i]].substring(0, 1);
            }
        }
        return pinyin;

    }

    /**
     * 获取拼音缩写
     *
     * @param {string} str 汉字字符串
     * @return {string} 汉语拼音缩写
     * @public
     */
    static getShortPinyin(str) {
        let arr = str.split('');
        let shortPinyin = '';
        for (let i = 0, len = arr.length; i < len; i++) {
            if (Dic[arr[i]]) {
                shortPinyin += Dic[arr[i]].substring(0, 1);
            }
        }
        return shortPinyin;
    }
}

module.exports = Pinyin;



