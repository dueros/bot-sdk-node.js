const Bot = require('bot-sdk');
const privateKey = require("./rsaKeys.js").privateKey;
const questions = require('./questions');


//定义一轮问答中的问题数量
const GAME_LENGTH = 5;
//定义每个问题的答案数量
const ANSWER_COUNT = 3;

class InquiryBot extends Bot {
    constructor(postData) {
        super(postData);
        this.addLaunchHandler(() => {
        	this.waitAnswer();
			let speechOutput = '欢迎来到古诗问答。我将念两句古诗并给你四个诗人的名字。需要你告诉我哪一个是正确的作者。';
			//初始化一轮中的问题列表和第一题的话术
			let repromptText = this.startNewGame();
			let card = new Bot.Card.TextCard(repromptText);
			return {
				card: card,
				outputSpeech: speechOutput + repromptText
			};
        });

        this.addSessionEndedHandler(() => {
            this.endSession();
            return {
                outputSpeech: '谢谢使用!'
            };
        });

        this.addIntentHandler('answer_intent', () => {
            this.waitAnswer();
            //确保获取到了用户的回答
            let theAnswer = this.getSlot('theAnswer');
            if (!theAnswer) {
                this.nlu.ask('theAnswer');
                return {
                    outputSpeech: '您的答案是哪个？'
                };
            }
            //获取session中相关信息
            let questionsList = this.getSessionAttribute('questionsList');
            let score = this.getSessionAttribute('score');
            let currentQuestionIndex = this.getSessionAttribute('currentQuestionIndex');
            let correctAnswerIndex = this.getSessionAttribute('correctAnswerIndex');
            let gameQuestions = this.getSessionAttribute('gameQuestions');
            let correctAnswerText = this.getSessionAttribute('correctAnswerText');
            let speechOutput = '';
            if (theAnswer == correctAnswerIndex){
            	score += 1;
            	speechOutput = '回答正确，得一分。目前得分：' + score + '分。';
            }else{
            	speechOutput = '很遗憾，回答错误。正确答案是' + correctAnswerText + '.目前得分：' + score + '分。';
            }
            //到达最后一题，用户选择重新开始一轮或者退出技能
            if (currentQuestionIndex == GAME_LENGTH - 1){
            	speechOutput += '已经是最后一题了。您可以说重新开始来继续答题，或者说退出来退出技能。'
            	return {
                	outputSpeech: speechOutput
            	};
            }
            //获取下一题信息
			currentQuestionIndex += 1;
			correctAnswerIndex = Math.floor(Math.random() * (ANSWER_COUNT));
			let spokenQuestion = Object.keys(questionsList[gameQuestions[currentQuestionIndex]])[0];
			let roundAnswers = this.populateRoundAnswers(gameQuestions, currentQuestionIndex,correctAnswerIndex,questionsList);
			let questionIndexForSpeech = currentQuestionIndex + 1;
			let repromptText = '第' + questionIndexForSpeech + '题：\n' + spokenQuestion + '\n';
			for (let i = 0; i < ANSWER_COUNT; i += 1) {
				repromptText += `${i + 1}. ${roundAnswers[i]}. `;
			}
			speechOutput += repromptText;
			let currentQuestion = questionsList[gameQuestions[currentQuestionIndex]];
			this.setSessionAttribute('speechOutput',speechOutput);
			this.setSessionAttribute('currentQuestionIndex',currentQuestionIndex);
			this.setSessionAttribute('correctAnswerIndex',correctAnswerIndex + 1);
			this.setSessionAttribute('gameQuestions',gameQuestions);
			this.setSessionAttribute('questionsList',questionsList);
			this.setSessionAttribute('score',score);
			this.setSessionAttribute('correctAnswerText',currentQuestion[Object.keys(currentQuestion)[0]][0]);
			let card = new Bot.Card.TextCard(repromptText);
			return {
				card: card,
				outputSpeech: speechOutput
			};
        });
        
        //重新开始答题，得分清零
        this.addIntentHandler('newGame_intent', () => {
        	this.waitAnswer();
        	//初始化一轮中的问题列表和第一题的话术
			let repromptText =  this.startNewGame();
			let card = new Bot.Card.TextCard(repromptText);
			return {
				card: card,
				outputSpeech: '好的，重新开始。' + repromptText
			};
        });
    }
    
    
    /**
     *  获取新一轮问题列表和相应的信息，并将信息存入session中
     *
     *  @return 新一轮答题话术
     */
    startNewGame() {
		let questionsList = questions.QUESTIONS;
		let gameQuestions = this.populateGameQuestions(questionsList);
		let correctAnswerIndex = Math.floor(Math.random() * (ANSWER_COUNT));
		console.log(correctAnswerIndex);
		let roundAnswers = this.populateRoundAnswers(gameQuestions, 0,correctAnswerIndex,questionsList);
		let currentQuestionIndex = 0;
		let spokenQuestion = Object.keys(questionsList[gameQuestions[currentQuestionIndex]])[0];
		let repromptText = '第1题：\n' + spokenQuestion + '\n';
		for (let i = 0; i < ANSWER_COUNT; i += 1) {
			repromptText += `${i + 1}. ${roundAnswers[i]}. `;
		}

		let currentQuestion = questionsList[gameQuestions[currentQuestionIndex]];

		this.setSessionAttribute('currentQuestionIndex',currentQuestionIndex);
		this.setSessionAttribute('correctAnswerIndex',correctAnswerIndex + 1);
		this.setSessionAttribute('gameQuestions',gameQuestions);
		this.setSessionAttribute('questionsList',questionsList);
		this.setSessionAttribute('score',0);
		this.setSessionAttribute('correctAnswerText',currentQuestion[Object.keys(currentQuestion)[0]][0]);
		return repromptText;
    }
    
