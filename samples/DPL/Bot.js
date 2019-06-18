/**
 * @file 意图处理类
 * @author yelvye@baidu.com
 */

const BaseBot = require('bot-sdk');
const Document = BaseBot.Directive.DPL.Document;
const RenderDocument = BaseBot.Directive.DPL.RenderDocument;

class Bot extends BaseBot {

    /**
     * 构造函数
     *
     * @param {Object} postData bot请求入参
     */
    constructor(postData) {
        super(postData);
        this.addLaunchHandler(() => {
            this.waitAnswer();
            this.setExpectSpeech(false);
            return this.genDPLDirective('./doc/launch.json').then(directive => {
                if (directive) {
                    return {
                        directives: [directive],
                        outputSpeech: 'DPL演示'
                    };
                }
            });
        });

        //demo1 简单图片
        this.addIntentHandler('dpl_demo1', () => {
            this.waitAnswer();
            this.setExpectSpeech(false);
            return this.genDPLDirective('./doc/demo1.json').then(directive => {
                if (directive) {
                    return {
                        directives: [directive],
                        outputSpeech: '简单图片'
                    };
                }
            });
        });

        //demo2 长文本
        this.addIntentHandler('dpl_demo2', () => {
            this.waitAnswer();
            this.setExpectSpeech(false);
            return this.genDPLDirective('./doc/demo2.json').then(directive => {
                if (directive) {
                    return {
                        directives: [directive],
                        outputSpeech: '长文本'
                    };
                }
            });
        });

        //demo3 短文本
        this.addIntentHandler('dpl_demo3', () => {
            this.waitAnswer();
            this.setExpectSpeech(false);
            return this.genDPLDirective('./doc/demo3.json').then(directive => {
                if (directive) {
                    return {
                        directives: [directive],
                        outputSpeech: '短文本'
                    };
                }
            });
        });

        //demo4 右图详情
        this.addIntentHandler('dpl_demo4', () => {
            this.waitAnswer();
            this.setExpectSpeech(false);
            return this.genDPLDirective('./doc/demo4.json').then(directive => {
                if (directive) {
                    return {
                        directives: [directive],
                        outputSpeech: '右图详情'
                    };
                }
            });
        });

        //demo5 左图详情
        this.addIntentHandler('dpl_demo5', () => {
            this.waitAnswer();
            this.setExpectSpeech(false);
            return this.genDPLDirective('./doc/demo5.json').then(directive => {
                if (directive) {
                    return {
                        directives: [directive],
                        outputSpeech: '左图详情'
                    };
                }
            });
        });

        //demo6 横向列表
        this.addIntentHandler('dpl_demo6', () => {
            this.waitAnswer();
            this.setExpectSpeech(false);
            return this.genDPLDirective('./doc/demo6.json').then(directive => {
                if (directive) {
                    return {
                        directives: [directive],
                        outputSpeech: '横向列表'
                    };
                }
            });
        });

        //退出意图
        this.addSessionEndedHandler(() => {
            return {
                outputSpeech: '退出，欢迎下次再来'
            };
        });
    }

    /**
     * 生成DPL.RenderDocument指令
     *
     * @param {string} path 文档路径
     * @return {Promise}
     */
    genDPLDirective(path) {
        let document = new Document();
        let renderDocument = new RenderDocument();
        renderDocument.setToken(renderDocument.genToken());
        return document.getDocumentFromPath(path).then(doc => {
            if (doc) {
                document.initDocument(doc);
                renderDocument.setDocument(document);
            }
            return renderDocument;
        }).catch(err => {
            console.log(`err:${err}`);
        });

    }
}

module.exports = Bot;
