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
    * [.getAudioPlayerContext()](#Request+getAudioPlayerContext) ⇒ <code>Object</code>
    * [.getVideoPlayerContext()](#Request+getVideoPlayerContext) ⇒ <code>Object</code>
    * [.getScreenContext()](#Request+getScreenContext) ⇒ <code>Object</code>
    * [.getEventData()](#Request+getEventData) ⇒ <code>Object</code>
    * [.getUserId()](#Request+getUserId) ⇒ <code>string</code>
    * [.getQuery()](#Request+getQuery) ⇒ <code>string</code>
    * [.isLaunchRequest()](#Request+isLaunchRequest) ⇒ <code>boolean</code>
    * [.isSessionEndedRequest()](#Request+isSessionEndedRequest) ⇒ <code>boolean</code>
    * [.getBotId()](#Request+getBotId) ⇒ <code>string</code>
    * [.getLocation()](#Request+getLocation) ⇒ <code>null</code> \| <code>Object</code>
    * [.isDialogStateCompleted()](#Request+isDialogStateCompleted) ⇒ <code>boolean</code>
    * [.getApiAccessToken()](#Request+getApiAccessToken) ⇒ <code>string</code>
    * [.getApiEndPoint()](#Request+getApiEndPoint) ⇒ <code>string</code>
    * [.getExternalAccessTokens()](#Request+getExternalAccessTokens) ⇒ <code>Array</code>

<a name="new_Request_new"></a>

### new Request(data)
constructor


| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | request |

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

### request.getAudioPlayerContext() ⇒ <code>Object</code>
获取设备音频播放的状态

**Kind**: instance method of [<code>Request</code>](#Request)  
<a name="Request+getVideoPlayerContext"></a>

### request.getVideoPlayerContext() ⇒ <code>Object</code>
获取设备视频播放的状态

**Kind**: instance method of [<code>Request</code>](#Request)  
<a name="Request+getScreenContext"></a>

### request.getScreenContext() ⇒ <code>Object</code>
获取screen context

**Kind**: instance method of [<code>Request</code>](#Request)  
<a name="Request+getEventData"></a>

### request.getEventData() ⇒ <code>Object</code>
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

### request.getLocation() ⇒ <code>null</code> \| <code>Object</code>
获取地理位置

**Kind**: instance method of [<code>Request</code>](#Request)  
<a name="Request+isDialogStateCompleted"></a>

### request.isDialogStateCompleted() ⇒ <code>boolean</code>
判断槽位是否填完。针对于填槽多轮。

**Kind**: instance method of [<code>Request</code>](#Request)  
<a name="Request+getApiAccessToken"></a>

### request.getApiAccessToken() ⇒ <code>string</code>
获取apiAccessToken

**Kind**: instance method of [<code>Request</code>](#Request)  
<a name="Request+getApiEndPoint"></a>

### request.getApiEndPoint() ⇒ <code>string</code>
获取apiEndPoint

**Kind**: instance method of [<code>Request</code>](#Request)  
<a name="Request+getExternalAccessTokens"></a>

### request.getExternalAccessTokens() ⇒ <code>Array</code>
获取externalAccessTokens

**Kind**: instance method of [<code>Request</code>](#Request)  
