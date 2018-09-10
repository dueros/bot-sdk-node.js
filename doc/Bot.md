<a name="Bot"></a>

## Bot
Bot基类. 请继承此类

**Kind**: global class  

* [Bot](#Bot)
    * [new Bot(postData)](#new_Bot_new)
    * _instance_
        * [.addLaunchHandler(handler)](#Bot+addLaunchHandler) ⇒ [<code>Bot</code>](#Bot)
        * [.addSessionEndedHandler(handler)](#Bot+addSessionEndedHandler) ⇒ [<code>Bot</code>](#Bot)
        * [.addIntentHandler(intent, handler)](#Bot+addIntentHandler) ⇒ [<code>Bot</code>](#Bot)
        * [.addEventListener(event, handler)](#Bot+addEventListener) ⇒ [<code>Bot</code>](#Bot)
        * [.addDefaultEventListener(handler)](#Bot+addDefaultEventListener) ⇒ [<code>Bot</code>](#Bot)
        * [.initCertificate(headers, body)](#Bot+initCertificate) ⇒ <code>Certificate</code>
        * [.getIntentName()](#Bot+getIntentName) ⇒ <code>string</code> \| <code>null</code>
        * [.getSessionAttribute(field, defaultValue)](#Bot+getSessionAttribute) ⇒ <code>Mixied</code>
        * [.setSessionAttribute(field, value, defaultValue)](#Bot+setSessionAttribute) ⇒ <code>null</code>
        * [.clearSessionAttribute()](#Bot+clearSessionAttribute) ⇒ <code>null</code>
        * [.getSlot(field, index)](#Bot+getSlot) ⇒ <code>string</code>
        * [.setSlot(field, value, index)](#Bot+setSlot) ⇒ <code>null</code>
        * [.waitAnswer()](#Bot+waitAnswer) ⇒ <code>null</code>
        * [.endSession()](#Bot+endSession)
        * [.setPrivateKey(filename)](#Bot+setPrivateKey) ⇒ <code>Promise</code>
        * [.setExpectSpeech(expectSpeech)](#Bot+setExpectSpeech)
        * [.endDialog()](#Bot+endDialog)
        * [.isSupportDisplay()](#Bot+isSupportDisplay) ⇒ <code>boolean</code>
        * [.isSupportAudioPlayer()](#Bot+isSupportAudioPlayer) ⇒ <code>boolean</code>
        * [.isSupportVideoPlayer()](#Bot+isSupportVideoPlayer) ⇒ <code>boolean</code>
        * [.run(build)](#Bot+run) ⇒ <code>Promise</code>
    * _static_
        * [.Card](#Bot.Card) : <code>object</code>
            * [.TextCard](#Bot.Card.TextCard)
            * [.ImageCard](#Bot.Card.ImageCard)
            * [.StandardCard](#Bot.Card.StandardCard)
            * [.ListCard](#Bot.Card.ListCard)
            * [.LinkAccountCard](#Bot.Card.LinkAccountCard)
        * [.Directive](#Bot.Directive) : <code>object</code>
            * [.AudioPlayer](#Bot.Directive.AudioPlayer) : <code>object</code>
                * [.Play](#Bot.Directive.AudioPlayer.Play)
                * [.Stop](#Bot.Directive.AudioPlayer.Stop)
                * [.PlayerInfo](#Bot.Directive.AudioPlayer.PlayerInfo)
                * [.Control](#Bot.Directive.AudioPlayer.Control) : <code>object</code>
                    * [.FavoriteButton](#Bot.Directive.AudioPlayer.Control.FavoriteButton)
                    * [.LyricButton](#Bot.Directive.AudioPlayer.Control.LyricButton)
                    * [.NextButton](#Bot.Directive.AudioPlayer.Control.NextButton)
                    * [.PlayPauseButton](#Bot.Directive.AudioPlayer.Control.PlayPauseButton)
                    * [.PreviousButton](#Bot.Directive.AudioPlayer.Control.PreviousButton)
                    * [.RadioButton](#Bot.Directive.AudioPlayer.Control.RadioButton)
                    * [.RecommendButton](#Bot.Directive.AudioPlayer.Control.RecommendButton)
                    * [.RefreshButton](#Bot.Directive.AudioPlayer.Control.RefreshButton)
                    * [.RepeatButton](#Bot.Directive.AudioPlayer.Control.RepeatButton)
                    * [.ShowFavoriteListButton](#Bot.Directive.AudioPlayer.Control.ShowFavoriteListButton)
                    * [.ShowPlayListButton](#Bot.Directive.AudioPlayer.Control.ShowPlayListButton)
                    * [.ThumbsUpDownButton](#Bot.Directive.AudioPlayer.Control.ThumbsUpDownButton)
            * [.VideoPlayer](#Bot.Directive.VideoPlayer) : <code>object</code>
                * [.Play](#Bot.Directive.VideoPlayer.Play)
                * [.Stop](#Bot.Directive.VideoPlayer.Stop)
            * [.Display](#Bot.Directive.Display) : <code>object</code>
                * [.Hint](#Bot.Directive.Display.Hint)
                * [.RenderTemplate](#Bot.Directive.Display.RenderTemplate)
                * [.RenderAudioList](#Bot.Directive.Display.RenderAudioList)
                * [.RenderVideoList](#Bot.Directive.Display.RenderVideoList)
                * [.Template](#Bot.Directive.Display.Template) : <code>object</code>
                    * [.BodyTemplate1](#Bot.Directive.Display.Template.BodyTemplate1)
                    * [.BodyTemplate2](#Bot.Directive.Display.Template.BodyTemplate2)
                    * [.BodyTemplate3](#Bot.Directive.Display.Template.BodyTemplate3)
                    * [.BodyTemplate4](#Bot.Directive.Display.Template.BodyTemplate4)
                    * [.BodyTemplate5](#Bot.Directive.Display.Template.BodyTemplate5)
                    * [.ListTemplate1](#Bot.Directive.Display.Template.ListTemplate1)
                    * [.ListTemplate2](#Bot.Directive.Display.Template.ListTemplate2)
                    * [.ListTemplateItem](#Bot.Directive.Display.Template.ListTemplateItem)
            * [.Pay](#Bot.Directive.Pay) : <code>object</code>
                * [.Charge](#Bot.Directive.Pay.Charge)

<a name="new_Bot_new"></a>

### new Bot(postData)
构造函数，以及DuerOS请求bot的request为参数，request协议参考[http://TODO]


| Param | Type | Description |
| --- | --- | --- |
| postData | <code>Object</code> | DuerOS请求body |

**Example**  
```javascript
const BaseBot = require('bot-sdk');
class MyBot extends BaseBot {
    constructor(postData) {
         super(postData);
         //...
    }
}
```
<a name="Bot+addLaunchHandler"></a>

### bot.addLaunchHandler(handler) ⇒ [<code>Bot</code>](#Bot)
对SessionEnded添加处理函数

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**Returns**: [<code>Bot</code>](#Bot) - 返回自己  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| handler | <code>function</code> | 意图处理函数。返回值非null，将作为bot的response返回DuerOS                        函数返回值参考Response.build() 的输入参数 |

**Example**  
```javascript
this.addLaunchHandler(()=>{
     // 进入bot，提示用户如何操作
});
```
<a name="Bot+addSessionEndedHandler"></a>

### bot.addSessionEndedHandler(handler) ⇒ [<code>Bot</code>](#Bot)
对SessionEnded添加处理函数

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**Returns**: [<code>Bot</code>](#Bot) - 返回自己  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| handler | <code>function</code> | 意图处理函数。返回值非null，将作为bot的response返回DuerOS                        函数返回值参考Response.build() 的输入参数 |

**Example**  
```javascript
this.addSessionEndedHandler(()=>{
    // todo some clear job
    // this.clearSession()
});
```
<a name="Bot+addIntentHandler"></a>

### bot.addIntentHandler(intent, handler) ⇒ [<code>Bot</code>](#Bot)
对一个intent添加处理函数

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**Returns**: [<code>Bot</code>](#Bot) - 返回自己  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| intent | <code>string</code> | 意图名：'intentName' |
| handler | <code>function</code> | 意图处理函数。返回值非null，将作为bot的response返回DuerOS                        函数返回值参考Response.build() 的输入参数 |

**Example**  
```javascript
this.addIntentHandler('intentName', ()=>{
    //this.getSlot('slotName');
});
```
<a name="Bot+addEventListener"></a>

### bot.addEventListener(event, handler) ⇒ [<code>Bot</code>](#Bot)
对一个事件添加处理函数。比如设备端反馈的音频播放开始事件

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**Returns**: [<code>Bot</code>](#Bot) - 返回自己  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>string</code> | 事件名 |
| handler | <code>function</code> | 事件处理函数。返回值非null，将作为bot的response返回DuerOS                        函数返回值参考Response.build() 的输入参数 |

**Example**  
```javascript
this.addEventListener('Audio', (event)=>{
    // event 为事件数据 
    // 具体数据结构参考[TODO]
});
```
<a name="Bot+addDefaultEventListener"></a>

### bot.addDefaultEventListener(handler) ⇒ [<code>Bot</code>](#Bot)
默认兜底事件的处理回调。

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**Returns**: [<code>Bot</code>](#Bot) - 返回自己  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| handler | <code>function</code> | 处理函数，传入参数为事件的request，返回值做完response给DuerOS |

<a name="Bot+initCertificate"></a>

### bot.initCertificate(headers, body) ⇒ <code>Certificate</code>
初始化认证校验

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**Returns**: <code>Certificate</code> - Certificate实例  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| headers | <code>Object</code> | http请求的header |
| body | <code>string</code> | 请求体 |

**Example**  
```javascript
this.initCertificate(
     {signature: '###', signaturecerturl: ''},
     '{"version":""}'
 );
```
<a name="Bot+getIntentName"></a>

### bot.getIntentName() ⇒ <code>string</code> \| <code>null</code>
获取DuerOS请求中的意图名

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**Access**: public  
<a name="Bot+getSessionAttribute"></a>

### bot.getSessionAttribute(field, defaultValue) ⇒ <code>Mixied</code>
获取session的一个字段对应的值

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| field | <code>string</code> | <code>null</code> | 字段名 |
| defaultValue | <code>Mixed</code> | <code></code> | 默认值  当此字段没有值时，返回defaultValue |

<a name="Bot+setSessionAttribute"></a>

### bot.setSessionAttribute(field, value, defaultValue) ⇒ <code>null</code>
设置session的一个字段的值

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| field | <code>string</code> |  | 字段名 |
| value | <code>Mixed</code> |  | 字段对应的值 |
| defaultValue | <code>Mixed</code> | <code></code> | 默认值  当value为空时，使用defaultValue |

<a name="Bot+clearSessionAttribute"></a>

### bot.clearSessionAttribute() ⇒ <code>null</code>
清空session的所有字段

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**Access**: public  
<a name="Bot+getSlot"></a>

### bot.getSlot(field, index) ⇒ <code>string</code>
根据槽位名获取槽位对应的值

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| field | <code>string</code> |  | 槽位名 |
| index | <code>Integer</code> | <code>0</code> | 第几个intent，默认第一个 |

<a name="Bot+setSlot"></a>

### bot.setSlot(field, value, index) ⇒ <code>null</code>
设置槽位的值。如果该槽位不存在，新增一个槽位名，并设置对于的值

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| field | <code>string</code> |  | 槽位名 |
| value | <code>string</code> |  | 值 |
| index | <code>Integer</code> | <code>0</code> | 第几个intent，默认第一个 |

<a name="Bot+waitAnswer"></a>

### bot.waitAnswer() ⇒ <code>null</code>
设置多轮继续，等待用户回复

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**Access**: public  
<a name="Bot+endSession"></a>

### bot.endSession()
设置多轮结束，此时bot结束多轮对话

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**Access**: public  
<a name="Bot+setPrivateKey"></a>

### bot.setPrivateKey(filename) ⇒ <code>Promise</code>
设置私钥

**Kind**: instance method of [<code>Bot</code>](#Bot)  

| Param | Type | Description |
| --- | --- | --- |
| filename | <code>string</code> | 私钥路径 |

<a name="Bot+setExpectSpeech"></a>

### bot.setExpectSpeech(expectSpeech)
通过控制expectSpeech来控制麦克风开

**Kind**: instance method of [<code>Bot</code>](#Bot)  

| Param | Type | Description |
| --- | --- | --- |
| expectSpeech | <code>boolean</code> | 是否开启麦克风 |

<a name="Bot+endDialog"></a>

### bot.endDialog()
告诉DuerOS，需要结束对话

**Kind**: instance method of [<code>Bot</code>](#Bot)  
<a name="Bot+isSupportDisplay"></a>

### bot.isSupportDisplay() ⇒ <code>boolean</code>
检测Display的数据是否存在

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**Access**: public  
<a name="Bot+isSupportAudioPlayer"></a>

### bot.isSupportAudioPlayer() ⇒ <code>boolean</code>
检测AudioPlayer对象是否存在

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**Access**: public  
<a name="Bot+isSupportVideoPlayer"></a>

### bot.isSupportVideoPlayer() ⇒ <code>boolean</code>
检测VideoPlayer对象是否存在

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**Access**: public  
<a name="Bot+run"></a>

### bot.run(build) ⇒ <code>Promise</code>
bot执行的入口

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| build | <code>boolean</code> | <code>true</code> | 是否需要打包response，输出JSON String |

<a name="Bot.Card"></a>

### Bot.Card : <code>object</code>
Bot可以返回的卡片

**Kind**: static namespace of [<code>Bot</code>](#Bot)  

* [.Card](#Bot.Card) : <code>object</code>
    * [.TextCard](#Bot.Card.TextCard)
    * [.ImageCard](#Bot.Card.ImageCard)
    * [.StandardCard](#Bot.Card.StandardCard)
    * [.ListCard](#Bot.Card.ListCard)
    * [.LinkAccountCard](#Bot.Card.LinkAccountCard)

<a name="Bot.Card.TextCard"></a>

#### Card.TextCard
**Kind**: static property of [<code>Card</code>](#Bot.Card)  
**Access**: public  
**See**: [TextCard](TextCard)  
<a name="Bot.Card.ImageCard"></a>

#### Card.ImageCard
**Kind**: static property of [<code>Card</code>](#Bot.Card)  
**Access**: public  
**See**: [ImageCard](ImageCard)  
<a name="Bot.Card.StandardCard"></a>

#### Card.StandardCard
**Kind**: static property of [<code>Card</code>](#Bot.Card)  
**Access**: public  
**See**: [StandardCard](StandardCard)  
<a name="Bot.Card.ListCard"></a>

#### Card.ListCard
**Kind**: static property of [<code>Card</code>](#Bot.Card)  
**Access**: public  
**See**: [ListCard](ListCard)  
<a name="Bot.Card.LinkAccountCard"></a>

#### Card.LinkAccountCard
**Kind**: static property of [<code>Card</code>](#Bot.Card)  
**Access**: public  
**See**: [LinkAccountCard](LinkAccountCard)  
<a name="Bot.Directive"></a>

### Bot.Directive : <code>object</code>
Bot 可以返回指令

**Kind**: static namespace of [<code>Bot</code>](#Bot)  

* [.Directive](#Bot.Directive) : <code>object</code>
    * [.AudioPlayer](#Bot.Directive.AudioPlayer) : <code>object</code>
        * [.Play](#Bot.Directive.AudioPlayer.Play)
        * [.Stop](#Bot.Directive.AudioPlayer.Stop)
        * [.PlayerInfo](#Bot.Directive.AudioPlayer.PlayerInfo)
        * [.Control](#Bot.Directive.AudioPlayer.Control) : <code>object</code>
            * [.FavoriteButton](#Bot.Directive.AudioPlayer.Control.FavoriteButton)
            * [.LyricButton](#Bot.Directive.AudioPlayer.Control.LyricButton)
            * [.NextButton](#Bot.Directive.AudioPlayer.Control.NextButton)
            * [.PlayPauseButton](#Bot.Directive.AudioPlayer.Control.PlayPauseButton)
            * [.PreviousButton](#Bot.Directive.AudioPlayer.Control.PreviousButton)
            * [.RadioButton](#Bot.Directive.AudioPlayer.Control.RadioButton)
            * [.RecommendButton](#Bot.Directive.AudioPlayer.Control.RecommendButton)
            * [.RefreshButton](#Bot.Directive.AudioPlayer.Control.RefreshButton)
            * [.RepeatButton](#Bot.Directive.AudioPlayer.Control.RepeatButton)
            * [.ShowFavoriteListButton](#Bot.Directive.AudioPlayer.Control.ShowFavoriteListButton)
            * [.ShowPlayListButton](#Bot.Directive.AudioPlayer.Control.ShowPlayListButton)
            * [.ThumbsUpDownButton](#Bot.Directive.AudioPlayer.Control.ThumbsUpDownButton)
    * [.VideoPlayer](#Bot.Directive.VideoPlayer) : <code>object</code>
        * [.Play](#Bot.Directive.VideoPlayer.Play)
        * [.Stop](#Bot.Directive.VideoPlayer.Stop)
    * [.Display](#Bot.Directive.Display) : <code>object</code>
        * [.Hint](#Bot.Directive.Display.Hint)
        * [.RenderTemplate](#Bot.Directive.Display.RenderTemplate)
        * [.RenderAudioList](#Bot.Directive.Display.RenderAudioList)
        * [.RenderVideoList](#Bot.Directive.Display.RenderVideoList)
        * [.Template](#Bot.Directive.Display.Template) : <code>object</code>
            * [.BodyTemplate1](#Bot.Directive.Display.Template.BodyTemplate1)
            * [.BodyTemplate2](#Bot.Directive.Display.Template.BodyTemplate2)
            * [.BodyTemplate3](#Bot.Directive.Display.Template.BodyTemplate3)
            * [.BodyTemplate4](#Bot.Directive.Display.Template.BodyTemplate4)
            * [.BodyTemplate5](#Bot.Directive.Display.Template.BodyTemplate5)
            * [.ListTemplate1](#Bot.Directive.Display.Template.ListTemplate1)
            * [.ListTemplate2](#Bot.Directive.Display.Template.ListTemplate2)
            * [.ListTemplateItem](#Bot.Directive.Display.Template.ListTemplateItem)
    * [.Pay](#Bot.Directive.Pay) : <code>object</code>
        * [.Charge](#Bot.Directive.Pay.Charge)

<a name="Bot.Directive.AudioPlayer"></a>

#### Directive.AudioPlayer : <code>object</code>
音频指令

**Kind**: static namespace of [<code>Directive</code>](#Bot.Directive)  

* [.AudioPlayer](#Bot.Directive.AudioPlayer) : <code>object</code>
    * [.Play](#Bot.Directive.AudioPlayer.Play)
    * [.Stop](#Bot.Directive.AudioPlayer.Stop)
    * [.PlayerInfo](#Bot.Directive.AudioPlayer.PlayerInfo)
    * [.Control](#Bot.Directive.AudioPlayer.Control) : <code>object</code>
        * [.FavoriteButton](#Bot.Directive.AudioPlayer.Control.FavoriteButton)
        * [.LyricButton](#Bot.Directive.AudioPlayer.Control.LyricButton)
        * [.NextButton](#Bot.Directive.AudioPlayer.Control.NextButton)
        * [.PlayPauseButton](#Bot.Directive.AudioPlayer.Control.PlayPauseButton)
        * [.PreviousButton](#Bot.Directive.AudioPlayer.Control.PreviousButton)
        * [.RadioButton](#Bot.Directive.AudioPlayer.Control.RadioButton)
        * [.RecommendButton](#Bot.Directive.AudioPlayer.Control.RecommendButton)
        * [.RefreshButton](#Bot.Directive.AudioPlayer.Control.RefreshButton)
        * [.RepeatButton](#Bot.Directive.AudioPlayer.Control.RepeatButton)
        * [.ShowFavoriteListButton](#Bot.Directive.AudioPlayer.Control.ShowFavoriteListButton)
        * [.ShowPlayListButton](#Bot.Directive.AudioPlayer.Control.ShowPlayListButton)
        * [.ThumbsUpDownButton](#Bot.Directive.AudioPlayer.Control.ThumbsUpDownButton)

<a name="Bot.Directive.AudioPlayer.Play"></a>

##### AudioPlayer.Play
音频播放指令

**Kind**: static property of [<code>AudioPlayer</code>](#Bot.Directive.AudioPlayer)  
**Access**: public  
**See**: [Play](Play)  
<a name="Bot.Directive.AudioPlayer.Stop"></a>

##### AudioPlayer.Stop
音频停止指令

**Kind**: static property of [<code>AudioPlayer</code>](#Bot.Directive.AudioPlayer)  
**Access**: public  
**See**: [Stop](Stop)  
<a name="Bot.Directive.AudioPlayer.PlayerInfo"></a>

##### AudioPlayer.PlayerInfo
音频播放信息类

**Kind**: static property of [<code>AudioPlayer</code>](#Bot.Directive.AudioPlayer)  
**Access**: public  
**See**: [PlayerInfo](PlayerInfo)  
<a name="Bot.Directive.AudioPlayer.Control"></a>

##### AudioPlayer.Control : <code>object</code>
音频控制按钮

**Kind**: static namespace of [<code>AudioPlayer</code>](#Bot.Directive.AudioPlayer)  

* [.Control](#Bot.Directive.AudioPlayer.Control) : <code>object</code>
    * [.FavoriteButton](#Bot.Directive.AudioPlayer.Control.FavoriteButton)
    * [.LyricButton](#Bot.Directive.AudioPlayer.Control.LyricButton)
    * [.NextButton](#Bot.Directive.AudioPlayer.Control.NextButton)
    * [.PlayPauseButton](#Bot.Directive.AudioPlayer.Control.PlayPauseButton)
    * [.PreviousButton](#Bot.Directive.AudioPlayer.Control.PreviousButton)
    * [.RadioButton](#Bot.Directive.AudioPlayer.Control.RadioButton)
    * [.RecommendButton](#Bot.Directive.AudioPlayer.Control.RecommendButton)
    * [.RefreshButton](#Bot.Directive.AudioPlayer.Control.RefreshButton)
    * [.RepeatButton](#Bot.Directive.AudioPlayer.Control.RepeatButton)
    * [.ShowFavoriteListButton](#Bot.Directive.AudioPlayer.Control.ShowFavoriteListButton)
    * [.ShowPlayListButton](#Bot.Directive.AudioPlayer.Control.ShowPlayListButton)
    * [.ThumbsUpDownButton](#Bot.Directive.AudioPlayer.Control.ThumbsUpDownButton)

<a name="Bot.Directive.AudioPlayer.Control.FavoriteButton"></a>

###### Control.FavoriteButton
喜欢按钮控件

**Kind**: static property of [<code>Control</code>](#Bot.Directive.AudioPlayer.Control)  
**Access**: public  
**See**: [FavoriteButton](FavoriteButton)  
<a name="Bot.Directive.AudioPlayer.Control.LyricButton"></a>

###### Control.LyricButton
歌词按钮控件

**Kind**: static property of [<code>Control</code>](#Bot.Directive.AudioPlayer.Control)  
**Access**: public  
**See**: [LyricButton](LyricButton)  
<a name="Bot.Directive.AudioPlayer.Control.NextButton"></a>

###### Control.NextButton
下一曲按钮控件

**Kind**: static property of [<code>Control</code>](#Bot.Directive.AudioPlayer.Control)  
**Access**: public  
**See**: [NextButton](NextButton)  
<a name="Bot.Directive.AudioPlayer.Control.PlayPauseButton"></a>

###### Control.PlayPauseButton
暂停播放按钮控件

**Kind**: static property of [<code>Control</code>](#Bot.Directive.AudioPlayer.Control)  
**Access**: public  
**See**: [PlayPauseButton](PlayPauseButton)  
<a name="Bot.Directive.AudioPlayer.Control.PreviousButton"></a>

###### Control.PreviousButton
上一曲按钮控件

**Kind**: static property of [<code>Control</code>](#Bot.Directive.AudioPlayer.Control)  
**Access**: public  
**See**: [PreviousButton](PreviousButton)  
<a name="Bot.Directive.AudioPlayer.Control.RadioButton"></a>

###### Control.RadioButton
单选按钮控件

**Kind**: static property of [<code>Control</code>](#Bot.Directive.AudioPlayer.Control)  
**Access**: public  
**See**: [RadioButton](RadioButton)  
<a name="Bot.Directive.AudioPlayer.Control.RecommendButton"></a>

###### Control.RecommendButton
推荐按钮控件

**Kind**: static property of [<code>Control</code>](#Bot.Directive.AudioPlayer.Control)  
**Access**: public  
**See**: [RecommendButton](RecommendButton)  
<a name="Bot.Directive.AudioPlayer.Control.RefreshButton"></a>

###### Control.RefreshButton
刷新按钮控件

**Kind**: static property of [<code>Control</code>](#Bot.Directive.AudioPlayer.Control)  
**Access**: public  
**See**: [RefreshButton](RefreshButton)  
<a name="Bot.Directive.AudioPlayer.Control.RepeatButton"></a>

###### Control.RepeatButton
单曲循环按钮控件

**Kind**: static property of [<code>Control</code>](#Bot.Directive.AudioPlayer.Control)  
**Access**: public  
**See**: [RepeatButton](RepeatButton)  
<a name="Bot.Directive.AudioPlayer.Control.ShowFavoriteListButton"></a>

###### Control.ShowFavoriteListButton
展现收藏歌曲列表按钮控件

**Kind**: static property of [<code>Control</code>](#Bot.Directive.AudioPlayer.Control)  
**Access**: public  
**See**: [ShowFavoriteListButton](ShowFavoriteListButton)  
<a name="Bot.Directive.AudioPlayer.Control.ShowPlayListButton"></a>

###### Control.ShowPlayListButton
展现歌曲列表按钮控件

**Kind**: static property of [<code>Control</code>](#Bot.Directive.AudioPlayer.Control)  
**Access**: public  
**See**: [ShowPlayListButton](ShowPlayListButton)  
<a name="Bot.Directive.AudioPlayer.Control.ThumbsUpDownButton"></a>

###### Control.ThumbsUpDownButton
封面按钮控件

**Kind**: static property of [<code>Control</code>](#Bot.Directive.AudioPlayer.Control)  
**Access**: public  
**See**: [ThumbsUpDownButton](ThumbsUpDownButton)  
<a name="Bot.Directive.VideoPlayer"></a>

#### Directive.VideoPlayer : <code>object</code>
视频指令

**Kind**: static namespace of [<code>Directive</code>](#Bot.Directive)  

* [.VideoPlayer](#Bot.Directive.VideoPlayer) : <code>object</code>
    * [.Play](#Bot.Directive.VideoPlayer.Play)
    * [.Stop](#Bot.Directive.VideoPlayer.Stop)

<a name="Bot.Directive.VideoPlayer.Play"></a>

##### VideoPlayer.Play
视频播放指令

**Kind**: static property of [<code>VideoPlayer</code>](#Bot.Directive.VideoPlayer)  
**Access**: public  
**See**: [Play](Play)  
<a name="Bot.Directive.VideoPlayer.Stop"></a>

##### VideoPlayer.Stop
视频停止播放指令

**Kind**: static property of [<code>VideoPlayer</code>](#Bot.Directive.VideoPlayer)  
**Access**: public  
**See**: [Stop](Stop)  
<a name="Bot.Directive.Display"></a>

#### Directive.Display : <code>object</code>
模版渲染和用户提示指令

**Kind**: static namespace of [<code>Directive</code>](#Bot.Directive)  

* [.Display](#Bot.Directive.Display) : <code>object</code>
    * [.Hint](#Bot.Directive.Display.Hint)
    * [.RenderTemplate](#Bot.Directive.Display.RenderTemplate)
    * [.RenderAudioList](#Bot.Directive.Display.RenderAudioList)
    * [.RenderVideoList](#Bot.Directive.Display.RenderVideoList)
    * [.Template](#Bot.Directive.Display.Template) : <code>object</code>
        * [.BodyTemplate1](#Bot.Directive.Display.Template.BodyTemplate1)
        * [.BodyTemplate2](#Bot.Directive.Display.Template.BodyTemplate2)
        * [.BodyTemplate3](#Bot.Directive.Display.Template.BodyTemplate3)
        * [.BodyTemplate4](#Bot.Directive.Display.Template.BodyTemplate4)
        * [.BodyTemplate5](#Bot.Directive.Display.Template.BodyTemplate5)
        * [.ListTemplate1](#Bot.Directive.Display.Template.ListTemplate1)
        * [.ListTemplate2](#Bot.Directive.Display.Template.ListTemplate2)
        * [.ListTemplateItem](#Bot.Directive.Display.Template.ListTemplateItem)

<a name="Bot.Directive.Display.Hint"></a>

##### Display.Hint
用户提示指令

**Kind**: static property of [<code>Display</code>](#Bot.Directive.Display)  
**Access**: public  
**See**: [Hint](Hint)  
<a name="Bot.Directive.Display.RenderTemplate"></a>

##### Display.RenderTemplate
模版渲染指令

**Kind**: static property of [<code>Display</code>](#Bot.Directive.Display)  
**Access**: public  
**See**: [RenderTemplate](RenderTemplate)  
<a name="Bot.Directive.Display.RenderAudioList"></a>

##### Display.RenderAudioList
模版音频列表指令

**Kind**: static property of [<code>Display</code>](#Bot.Directive.Display)  
**Access**: public  
**See**: [RenderAudioList](RenderAudioList)  
<a name="Bot.Directive.Display.RenderVideoList"></a>

##### Display.RenderVideoList
模版视频列表指令

**Kind**: static property of [<code>Display</code>](#Bot.Directive.Display)  
**Access**: public  
**See**: [RenderVideoList](RenderVideoList)  
<a name="Bot.Directive.Display.Template"></a>

##### Display.Template : <code>object</code>
展示模版

**Kind**: static namespace of [<code>Display</code>](#Bot.Directive.Display)  

* [.Template](#Bot.Directive.Display.Template) : <code>object</code>
    * [.BodyTemplate1](#Bot.Directive.Display.Template.BodyTemplate1)
    * [.BodyTemplate2](#Bot.Directive.Display.Template.BodyTemplate2)
    * [.BodyTemplate3](#Bot.Directive.Display.Template.BodyTemplate3)
    * [.BodyTemplate4](#Bot.Directive.Display.Template.BodyTemplate4)
    * [.BodyTemplate5](#Bot.Directive.Display.Template.BodyTemplate5)
    * [.ListTemplate1](#Bot.Directive.Display.Template.ListTemplate1)
    * [.ListTemplate2](#Bot.Directive.Display.Template.ListTemplate2)
    * [.ListTemplateItem](#Bot.Directive.Display.Template.ListTemplateItem)

<a name="Bot.Directive.Display.Template.BodyTemplate1"></a>

###### Template.BodyTemplate1
文本展现模板

**Kind**: static property of [<code>Template</code>](#Bot.Directive.Display.Template)  
**Access**: public  
**See**: [BodyTemplate1](BodyTemplate1)  
<a name="Bot.Directive.Display.Template.BodyTemplate2"></a>

###### Template.BodyTemplate2
上图下文模版

**Kind**: static property of [<code>Template</code>](#Bot.Directive.Display.Template)  
**Access**: public  
**See**: [BodyTemplate2](BodyTemplate2)  
<a name="Bot.Directive.Display.Template.BodyTemplate3"></a>

###### Template.BodyTemplate3
左图右文模版

**Kind**: static property of [<code>Template</code>](#Bot.Directive.Display.Template)  
**Access**: public  
**See**: [BodyTemplate3](BodyTemplate3)  
<a name="Bot.Directive.Display.Template.BodyTemplate4"></a>

###### Template.BodyTemplate4
右图左文模版

**Kind**: static property of [<code>Template</code>](#Bot.Directive.Display.Template)  
**Access**: public  
**See**: [BodyTemplate4](BodyTemplate4)  
<a name="Bot.Directive.Display.Template.BodyTemplate5"></a>

###### Template.BodyTemplate5
图片模板

**Kind**: static property of [<code>Template</code>](#Bot.Directive.Display.Template)  
**Access**: public  
**See**: [BodyTemplate5](BodyTemplate5)  
<a name="Bot.Directive.Display.Template.ListTemplate1"></a>

###### Template.ListTemplate1
横向列表模板

**Kind**: static property of [<code>Template</code>](#Bot.Directive.Display.Template)  
**Access**: public  
**See**: [ListTemplate1](ListTemplate1)  
<a name="Bot.Directive.Display.Template.ListTemplate2"></a>

###### Template.ListTemplate2
纵向列表模板

**Kind**: static property of [<code>Template</code>](#Bot.Directive.Display.Template)  
**Access**: public  
**See**: [ListTemplate2](ListTemplate2)  
<a name="Bot.Directive.Display.Template.ListTemplateItem"></a>

###### Template.ListTemplateItem
模版列表项

**Kind**: static property of [<code>Template</code>](#Bot.Directive.Display.Template)  
**Access**: public  
**See**: [ListTemplateItem](ListTemplateItem)  
<a name="Bot.Directive.Pay"></a>

#### Directive.Pay : <code>object</code>
支付

**Kind**: static namespace of [<code>Directive</code>](#Bot.Directive)  
<a name="Bot.Directive.Pay.Charge"></a>

##### Pay.Charge
支付指令

**Kind**: static property of [<code>Pay</code>](#Bot.Directive.Pay)  
**Access**: public  
**See**: [Charge](Charge)  
