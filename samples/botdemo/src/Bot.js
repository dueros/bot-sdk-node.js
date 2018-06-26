 /**
  * @file js-sdk bot demo
  * @author yelvye@baidu.com
  */
const BaseBot = require('../lib/Bot');
const Hint = BaseBot.Directive.Display.Hint;
const RenderTemplate = BaseBot.Directive.Display.RenderTemplate;
const ListTemplate1 = BaseBot.Directive.Display.Template.ListTemplate1;
const ListTemplateItem = BaseBot.Directive.Display.Template.ListTemplateItem;
const PlayerInfo = BaseBot.Directive.AudioPlayer.PlayerInfo;
const VideoPlay = BaseBot.Directive.VideoPlayer.Play;
const VideoStop = BaseBot.Directive.VideoPlayer.Stop;
const AudioPlay = BaseBot.Directive.AudioPlayer.Play;
const AudioStop = BaseBot.Directive.AudioPlayer.Stop;
const PlayPauseButton = BaseBot.Directive.AudioPlayer.Control.PlayPauseButton;
const NextButoon = BaseBot.Directive.AudioPlayer.Control.NextButton;
const PreviousButton = BaseBot.Directive.AudioPlayer.Control.PreviousButton;
const ShowPlayListButton = BaseBot.Directive.AudioPlayer.Control.ShowPlayListButton;

class Bot extends BaseBot {

    /**
     * base64编码得到token
     *
     * @param {Object} token json对象
     * @return {string}
     */
    genToken(token) {
        let buffer = new Buffer(token.toString());
        return buffer.toString('base64');
    }

    /**
     * 构造方法
     *
     * @param {Object} postData Dueros入参
     */
    constructor(postData) {
        super(postData);
        //  意图1:处理技能启动
        this.addLaunchHandler(this.launch);
        //  意图2：处理技能结束
        this.addSessionEndedHandler(this.sessionEndedRequest);
        //  意图3：视频模板界面
        this.addIntentHandler('video', this.videoIntent);
        //  意图4：音频模板界面
        this.addIntentHandler('audio', this.audioIntent);
        //  意图5：选择第几个
        this.addIntentHandler('ai.dueros.common.choose_action', this.chooseIntent);
        //  意图6：暂停播放
        this.addIntentHandler('ai.dueros.common.pause_intent', this.pauseIntent);
        //  意图7：继续播放
        this.addIntentHandler('ai.dueros.common.continue_intent', this.continueIntent);
        //  意图8：返回指定界面
        this.addIntentHandler('back', this.backIntent);
        //  事件1：屏幕点击事件
        this.addEventListener('Display.ElementSelected', this.ScreenClickedEvent);
        //  事件2：音频播放结束事件
        this.addEventListener('AudioPlayer.PlaybackFinished', this.audioPlaybackFinished);
        //  事件3：视频播放结束事件
        this.addEventListener('VideoPlayer.videoPlaybackNearlyFinished', this.videoPlaybackNearlyFinished);
        //  事件4：音频上报
        this.addEventListener('AudioPlayer.ProgressReportIntervalElapsed', this.defaultEvent);
        //  事件5：视频上报
        this.addEventListener('VideoPlayer.ProgressReportIntervalElapsed', this.defaultEvent);
        //  事件6: 音频开始播放事件
        this.addEventListener('AudioPlayer.PlaybackStarted', this.audioPlayStarted);
        //  事件6: 视频开始播放事件
        this.addEventListener('VideoPlayer.PlaybackStarted', this.videoPlayStarted);



        //  兜底
        this.addDefaultEventListener(this.defaultEvent);
    }

    /**
     * launch意图
     *
     * @return {Object}
     */
    launch() {
        this.waitAnswer();
        let template = this.getHomeCard();
        let server = Bot.servers[Math.floor(Math.random() * 2)];
        let speech = `欢迎使用平台样例演示，请试着说 ${server}`;
        let reprompt = `没有听懂，可以直接对我想要使用的服务，例如 ${server}`;
        let hint = new Hint(server);

        return {
            outputSpeech: speech,
            reprompt: reprompt,
            directives: [hint, template]
        };
    }

