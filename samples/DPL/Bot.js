/**
 * @file 意图处理类
 * @author yelvye@baidu.com
 */

// const BaseBot = require('../../lib/Bot');
const path = require('path');
const BaseBot = require('bot-sdk');
const Document = BaseBot.Directive.DPL.Document;
const RenderDocument = BaseBot.Directive.DPL.RenderDocument;
const SetStateCommand = BaseBot.Directive.DPL.Commands.SetStateCommand;
const ExecuteCommands = BaseBot.Directive.DPL.ExecuteCommands;
const UpdateComponentCommand = BaseBot.Directive.DPL.Commands.UpdateComponentCommand;
const AppendComponentCommand = BaseBot.Directive.DPL.Commands.AppendComponentCommand;
const ScrollCommand = BaseBot.Directive.DPL.Commands.ScrollCommand;
const SetPageCommand = BaseBot.Directive.DPL.Commands.SetPageCommand;
const ControlMediaCommand = BaseBot.Directive.DPL.Commands.ControlMediaCommand;
const AnimationCommand = BaseBot.Directive.DPL.Commands.AnimationCommand;
const ScrollToIndexCommand = BaseBot.Directive.DPL.Commands.ScrollToIndexCommand;
const PushStack = BaseBot.Directive.Display.PushStack;

const VideoList = [
    {
        "src": "https://dbp-dict.bj.bcebos.com/video2.mp4",
        "index": "video_list_1",
        "name": "葡萄酒",
        "desc": "人生就像一杯酒"
    },
    {
        "src": "https://dbp-dict.bj.bcebos.com/video4.mp4",
        "index": "video_list_2",
        "name": "初夏",
        "desc": "最美人间四月天"
    },
    {
        "src": "https://dbp-dict.bj.bcebos.com/video3.mp4",
        "index": "video_list_3",
        "name": "海",
        "desc": "我要和你一起看日出, 面向大海"
    },
    {
        "src": "https://dbp-dict.bj.bcebos.com/video4.mp4",
        "index": "video_list_4",
        "name": "心动的感觉",
        "desc": "你知道我对你不仅仅是喜欢"
    },
    {
        "src": "https://dbp-dict.bj.bcebos.com/video5.mp4",
        "index": "video_list_5",
        "name": "冷月",
        "desc": "曾经有一个美丽的女孩追求过我，但是我没有接受，现在后悔了"
    },
    {
        "src": "https://dbp-dict.bj.bcebos.com/video6.mp4",
        "index": "video_list_6",
        "name": "给大家讲一个笑话吧",
        "desc": "你就是一个笑话"
    },
    {
        "src": "https://dbp-dict.bj.bcebos.com/video7.mp4",
        "index": "video_list_7",
        "name": "加班，加班",
        "desc": "很可以"
    }
];

const ENABLED_PAGE_LIST = ['page_webview', 'page_text', 'page_image', 'page_audio', 'page_list', 'page_pager', 'page_video', 'page_scrollview'];

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
            return this.genDPLDirective('./doc/demo_launch.json').then(directive => {
                if (directive) {
                    return {
                        directives: [directive, new PushStack()],
                        outputSpeech: 'DPL演示'
                    };
                }
            });
        });

        this.addEventListener('UserEvent', function (event) {
            this.waitAnswer();
            this.setExpectSpeech(false);
            let intent = event.payload.source.selfArguments && event.payload.source.selfArguments[0];
            console.error(new Date(),'event.payload  ', JSON.stringify(event.payload))
            if (ENABLED_PAGE_LIST.includes(intent)) {
                return this.genDPLDirective(`./doc/demo_${intent}.json`).then(directive => {
                    if (directive) {
                        return {
                            directives: [directive]
                        };
                    }
                });
            }

            let componentId = event.payload.componentId;
            if (componentId === 'demo_list' && intent === 'demo_list_scroll_end') {
                let executeCommands = new ExecuteCommands();
                let appendComponentCommand = new AppendComponentCommand();
                let scrollCommand = new ScrollCommand();
                let doc = new Document();
                return doc.getDocumentFromPath('./doc/demo_list_append.json').then(function (content) {
                    doc.initDocument(content);
                    appendComponentCommand.setDocument(doc);
                    appendComponentCommand.setComponentId('demo_list');
                    scrollCommand.setDistance("160dp");
                    scrollCommand.setComponentId("demo_list");
                    scrollCommand.setDelay(100);
                    executeCommands.setCommands([appendComponentCommand, scrollCommand]);
                    return {
                        directives: [executeCommands],
                        outputSpeech: 'append'
                    };
                });
            }
            if (componentId === 'demo_scrollview_text_1' && intent === 'request_update') {
                let executeCommands = new ExecuteCommands();
                let updateComponentCommand = new UpdateComponentCommand();
                let doc = new Document();
                return doc.getDocumentFromPath('./doc/demo_update.json').then(function (content) {
                    doc.initDocument(content);
                    updateComponentCommand.setDocument(doc);
                    updateComponentCommand.setComponentId("demo_scrollview_container_1");
                    executeCommands.setCommands(updateComponentCommand);
                    return {
                        directives: [executeCommands],
                        outputSpeech: 'update'
                    };
                });
            }
        });
        
        this.addDefaultEventListener(function () {
            this.waitAnswer();
            this.setExpectSpeech(false);
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
     * @param {string} pathUrl 文档路径
     * @return {Promise}
     */
    genDPLDirective(pathUrl) {
        pathUrl = path.join(__dirname, pathUrl);
        let document = new Document();
        let renderDocument = new RenderDocument();
        return document.getDocumentFromPath(pathUrl).then(doc => {
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
