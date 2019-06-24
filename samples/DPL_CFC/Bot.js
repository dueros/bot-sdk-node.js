/**
 * @file 意图处理类
 * @author yelvye@baidu.com
 */

//const BaseBot = require('../../lib/Bot');
const BaseBot = require('bot-sdk');
const Document = BaseBot.Directive.DPL.Document;
const RenderDocument = BaseBot.Directive.DPL.RenderDocument;
const SetStateCommand = BaseBot.Directive.DPL.Commands.SetStateCommand;
const ExecuteCommands = BaseBot.Directive.DPL.ExecuteCommands;
const UpdateComponentCommand = BaseBot.Directive.DPL.Commands.UpdateComponentCommand;
const ScrollCommand = BaseBot.Directive.DPL.Commands.ScrollCommand;
const SetPageCommand = BaseBot.Directive.DPL.Commands.SetPageCommand;
const ControlMediaCommand = BaseBot.Directive.DPL.Commands.ControlMediaCommand;
const AnimationCommand = BaseBot.Directive.DPL.Commands.AnimationCommand;
const ScrollToIndexCommand = BaseBot.Directive.DPL.Commands.ScrollToIndexCommand;

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

        this.addEventListener('UserEvent', function (event) {
            this.waitAnswer();
            this.setExpectSpeech(false);
            let componentId = event.payload.componentId;
            let executeCommands = new ExecuteCommands();
            if (event.payload.source.type === 'Image' && componentId.indexOf('video_list') !== -1) {
                let index = componentId.substring(componentId.length - 1, componentId.length);
                index = parseInt(index, 10);

                let setStateCommand = new SetStateCommand();
                setStateCommand.setComponentId("test_video_videoId1");
                setStateCommand.setState('src');
                setStateCommand.setValue(VideoList[index]);

                let updateComponentCommand = new UpdateComponentCommand();
                let doc = new Document();
                return doc.getDocumentFromPath('./doc/update.json').then(function (content) {
                    content.mainTemplate.items[0].src = VideoList[index - 1]['src'];
                    content.mainTemplate.items[1]['items'][0]['text'] = VideoList[index - 1]['name'];
                    doc.initDocument(content);
                    updateComponentCommand.setDocument(doc);
                    updateComponentCommand.setComponentId("demo_video_compid");
                    executeCommands.setCommands(setStateCommand);
                    executeCommands.setCommands(updateComponentCommand);
                    return {
                        directives: [executeCommands],
                        outputSpeech: '播放新视频'
                    };
                });
            }
            else if (event.payload.source.type === 'Pager' && componentId === 'demo_move_page_compid') {
                let controlMediaCommand = new ControlMediaCommand();
                controlMediaCommand.setComponentId('demo_video_compid');
                if (event.payload.source.value === '0' || event.payload.source.value === '2') {
                    controlMediaCommand.setCommand('pause');
                }
                else if (event.payload.source.value === '1') {
                    controlMediaCommand.setCommand('play');
                }
                executeCommands.setCommands(controlMediaCommand);
                return {
                    directives: [executeCommands],
                    outputSpeech: '切换视频状态'
                };
            }
        });
        
        this.addDefaultEventListener(function () {
            this.waitAnswer();
            this.setExpectSpeech(false);
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
        this.addIntentHandler('dpl_demo3', () => {
            this.waitAnswer();
            this.setExpectSpeech(false);
            return this.genDPLDirective('./doc/demo3.json').then(directive => {
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

        this.addIntentHandler('dpl_demo7', () => {
            this.waitAnswer();
            this.setExpectSpeech(false);
            return this.genDPLDirective('./doc/demo7.json').then(directive => {
                if (directive) {
                    return {
                        directives: [directive],
                        outputSpeech: '视频相册'
                    };
                }
            });
        });

        //pull_scrollView
        this.addIntentHandler('pull_scrollview', () => {
            this.waitAnswer();
            this.setExpectSpeech(false);
            let executeCommands = new ExecuteCommands();
            let scrollCommand = new ScrollCommand();
            scrollCommand.setDistance("200dp");
            scrollCommand.setComponentId("demo_pull_scrollview_compid");
            executeCommands.setCommands(scrollCommand);
            return {
                directives: [executeCommands],
                outputSpeech: '滑动窗口滑动'
            };
        });


        //选择播放第几个
        this.addIntentHandler('video_play', () => {
            this.waitAnswer();
            this.setExpectSpeech(false);
            let index = this.getSlot('index');
            console.log("===index===="+index);
            index = index - 1 >= 0 ? index - 1 : 0;
            let executeCommands = new ExecuteCommands();
            let updateComponentCommand = new UpdateComponentCommand();
            let doc = new Document();
            return doc.getDocumentFromPath('./doc/update.json').then(function (content) {
                content.mainTemplate.items[0]['items'][0].src = VideoList[index]['src'];
                content.mainTemplate.items[0]['items'][1]['items'][0]['text'] = VideoList[index]['name'];
                doc.initDocument(content);
                updateComponentCommand.setDocument(doc);
                updateComponentCommand.setComponentId("replaceComponentId");
                executeCommands.setCommands(updateComponentCommand);
                return {
                    directives: [executeCommands],
                    outputSpeech: `正在播放${VideoList[index]['name']}`
                };
            });
        });

        //move_list
        //向上滑动列表
        this.addIntentHandler('move_list', () => {
            this.waitAnswer();
            this.setExpectSpeech(false);
            let direction = this.getSlot('direction') ? this.getSlot('direction') : '下';
            let distance = '100dp';
            if (['下', '后'].indexOf(direction) !== -1) {
                distance = '-100dp';
            }
            let executeCommands = new ExecuteCommands();
            let scrollCommand = new ScrollCommand();
            scrollCommand.setComponentId('demo_list_compid');
            scrollCommand.setDistance(distance);
            executeCommands.setCommands(scrollCommand);
            return {
                directives: [executeCommands],
                outputSpeech: `向${direction}滑动列表`
            };
        });
        //go_list_top
        //回到列表顶部
        this.addIntentHandler('go_list_top', () => {
            this.waitAnswer();
            this.setExpectSpeech(false);
            let executeCommands = new ExecuteCommands();
            let scrollToIndexCommand = new ScrollToIndexCommand();
            scrollToIndexCommand.setComponentId('demo_list_compid');
            scrollToIndexCommand.setAlign('first');
            scrollToIndexCommand.setIndex(1);
            executeCommands.setCommands(scrollToIndexCommand);
            return {
                directives: [executeCommands],
                outputSpeech: `回到列表顶部`
            };
        });

        //move_page
        //翻页
        this.addIntentHandler('move_page', () => {
            this.waitAnswer();
            this.setExpectSpeech(false);
            let direction = this.getSlot('direction') ? this.getSlot('direction') : '下';
            let val = 1;
            if (['右', '后'].indexOf(direction) !== -1) {
                val = -1;
            }
            let executeCommands = new ExecuteCommands();
            let setPageCommand = new SetPageCommand();
            setPageCommand.setComponentId('demo_move_page_compid');
            setPageCommand.setPosition('relative');
            setPageCommand.setValue(val);
            executeCommands.setCommands(setPageCommand);
            return {
                directives: [executeCommands],
                outputSpeech: `向${direction}翻页`
            };
        });

        //视频暂停
        this.addIntentHandler('pause_video', () => {
            this.waitAnswer();
            this.setExpectSpeech(false);
            //demo_video_compid
            let controlMediaCommand = new ControlMediaCommand();
            controlMediaCommand.setComponentId('demo_video_compid');
            controlMediaCommand.setCommand('pause');
            let executeCommands = new ExecuteCommands();
            executeCommands.setCommands(controlMediaCommand);
            return {
                directives: [executeCommands],
                outputSpeech: `视频暂停播放`
            };
        });

        //视频继续播放
        this.addIntentHandler('video_continue', () => {
            this.waitAnswer();
            this.setExpectSpeech(false);
            //demo_video_compid
            let controlMediaCommand = new ControlMediaCommand();
            controlMediaCommand.setComponentId('demo_video_compid');
            controlMediaCommand.setCommand('play');
            let executeCommands = new ExecuteCommands();
            executeCommands.setCommands(controlMediaCommand);
            return {
                directives: [executeCommands],
                outputSpeech: `视频继续播放`
            };
        });

        //全屏播放
        this.addIntentHandler('full_screen', () => {

        });

        //取消全屏
        this.addIntentHandler('cancle_full_screen', () => {

        });

        //收藏
        this.addIntentHandler('favourite_video', () => {
            this.waitAnswer();
            this.setExpectSpeech(false);
            let setStateCommand = new SetStateCommand();
            setStateCommand.setComponentId("demo_image_compid");
            setStateCommand.setState("src");
            setStateCommand.setValue("https://dbp-dict.bj.bcebos.com/dpl%2F%E5%BF%83.png");
            let animationCommand = new AnimationCommand();
            animationCommand.setComponentId("demo_image_compid");
            animationCommand.setFrom("40dp");
            animationCommand.setTo("10dp");
            animationCommand.setEasing("ease-in");
            animationCommand.setAttribute("height");
            animationCommand.setDuration(500);
            animationCommand.setRepeatCount('9');
            animationCommand.setRepeatMode('reverse');
            let executeCommands = new ExecuteCommands();
            executeCommands.setCommands([setStateCommand, animationCommand]);
            return {
                directives: [executeCommands],
                outputSpeech: `视频收藏`
            };

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