    /**
     * 视频意图
     *
     * @return {Object}
     */
    videoIntent() {
        this.waitAnswer();

        let videoName = this.getSlot('videoname');
        if (videoName) {
            let video = this.getDetailBy('video', 'title', videoName);
            let directives = this.getVideoPlay(video.id);
            if (directives) {
                return {
                    directives: directives
                };
            }

            let speech = '没有找到你要播放的视频';
            let hint = new Hint(['first', 'gao bai qi qiu']);
            let template = this.getVideoCard();

            return {
                outputSpeech: speech,
                directives: [hint, template]
            };
        }
        let speech = '请选择您要播放的视频';
        let reprompt = '没有听懂，请告诉我想要播放的视频';
        let template = this.getVideoCard();

        //  定义hint指令
        let hint = new Hint(['第一个', '我想看告白气球']);
        return {
            outputSpeech: speech,
            reprompt: reprompt,
            directives: [hint, template]
        };
    }

    /**
     * 音频意图
     *
     * @return {Object}
     */
    audioIntent() {
        this.waitAnswer();

        let audioName = this.getSlot('audioname');
        if (audioName) {
            let audio = this.getDetailBy('audio', 'title', audioName);
            let directives = this.getAudioPlay(audio.id);
            if (directives) {
                return {
                    directives: directives
                };
            }
            let speech = '没有找到你要播放的视频';
            let hint = new Hint(['第一个', '我想听告白气球']);
            let template = this.getAudioCard();
            return {
                outputSpeech: speech,
                directives: [hint, template]
            };
        }
        let speech = '请选择你想要听的歌曲';
        let reprompt = '没有听懂，请告诉我想要听的歌曲';
        let template = this.getAudioCard();

        //  定义hint指令
        let hint = new Hint(['第一个', '我想听告白']);

        return {
            outputSpeech: speech,
            reprompt: reprompt,
            directives: [hint, template]
        };
    }

    /**
     * 选择意图
     *
     * @return {Object}
     */
    chooseIntent() {
        this.waitAnswer();

        let context = this.request.getScreenContext();
        let token = context.template.token ? context.template.token : '';
        let page = token.page ? token.page : '';
        let index = this.getSlot('index');
        //  index从1开始
        //  let audioPlayerContext = this.request.getAudioPlayerContext();
        //  let videoPlayerContext = this.request.getVideoPlayerContext();

        //  let audioToken = audioPlayerContext['token'] ? audioPlayerContext['token'] : '';
        //  let videoToken = videoPlayerContext['token'] ? videoPlayerContext['token'] : '';

        if (page === 'home') {
            if (index === '1') {
                return this.videoIntent();
            }
            if (index === '2') {
                return this.audioIntent();
            }
        }
        if (page === 'video') {
            let directives = this.getVideoPlay(index);
            return {
                directives: directives
            };
        }
        if (page === 'audio') {
            let directives = this.getAudioPlay(index);
            return {
                directives: directives
            };
        }
    }

    /**
     * 返回意图
     *
     * @return {Object}
     */
    backIntent() {
        this.waitAnswer();
        let back = this.getSlot('back');
        if (!back) {
            back = 'home';
        }
        if (back === '视频模板') {
            return this.videoIntent();
        }
        if (back === '音频模板') {
            return this.audioIntent();
        }
        if (back === 'home') {
            let template = this.getHomeCard();
            let speech = `欢迎使用平台样例，请试着说出 ${Bot.servers[Math.floor(Math.random() * 2)]}`;

            let directive = new Hint(Bot.servers[Math.floor(Math.random() * 2)]);
            return {
                outputSpeech: speech,
                directives: [directive, template]
            };
        }
    }

    /**
     * 暂停播放意图
     *
     * @return {Object}
     */
    pauseIntent() {
        this.waitAnswer();
        this.setExpectSpeech(false);

        let audioPlayerContext = this.request.getAudioPlayerContext();
        let videoPlayerContext = this.request.getVideoPlayerContext();

        //  let audioToken = audioPlayerContext['token'] ? audioPlayerContext['token'] : '';
        //  let videoToken = videoPlayerContext['token'] ? videoPlayerContext['token'] : '';


        if (audioPlayerContext) {
            let directive = new AudioStop();
            return {
                directives: directive
            };
        }
        if (videoPlayerContext) {
            let directive = new VideoStop();
            return {
                directives: directive
            };
        }
        return this.defaultRes();
    }

