/**
 * @file 意图处理类
 * @author yelvye@baidu.com
 */

const RedisHelper = require('./RedisHelper');
const BaseBot = require('./lib/Bot');
const async = require('asyncawait/async');
const wait = require('asyncawait/await');


class Bot extends BaseBot {

    /**
     * 构造函数
     *
     * @param {Object} postData bot请求入参
     */
    constructor(postData) {
        super(postData);
        //  开启校验请求参数签名
        //  this.certificate.enableVerifyRequestSign();
        this.userId = this.request.getUserId();
        this.userKey = `data_${this.userId}`;
        this.helper = new RedisHelper();
        this.redisClient = this.helper.getRedisClient();

        //  意图1： 启动意图
        this.addLaunchHandler(this.launch);

        //  意图2: 添加选手
        this.addIntentHandler('add_player', this.addPlayer);

        //  意图3： 删除选手
        this.addIntentHandler('remove_player', this.removePlayer);

        //  意图4: 给选手加分
        this.addIntentHandler('add_score', this.addScore);

        //  意图5：给选手扣分
        this.addIntentHandler('minus_score', this.minusScore);

        //  意图6：查询选手得分
        this.addIntentHandler('search_score', this.searchScore);

        //  意图7：查询有哪些参赛选手
        this.addIntentHandler('query_players', this.queryPlayers);

        //  意图8： 重置比赛，清零所有选手的分数
        this.addIntentHandler('reset_game', this.resetGame);

        //  意图9：开始新比赛，清除已有的记分数据
        this.addIntentHandler('open_new_game', this.openNewGame);

        //  意图10： 退出记分，删除redis 中key为data_userid的键
        this.addIntentHandler('exit_score', this.exitScore);

        //  意图11： 退出（保存所有记分数据）
        this.addSessionEndedHandler(this.sessionEnd);

    }

    /**
     * 启动意图的实现函数
     *
     * @return {Object}
     */
    launch() {
        let con = this.redisClient;
        //  redis 服务器连接失败
        if (!con) {
            let msg = '记分器打开失败,连接服务器失败，暂时无法提供服务';
            return {
                directives: [this.getTemplate4(msg)],
                outputSpeech: msg
            };
        }
        this.waitAnswer();
        let msg = '计分器已打开，现在你可以为你的比赛增加参赛选手了,你可以说增加选手张三';
        return {
            directives: [this.getTemplate4(msg)],
            reprompt: msg,
            outputSpeech: msg
        };
    }

    /**
     * 增加选手意图的实现函数
     *
     * @return {Promise}
     */
    addPlayer() {
        return new Promise((resolve, reject) => {
            async(() => {
                let player = this.getSlot('player');
                //  未获取到选手名字，请求重新输入
                if (!player) {
                    this.nlu.ask('player');
                    this.waitAnswer();
                    let msg = '添加选手失败,没听清选手名字，能再说一遍吗? 如要增加选手可以这样说，增加选手张三';
                    return resolve({
                        directives: [this.getTemplate1(msg)],
                        reprompt: msg,
                        outputSpeech: msg
                    });

                } //  获取到选手名字，但是选手已存在
                else if (wait(this.isExists(player))) {
                    this.waitAnswer();
                    let msg = '添加选手失败,当前选手已存在，请重新添加新的选手或者给已有选手加分,如要查询比分，您可以说查询比分或查询选手张三得分';
                    resolve({
                        directives: [this.getTemplate4(msg)],
                        outputSpeech: msg
                    });
                } //    获取到要添加的选手，进行添加
                let ret = wait(this.addRedisPlayer(player));
                //  redis 修改数据不成功
                if (ret === 0) {
                    resolve({
                        directives: [this.getTemplate1('添加选手失败,添加数据异常')],
                        outputSpeech: '添加选手失败,添加数据异常'
                    });
                }

                this.waitAnswer();
                let msg = `添加选手成功,已添加选手${player}, 你可以继续添加选手或者给已有选手增加分数,您可以继续增加选手，给选手加分，查询指定选手得分，或者查询场上比分`;
                resolve({
                    directives: [this.getTemplate4(msg)],
                    outputSpeech: msg
                });
            })();
        });
    }

