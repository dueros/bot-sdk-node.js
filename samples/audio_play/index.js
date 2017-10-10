/**
 * NOTICE:
 *      安装依赖
 *      npm install express
 *      npm install body-parser
 **/

const express = require('express');
const bodyParser = require('body-parser');

const Bot = require('./Bot');
var app = express();

app.use(bodyParser.json());
app.post('/', (req, res) => {
    let b = new Bot(req.body);
    let result = b.run();
    res.send(result);
}).listen(8016);

console.log('listen 8016');
