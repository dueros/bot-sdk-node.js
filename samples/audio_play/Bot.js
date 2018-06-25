/**
 * @file 意图处理类
 * @author yelvye@baidu.com
 */

const BaseBot = require('./lib/Bot');
let musics = require('./musics');

class Bot extends BaseBot {

    /**
     * 构造函数
     *
     * @param {Object} postData bot请求入参
     */
    constructor(postData) {
        super(postData);
        this.curIndex = 0;
        this.addLaunchHandler(() => {
            this.waitAnswer();
            return {
                directives: [this.getTemplate2(musics[this.curIndex])],
                outputSpeech: '欢迎使用音乐播放器!'
            };
        });

        this.addIntentHandler('audio_play_intent', () => {
            this.waitAnswer();
            return {
                directives: [this.getDirective(0), this.getTemplate2(musics[this.curIndex])],
                outputSpeech: '正在为你播放'
            };
        });
        //   system pause intent
        this.addIntentHandler('ai.dueros.common.pause_intent', () => {
            let directive = new Bot.Directive.AudioPlayer.Stop();
            this.waitAnswer();
            return {
                directives: [directive, this.getTemplate2(musics[this.curIndex])],
                outputSpeech: '已经暂停播放'
            };
        });
        //   system continue intent
        this.addIntentHandler('ai.dueros.common.continue_intent', () => {
            let token = this.getSessionAttribute('token');
            let offsetInMilliSeconds = this.getSessionAttribute('offsetInMilliSeconds');
            this.updateCurrentSingIndex(token);
            this.waitAnswer();
            return {
                directives: [this.getDirective(offsetInMilliSeconds), this.getTemplate2(musics[this.curIndex])],
                outputSpeech: `继续播放${musics[this.curIndex].name}`
            };
        });
        //  system next intent
        this.addIntentHandler('ai.dueros.common.next_intent', () => {
            let token = this.getSessionAttribute('token');
            this.updateNextSingIndex(token);
            this.waitAnswer();
            return {
                shouldEndSession: false,
                directives: [this.getDirective(0), this.getTemplate2(musics[this.curIndex])],
                outputSpeech: `播放下一首：${musics[this.curIndex].name}...`
            };
        });

        //   system previous intent
        this.addIntentHandler('ai.dueros.common.previous_intent', () => {
            let token = this.getSessionAttribute('token');
            this.updatePreviousSingIndex(token);
            this.waitAnswer();
            //  let card = new Bot.Card.TextCard(`card: palying ${musics[this.curIndex].name} now.....`);
            return {
                shouldEndSession: false,
                directives: [this.getDirective(0), this.getTemplate2(musics[this.curIndex])],
                outputSpeech: `播放上一首：${musics[this.curIndex].name}...`
            };
        });

        //   AudioPlayer.PlaybackStarted
        this.addEventListener('AudioPlayer.PlaybackStarted', event => {
            this.waitAnswer();
            this.setSessionAttr(event);
        });

        //   client event PlaybackStopped
        this.addEventListener('AudioPlayer.PlaybackStopped', event => {
            console.log(`==AudioPlayer.PlaybackStopped==${JSON.stringify(event)}===`);
            this.waitAnswer();
            this.setSessionAttr(event);
        });
        //   client event PlaybackNearlyFinished
        this.addEventListener('AudioPlayer.PlaybackNearlyFinished', event => {
            this.waitAnswer();
        });

        this.addSessionEndedHandler(() => {
            let directive = new Bot.Directive.AudioPlayer.Stop();
            return {
                directives: [directive, this.getTemplate2('退出音乐播放，欢迎下次再来！')],
                outputSpeech: '退出音乐播放，欢迎下次再来！'
            };
        });
    }

    /**
     *  更新下一曲的index
     *
     *  @param {string} token 歌曲的id
     */
    updateNextSingIndex(token) {
        musics.map(function (music, i) {
            if (music.token === token) {
                this.curIndex = parseInt(i, 10) + 1 <= musics.length - 1 ? parseInt(i, 10) + 1 : musics.length - 1;
            }
            return null;
        });
    }

    /**
     *  更新上一首的index
     *
     *  @param {string} token 歌曲的id
     */
    updatePreviousSingIndex(token) {
        musics.map(function (music, i) {
            if (music.token === token) {
                this.curIndex = parseInt(i, 10) - 1 >= 0 ? parseInt(i, 10) - 1 : 0;
            }
            return null;
        });
    }

    /**
     *  更新当前正在播放歌曲的index
     *
     *  @param {string} token 歌曲的id
     */
    updateCurrentSingIndex(token) {
        musics.map(function (music, i) {
            if (music.token === token) {
                this.curIndex = parseInt(i, 10);
            }
            return null;
        });
    }

    /**
     *  获取歌曲播放指令
     *
     *  @param {number} offset 歌曲播放的进度
     *  @return {Bot.Directive.AudioPlayer.Play} Play指令
     */
    getDirective(offset = 0) {
        let directive = new Bot.Directive.AudioPlayer.Play(musics[this.curIndex].url);
        directive.setToken(musics[this.curIndex].token);
        directive.setOffsetInMilliSeconds(offset);
        return directive;
    }

    /**
     *  获取上图下文模版
     *
     *  @param {Object} music 歌曲详情
     *  @return {RenderTemplate} 渲染模版
     */
    getTemplate2(music) {
        let bodyTemplate = new BaseBot.Directive.Display.Template.BodyTemplate2();
        bodyTemplate.setToken(music.token);
        bodyTemplate.setBackGroundImage(Bot.DEFAULT_IMAGE);
        bodyTemplate.setTitle(music.singer);
        bodyTemplate.setPlainContent(music.name);
        let renderTemplate = new BaseBot.Directive.Display.RenderTemplate(bodyTemplate);
        return renderTemplate;
    }

    /**
     *  获取文本展现模板
     *
     *  @param {string} text 歌曲详情
     *  @return {RenderTemplate} 渲染模版
     */
    getTemplate1(text) {
        let bodyTemplate = new BaseBot.Directive.Display.Template.BodyTemplate1();
        bodyTemplate.setPlainTextContent(text);
        let renderTemplate = new BaseBot.Directive.Display.RenderTemplate(bodyTemplate);
        return renderTemplate;
    }

    /**
     *  设置会话属性
     *
     *  @param {Object} event 客户端上报的事件，包含歌曲token和对应播放进度等信息
     */
    setSessionAttr(event) {
        this.setSessionAttribute('token', event.token);
        this.setSessionAttribute('offsetInMilliSeconds', event.offsetInMilliSeconds);
    }
}
Bot.DEFAULT_IMAGE = 'https://skillstore.cdn.bcebos.com/icon/100/c709eed1-c07a-be4a-b242-0b0d8b777041.jpg';

module.exports = Bot;
