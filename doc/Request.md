<a name="Request"></a>

## Request
对DuerOS请求bot的request body进行封装

**Kind**: global class  

* [Request](#Request)
    * [new Request(data)](#new_Request_new)
    * [.getData()](#Request+getData) ⇒ <code>Object</code>
    * [.getSession()](#Request+getSession) ⇒ <code>Session</code>
    * [.getNlu()](#Request+getNlu) ⇒ <code>Nlu</code>
    * [.getType()](#Request+getType) ⇒ <code>string</code>
    * [.getAudioPlayerContext()](#Request+getAudioPlayerContext) ⇒ <code>Mixed</code>
    * [.getEventData()](#Request+getEventData) ⇒ <code>Mixed</code>
    * [.getUserId()](#Request+getUserId) ⇒ <code>string</code>
    * [.getQuery()](#Request+getQuery) ⇒ <code>string</code>
    * [.isLaunchRequest()](#Request+isLaunchRequest) ⇒ <code>boolean</code>
    * [.isSessionEndedRequest()](#Request+isSessionEndedRequest) ⇒ <code>boolean</code>
    * [.getBotId()](#Request+getBotId) ⇒ <code>string</code>
    * [.getLocation()](#Request+getLocation) ⇒
    * [.isDialogStateCompleted()](#Request+isDialogStateCompleted) ⇒ <code>boolean</code>

<a name="new_Request_new"></a>

### new Request(data)

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | request body |

<a name="Request+getData"></a>

### request.getData() ⇒ <code>Object</code>
获取Request 的数据

**Kind**: instance method of [<code>Request</code>](#Request)  
<a name="Request+getSession"></a>

### request.getSession() ⇒ <code>Session</code>
获取session 对象

**Kind**: instance method of [<code>Request</code>](#Request)  
<a name="Request+getNlu"></a>

### request.getNlu() ⇒ <code>Nlu</code>
获取nlu 对象

**Kind**: instance method of [<code>Request</code>](#Request)  
<a name="Request+getType"></a>

### request.getType() ⇒ <code>string</code>
获取请求类型

**Kind**: instance method of [<code>Request</code>](#Request)  
<a name="Request+getAudioPlayerContext"></a>

### request.getAudioPlayerContext() ⇒ <code>Mixed</code>
获取设备音频播放的状态

**Kind**: instance method of [<code>Request</code>](#Request)  
<a name="Request+getEventData"></a>

### request.getEventData() ⇒ <code>Mixed</code>
返回event request数据

**Kind**: instance method of [<code>Request</code>](#Request)  
<a name="Request+getUserId"></a>

### request.getUserId() ⇒ <code>string</code>
获取用户的user id

**Kind**: instance method of [<code>Request</code>](#Request)  
<a name="Request+getQuery"></a>

### request.getQuery() ⇒ <code>string</code>
获取请求的query

**Kind**: instance method of [<code>Request</code>](#Request)  
<a name="Request+isLaunchRequest"></a>

### request.isLaunchRequest() ⇒ <code>boolean</code>
判断是否为调起bot的请求

**Kind**: instance method of [<code>Request</code>](#Request)  
<a name="Request+isSessionEndedRequest"></a>

### request.isSessionEndedRequest() ⇒ <code>boolean</code>
判断是否为结束对话的请求

**Kind**: instance method of [<code>Request</code>](#Request)  
<a name="Request+getBotId"></a>

### request.getBotId() ⇒ <code>string</code>
获取bot id

**Kind**: instance method of [<code>Request</code>](#Request)  
<a name="Request+getLocation"></a>

### request.getLocation() ⇒
获取地理位置

**Kind**: instance method of [<code>Request</code>](#Request)  
**Returns**: array  
<a name="Request+isDialogStateCompleted"></a>

### request.isDialogStateCompleted() ⇒ <code>boolean</code>
判断槽位是否填完。针对于填槽多轮。

**Kind**: instance method of [<code>Request</code>](#Request)  
