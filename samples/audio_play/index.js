/**
 * NOTICE:
 *      安装依赖
 *      npm install express
 *      npm install body-parser
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
        // 本地运行可以先注释
        //b.initCertificate(req.headers, req.rawBody).enableVerifyRequestSign();

        b.run().then(function(result){
            res.send(result);
        });
    });
}).listen(8016);

console.log('listen 8016');
