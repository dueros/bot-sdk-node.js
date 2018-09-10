# 度秘BOT SDK for nodejs
这是一个帮助开发Bot的SDK，我们强烈建议您使用这个SDK开发度秘的Bot。当然，您可以完全自己来处理DuerOS的协议，自己完成session、nlu、result的处理，但是度秘的DuerOS对BOT的协议会经常进行升级，这样会给您带来一些麻烦。这个SDK会与DuerOS的协议一起升级，会最大限度减少对您开发bot的影响。

## 通过bot-sdk可以快速的开发bot
我们的目标是通过使用bot-sdk，可以迅速的开发一个bot，而不必过多去关注DuerOS对Bot的复杂协议。我们提供如下功能：

* 封装了DuerOS的request和response
* 提供了session简化接口
* 提供了nlu简化接口
    * slot 操作
    * nlu理解交互接口（ask）
* 提供了多轮对话开发接口
* 提供了事件监听接口

## 安装、使用BOT SDK进行开发 
度秘BOT SDK采用npm加载 , node.js版本确保在6.10及以上。使用执行如下命令进行安装：
```shell
npm install bot-sdk --save
```

### 下面通过一个例子来完整的说明如何使用js的 bot-sdk 来完成一个Bot技能的开发：
 1.新建文件目录安装相关依赖
```shell
cd /to/your/path
mkdir js-bot-demo
cd js-bot-demo
npm init
npm install express --save
npm install bot-sdk --save
```

 2.创建index.js入口文件
 在js-bot-demo中创建index.js, 内容如下：
```js
const express = require('express');

const Bot = require('./Bot');
let app = express();

// 探活请求
app.head('/', (req, res) => {
    res.sendStatus(204);
});

app.post('/', (req, res) => {
    req.rawBody = '';

    req.setEncoding('utf8');
    req.on('data', chunk => {
        req.rawBody += chunk;
    });

    req.on('end', () => {
        let b = new Bot(JSON.parse(req.rawBody));
        // 开启签名认证
        // 本地运行可以先注释
        // b.initCertificate(req.headers, req.rawBody).enableVerifyRequestSign();

        b.run().then(result => {
            res.send(result);
        });
    });
}).listen(8016);

console.log('listen 8016');
```
index.js是Bot启动的入口文件，这里使用express启动监听8016 web端口。你也可以使用其他HttpServer模块，如koa等。

3. 创建Bot.js
```javascript
const BaseBot = require('bot-sdk');
class Bot extends BaseBot {
    /**
     * postData可以不传，由于DuerOS对bot是post请求，sdk默认自动获取
     */
    constructor(postData) {
            super(postData);

            this.addLaunchHandler(() => {
                return {
                    outputSpeech: '欢迎使用!'
                };
            });

            this.addIntentHandler('personal_income_tax.inquiry', () => {
                let loc = this.getSlot('location');
                let monthlySalary = this.getSlot('monthlysalary');

                if (!monthlySalary) {
                    this.nlu.ask('monthlySalary');
                    //  let card = new Bot.Card.TextCard('你工资多少呢');

                    //  如果有异步操作，可以返回一个promise
                    return new Promise(function (resolve, reject) {
                        resolve({
                            directives: [this.getTemplate1('你工资多少呢')],
                            outputSpeech: '你工资多少呢'
                        });
                    });
                }

                if (!loc) {
                    //  let card = new Bot.Card.TextCard('你在哪呢');
                    this.nlu.ask('location');
                    return {
                        directives: [this.getTemplate1('你在哪呢')],
                        outputSpeech: '你在哪呢'
                    };

                }
            });
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
}
```
Bot.js是技能的逻辑处理模块，`this.addLaunchHandler`是添加技能唤醒的处理函数, 一般是是关于本技能介绍的欢迎语或者关于使用方法的介绍。 `this.addIntentHandler`是添加意图的处理函数，此函数有2个参数，第一个是与dbp平台配置的
意图名称，示例中的`personal_income_tax.inquiry`就是意图名称，第二个参数意图处理逻辑，Bot在进行意图请求时，一般包含相关的槽位信息，槽位是用户意图的关键信息，进行意图的逻辑处理时会使用到，
一般在使用之前会进行是否为空的判断。除此之外，还可以添加客户端的事件监听处理函数`this.addEventListener`, 也包含意图名称和处理逻辑2个参数。所有的逻辑处理函数的返回结果可以是json Object 也可以是Promise包裹的json Object。 示例中的处理逻辑比较简单，只做演示使用，用户可以根据自己的需求进行逻辑的扩展以及模块的封装。

4. 运行Bot
```shell
node index.js
```


