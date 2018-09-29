const Bot = require('bot-sdk');
const privateKey = require("./rsaKeys.js").privateKey;

//小知识列表
const data = [
    '正式的足球比赛中一只球队最多换三个人。如果一个球员因为一张红牌、或者两张黄牌换一红牌出场，是不可以再递补球员的。',
    '足球比赛双方各派包括守门员在内的11个人上场，总共22人。还有三个裁判在场。',
    '标准为两个半场，分别45分钟，在只用一场赛事决定胜负时,若90分钟后双方打平，则加时15分钟，两个半场。若再平，则点球。',
    '足球比赛中除了守门员可以在己方禁区内利用手部接触足球外，球场上每名球员只可以利用手以外的身体其他部分控制足球。开界外球例外。',
    '足球场大小没有严格的标准，但必须都是长方形，国际比赛标准：长度： 最短100米， 最长110米， 宽度最短64米， 最长75米，所以并不是所有的足球场都一样的大。',
    '点球是对方球员被本方球员在禁区内犯规，绊倒，或者手球之类的。 此时对方球员在点球点罚点球。',
    '角球是对方球员把球踢出了或者碰出了对方半场底线。此时本方球队在对方球队半场底线角旗杆范畴内罚角球。',
    '边线界外球，对方球员将球踢出边线，此时判罚边线界外球。罚球时双脚不能跨越边线，不能跳跃抛球，而且只能用手来抛球。',
    '任意球，为罚球的一种，一般为球员犯规时所判罚的球，分为直接任意球和间接任意球。直接任意球可以直接射门得分，间接任意球不能直接射门得分。',
    '主裁的黄牌放在上衣兜里，红牌放在屁股兜里。所以你看到主裁摸着屁股跑向犯规球员，那么这个球员就要倒霉了。',
    '得了红牌的球员必须离场不得坐在替补席。',
    '边裁各管半场。利用旗语指示越位：助理裁判员应面对场内，若是远端的队员越位，向前斜上举旗。若是中间队员越位，将旗前平举。 若是近端的队员越位，将旗向前斜下举。',
    '队员被判罚越位，裁判员应判由对方队员在越位地点踢间接任意球。如果该队员在对方球门区内越位，那么这个任意球可以在越位时所在球门区内任何地点执行。',
    '越位是指进攻方在传球瞬间当进攻队员较球更接近于对方球门线者时，即为处于越位地位。特殊情况除外',
];

class InquiryBot extends Bot {
    constructor(postData) {
        super(postData);
        this.addLaunchHandler(() => {
			this.waitAnswer();
			let factArr = data;
			let factIndex = Math.floor(Math.random() * factArr.length);
			let randomFact = factArr[factIndex];
			let speechOutput = '足球小知识：' + randomFact + '。请说下一条获取更多足球知识。';
			let card = new Bot.Card.TextCard(randomFact);
			return {
				card: card,
				outputSpeech: speechOutput
			};
        });

		this.addIntentHandler('newfact_intent', () => {
			this.waitAnswer();
			let factArr = data;
			let factIndex = Math.floor(Math.random() * factArr.length);
			let randomFact = factArr[factIndex];
			let speechOutput = randomFact;
			let card = new Bot.Card.TextCard(randomFact);
			return {
				card: card,
				outputSpeech: speechOutput
			};
		});

        this.addSessionEndedHandler(() => {
            this.endSession();
            return {
                outputSpeech: '谢谢使用!'
            };
        });
    }
}

exports.handler = function(event, context, callback) {
    try {
        let b = new InquiryBot(event);
        // 0: debug  1: online
        b.botMonitor.setEnvironmentInfo(privateKey, 0);
        b.run().then(function(result) {
            callback(null, result);
        }).catch(callback);
    } catch (e) {
        callback(e);
    }
}
