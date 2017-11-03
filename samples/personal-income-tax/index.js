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

        b.run().then(function(result){
            res.send(result);
        });
    });
}).listen(8014);

console.log('listen 8014');
