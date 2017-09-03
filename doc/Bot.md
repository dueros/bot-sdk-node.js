<a name="Bot"></a>

## Bot
Bot基类. 请继承此类

**Kind**: global class  

* [Bot](#Bot)
    * [new Bot(postData)](#new_Bot_new)
    * _instance_
        * [.addIntentHandler(intent, func)](#Bot+addIntentHandler) ⇒ <code>Object</code>
        * [.addEventListener(event, func)](#Bot+addEventListener) ⇒ <code>Object</code>
        * [.getIntentName()](#Bot+getIntentName) ⇒ <code>string</code> \| <code>null</code>
        * [.getSessionAttribute(field, def)](#Bot+getSessionAttribute) ⇒ <code>Mixied</code>
        * [.setSessionAttribute(field, value, def)](#Bot+setSessionAttribute) ⇒ <code>null</code>
        * [.clearSessionAttribute()](#Bot+clearSessionAttribute) ⇒ <code>null</code>
        * [.getSlot(field)](#Bot+getSlot) ⇒ <code>string</code>
        * [.setSlot(field, value)](#Bot+setSlot) ⇒ <code>null</code>
        * [.waitAnswer()](#Bot+waitAnswer) ⇒ <code>null</code>
        * [.endDialog()](#Bot+endDialog)
        * [.run(build)](#Bot+run) ⇒ <code>string</code>
    * _static_
        * [.Card](#Bot.Card) : <code>object</code>
            * [.TextCard](#Bot.Card.TextCard)
            * [.ImageCard](#Bot.Card.ImageCard)
            * [.StandardCard](#Bot.Card.StandardCard)
            * [.ListCard](#Bot.Card.ListCard)

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
<a name="Bot+addIntentHandler"></a>

### bot.addIntentHandler(intent, func) ⇒ <code>Object</code>
对一个intent添加处理函数

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**Returns**: <code>Object</code> - 返回自己  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| intent | <code>string</code> | 意图名：'#intentName'， 以‘#’ 开头 |
| func | <code>function</code> | 意图处理函数。返回值非null，将作为bot的response返回DuerOS |

**Example**  
```javascript
this.addIntentHandler('#intentName', ()=>{
    //this.getSlot('slotName');
});
```
<a name="Bot+addEventListener"></a>

### bot.addEventListener(event, func) ⇒ <code>Object</code>
对一个事件添加处理函数。比如设备端反馈的音频播放开始事件

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**Returns**: <code>Object</code> - 返回自己  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>string</code> | 事件名 |
| func | <code>function</code> | 事件处理函数。返回值非null，将作为bot的response返回DuerOS |

**Example**  
```javascript
this.addEventListener('Audio', (event)=>{
    // event 为事件数据 
    // 具体数据结构参考[TODO]
});
```
<a name="Bot+getIntentName"></a>

### bot.getIntentName() ⇒ <code>string</code> \| <code>null</code>
获取DuerOS请求中的意图名

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**Access**: public  
<a name="Bot+getSessionAttribute"></a>

### bot.getSessionAttribute(field, def) ⇒ <code>Mixied</code>
获取session的一个字段对应的值

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| field | <code>string</code> | <code>null</code> | 字段名 |
| def | <code>Mixed</code> | <code></code> | 默认值 |

<a name="Bot+setSessionAttribute"></a>

### bot.setSessionAttribute(field, value, def) ⇒ <code>null</code>
设置session的一个字段的值

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| field | <code>string</code> |  | 字段名 |
| value | <code>Mixed</code> |  | 字段对应的值 |
| def | <code>Mixed</code> | <code></code> | 默认值 |

<a name="Bot+clearSessionAttribute"></a>

### bot.clearSessionAttribute() ⇒ <code>null</code>
清空session的所有字段

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**Access**: public  
<a name="Bot+getSlot"></a>

### bot.getSlot(field) ⇒ <code>string</code>
根据槽位名获取槽位对应的值

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| field | <code>string</code> | 槽位名 |

<a name="Bot+setSlot"></a>

### bot.setSlot(field, value) ⇒ <code>null</code>
设置槽位的值。如果该槽位不存在，新增一个槽位名，并设置对于的值

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| field | <code>string</code> | 槽位名 |
| value | <code>string</code> | 值 |

<a name="Bot+waitAnswer"></a>

### bot.waitAnswer() ⇒ <code>null</code>
设置多轮继续，等待用户回复

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**Access**: public  
<a name="Bot+endDialog"></a>

### bot.endDialog()
设置多轮结束，此时bot结束多轮对话

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**Access**: public  
<a name="Bot+run"></a>

### bot.run(build) ⇒ <code>string</code>
bot执行的入口

**Kind**: instance method of [<code>Bot</code>](#Bot)  
**Returns**: <code>string</code> - 返回JSON  
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
<a name="Bot.Card.ImageCard"></a>

#### Card.ImageCard
**Kind**: static property of [<code>Card</code>](#Bot.Card)  
**Access**: public  
<a name="Bot.Card.StandardCard"></a>

#### Card.StandardCard
**Kind**: static property of [<code>Card</code>](#Bot.Card)  
**Access**: public  
<a name="Bot.Card.ListCard"></a>

#### Card.ListCard
**Kind**: static property of [<code>Card</code>](#Bot.Card)  
**Access**: public  