    /**
     * 删除选手意图的实现函数
     *
     * @return {Promise}
     */
    removePlayer() {
        return new Promise((resolve, reject) => {
            async(() => {
                let player = this.getSlot('player');
                //  未获取到选手名字，请求重新输入
                if (!player) {
                    this.nlu.ask('player');
                    this.waitAnswer();
                    let msg = '删除选手失败, 没听清选手名字，能再说一遍吗? 如要移除选手可以这样说，删除选手张三';
                    resolve({
                        directives: [this.getTemplate4(msg)],
                        outputSpeech: msg
                    });
                } //    获取到选手名字，但是选手不存在
                else if (!wait(this.isExists(player))) {
                    this.waitAnswer();
                    let msg = '删除选手失败,当前选手不存在，请确认,如要移除选手可以这样说，删除选手张三';
                    resolve({
                        directives: [this.getTemplate4(msg)],
                        outputSpeech: msg
                    });
                } //    获取到要删除的选手，进行删除
                let ret = wait(this.removeRedisPlayer(player));
                //    redis 修改数据不成功
                if (ret === 0) {
                    resolve({
                        directives: [this.getTemplate1('删除选手失败, 数据操作异常')],
                        outputSpeech: '删除选手失败, 数据操作异常'
                    });
                }
                this.waitAnswer();
                let msg = `已删除选手${player}, 你可以继续增删选手或者给选手增减分数,您可以继续增减选手，给选手加减分，查询指定选手得分，或者查询场上比分`;
                resolve({
                    directives: [this.getTemplate4(msg)],
                    outputSpeech: msg
                });
            })();
        });
    }


    /**
     * 查询分数意图的实现函数
     *
     * @return {Promise}
     * */
    searchScore() {
        return new Promise((resolve, reject) => {
            async(() => {
                if (!wait(this.keeperExists())) {
                    this.waitAnswer();
                    let msg = '查询分数失败,当前比赛无选手，请先增加选手,你可以说增加选手张三来给您的比赛添加选手';
                    resolve({
                        directives: [this.getTemplate1(msg)],
                        outputSpeech: msg
                    });
                }

                let player = this.getSlot('player');
                //  获取到选手，查询指定选手得分
                if (player) {
                    if (!wait(this.isExists(player))) { // 选手不存在
                        this.waitAnswer();
                        let msg = `查询分数失败,选手${player}不存在,查询选手分数可以说：选手张三得分，查询选手比分可以说查询场上比分`;
                        resolve({
                            directives: [this.getTemplate4(msg)],
                            outputSpeech: msg
                        });
                    }
                    //  选手存在
                    let score = wait(this.searchRedisScore(player));
                    this.waitAnswer();
                    let msg = `查询分数成功,选手${player}的得分是: ${score},如要继续查询选手比分，可以说查询选手张三得分`;
                    resolve({
                        directives: [this.getTemplate5(msg)],
                        outputSpeech: msg
                    });
                }
                //  未获取到选手，则给出场上所有选手的得分

                let playerScore = wait(this.queryAllScore());
                //  场上选手数为0
                if (Object.keys(playerScore).length === 0) {
                    this.waitAnswer();
                    let msg = '查询分数失败,当前场上无选手，请先添加选手，您可以说添加选手张三,您可以说添加选手张三来给您的比赛增加选手哦';
                    resolve({
                        directives: [this.getTemplate4(msg)],
                        outputSpeech: msg
                    });
                }
                this.waitAnswer();
                resolve({
                    directives: [this.getListTemplate2(playerScore)],
                    reprompt: '您可以继续选择：增加选手，给选手加分，或者查询指定选手得分',
                    outputSpeech: '已为您查询到如下比分'
                });
            })();
        });
    }

