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
        * [.initCertificate(headers, body)](#Bot+initCertificate) ⇒ <code>Certificate</code>
        * [.getIntentName()](#Bot+getIntentName) ⇒ <code>string</code> \| <code>null</code>
        * [.getSessionAttribute(field, defaultValue)](#Bot+getSessionAttribute) ⇒ <code>Mixied</code>
        * [.setSessionAttribute(field, value, defaultValue)](#Bot+setSessionAttribute) ⇒ <code>null</code>
        * [.clearSessionAttribute()](#Bot+clearSessionAttribute) ⇒ <code>null</code>
        * [.getSlot(field, index)](#Bot+getSlot) ⇒ <code>string</code>
        * [.setSlot(field, value, index)](#Bot+setSlot) ⇒ <code>null</code>
        * [.waitAnswer()](#Bot+waitAnswer) ⇒ <code>null</code>
        * [.endSession()](#Bot+endSession)
        * [.run(build)](#Bot+run) ⇒ <code>Promise</code>
    * _static_
        * [.Card](#Bot.Card) : <code>object</code>
            * [.TextCard](#Bot.Card.TextCard)
            * [.ImageCard](#Bot.Card.ImageCard)
            * [.StandardCard](#Bot.Card.StandardCard)
            * [.ListCard](#Bot.Card.ListCard)
        * [.Directive](#Bot.Directive) : <code>object</code>
            * [.AudioPlayer](#Bot.Directive.AudioPlayer) : <code>object</code>
                * [.Play](#Bot.Directive.AudioPlayer.Play)
                * [.Stop](#Bot.Directive.AudioPlayer.Stop)

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
<a name="Bot.Directive"></a>

### Bot.Directive : <code>object</code>
Bot 可以返回指令

**Kind**: static namespace of [<code>Bot</code>](#Bot)  

* [.Directive](#Bot.Directive) : <code>object</code>
    * [.AudioPlayer](#Bot.Directive.AudioPlayer) : <code>object</code>
        * [.Play](#Bot.Directive.AudioPlayer.Play)
        * [.Stop](#Bot.Directive.AudioPlayer.Stop)

<a name="Bot.Directive.AudioPlayer"></a>

#### Directive.AudioPlayer : <code>object</code>
音频指令

**Kind**: static namespace of [<code>Directive</code>](#Bot.Directive)  

* [.AudioPlayer](#Bot.Directive.AudioPlayer) : <code>object</code>
    * [.Play](#Bot.Directive.AudioPlayer.Play)
    * [.Stop](#Bot.Directive.AudioPlayer.Stop)

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
