/*
* 如果需要使用监控统计功能，请将PUBLIC KEY 复制到DuerOS DBP平台
* 文档参考：https://dueros.baidu.com/didp/doc/dueros-bot-platform/dbp-deploy/authentication_markdown

-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDH8Bp44547W8SbPw+JFmYc566Z
Czw4KVZ4NOiCBSGKDmiIt/AfMG/yGTzK3Kgtnj/BJ4j1ACi0tdclv6v55lId4MDO
C3MfN1tB+yEZ+ySEslqZFG2cUn2EKMLVcf5hlfoXcxFRFGTMO91PRnLLYLppuXsj
8KnPL5QKiu/fL7IZvwIDAQAB
-----END PUBLIC KEY-----

*/
const Bot = require('bot-sdk');
const privateKey = require("./rsaKeys.js").privateKey;


const welcomeStr = '欢迎使用职业推荐!我会问你四个问题，然后根据你的回答像你推荐适合你的职业。现在跟我说开始测试吧！';
const welcomeStr = '抱歉我没有理解你的意思。请跟我说开始测试来重新进行测试吧。';
const defaultBkg = 'http://dbp-resource.gz.bcebos.com/92bb7de1-5d92-dab4-9c39-84c1998470a3/default.jpg?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2018-10-17T14%3A47%3A46Z%2F-1%2F%2Fcf2a0f8ff98250a2a00e592bb42b5f1d2d001e6ff96e24320548e5932615d0b0';
const titleStr = '职业推荐';

const slotsToOptionsMap = {
  '不重要-内向-晕-动物': 20,
  '不重要-内向-晕-人类': 8,
  '不重要-内向-不晕-动物': 1,
  '不重要-内向-不晕-人类': 4,
  '不重要-外向-晕-动物': 10,
  '不重要-外向-晕-人类': 3,
  '不重要-外向-不晕-动物': 11,
  '不重要-外向-不晕-人类': 13,
  '一般-内向-晕-动物': 20,
  '一般-内向-晕-人类': 6,
  '一般-内向-不晕-动物': 19,
  '一般-内向-不晕-人类': 14,
  '一般-外向-晕-动物': 2,
  '一般-外向-晕-人类': 12,
  '一般-外向-不晕-动物': 17,
  '一般-外向-不晕-人类': 16,
  '非常重要-内向-晕-动物': 9,
  '非常重要-内向-晕-人类': 15,
  '非常重要-内向-不晕-动物': 17,
  '非常重要-内向-不晕-人类': 7,
  '非常重要-外向-晕-动物': 18,
  '非常重要-外向-晕-人类': 0,
  '非常重要-外向-不晕-动物': 1,
  '非常重要-外向-不晕-人类': 5,
};

const options = [
  { name: '演员', description: '' },
  { name: '动物防治行业', description: '' },
  { name: '动物收容行业', description: '' },
  { name: '艺术家', description: '' },
  { name: '书记员', description: '' },
  { name: '医生', description: '' },
  { name: '地质学家', description: '' },
  { name: '投资银行', description: '' },
  { name: '守林员', description: '' },
  { name: '海洋生态学家', description: '' },
  { name: '公园博物学家', description: '' },
  { name: '宠物美容师', description: '' },
  { name: '理疗师', description: '' },
  { name: '安保工作', description: '' },
  { name: 'Social Media Engineer', description: '' },
  { name: '软件工程师', description: '' },
  { name: '教师', description: '' },
  { name: '兽医', description: '' },
  { name: '兽医牙科', description: '' },
  { name: '动物园管理员', description: '' },
  { name: '动物学家', description: '' },
];

class InquiryBot extends Bot {
    constructor(postData) {
        super(postData);

        this.addLaunchHandler(() => {
            this.waitAnswer();
            return {
                directives: [this.getTemplate1(titleStr,welcomeStr,defaultBkg)],
                outputSpeech: welcomeStr
            };
        });

        this.addSessionEndedHandler(() => {
            this.endSession();
            return {
				outputSpeech: '多谢使用!'
            };
        });

        this.addIntentHandler('recommendation', () => {
        	this.waitAnswer();
		    if(!this.request.isDialogStateCompleted()) {
		        return this.nlu.setDelegate();
		    }
            let money = this.getSlot('money');
            let personality = this.getSlot('personality');
            let likes = this.getSlot('likes');
            let blood = this.getSlot('blood');
            let key = `${money}-${personality}-${blood}-${likes}`;
            let occupation = options[slotsToOptionsMap[key]];

            let responseStr = `你觉得钱对你来说${money},你是个${personality}的人，你喜欢跟${likes}相处，而且你${blood}血。我们建议你考虑${occupation.name}。你可以跟我说再来一次重新测试。`;

            return {
                directives: [this.getTemplate1(titleStr,responseStr,defaultBkg)],
                outputSpeech: responseStr
            };
        });

         this.addIntentHandler('ai.dueros.common.default_intent', () => {
            this.waitAnswer();
            return {
                directives: [this.getTemplate1(titleStr,helpStr,defaultBkg)],
                outputSpeech: helpStr
            };
        });
    }

    getTemplate1(title,text,url) {
        let bodyTemplate = new Bot.Directive.Display.Template.BodyTemplate1();
        bodyTemplate.setPlainTextContent(text);
        bodyTemplate.setTitle(title);
        bodyTemplate.setBackGroundImage(url);
        let renderTemplate = new Bot.Directive.Display.RenderTemplate(bodyTemplate);
        return renderTemplate;
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