    /**
     * 选手加分意图的实现函数
     *
     * @return {Promise}
     */
    addScore() {
        return new Promise((resolve, reject) => {
            async(() => {
                let player = this.getSlot('player');
                let score = this.getSlot('score');
                //  记分文件不存在，要求先创建比赛
                if (!wait(this.keeperExists())) {
                    this.waitAnswer();
                    let msg = '添加分数失败,当前比赛无选手,请先增加选手,您可以说增加选手张三来增加选手';
                    resolve({
                        directives: [this.getTemplate4(msg)],
                        outputSpeech: msg
                    });
                } //    未获取到选手名字，请求重新输入
                else if (!player) {
                    this.nlu.ask('player');
                    this.waitAnswer();
                    let msg = '添加分数失败, 我没有听清您说的选手名字呢，可以再说一遍吗？如给选手张三加3分';
                    resolve({
                        directives: [this.getTemplate4(msg)],
                        outputSpeech: msg
                    });
                } //    要加分的选手不存在
                else if (!wait(this.isExists(player))) {
                    this.waitAnswer();
                    let msg = `添加分数失败, 选手${player}不存在, 如要给选手加分可以说：给选手张三加3分`;
                    resolve({
                        directives: [this.getTemplate4(msg)],
                        outputSpeech: msg
                    });
                } //    已知要加分的选手，未获取到加分数值
                else if (!score) {
                    this.nlu.ask('score');
                    this.waitAnswer();
                    let msg = `请问要给选手${player}加多少分呢？`;
                    resolve({
                        directives: [this.getTemplate4(msg)],
                        outputSpeech: msg
                    });
                }
                //    选手，加分值已获得，进行处理
                let curScore = wait(this.addRedisScore(player, score));
                if (curScore < 0) {
                    //  redis 操作失败
                    let msg = '添加分数失败, 数据操作异常';
                    resolve({
                        directives: [this.getTemplate4(msg)],
                        outputSpeech: msg
                    });
                }

                this.waitAnswer();
                let ret = `已给选手${player}增加${score}分，选手当前得分：${curScore}分`;
                let msg = `添加分数成功 ${ret} , 您可以继续增加选手或者给选手加分哦`;
                resolve({
                    directives: [this.getTemplate4(msg)],
                    outputSpeech: msg
                });
            })();
        });
    }


    /**
     * 选手扣分意图的实现函数
     *
     * @return {Promise}
     */
    minusScore() {
        return new Promise((resolve, reject) => {
            async(() => {
                let player = this.getSlot('player');
                let score = this.getSlot('score');

                // 记分文件不存在，要求先创建比赛
                if (!wait(this.keeperExists())) {
                    this.waitAnswer();
                    let msg = '扣分失败, 当前场上无选手，请先增加选手,如要增加选手，您可以说增加选手张三';
                    resolve({
                        directives: [this.getTemplate4(msg)],
                        outputSpeech: msg
                    });
                } //    未获取到选手名字，请求重新输入
                else if (!player) {
                    this.nlu.ask('player');
                    this.waitAnswer();
                    let msg = '扣分失败, 没听清选手名字，能再说一遍吗？如给选手张三扣4分';
                    resolve({
                        directives: [this.getTemplate4(msg)],
                        outputSpeech: msg
                    });
                } //    已知要扣分的选手，但选手不存在
                else if (!wait(this.isExists(player))) {
                    this.waitAnswer();
                    let msg = '扣分失败, 当前选手不存在 ,如要给选手扣分可以说:选手张三扣4分';
                    resolve({
                        directives: [this.getTemplate4(msg)],
                        outputSpeech: msg
                    });
                } //    已知要扣分的选手，未获取到扣分数值
                else if (!score) {
                    this.nlu.ask('score');
                    this.waitAnswer();
                    let msg = `扣分操作, 请问要给选手${player}扣多少分呢？`;
                    resolve({
                        directives: [this.getTemplate4(msg)],
                        outputSpeech: msg
                    });
                } //    选手，扣分值已获得，进行处理,支持负分
                let curScore = wait(this.minusRedisScore(player, score));

                if (typeof curScore !== 'number') { // redis 操作失败
                    resolve({
                        directives: [this.getTemplate5('扣分失败，数据操作异常')],
                        outputSpeech: '扣分失败，数据操作异常'
                    });
                }

                this.waitAnswer();
                let ret = `已给选手${player}扣${score}分，选手当前得分：${curScore}分`;
                let msg = `扣分成功 ${ret}, 您可以继续增加选手或者给选手加减分哦`;
                resolve({
                    directives: [this.getTemplate5(msg)],
                    outputSpeech: msg
                });
            })();
        });
    }


    /**
     * 查询选手列表意图的实现函数
     *
     * @return {Promise}
     */
    queryPlayers() {
        return new Promise((resolve, reject) => {
            async(() => {
                if (!wait(this.keeperExists())) {
                    this.waitAnswer();
                    let msg = '查询选手列表失败,当前比赛无选手，请先添加选手, 如要添加选手，可以说：增加选手张三';
                    resolve({
                        directives: [this.getTemplate5(msg)],
                        outputSpeech: msg
                    });
                }
                let players = wait(this.queryRedisPlayers());
                if (players.length === 0) {
                    this.waitAnswer();
                    let msg = '查询选手列表失败, 当前比赛无选手，请先添加选手,如要添加选手，可以说：增加选手张三';
                    resolve({
                        directives: [this.getTemplate5(msg)],
                        outputSpeech: msg
                    });
                }

                //  选手个数大于0时，播报已有选手
                let ret = `当前场上共有${players.length}个参赛选手，他们分别是：\r\n`;
                for (let i = 0, len = players.length; i < len; i++) {
                    ret = `${ret}${players[i]};`;
                }
                this.waitAnswer();
                let msg = `参赛选手列表: ${ret}, 你可以继续添加选手或者给选手加分`;
                resolve({
                    directives: [this.getListTemplate2(players)],
                    outputSpeech: msg
                });
            })();
        });
    }