    /**
     *  从问题列表中随机抽取问题。问题个数由变量GAME_LENGTH定义
     *  @param {list} translatedQuestions 所有问题列表
     *  @return 问题id列表
     */
	populateGameQuestions(translatedQuestions) {
	  let gameQuestions = [];
	  let indexList = [];
	  let index = translatedQuestions.length;
	  if (GAME_LENGTH > index) {
		throw new Error('Invalid Game Length.');
	  }

	  for (let i = 0; i < translatedQuestions.length; i += 1) {
		indexList.push(i);
	  }

	  for (let j = 0; j < GAME_LENGTH; j += 1) {
		let rand = Math.floor(Math.random() * index);
		index -= 1;

		let temp = indexList[index];
		indexList[index] = indexList[rand];
		indexList[rand] = temp;
		gameQuestions.push(indexList[index]);
	  }
	  return gameQuestions;
	}
	
    /**
     *  从问题列表中随机抽取问题。问题个数由变量GAME_LENGTH定义
     *  @param {list} gameQuestionIndexes 一轮问答中问题id列表
     *  @param {int} currentQuestionIndex 当前问题Index
     *  @param {int} correctAnswerTargetLocation 当前问题答案Index
     *  @param {list} translatedQuestions 所有问题列表
     *  @return 当前问题答案选项列表
     */
	populateRoundAnswers(gameQuestionIndexes,currentQuestionIndex,correctAnswerTargetLocation,translatedQuestions) {
	  const answers = [];
	  const translatedQuestion = translatedQuestions[gameQuestionIndexes[currentQuestionIndex]];
	  const answersCopy = translatedQuestion[Object.keys(translatedQuestion)[0]].slice();
	  let index = answersCopy.length;

	  if (index < ANSWER_COUNT) {
		throw new Error('Not enough answers for question.');
	  }

	  // 打乱当前问题答案列表顺序
	  for (let j = 1; j < answersCopy.length; j += 1) {
		const rand = Math.floor(Math.random() * (index - 1)) + 1;
		index -= 1;

		const swapTemp1 = answersCopy[index];
		answersCopy[index] = answersCopy[rand];
		answersCopy[rand] = swapTemp1;
	  }

	  // 将正确答案放置到correctAnswerTargetLocation的位置
	  for (let i = 0; i < ANSWER_COUNT; i += 1) {
		answers[i] = answersCopy[i];
	  }
	  const swapTemp2 = answers[0];
	  answers[0] = answers[correctAnswerTargetLocation];
	  answers[correctAnswerTargetLocation] = swapTemp2;
	  return answers;
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
