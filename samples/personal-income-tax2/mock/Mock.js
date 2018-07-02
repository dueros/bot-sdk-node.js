/**
 * @file Mock数据工具类
 * @author yelvye@baidu.com
 */

/**
 *  在API地址失效的情况下，返回默认的个税数据,计算规则不准确，此处只做示例
 *
 *  @param {string} computeType 要计算的个税的类型
 *  @param {number} salary 工资
 *  @return {Object} 对应类型的个税计算结果
 */

let getMockData = function getMockData(computeType, salary) {
    let mockData = {};
    switch (computeType) {

        case '养老':
            mockData = {
                personalYanglao: salary * 0.08,
                orgYanglao: salary * 0.12
            };
            break;

        case '医疗':
            mockData = {
                personalYiliao: salary * 0.02,
                orgYiliao: salary * 0.08
            };
            break;

        case '失业':
            mockData = {
                personalShiye: salary * 0.01,
                orgShiye: salary * 0.06
            };
            break;

        case '工伤':
            mockData = {
                personalGongshang: salary * 0.01,
                orgGongshang: salary * 0.08
            };
            break;

        case '生育':
            mockData = {
                personalShengyu: 0,
                orgShengyu: salary * 0.01
            };
            break;

        case '公积金':
            mockData = {
                personalGjj: salary * 0.12,
                orgGjj: salary * 0.12
            };
            break;

        case '个税':
            mockData = {
                tax: salary * 0.1
            };
            break;

        case '全部':
            mockData = {
                personalYanglao: salary * 0.08,
                orgYanglao: salary * 0.12,
                personalYiliao: salary * 0.02,
                orgYiliao: salary * 0.08,
                personalShiye: salary * 0.01,
                orgShiye: salary * 0.06,
                personalGongshang: salary * 0.01,
                orgGongshang: salary * 0.08,
                personalShengyu: 0,
                orgShengyu: salary * 0.01,
                personalGjj: salary * 0.12,
                orgGjj: salary * 0.12,
                tax: salary * 0.1
            };
            break;

        default:
            mockData = {
                personalYanglao: salary * 0.08,
                orgYanglao: salary * 0.12,
                personalYiliao: salary * 0.02,
                orgYiliao: salary * 0.08,
                personalShiye: salary * 0.01,
                orgShiye: salary * 0.06,
                personalGongshang: salary * 0.01,
                orgGongshang: salary * 0.08,
                personalShengyu: 0,
                orgShengyu: salary * 0.01,
                personalGjj: salary * 0.12,
                orgGjj: salary * 0.12,
                tax: salary * 0.1
            };
            break;
    }
    return mockData;
};

module.exports = {
    'getMockData': getMockData
};
