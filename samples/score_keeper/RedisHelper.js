/**
 * @file Redis获取client
 * @author yelvye@baidu.com
 */

const Redis = require('ioredis');
const Server = require('./config/server');

class RedisHelper {
    constructor() {

    }

    /**
     *  获取Redis连接
     *
     *  @return {Redis} Redis连接
     */
    getRedisClient() {
        let redisClient = new Redis(Server.redisPort, Server.redisHost);
        return redisClient;
    }
}

module.exports = RedisHelper;
