/**
 * @file 网页抓取解析
 * @author yelvye@baidu.com
 */


let request = require('request');
let cheerio = require('cheerio');

/**
 * 下载网页，解析出事件详情
 *
 * @param {string} url 网页地址
 * @return {Promise} 包含详情信息的Promise
 */
let resolveHistortyDetailPage = function resolveHistortyDetailPage(url) {
    return new Promise((resolve, reject) => {
        request(url, function (error, response, body) {
            if (!error && response.statusCode === 200) {
                let $ = cheerio.load(body);
                //  提取详情
                $('script[type="application/ld+json"]').each((i, item) => {
                    //  console.log(JSON.parse(item.children[0].data).description);
                    if (item.children[0] && item.children[0].data) {
                        let itemJson = JSON.parse(item.children[0].data);
                        resolve(itemJson.data);
                    }
                });
            }
            reject(error);
        });
    });
};

module.exports = {
    resolveHistortyDetailPage: resolveHistortyDetailPage
};