    /**
     * 重置比赛意图的实现函数
     *
     * @return {Object}
     */
    resetGame() {
        this.clearScores();
        this.waitAnswer();
        let msg = '重置比赛成功, 清除场上选手的比分，现在可以重新为他们加分了，如：给选手李四增加4分,您可以这样说来给选手加分哦，如给选手张三加3分';
        return {
            directives: [this.getTemplate4(msg)],
            outputSpeech: msg
        };
    }

    /**
     * 开始新比赛意图的实现函数
     *
     * @return {Promise}
     * */
    openNewGame() {
        return new Promise((resolve, reject) => {
            async(() => {
                let ret = wait(this.removeRedisKeeper());//    清除之前的比赛数据
                if (ret === 0) { //    记分员不存在，说明当前记分员没有记分数据
                    let msg = '已开始新比赛,没有需要清除的记分数据,已准备好为您记分，您可以添加选手了';
                    this.waitAnswer();
                    resolve({
                        directives: [this.getTemplate5(msg)],
                        outputSpeech: msg
                    });
                }

                this.waitAnswer();
                let msg = '已准备好为您记分，原记分数据已清除，现在可为您的比赛增加选手了，如：增加选手张三';
                resolve({
                    directives: [this.getTemplate4(msg)],
                    outputSpeech: msg
                });
            })();
        });
    }

    /**
     * 退出记分器意图的实现函数
     *
     * @return {Promise}
     */
    exitScore() {
        return new Promise((resolve, reject) => {
            async(() => {
                let ret = wait(this.removeRedisKeeper());
                if (ret === 0) { //   记分员不存在，（记分数据为空时，记分员的键就会自动删除）
                    let msg = '已退出记分，当前没有需要清除的记分数据';
                    resolve({
                        directives: [this.getTemplate4(msg)],
                        outputSpeech: msg
                    });
                }
                let msg = '已退出记分, 所有记分数据已清除';
                resolve({
                    directives: [this.getTemplate4(msg)],
                    outputSpeech: msg
                });
            })();
        });
    }


    /**
     * 退出意图的实现函数
     *
     * @return {Object}
     */
    sessionEnd() {
        let msg = '记分器已退出, 感谢您的使用，祝您生活愉快';
        return {
            directives: [this.getTemplate4(msg)],
            outputSpeech: msg
        };
    }


    /**
     * 为指定选手加分
     *
     * @param {string} player 要加分的选手
     * @param {number} score 要加的分数
     * @return {Promise} 加分后的分数
     */
    addRedisScore(player, score) {
        //  对键的指定字段加值
        return this.redisClient.hincrby(this.userKey, player, score);
    }


    /**
     * 为指定选手扣分,支持负分
     *
     * @param {string} player 要扣分的选手
     * @param {number} score 要扣的分数
     * @return {Promise} 扣分后的分数
     * */
    minusRedisScore(player, score) {
        return this.redisClient.hincrby(this.userKey, player, -1 * score);
    }


    /**
     * 添加选手
     *
     * @param {string} player 要添加的选手名
     * @return {Promise} 1: 添加成功  0:选手已存在，添加失败
     */
    addRedisPlayer(player) {
        return this.redisClient.hset(this.userKey, player, 0);
    }

    /**
     * 移除选手（适用场景：选手加错了或者选手中途退赛等情况）
     *
     * @param {string} player 要移除的选手名
     * @return {Promise} 1：删除选手成功  0:找不到选手等其他情况
     */
    removeRedisPlayer(player) {
        return this.redisClient.hdel(this.userKey, player);
    }

    /**
     * 查询选手的分数
     *
     * @param {string} player 要查询的选手
     * @return {Promise} 选手的分数,选手不存在时，返回null
     */
    searchRedisScore(player) {
        return this.redisClient.hget(this.userKey, player);
    }

    /**
     * 查询场上目前所有选手的比分情况
     *
     * @return {Promise}  比分情况
     */
    queryAllScore() {
        return this.redisClient.hgetall(this.userKey);
    }