    /**
     * 继续播放意图
     *
     * @return {Object}
     */
    continueIntent() {
        this.waitAnswer();

        let audioPlayerContext = this.request.getAudioPlayerContext();
        let videoPlayerContext = this.request.getVideoPlayerContext();

        if (audioPlayerContext) {
            let audioToken = audioPlayerContext.token ? audioPlayerContext.token : '';
            let id = audioToken.id;
            let directives = this.getAudioPlay(id);
            return {
                directives: directives
            };
        }
        if (videoPlayerContext) {
            let videoToken = videoPlayerContext.token ? videoPlayerContext.token : '';
            let id = videoToken.id;
            let directives = this.getVideoPlay(id);
            return {
                directives: directives
            };
        }
        return this.defaultRes();
    }

    /**
     * 屏幕点击事件
     *
     * @return {(Object|null)}
     */
    ScreenClickedEvent() {
        this.waitAnswer();
        let data = this.request.getData();
        let url = data.request.token ? data.request.token : '';
        if (!url) {
            this.setExpectSpeech(false);
            return;
        }

        let page = url.page ? url.page : '';
        //  item 是当前页面
        let item = url.item ? url.item : '';

        if (page === 'home' && item === 'video') {
            return this.videoIntent();
        }
        if (page === 'home' && item === 'audio') {
            return this.audioIntent();
        }
        if (page === 'video') {
            //  page如果不为home，item则存的是id
            let directives = this.getVideoPlay(item);
            return {
                directives: directives
            };
        }
        if (page === 'audio') {
            let directives = this.getAudioPlay(item);
            return {
                directives: directives
            };
        }
    }

    /**
     * audio PlaybackFinished
     *
     * @param {Object} event 事件
     * @return {Object}
     */
    audioPlaybackFinished(event) {
        this.waitAnswer();
        this.setExpectSpeech(false);
        let audioToken = event.token ? event.token : '';
        if (audioToken.id && audioToken.index) {
            let id = audioToken.id;
            id = parseInt(id, 10) + 1;
            let directives = this.getAudioPlay(id.toString());
            return {
                directives: directives
            };
        }
    }

    /**
     * video PlaybackNearlyFinished
     *
     * @param {Object} event 事件
     * @return {Object}
     */
    videoPlaybackNearlyFinished(event) {
        this.waitAnswer();
        this.setExpectSpeech(false);
        let videoToken = event.token ? event.token : '';

        if (videoToken.id && videoToken.index) {
            let id = videoToken.id;
            id = parseInt(id, 10) + 1;
            let directives = this.getVideoPlay(id.toString());
            return {
                directives: directives
            };
        }
    }

    /**
     * 默认事件
     */
    defaultEvent() {
        this.waitAnswer();
        this.setExpectSpeech(false);
    }

    /**
     * 获取主页卡片
     *
     * @return {RenderTemplate}
     */
    getHomeCard() {

        let videoToken = {
            page: 'home',
            item: 'video'
        };
        let audioToken = {
            page: 'home',
            item: 'audio'
        };
        let token = {
            page: 'home'
        };

        let listTemplate = new ListTemplate1();

        //  设置模板token
        listTemplate.setToken(this.genToken(token));
        //  设置模版标题
        listTemplate.setTitle('样例演示');

        //  视频模板
        let listTemplateVideoItem = new ListTemplateItem();
        listTemplateVideoItem.setToken(this.genToken(videoToken));
        listTemplateVideoItem.setImage(Bot.IMAGE_VIDEO);
        listTemplateVideoItem.setPlainPrimaryText(`1  ${Bot.SERVER_VIDEO}`);
        listTemplate.addItem(listTemplateVideoItem);

        //  音频模板
        let listTemplateAudioItem = new ListTemplateItem();
        listTemplateAudioItem.setToken(this.genToken(audioToken));
        listTemplateAudioItem.setImage(Bot.IMAGE_AUDIO);
        listTemplateAudioItem.setPlainPrimaryText(`2  ${Bot.SERVER_AUDIO}`);
        listTemplate.addItem(listTemplateAudioItem);

        //  定义RenderTemplate指令
        let directive = new RenderTemplate(listTemplate);
        return directive;
    }

