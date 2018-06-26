/**
 * @file Bot入口文件
 * @author yelvye@baidu.com
 */

const express = require('express');

const Bot = require('./Bot');
let app = express();

//  探活请求
app.head('/', (req, res) => {
    res.sendStatus(204);
});

app.post('/', (req, res) => {
    req.rawBody = '';

    req.setEncoding('utf8');
    req.on('data', function (chunk) {
        req.rawBody += chunk;
    });

    req.on('end', function () {
        let requestBody;
        try {
            requestBody = JSON.parse(req.rawBody);
        } catch (e) {
            console.error(e);
            return res.send(JSON.stringify({status: 1}));
        }
        let bot = new Bot(requestBody);
        //  开启签名认证
        //  bot.initCertificate(req.headers, req.rawBody).enableVerifyRequestSign();
        /**
         * 需要监控功能
         * bot-sdk 集成了监控sdk，参考：https://www.npmjs.com/package/bot-monitor-sdk
         * 打开此功能，对服务的性能有一定的耗时增加。另外，需要在DBP平台上面上传public key，这里使用私钥签名
         * 文档参考：https://dueros.baidu.com/didp/doc/dueros-bot-platform/dbp-deploy/authentication_markdown
         */
        //  bot.setPrivateKey(__dirname + '/rsa_private_key.pem').then(function (key) {
                //  0: debug  1: online
        //    bot.botMonitor.setEnvironmentInfo(key, 0);

        //  }, function (err) {
        //    console.error('error');
        //  });
        bot.run().then(function (result) {
            res.send(result);
        });


        //  不需要监控
        //  bot.run().then(function(result){
        //       res.send(result);
        //  });
    });
}).listen(8014);

console.log('listen 8014');
