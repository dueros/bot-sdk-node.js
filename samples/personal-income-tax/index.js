/**
 * NOTICE:
 *      安装依赖
 *      npm install express
 **/

const express = require('express');

const Bot = require('./Bot');
var app = express();

// 探活请求
app.head('/', (req, res) => {
    res.sendStatus(204);
});

app.post('/', (req, res) => {
    req.rawBody = '';

    req.setEncoding('utf8');
    req.on('data', function(chunk) { 
        req.rawBody += chunk;
    });

    req.on('end', function() {
        var b = new Bot(JSON.parse(req.rawBody));
        // 开启签名认证
        b.initCertificate(req.headers, req.rawBody).enableVerifyRequestSign();

        
        /**
         * 需要监控功能
         * 
         * bot-sdk 集成了监控sdk，参考：https://www.npmjs.com/package/bot-monitor-sdk
         * 打开此功能，对服务的性能有一定的耗时增加。另外，需要在DBP平台上面上传public key，这里使用私钥签名
         * 文档参考：https://dueros.baidu.com/didp/doc/dueros-bot-platform/dbp-deploy/authentication_markdown
         */
        b.setPrivateKey(__dirname + '/rsa_private_key.pem').then(function(key){
            // 0: debug  1: online
            b.botMonitor.setEnvironmentInfo(key, 0);

            b.run().then(function(result){
                res.send(result);
            });
        }, function(err){
            console.error('error'); 
        });

        
        // 不需要监控
        //b.run().then(function(result){
        //    res.send(result);
        //});
    });
}).listen(8014);

console.log('listen 8014');
