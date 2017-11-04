<a name="Response"></a>

## Response
按照Bot协议，打包返回结果

**Kind**: global class  

* [Response](#Response)
    * [new Response(request, session, nlu)](#new_Response_new)
    * [.setShouldEndSession(val)](#Response+setShouldEndSession)
    * [.illegalRequest()](#Response+illegalRequest) ⇒ <code>Promise</code>
    * [.build(data)](#Response+build) ⇒ <code>Promise</code>

<a name="new_Response_new"></a>

### new Response(request, session, nlu)

| Param | Type | Description |
| --- | --- | --- |
| request | <code>Requset</code> | 请求 |
| session | <code>Session</code> | session |
| nlu | <code>Nlu</code> | query解析对象 |

<a name="Response+setShouldEndSession"></a>

### response.setShouldEndSession(val)
设置结束对话

**Kind**: instance method of [<code>Response</code>](#Response)  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>boolean</code> | true: 结束对话   false: 继续对话 |

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