    /**
     * 视频界面卡片
     *
     * @return {Object}
     */
    getVideoCard() {
        let listTemplate = new ListTemplate1();
        //  设置token
        let tokenArr = {
            page: 'video'
        };
        listTemplate.setToken(this.genToken(tokenArr));
        //  设置模版标题
        listTemplate.setTitle('视频示例');

        let videoList = this.getPlayList(Bot.TYPE_VIDEO);
        if (videoList instanceof Array) {
            for (let i = 0, len = videoList.length; i < len; i++) {
                let id = videoList[i].id ? videoList[i].id : '';
                let title = videoList[i].title ? videoList[i].title : '';
                let introduction = videoList[i].intro ? videoList[i].intro : '';
                let picUrl = videoList[i].picurl ? videoList[i].picurl : '';
                let token = {
                    page: 'video',
                    item: id.toString()
                };

                //  设置模版列表数组listItems其中一项，即列表的一个元素
                let listTemplateItem = new ListTemplateItem();
                listTemplateItem.setToken(this.genToken(token));
                listTemplateItem.setImage(picUrl);
                listTemplateItem.setPlainPrimaryText(title);
                listTemplateItem.setPlainSecondaryText(introduction);
                //  把listTemplateItem添加到模版listItems
                listTemplate.addItem(listTemplateItem);
            }
        }
        //  定义RenderTemplate指令
        let template = new RenderTemplate(listTemplate);
        return template;
    }

    /**
     * 音频界面卡片
     *
     * @return {Object}
     */
    getAudioCard() {
        let listTemplate = new ListTemplate1();
        //  设置模板token
        let tokenArr = {
            page: 'audio'
        };
        listTemplate.setToken(this.genToken(tokenArr));
        //  设置模板标题
        listTemplate.setTitle('音频示例');
        //  getaudioCard
        let audioList = this.getPlayList(Bot.TYPE_AUDIO);
        if (audioList instanceof Array && audioList.length > 0) {
            for (let i = 0, len = audioList.length; i < len; i++) {
                let id = audioList[i].id ? audioList[i].id : '';
                let title = audioList[i].title ? audioList[i].title : '';
                let introduction = audioList[i].intro ? audioList[i].intro : '';
                let picUrl = audioList[i].picurl ? audioList[i].picurl : '';
                let token = {
                    page: 'audio',
                    item: id.toString()
                };
                //  设置模版列表数组listItems其中一项，即列表的一个元素
                let listTemplateItem = new ListTemplateItem();
                listTemplateItem.setToken(this.genToken(token));
                listTemplateItem.setImage(picUrl);
                listTemplateItem.setPlainPrimaryText(title);
                listTemplateItem.setPlainSecondaryText(introduction);

                //  把listTemplateItem添加到模版listItems
                listTemplate.addItem(listTemplateItem);
            }
        }
        //  定义RenderTemplate指令
        let template = new RenderTemplate(listTemplate);
        return template;
    }

    /**
     * 获取音频或视频的播放列表
     *
     * @param {string} type 类型
     * @return {Object}
     */
    getPlayList(type) {
        let list = require('./data');

        if (type === 'video') {
            if (list.video) {
                return list.video;
            }
        }
        if (type === 'audio') {
            if (list.audio) {
                return list.audio;
            }
        }
        //  此时应该返回为false；
        return list;
    }

    /**
     * 视频播放
     *
     * @param {string} id id
     * @return {Array}
     */
    getVideoPlay(id) {
        this.setExpectSpeech(false);

        let token = {
            type: 'video',
            id: id
        };

        let video = this.getDetailBy('video', 'id', id);
        let directives = [];
        if (video) {
            let directive = new VideoPlay(video.url, 'REPLACE_ALL');
            directive.setReportIntervalInMs(10000);
            directive.setReportDelayInMs(10000);
            directive.setOffsetInMilliSeconds(0);
            directive.setToken(this.genToken(token));

            let hint = new Hint(['返回视频模板']);
            directives.push(directive);
            directives.push(hint);
        }
        return directives;
    }

