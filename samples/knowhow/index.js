/* 
* 如果需要使用监控统计功能，请将PUBLIC KEY 复制到DuerOS DBP平台
* 文档参考：https://dueros.baidu.com/didp/doc/dueros-bot-platform/dbp-deploy/authentication_markdown


-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC5jzTy4zbullXnNBz/HT4SXVL0
7kMoLLCXPONqnVoaqPD7cKo92SqxS/mZ/a03rKWKtCVirSnnZF6fxod7Y+FdmEvq
0B6tPuU/wU6I4kt23FCsUk1/IyG0oFBPhASQt4aXENnNeJF9cSo+ABQHWHhAiUXo
aTO+bU/mOpe8mX2OIwIDAQAB
-----END PUBLIC KEY-----

*/
const Bot = require('bot-sdk');
const privateKey = require("./rsaKeys.js").privateKey;
const recipeList = {
    '马丁尼': '金酒3/4，味美思1/4，1粒青橄榄。将两种酒倒在加了冰块的调酒杯里，用长匙搅匀，滤掉冰块，倒进冷却过的鸡尾酒杯，可用1片卷曲柠檬皮作点缀。橄榄从小瓶子中拿出来时，先用冰水冲一下浸渍的油。较流行的Martini用干味美思，Vermouth越少，Martini越干。',
    '红粉佳人': '金酒3/4，柠檬汁1/4，石榴糖浆2匙，生蛋黄1个。将酒料和蛋黄加冰摇匀至起泡沫，后滤入鸡尾酒杯，以红樱桃点缀。',
    '彩云追月': '鸡蛋打入碗中，蛋黄不破，加入2杯52度的国窖1573 ，静置片刻，彩云追月来了，搅拌均匀即可。',
    '玛格丽特': '龙舌兰2/3，君度香橙1/3，少许柠檬汁，盐适量，细碎冰3/4杯。',
    '长岛冰茶': '金酒1份，伏特加1份，朗姆酒1份，龙舌兰1份，君度香橙2/3份，柠檬汁2份，可乐3份，1匙糖浆，1片柠檬片。将材料倒入装满细碎冰的大果汁杯中搅匀，用柠檬做装饰，最后附上吸管。',
    '螺丝钻': '伏特加1份，鲜橙汁3份。将碎冰置于杯中，注入酒和橙汁，搅匀，以鲜橙点缀。',
    '血腥玛丽': '伏特加1份，番茄汁3份，辣油1/2茶匙，盐1/2匙，黑胡椒1/2匙。在老式杯中放入两块冰块，按顺序在杯中加入伏特加和番茄汁，然后再撒上辣油、精盐、黑胡椒等，最后放入一片柠檬片，用芹菜秆搅匀即可。',
    '黑色俄罗斯': '伏特加2份，咖啡利娇1份。将伏特加倒入加有冰块的杯中，倒入咖啡利娇酒，轻轻搅匀。',
};

class InquiryBot extends Bot {
    constructor(postData) {
        super(postData);

        this.addLaunchHandler(() => {
            this.waitAnswer();
            return {
                outputSpeech: '欢迎使用鸡尾酒大全!我知道很多鸡尾酒的做法，你可以对我说：血腥玛丽怎么做？'
            };
        });

        this.addSessionEndedHandler(() => {
            this.endSession();
            return {
                outputSpeech: '多谢使用鸡尾酒大全!'
            };
        });

        this.addIntentHandler('inquiry', () => {
            this.waitAnswer();
            let cocktail = this.getSlot('cocktail');

            if (!cocktail) {
                let card = new Bot.Card.TextCard('你要了解哪种鸡尾酒？你可以对我说：血腥玛丽怎么做？');
                this.nlu.ask('cocktail');
                return {
                    card: card,
                    outputSpeech: '你要了解哪种鸡尾酒？你可以对我说：血腥玛丽怎么做？'
                };
            }

            let recipe = recipeList[cocktail];
            if (recipe){
                return {
                    outputSpeech: recipe
                };
            }else{
                return {
                    outputSpeech: '我还不知道怎么做' + cocktail + '。换一个试试吧。'
                };
            }
        });

        /*
        * 获取没有被inquiry意图解析的用户输入，并进行相关处理
        * 缺省意图 https://developer.dueros.baidu.com/didp/doc/dueros-bot-platform/dbp-nlu/defaultIntent_markdown
        */
        this.addIntentHandler('ai.dueros.common.default_intent', () => {
            this.waitAnswer();
            let cocktail = this.request.getQuery();

            if (!cocktail) {
                let card = new Bot.Card.TextCard('你要了解哪种鸡尾酒？你可以对我说：血腥玛丽怎么做？');
                this.nlu.ask('cocktail');
                return {
                    card: card,
                    outputSpeech: '你要了解哪种鸡尾酒？你可以对我说：血腥玛丽怎么做？'
                };
            }

            let recipe = recipeList[cocktail];
            if (recipe){
                return {
                    outputSpeech: recipe
                };
            }else{
                return {
                    outputSpeech: '我还不知道怎么做' + cocktail + '。换一个试试吧。'
                };
            }
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
