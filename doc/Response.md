<a name="Response"></a>

## Response
按照Bot协议，打包返回结果

**Kind**: global class  

* [Response](#Response)
    * [new Response(request, session, nlu)](#new_Response_new)
    * [.setShouldEndSession(val)](#Response+setShouldEndSession)
    * [.setExpectSpeech(expectSpeech)](#Response+setExpectSpeech)
    * [.illegalRequest()](#Response+illegalRequest) ⇒ <code>Promise</code>
    * [.build(data)](#Response+build) ⇒ <code>Promise</code>
    * [.setNeedDetermine()](#Response+setNeedDetermine)
    * [.setFallBack()](#Response+setFallBack)
    * [.setAutoDirectivesArrangement()](#Response+setAutoDirectivesArrangement)
    * [.setStrictDirectivesArrangement()](#Response+setStrictDirectivesArrangement)
    * [.addExpectTextResponse(text)](#Response+addExpectTextResponse)
    * [.addExpectSlotResponse(slot)](#Response+addExpectSlotResponse)

<a name="new_Response_new"></a>

### new Response(request, session, nlu)
构造方法


| Param | Type | Description |
| --- | --- | --- |
| request | <code>Request</code> | 请求 |
| session | <code>Session</code> | session |
| nlu | <code>Nlu</code> | query解析对象 |

<a name="Response+setShouldEndSession"></a>

### response.setShouldEndSession(val)
设置结束对话

**Kind**: instance method of [<code>Response</code>](#Response)  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>boolean</code> | true: 结束对话,false: 继续对话 |

<a name="Response+setExpectSpeech"></a>

### response.setExpectSpeech(expectSpeech)
通过控制expectSpeech来控制麦克风开关

**Kind**: instance method of [<code>Response</code>](#Response)  

| Param | Type | Description |
| --- | --- | --- |
| expectSpeech | <code>boolean</code> | 麦克风是否开启 |

<a name="Response+illegalRequest"></a>

### response.illegalRequest() ⇒ <code>Promise</code>
非法请求

**Kind**: instance method of [<code>Response</code>](#Response)  
<a name="Response+build"></a>

### response.build(data) ⇒ <code>Promise</code>
打包返回的结果

**Kind**: instance method of [<code>Response</code>](#Response)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | 返回的数据 |
| data.directives | <code>Array</code> | 返回的指令 |
| data.card | <code>BaseCard</code> | 返回的卡片 |
| data.outputSpeech | <code>string</code> \| <code>Object</code> | 返回的tts文本。可以是纯文本，或者是有SSML标签的文本(TODO:SSML说明文档) |
| data.reprompt | <code>string</code> \| <code>Object</code> | 纯文本或者带SSML标签的文本 |

**Example**  
```javascript
this.build({
     'outputSpeech' : '你好',
     'reprompt' : '再请问一次，你是要干嘛呢'
});

this.build({
     'card' : new TextCard('欢迎进入')
});

this.build({
     // 与 'outputSpeech' : '你好', 效果一样
     'outputSpeech' : {
         'type':'PlainText',
         'text': '你好'
     }
});
```
<a name="Response+setNeedDetermine"></a>

### response.setNeedDetermine()
设置needDetermine为true

**Kind**: instance method of [<code>Response</code>](#Response)  
<a name="Response+setFallBack"></a>

### response.setFallBack()
表示本次返回的结果是否为兜底结果

**Kind**: instance method of [<code>Response</code>](#Response)  
<a name="Response+setAutoDirectivesArrangement"></a>

### response.setAutoDirectivesArrangement()
表示directives中指令顺序随机

**Kind**: instance method of [<code>Response</code>](#Response)  
<a name="Response+setStrictDirectivesArrangement"></a>

### response.setStrictDirectivesArrangement()
表示directives中指令保持相对顺序不变 (directives中指令可能会被过滤)

**Kind**: instance method of [<code>Response</code>](#Response)  
<a name="Response+addExpectTextResponse"></a>

### response.addExpectTextResponse(text)
技能所期待的用户回复，技能将该信息反馈给DuerOS，有助于DuerOS在语音识别以及识别纠错时向该信息提权。

**Kind**: instance method of [<code>Response</code>](#Response)  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | 普通文本内容类型回复表达的回复内容。 |

<a name="Response+addExpectSlotResponse"></a>

### response.addExpectSlotResponse(slot)
技能所期待的用户回复，技能将该信息反馈给DuerOS，有助于DuerOS在语音识别以及识别纠错时向该信息提权。

**Kind**: instance method of [<code>Response</code>](#Response)  

| Param | Type | Description |
| --- | --- | --- |
| slot | <code>string</code> | 槽位类型回复表达的槽位名称。 |