    /**
     * 查询场上的所有选手（适用场景：用户添加选手发现已添加后，可能会想知道已添加过哪些）
     *
     * @return {Promise} 所有选手的列表
     */
    queryRedisPlayers() {
        return this.redisClient.hkeys(this.userKey);
    }


    /**
     * 比赛重置，清零所有选手的分数，选手保留
     */
    clearScores() {
        let players = this.queryRedisPlayers();
        for (let i = 0, len = players.length; i < len; i++) {
            this.redisClient.hset(this.userKey, players[i], 0);
        }
    }


    /**
     * 判断当前记分员是否已存在，存在则表示已经可以通过data_userid 这个key进行后续的各种记分操作
     *
     * @return  {Promise}
     */
    keeperExists() {
        return this.redisClient.exists(this.userKey);
    }

    /**
     * 判断选手是否已存在
     *
     * @param {string} player 选手名字
     * @return  {Promise} 1 表示选手已存在，0 表示选手不存在
     */
    isExists(player) {
        return this.redisClient.hexists(this.userKey, player);
    }

    /**
     * 清除当前记分员及其所有记分数据,从redis中删除key: data_userid
     *
     * @return {Promise} 1 删除成功，0 删除失败（不存在key等情况）
     */
    removeRedisKeeper() {
        return this.redisClient.del(this.userKey);
    }


    /**
     *  获取文本展现模板
     *
     *  @param {string} text 歌曲详情
     *  @return {RenderTemplate} 渲染模版
     */
    getTemplate1(text) {
        let bodyTemplate = new BaseBot.Directive.Display.Template.BodyTemplate1();
        bodyTemplate.setPlainTextContent(Bot.DEFAULT_IMAGE);
        bodyTemplate.setPlainTextContent(text);
        let renderTemplate = new BaseBot.Directive.Display.RenderTemplate(bodyTemplate);
        return renderTemplate;
    }

    /**
     *  获取文本展现模板
     *
     *  @param {string} text 一级标题
     *  @return {RenderTemplate} 渲染模版
     */
    getTemplate4(text) {
        let bodyTemplate = new BaseBot.Directive.Display.Template.BodyTemplate4();
        bodyTemplate.setPlainContent(text);
        bodyTemplate.setBackGroundImage(Bot.DEFAULT_IMAGE);
        bodyTemplate.setImage(Bot.image);
        let renderTemplate = new BaseBot.Directive.Display.RenderTemplate(bodyTemplate);
        return renderTemplate;
    }

    /**
     *  获取文本展现模板
     *
     *  @param {string} text 一级标题
     *  @return {RenderTemplate} 渲染模版
     */
    getTemplate5(text) {
        let bodyTemplate = new BaseBot.Directive.Display.Template.BodyTemplate5();
        bodyTemplate.setTitle(text);
        bodyTemplate.setBackGroundImage(Bot.DEFAULT_IMAGE);
        bodyTemplate.addImages(Bot.image);
        bodyTemplate.addImages(Bot.DEFAULT_IMAGE);
        let renderTemplate = new BaseBot.Directive.Display.RenderTemplate(bodyTemplate);
        return renderTemplate;
    }

    /**
     * 返回模版列表
     *
     * @param {Object} playerScore 选手分数集合
     * @return {RenderTemplate}  模版列表
     * @public
     */
    getListTemplate2(playerScore) {
        let listTemplate = new BaseBot.Directive.Display.Template.ListTemplate2();
        listTemplate.setBackGroundImage(Bot.DEFAULT_IMAGE);
        //  设置模版标题
        listTemplate.setTitle('计分器');
        for (let play in playerScore) {
            let listTemplateItem = new BaseBot.Directive.Display.Template.ListTemplateItem();
            listTemplateItem.setImage(Bot.image);
            listTemplateItem.setPlainPrimaryText(play);
            listTemplateItem.setPlainSecondaryText(playerScore[play]);
            listTemplate.addItem(listTemplateItem);
        }

        let renderTemplate = new BaseBot.Directive.Display.RenderTemplate(listTemplate);
        return renderTemplate;
    }

}

Bot.DEFAULT_IMAGE = 'http://cbu01.alicdn.com/img/ibank/2017/013/887/4166788310_562231958.jpg';
Bot.image = 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2958518472,3404372203&fm=179&app=42&f=JPEG?w=121&h=140';

module.exports = Bot;