`template`展现模版
为了更好的在有屏设备端上展现技能，DuerOS提供了多种展现模板供开发者使用。展现模板分body template和list template两种类型。其中body template由图片和文字组成，list template由一系列list item组成，每个list item由图片和文字组成。不同的展现模板适合不同的场景，开发者可以根据技能展现的需求选择合适的模板。关于模板的详细功能和展现效果可以参考DuerOS模板文档，[模板文档](https://dueros.baidu.com/didp/doc/dueros-bot-platform/dbp-custom/display-template_markdown)

### 文本展现模板
`BodyTemplate1`
```javascript
const BaseBot = require('bot-sdk');
const RenderTemplate = BaseBot.Directive.Display.RenderTemplate;
const BodyTemplate1 = BaseBot.Directive.Display.BodyTemplate1;

let bodyTemplate = new BodyTemplate1();
//设置模版token
bodyTemplate.setToken('token');
//设置模版背景图片
bodyTemplate.setBackGroundImage('https://skillstore.cdn.bcebos.com/icon/100/c709eed1-c07a-be4a-b242-0b0d8b777041.jpg');
//设置模版标题
bodyTemplate.setTitle('托尔斯泰的格言');
//设置模版plain类型的文本
bodyTemplate.setPlainTextContent('拖尔斯泰-理想的书籍是智慧的钥匙'); 
//定义RenderTemplate指令
let directive = new RenderTemplate(bodyTemplate);
return {
    directives: [directive],
    outputSpeech: '这是BodyTemplate1模板'
};
```

### 上图下文模版
`BodyTemplate2`

```javascript
const BaseBot = require('bot-sdk');
const RenderTemplate = BaseBot.Directive.Display.RenderTemplate;
const BodyTemplate2 = BaseBot.Directive.Display.BodyTemplate2;

let bodyTemplate = new BodyTemplate2();
//设置模版token
let bodyTemplate.setToken('token');
//设置模版展示图片
bodyTemplate.setImage('https://skillstore.cdn.bcebos.com/icon/100/c709eed1-c07a-be4a-b242-0b0d8b777041.jpg');
//or 图片设置宽和高
bodyTemplate.setImage('https://skillstore.cdn.bcebos.com/icon/100/c709eed1-c07a-be4a-b242-0b0d8b777041.jpg', 200, 200);
//设置模版背景图片
bodyTemplate.setBackGroundImage('https://skillstore.cdn.bcebos.com/icon/100/c709eed1-c07a-be4a-b242-0b0d8b777041.jpg');
//设置模版标题
bodyTemplate.setTitle('托尔斯泰的格言');
//设置模版plain类型的文本结构
bodyTemplate.setPlainContent('拖尔斯泰-理想的书籍是智慧的钥匙'); 
//定义RenderTemplate指令
let directive = new RenderTemplate(bodyTemplate);
return {
    directives: [directive],
    outputSpeech: '这是BodyTemplate2模板'
};

```

### 左图右文模版
`BodyTemplate3`

```javascript
const BaseBot = require('bot-sdk');
const RenderTemplate = BaseBot.Directive.Display.RenderTemplate;
const BodyTemplate3 = BaseBot.Directive.Display.BodyTemplate3;

let bodyTemplate = new BodyTemplate3();
//设置模版token
bodyTemplate.setToken('token');
//设置模版展示图片
bodyTemplate.setImage('https://skillstore.cdn.bcebos.com/icon/100/c709eed1-c07a-be4a-b242-0b0d8b777041.jpg');
//or 图片设置宽和高
bodyTemplate.setImage('https://skillstore.cdn.bcebos.com/icon/100/c709eed1-c07a-be4a-b242-0b0d8b777041.jpg', '200', '200');

//设置模版背景图片
bodyTemplate.setBackGroundImage('https://skillstore.cdn.bcebos.com/icon/100/c709eed1-c07a-be4a-b242-0b0d8b777041.jpg');
//设置模版标题
bodyTemplate.setTitle('托尔斯泰的格言');
//设置模版plain类型的文本结构
bodyTemplate.setPlainContent('拖尔斯泰-理想的书籍是智慧的钥匙');  
//定义RenderTemplate指令
let directive = new RenderTemplate(bodyTemplate);
return {
    directives: [directive],
    outputSpeech: '这是BodyTemplate3模板'
};

```
### 右图左文
`BodyTemplate4`

```javascript
const BaseBot = require('bot-sdk');
const RenderTemplate = BaseBot.Directive.Display.RenderTemplate;
const BodyTemplate4 = BaseBot.Directive.Display.BodyTemplate4;

let bodyTemplate = new BodyTemplate4();
//设置模版token
bodyTemplate.setToken('token');
//设置模版展示图片
bodyTemplate.setImage('https://skillstore.cdn.bcebos.com/icon/100/c709eed1-c07a-be4a-b242-0b0d8b777041.jpg');
//or 图片设置宽和高
bodyTemplate.setImage('https://skillstore.cdn.bcebos.com/icon/100/c709eed1-c07a-be4a-b242-0b0d8b777041.jpg', '200', '200');

//设置模版背景图片
bodyTemplate.setBackGroundImage('https://skillstore.cdn.bcebos.com/icon/100/c709eed1-c07a-be4a-b242-0b0d8b777041.jpg');
//设置模版标题
bodyTemplate.setTitle('托尔斯泰的格言');
//设置模版plain类型的文本结构
bodyTemplate.setPlainContent('拖尔斯泰-理想的书籍是智慧的钥匙'); 
//定义RenderTemplate指令
let directive = new RenderTemplate(bodyTemplate);
return {
    directives: [directive],
    outputSpeech: '这是BodyTemplate4模板'
};

```
### 图片模板
`BodyTemplate5`

```javascript
const BaseBot = require('bot-sdk');
const RenderTemplate = BaseBot.Directive.Display.RenderTemplate;
const BodyTemplate5 = BaseBot.Directive.Display.BodyTemplate5;

let bodyTemplate = new BodyTemplate5();
//设置模版token
bodyTemplate.setToken('token');
//模版图片数组添加一张图片
bodyTemplate.addImages('https://skillstore.cdn.bcebos.com/icon/100/c709eed1-c07a-be4a-b242-0b0d8b777041.jpg');
//设置模版背景图片
bodyTemplate.setBackGroundImage('https://skillstore.cdn.bcebos.com/icon/100/c709eed1-c07a-be4a-b242-0b0d8b777041.jpg');
/设置模版标题
bodyTemplate.setTitle('托尔斯泰的格言');
//定义RenderTemplate指令
let directive = new RenderTemplate(bodyTemplate);
return {
    directives: [directive],
    outputSpeech: '这是BodyTemplate5模板'
};

```
### 横向列表模板
`ListTemplate1`

```javascript
const BaseBot = require('bot-sdk');
const RenderTemplate = BaseBot.Directive.Display.RenderTemplate;
const ListTemplate1 = BaseBot.Directive.Display.Template.ListTemplate1
const ListTemplateItem = BaseBot.Directive.Display.Template.ListTemplateItem

let listTemplate = new ListTemplate1();
//设置模板token
listTemplate.setToken('token');
//设置模板背景图
listTemplate.setBackGroundImage('https://skillstore.cdn.bcebos.com/icon/100/c709eed1-c07a-be4a-b242-0b0d8b777041.jpg');
//设置模版标题
listTemplate.setTitle('托尔斯泰的格言');

//设置模版列表数组listItems其中一项，即列表的一个元素
let listTemplateItem = new ListTemplateItem();
listTemplateItem.setToken('token');
listTemplateItem.setImage('https://skillstore.cdn.bcebos.com/icon/100/c709eed1-c07a-be4a-b242-0b0d8b777041.jpg');
//or 图片设置宽和高
listTemplateItem.setImage('https://skillstore.cdn.bcebos.com/icon/100/c709eed1-c07a-be4a-b242-0b0d8b777041.jpg', 200, 200);

listTemplateItem.setPlainPrimaryText('一级标题');
listTemplateItem.setPlainSecondaryText('二级标题');

//把listTemplateItem添加到模版listItems
listTemplate.addItem(listTemplateItem);
//定义RenderTemplate指令
let directive = new RenderTemplate(listTemplate);
return {
    directives: [directive],
    outputSpeech: '这是ListTemplate1模板'
};

```
### 纵向列表模板
`ListTemplate2`

```javascript
const BaseBot = require('bot-sdk');
const RenderTemplate = BaseBot.Directive.Display.RenderTemplate;
const ListTemplate1 = BaseBot.Directive.Display.Template.ListTemplate2
const ListTemplateItem = BaseBot.Directive.Display.Template.ListTemplateItem

let listTemplate = new ListTemplate2();
//设置模板token
listTemplate.setToken('token');
//设置模板背景图
listTemplate.setBackGroundImage('https://skillstore.cdn.bcebos.com/icon/100/c709eed1-c07a-be4a-b242-0b0d8b777041.jpg');
//设置模版标题
listTemplate.setTitle('托尔斯泰的格言');

//设置列表数组listItems其中一项，即列表的一个元素
let listTemplateItem = new ListTemplateItem();
listTemplateItem.setToken('token');
listTemplateItem.setImage('https://skillstore.cdn.bcebos.com/icon/100/c709eed1-c07a-be4a-b242-0b0d8b777041.jpg');
listTemplateItem.setPlainPrimaryText('一级标题');  
listTemplateItem.setPlainSecondaryText('二级标题'); 
listTemplateItem.setPlainTertiaryText('三级标题');

//把listTemplateItem添加到模版listItems
listTemplate.addItem(listTemplateItem);
//定义RenderTemplate指令
let directive = new RenderTemplate(listTemplate);
return {
    directives: [directive],
    outputSpeech: '这是ListTemplate2模板'
};

```
### Display.ElementSelected事件
当点击模板列表中的卡片时，DuerOS会向技能发送Display.ElementSelected事件，请求技能进行相应的处理。

```javascript
const BaseBot = require('bot-sdk');
const RenderTemplate = BaseBot.Directive.Display.RenderTemplate;
const BodyTemplate3 = BaseBot.Directive.Display.BodyTemplate1;

this.addEventListener('Display.ElementSelected', function(event) {
    let token = event.token;
    let bodyTemplate = new BodyTemplate1();
    //设置模版token
    bodyTemplate.setToken('token');
    //设置模版背景图片
    bodyTemplate.setBackGroundImage('https://skillstore.cdn.bcebos.com/icon/100/c709eed1-c07a-be4a-b242-0b0d8b777041.jpg');
    //设置模版标题
    bodyTemplate.setTitle('托尔斯泰的格言');
    //设置模版plain类型的文本
    bodyTemplate.setPlainTextContent('拖尔斯泰-理想的书籍是智慧的钥匙'); 
    //定义RenderTemplate指令
    let directive = new RenderTemplate(bodyTemplate);
    return {
        directives: [directive],
        outputSpeech: '点击后展现'
    };
});

```


`card`展现卡片
在有屏设备上，您的技能在回复用户时，可以通过使用卡片展现更生动、丰富的内容。常用的展现卡片类型有文本卡片、标准卡片、标准列表卡片、图片卡片。展现卡片随Response消息一起发送给DuerOS。具体展现卡片的功能和展示效果可以参考DuerOS展现卡片文档:
[卡片文档](https://dueros.baidu.com/didp/doc/dueros-bot-platform/dbp-custom/cards_markdown)
### 文本卡片
`TextCard`
```javascript
const BaseBot = require('bot-sdk');
const TextCard = BaseBot.Card.TextCard;

let card = new TextCard('content');
//or
card = new TextCard();
//设置content
card.setContent('Content');
//设置链接
card.setAnchor('http://www.baidu.com');
card.setAnchor('http://www.baidu.com', 'showtext');
//设置cueWords
card.addCueWords('hint1');
card.addCueWords(['hint1', 'hint2']);

return {
    card: card
};

```

### 标准卡片
`StandardCard`

```javascript
const BaseBot = require('bot-sdk');
const StandardCard = BaseBot.Card.StandardCard;
let card = new StandardCard();

card.setTitle('title');
card.setContent('content');
card.setImage('http://www...');
card.setAnchor('http://www.baidu.com');

return {
    card: card
};

```

### 列表卡片
`ListCard`

```javascript
const BaseBot = require('bot-sdk');
const StandardCard = BaseBot.Card.StandardCard;
const ListCardItem = BaseBot.Card.Item;

let card = new StandardCard();

let item = new ListCardItem();
item.setTitle('title')
item.setContent('content')
item.setUrl('http://www')
item.setImage('http://www.png');

card.addItem(item);
card.addItem(item);

return {
    card: card
};

```

### 列表卡片点击事件处理
`Screen.LinkClicked`
如果卡片或者卡片列表配置了URL地址，当用户点击卡片或者卡片列表时，DuerOS会向技能发送Screen.LinkClicked事件，技能收到该事件后会返回需要展现的内容。
```javascript
const BaseBot = require('bot-sdk');
const StandardCard = BaseBot.Card.StandardCard;

this.addEventListener('Screen.LinkClicked', function(event) {
    let url = event.url;
    let token = event.token;

    card = new StandardCard();
    card.setTitle('title');
    card.setContent('content');

    return {
        card: card
    };
});

```

### 图片卡片
`ImageCard`

```javascript
const BaseBot = require('bot-sdk');
const ImageCard = BaseBot.Card.ImageCard;
let card = new ImageCard();
card.addItem('http://src.image', 'http://thumbnail.image');
```
`directive`返回指令

### 音乐播放指令
`AudioPlayer.Play`

```javascript
const BaseBot = require('bot-sdk');
const Play = BaseBot.Directive.AudioPlayer.Play

let directive = new Play('http://www.music', Play.REPLACE_ALL); 
return {
    directives: [directive],
    outputSpeech: '正在为你播放歌曲'
};
```

### 渲染音频播放器的主界面
`AudioPlayer.Play`指令中增加playerInfo信息
```javascript
const BaseBot = require('bot-sdk');
const Play = BaseBot.Directive.AudioPlayer.Play;
const PlayerInfo = BaseBot.Directive.AudioPlayer.PlayerInfo;
const PlayPauseButton = BaseBot.Directive.AudioPlayer.Control.PlayPauseButton;
const NextButoon = BaseBot.Directive.AudioPlayer.Control.NextButoon;
const PreviousButton = BaseBot.Directive.AudioPlayer.Control.PreviousButton;

//创建音频播放指令
let directive = new Play('http://www.music', Play.REPLACE_ALL);

//音频播放器的主界面
let playerInfo = new PlayerInfo();
//创建暂停按钮
let playpause = new PlayPauseButton();
letr previous = new PreviousButton();
let controls = [
   playpause,
   previous
];

//设置PlayerInfo的Controls内容
playerInfo.setControls(controls);

//也可以使用addControl,增加一个control
playerInfo.addControl(new NextButoon());

playerInfo.setTitle('周杰伦');
playerInfo.setTitleSubtext1('七里香');

//设置Play指令的PlayerInfo
directive.setPlayerInfo(playerInfo);
return {
    directives: [directive],
    outputSpeech: '周杰伦,七里香'
};

```

### 停止端上的播放音频

`AudioPlayer.Stop`

```javascript
const BaseBot = require('bot-sdk');
const Stop = BaseBot.Directive.AudioPlayer.Stop;

let directive = new Stop(); 
return {
    directives: [directive],
    outputSpeech: '已经停止播放'
};
```

### 音频事件处理
Bot可以通过`addEventListener`接口来监听音频播放的时的事件，下面以AudioPlayer.PlaybackNearlyFinished事件举例。
```javascript
const BaseBot = require('bot-sdk');
const Play = BaseBot.Directive.AudioPlayer.Play;
this.addEventListener('AudioPlayer.PlaybackNearlyFinished', function(event) {
    let token = event.token;
    let directive = new Play('http://www.audio', Play.ENQUEUE); 
    return {
        directives: [directive],
    };
});
```

### 视频播放
VideoPlayer视频播放提供了VideoPlayer指令接口和VideoPlayer事件接口。VideoPlayer指令是技能向DuerOS发送的，对视频进行控制的指令，如播放指令、停止播放指令等。DuerOS收到指令后会转化成端上能识别的播放指令，对视频进行相应的控制。VideoPlayer事件是指在视频播放过程中触发一系列事件，DuerOS会将这些事件上报给技能，请求技能进行处理。具体协议内容可以参考视频协议文档，[视频协议文档](https://dueros.baidu.com/didp/doc/dueros-bot-platform/dbp-custom/videoplayer_markdown)

### 视频播放指令
`VideoPlayer.Play`

```javascript
const BaseBot = require('bot-sdk');
const Play = BaseBot.Directive.VideoPlayer.Play;

let directive = new Play('http://www.video', Play.REPLACE_ALL); 
return {
    directives: [directive],
    outputSpeech: '正在为你播放视频'
};
```

### 停止端上播放的视频
`VideoPlayer.Stop`

```javascript
const BaseBot = require('bot-sdk');
const Stop = BaseBot.Directive.VideoPlayer.Stop;
let directive = new Stop(); 
return {
    directives: [directive],
    outputSpeech: '已经停止播放'
};
```

### 视频事件处理
Bot可以通过`addEventListener`接口来监听视频播放的时的事件，下面以VideoPlayer.PlaybackNearlyFinished事件举例。
```javascript
const BaseBot = require('bot-sdk');
const Play = BaseBot.Directive.VideoPlayer.Play;
this.addEventListener('VideoPlayer.PlaybackNearlyFinished', function(event) {
    let token = event.token;
    let offsetInMilliseconds = event.offsetInMilliseconds;
    let directive = new Play('http://www.video', Play.ENQUEUE); 
    return {
        'directives' => [directive],
    };
});
```

### 获取端屏幕展现状态
```javascript
let screenContext = this.request.getScreenContext();
```
### 渲染引导词
使用`Hint`指令渲染引导词
```javascript
const BaseBot = require('bot-sdk');
const Hint = BaseBot.Directive.Display.Hint;
const TextCard = BaseBot.Card.TextCard;

let directive = new Hint(['hint1', 'hint2']);
return {
    card: new TextCard('测试Hint指令'),
    directives: [directive]
};
```

## 返回speech
### outputSpeech
上面例子，除了返回`card`之外，还可以返回outputSpeech，让客户端播报tts：
```javascript
return {
    outputSpeech: '请问你要干啥呢',
    //或者ssml
    outputSpeech; '<speak>请问你要干啥呢</speak>'
};
```
### reprompt
当客户端响应用户后，用户可能会一段时间不说话，如果你返回了reprompt，客户端会提示用户输入
```javascript
return {
    reprompt: 'hello，请问你要干啥呢',
    //或者ssml
    reprompt: '<speak>hello，请问你要干啥呢</speak>'
};
```


## Lanuch & SessionEnd
### bot开始服务
当bot被@（通过bot唤醒名打开时），DuerOS会发送`LanuchRequest`给bot，此时，bot可以返回欢迎语或者操作提示：
```javascript
this.addLaunchHandler(function() {
    return {
        outputSpeech: '<speak>欢迎光临</speak>' 
    };
});

```

### bot 结束服务
当用户表达退出bot时，DuerOS会发送`SessionEndedRequest`：
```javascript
this.addSessionEndedHandler(function(){
    // clear status
    // 清空状态，结束会话。 
    return null; 
});

```

## 使多轮对话管理更加简单
往往用户一次表达的需求，信息不一定完整，比如：'给我创建一个闹钟'，由于query中没有提醒的时间，一个好的bot实现会问用户：'我应该什么时候提醒你呢？'，这时用户说明天上午8点，这样bot就能获取设置时间，可以为用户创建一个闹钟。比如，你可以这样来实现：

```javascript
//提醒意图而且有提醒时间slot
this.addIntentHandler('remind', () => {
    let remindTime = this.getSlot('remind_time');
    if(remindTime) {
        return [/*设置闹钟指令*/];
    }

    //当前面条件不满足（没有提醒时间），会执行这个handler
    this.nlu.ask('remind_time');
    let card = new TextCard('要几点的闹钟呢?');
    return {
        card: card,
        outputSpeech: '要几点的闹钟呢?'
    };
});

//监听events
this.addEventListener('Alerts.SetAlertSucceeded', event => {
    //do sth. eg. set alert status 
    let card = new TextCard('闹钟创建成功');
    return {
        card: card
    };
});

this.addEventListener('AudioPlayer.PlaybackNearlyFinished', event => {
    let offset = event['offsetInMilliSeconds'];
    //todo sth，比如：返回一个播放enqueue
    let directive = new Play('ENQUEUE'); 
    let directive.setUrl('http://wwww');
    return {
        directives: [directive]
    };
});
```
Bot-sdk会根据通过`addIntentHandler`添加handler的顺序来遍历所有的检查条件，寻找条件满足的handler来执行回调，并且当回调函数返回值不是`null`时结束遍历，将这个不为`null`的值返回。

NLU会维护slot的值，merge每次对话解析出的slot，你可以不用自己来处理，DuerOS每次请求Bot时会将merge的slot都下发。`session`内的数据完全由你来维护，你可以用来存储一些状态，比如打车Bot会用来存储当前的订单状态。你可以通过如下接口来使用`slot`和`session`：
```javascript
//slot
getSlot('slot name');
setSlot('slot name', 'slot value');// 如果没有找到对应的slot，会自动新增一个slot

//session
getSessionAttribute('key');
setSessionAttribute('key', 'value');
//or
setSessionAttribute('key.key1', 'value');
getSessionAttribute('key.key1');

//清空session
clearSession();
```

你的Bot可以订阅端上触发的事件，通过接口`addEventListener`实现，比如端上设置闹钟成功后，会下发`SetAlertSucceeded`的事件，Bot通过注册事件处理函数，进行相关的操作。如果不想每个事件都进行处理可以通过接口`addDefaultEventListener`来统一处理，没有通过`addEventListener`订阅的事件。
```javascript
this.addDefaultEventListener(event => {
    this.waitAnswer();  //不结束回话，即shouldEndSession为false。
    this.setExpectSpeech(false);  //端关闭麦克风，不继续监听
});
```

## NLU交互协议
在DuerOS Bot Platform平台，可以通过nlu工具，添加了针对槽位询问的配置，包括：

* 是否必选，对应询问的默认话术
* 是否需要用户确认槽位内容，以及对应的话术
* 是否需要用户在执行动作前，对所有的槽位确认一遍，以及对应的话术

针对填槽多轮，Bot发起对用户收集、确认槽位（如果针对特定槽位有设置确认选项，就进行确认）、确认意图（如果有设置确认选项）的询问，bot-sdk提供了方便的快捷函数支持：

*注意：一次返回的对话directive，只有一个，如果多次设置，只有最后一次的生效*

### ask
多轮对话的bot，会通过询问用户来收集完成任务所需要的槽位信息，询问用户的特点总结为3点，`ask`：问一个特定的槽位。比如，打车服务收到用户的打车意图的时候，发现没有提供目的地，就可以ask `destination`(目的地的槽位名)：
```javascript
//打车意图，但是没有提供目的地
this.addIntentHandler('rent_car.book', () => {
    let endPoint = this.getSlot('destination');
    if(!endPoint) {
        //询问slot: destination
        this.nlu.ask('destination');
    
        let card = new TextCard('打车去哪呢');
        return {
            card: card
        };
    }
});
```

### delegate

将处理交给DuerOS的对话管理模块DM（Dialog Management），按事先配置的顺序，包括对缺失槽位的询问，槽位值的确认（如果设置了槽位需要确认，以及确认的话术）,整个意图的确认（如果设置了意图需要确认，以及确认的话术。比如可以将收集的槽位依次列出，等待用户确认）

```javascript
this.addIntentHandler('your intent name', () => {
    if(!this.request.isDialogStateCompleted()) {
        // 如果使用了delegate 就不再需要使用setConfirmSlot/setConfirmIntent，否则返回的directive会被后set的覆盖。
        return this.nlu.setDelegate();
    }
    //do sth else
});
```

### confirm slot 

主动发起对一个槽位的确认，此时还需同时返回询问的outputSpeach。主动发起的确认，DM不会使用默认配置的话术。

```javascript
this.addIntentHandler('your intent name', () => {
    if(this.getSlot('money') > 10000000000) {
        this.nlu.setConfirmSlot('money');
        return {
            outputSpeech: '你确认充话费：10000000000'
        };
    }
    //do sth else
});
```

### confirm intent

主动发起对一个意图的确认，此时还需同时返回询问的outputSpeach。主动发起的确认，DM不会使用默认配置的话术。

一般当槽位填槽完毕，在进行下一步操作之前，一次性的询问各个槽位，是否符合用户预期。

```javascript
this.addIntentHandler('your intent name', () => {
    let money = this.getSlot('money');
    let phone = this.getSlot('phone');
    if(money && phone) {
        this.nlu.setConfirmIntent();
        return {
            outputSpeech: `你确认充话费：${money}，充值手机：${phone}`,
        };
    }
    //do sth else
});
```
## 数据统计
### BotMonitor是什么
它可以帮助您收集和分析您开发的bot运行中产生的数据，帮助您实时查看应用运行状态，及时发现应用中存在的问题，提升>用户体验。目前，BotMonitor提供应用性能分析、用户行为统计。使用BotMonitor，您可以方便的在自己的DBP平台查看Bot的用户量、会话量、请求量、QPS以及Session的相关统计数据指标。

### bot-sdk如何使用BotMonitor数据统计
在construct中使用如下方法
```javascript
//privateKey为私钥内容,0代表你的Bot在DBP平台debug环境，1或者其他整数代表online环境
this.botMonitor.setEnvironmentInfo(privateKey, 0);
//环境信息配置完成后，你需要打开BotMonitor数据采集上报开关(默认是开启的,你可以根据自己需求打开或者关闭),true代表打开，false代表关闭
this.botMonitor.setMonitorEnabled(true);
```
具体数据统计的说明和使用可以参考BotMonitor文档:
[BotMonitor文档](https://www.npmjs.com/package/bot-monitor-sdk)

## 如何调试
### 本地测试
调试可以在本地进行调试,也可在借助dbp平台的在线调试工具进行调试。本地调试需要构造格式正确的的Request入参，可以参考samples里面的测试脚本的json数据格式，也可以通过dbp平台的
服务部署测试工具获取request的相应结构，参数构造好以后，可以把本地的Bot服务启动起来(node index.js),然后借助postman本地请求进行开发调试。 

### dbp平台工具测试
使用dbp平台的在线调试工具可以清晰的看到request和response，在服务部署配置完成后，就可以在页面上进行调试了，调试过程中可以修改部署代码然后restart更新。


## API 文档

* [Bot](doc/Bot.md)
* [Nlu(Bot.nlu)](doc/Nlu.md)
* [Request(Bot.request)](doc/Request.md)
* [Response(Bot.response)](doc/Response.md)
* [Session(Bot.session)](doc/Session.md)
* [Certificate](doc/Certificate.md)
* 展现卡片
    * [BaseCard(所有卡片基类)](doc/card/BaseCard.md)
    * [TextCard(文本卡片)](doc/card/TextCard.md)
    * [StandardCard(标准卡片)](doc/card/StandardCard.md)
    * [ImageCard(图片卡片)](doc/card/ImageCard.md)
    * [ListCard(列表卡片)](doc/card/ListCard.md)
* 指令
    * [BaseDirective(所有指令基类)](doc/directive/BaseDirective.md)
    * app启动指令
        * [LaunchApp(app启动指令)](doc/directive/AppLuncher/LaunchApp.md)
    * 音频
        * [Play(音频播放指令)](doc/directive/AudioPlayer/Play.md)
        * [Stop(音频停止指令)](doc/directive/AudioPlayer/Stop.md)
        * [PlayerInfo(播放信息类)](doc/directive/AudioPlayer/PlayerInfo.md)
        * 音频控制组件
            * [BaseButton(按钮控件基础类)](doc/directive/AudioPlayer/Control/BaseButton.md)
            * [Button(普通按钮控件)](doc/directive/AudioPlayer/Control/Button.md)
            * [FavoriteButton(喜欢按钮控件)](doc/directive/AudioPlayer/Control/FavoriteButton.md)
            * [LyricButton(歌词按钮控件)](doc/directive/AudioPlayer/Control/LyricButton.md)
            * [NextButton(下一曲按钮控件)](doc/directive/AudioPlayer/Control/NextButton.md)
            * [PlayPauseButton(暂停播放按钮控件)](doc/directive/AudioPlayer/Control/PlayPauseButton.md)
            * [PreviousButton(上一曲按钮控件)](doc/directive/AudioPlayer/Control/PreviousButton.md)
            * [RadioButton(单选按钮控件)](doc/directive/AudioPlayer/Control/RadioButton.md)
            * [RecommendButton(推荐按钮控件)](doc/directive/AudioPlayer/Control/RecommendButton.md)
            * [RefreshButton(刷新按钮控件)](doc/directive/AudioPlayer/Control/RefreshButton.md)
            * [RepeatButton(单曲循环按钮控件)](doc/directive/AudioPlayer/Control/RepeatButton.md)
            * [ShowFavoriteListButton(展现收藏歌曲列表按钮控件)](doc/directive/AudioPlayer/Control/ShowFavoriteListButton.md)
            * [ShowPlayListButton(展现歌曲列表按钮控件)](doc/directive/AudioPlayer/Control/ShowPlayListButton.md)
            * [ThumbsUpDownButton(封面按钮控件)](doc/directive/AudioPlayer/Control/ThumbsUpDownButton.md)
    * 视频
        * [Play(视频播放指令)](doc/directive/VideoPlayer/Play.md)
        * [Stop(视频停止指令)](doc/directive/VideoPlayer/Stop.md)
    * 展现
        * 模版
           * [BaseTemplate(基础模版类)](doc/directive/Display/Template/BaseTemplate.md)
           * [BodyTemplate1(文本展现模板)](doc/directive/Display/Template/BodyTemplate1.md)
           * [BodyTemplate2(上图下文模版)](doc/directive/Display/Template/BaseTemplate2.md)
           * [BodyTemplate3(左图右文模版)](doc/directive/Display/Template/BodyTemplate3.md)
           * [BodyTemplate4(右图左文模版)](doc/directive/Display/Template/BodyTemplate4.md)
           * [BodyTemplate5(图片模板)](doc/directive/Display/Template/BodyTemplate5.md)
           * [ListTemplate(列表模版基础类)](doc/directive/Display/Template/ListTemplate.md)
           * [ListTemplate1(横向列表模板)](doc/directive/Display/Template/ListTemplate1.md)
           * [ListTemplate2(纵向列表模板)](doc/directive/Display/Template/ListTemplate2.md)
           * [ListTemplateItem(模版列表项)](doc/directive/Display/Template/ListTemplateItem.md)
           * [TextImageTemplate(图文模版)](doc/directive/Display/Template/TextImageTemplate.md)
        * 用户提示指令
           * [Hint(用户提示指令)](doc/directive/Display/Hint.md)
        * 模版渲染
           * [RenderTemplate(模版渲染)](doc/directive/Display/RenderTemplate.md)
        * 音频项
           * [AudioItem(音频项)](doc/directive/Display/AudioItem.md)
        * 视频项
           * [VideoItem(视频项)](doc/directive/Display/VideoItem.md)
        * 媒体基础类
           * [BaseMediaListItem(媒体基础类)](doc/directive/Display/BaseMediaListItem.md)
        * 音频列表渲染指令
           * [RenderAudioList(音频列表渲染)](doc/directive/Display/RenderAudioList.md)
        * 视频列表渲染指令
           * [RenderVideoList(视频列表渲染)](doc/directive/Display/RenderVideoList.md)

    * 支付
        * [Charge(支付指令)](doc/directive/Pay/Charge.md)
 