    /**
     * 音频播放
     *
     * @param {string} id id
     * @return {Array}
     */
    getAudioPlay(id) {
        this.setExpectSpeech(false);

        let token = {
            type: 'audio',
            id: id
        };

        let audio = this.getDetailBy('audio', 'id', id);
        let directives = [];
        if (audio) {
            let directive = new AudioPlay(audio.url, 'REPLACE_ALL');
            directive.setOffsetInMilliSeconds(0);
            let playerInfo = new PlayerInfo();
            let playpause = new PlayPauseButton();
            let previous = new PreviousButton();

            let next = new NextButoon();
            let showPlayList = new ShowPlayListButton();
            showPlayList.setEnabled(false);
            let controls = [playpause, previous, next, showPlayList];
            playerInfo.setControls(controls);
            playerInfo.setTitle(audio.title);
            playerInfo.setTitleSubtext1(audio.intro);
            directive.setPlayerInfo(playerInfo);
            directive.setToken(this.genToken(token));
            let hint = new Hint(['返回音频模板']);
            directives.push(directive);
            directives.push(hint);
        }
        return directives;
    }

    /**
     * 根据名字或者id来获取音频或者视频
     *
     * @param {string} type "video"|"audio"
     * @param {string} element "title"|"id"
     * @param {string} value  name|id
     * @return {(Array|boolean)}
     */
    getDetailBy(type, element, value) {
        if (type === 'video') {
            let videoList = this.getPlayList(type);
            if (videoList instanceof Array && videoList.length > 0) {
                for (let i = 0, len = videoList.length; i < len; i++) {
                    let temp = videoList[i][element] ? videoList[i][element] : '';
                    if (temp === value) {
                        return videoList[i];
                    }
                }
            }
        }
        if (type === 'audio') {
            let audioList = this.getPlayList(type);
            if (audioList instanceof Array && audioList.length > 0) {
                for (let i = 0, len = audioList.length; i < len; i++) {
                    let temp = audioList[i][element] ? audioList[i][element] : '';
                    if (temp === value) {
                        return audioList[i];
                    }
                }
            }
        }
        return false;
    }

    //  音频开始播放事件
    /**
     * 音频播放事件
     */
    audioPlayStarted() {
        this.waitAnswer();
    }

    //  视频开始播放事件
    /**
     * 视频播放事件
     */
    videoPlayStarted() {
        this.waitAnswer();
    }

    /**
     * 兜底结果
     *
     * @return {Object}
     */
    defaultRes() {
        this.setExpectSpeech(false);
        return {
            outputSpeech: '平台样例演示'
        };
    }

    /**
     * sessionEndedRequest处理
     */
    sessionEndedRequest() {
        this.endDialog();
    }
}

Bot.SERVER_VIDEO = '看看视频';
Bot.SERVER_AUDIO = '听听音频';

Bot.TYPE_VIDEO = 'video';
Bot.TYPE_AUDIO = 'audio';
 //  IMAGE_URL
Bot.IMAGE_VIDEO = 'http://dbp-resource.gz.bcebos.com/zhaojing_demo/1.jpg?authorization=bce-auth-v1%2Fbc881876e7a94578935a868716b6cf69%2F2018-05-29T06%3A43%3A48Z%2F-1%2Fhost%2F57cfa880c01aef30b0b2c258231c81f4f887da9db67f424ca22985ef84a69fd1';
Bot.IMAGE_AUDIO = 'http://dbp-resource.gz.bcebos.com/zhaojing_demo/2.jpg?authorization=bce-auth-v1%2Fbc881876e7a94578935a868716b6cf69%2F2018-05-29T06%3A44%3A15Z%2F-1%2Fhost%2F63b930bae44a50b66940fc04ea617448506f690a86db4f90dc6b9d635e2b8ce3';

Bot.servers = [
    Bot.SERVER_VIDEO,
    Bot.SERVER_AUDIO
];

module.exports = Bot;
