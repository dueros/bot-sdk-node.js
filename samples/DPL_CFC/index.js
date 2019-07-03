const Bot = require('./Bot');
//  const privateKey = require("./rsaKeys.js").privateKey;


exports.handler = function(event, context, callback) {
    try {
        let b = new Bot(event);
        // 0: debug  1: online
        // b.botMonitor.setEnvironmentInfo(privateKey, 0);
        b.run().then(function(result) {
            callback(null, result);
        }).catch(callback);
    } catch (e) {
        callback(e);
    }
}
