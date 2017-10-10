
var BaseBot = require('./../../index');

class Bot extends BaseBot{
    constructor (postData) {
        super(postData);

        this.addLaunchHandler(()=>{
            return {
                outputSpeech : '欢迎使用!'
            };
        });

        this.addIntentHandler('audio_play_intent', ()=>{
            let directive = new Bot.Directive.AudioPlayer.Play('http://wwww');

            return {
                directives: [directive], 
                outputSpeech: '正在为你播放'
            };
        });

        this.addEventListener('AudioPlayer.PlaybackStarted', (event) => {
            let offset = event.offsetInMilliSeconds; 

            return {
                outputSpeech: '这是一个测试回复，表面bot已经收到了端上返回的AudioPlayer.PlaybackStarted event' + offset
            };
        });
    }
}

module.exports = Bot;
