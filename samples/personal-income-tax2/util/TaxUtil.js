/**
 * @file 个税工具类
 * @author yelvye@baidu.com
 */

'use strict';

const InquiryType = require('./InquiryType');
const PinYin = require('./PinYin');
const HttpRequest = require('./HttpRequest');

class TaxUtil {

    /**
     * TaxUtil class 构造方法，此处不做初始化逻辑
     */
    constructor() {

    }

    /**
     * 工资合法性检查,非int类型以及小于等于0的值均不合法
     *
     * @param {number} monthSalary 月薪
     * @return {boolean} 是否合法
     * @public
     */
    static checkMonthlysalary(monthSalary) {
        let salary = parseInt(monthSalary, 10);
        if (salary <= 0) {
            return false;
        }
        return true;
    }

    /**
     * 模版处理函数
     *
     * @param {string} template 处理模版
     * @param {Object} replaceData 需要填充的模版数据
     *        eg:养老金个人缴纳{person_yanglao}元，单位缴纳{company_yanglao}元
     * @return {string} eg:养老金个人缴纳200元，单位缴纳100元
     * @public
     */
    static processTemplate(template, replaceData) {
        let pattern = /\{(\w+)\}/g;
        return template.replace(pattern, function (match) {
            console.log(`match: ${match.substring(1, match.length - 1)}`);
            console.log(`replaceData[match]: ${replaceData[match.substring(1, match.length - 1)]}`);
            return replaceData[match.substring(1, match.length - 1)];
        });
    }

    /**
     * 根据参数获取个税的所有数据
     *
     * @param {string} city 城市
     * @param {number} salary 工资
     * @return {Promise} 个税查询结果
     * @public
     */
    static getTaxData(city, salary) {
        let cityPinyin = PinYin.chineseToPinyin(city);
        //  带参数的URL
        let url = `${InquiryType.url}&base_gjj=${salary}&origin_salary=${salary}&city=${cityPinyin}`;
        //  请求http
        return HttpRequest.getHttpJson(url);
    }
}

module.exports = TaxUtil;












