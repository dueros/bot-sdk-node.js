## Classes

<dl>
<dt><a href="#BaseDirective">BaseDirective</a> ⇐ <code><a href="#BaseDirective">BaseDirective</a></code></dt>
<dd><p>Play 用于生成Play指令的类</p>
</dd>
<dt><a href="#Play">Play</a></dt>
<dd></dd>
</dl>

<a name="BaseDirective"></a>

## BaseDirective ⇐ [<code>BaseDirective</code>](#BaseDirective)
Play 用于生成Play指令的类

**Kind**: global class  
**Extends**: [<code>BaseDirective</code>](#BaseDirective)  
<a name="Play"></a>

## Play
**Kind**: global class  
**Access**: public  

* [Play](#Play)
    * [new Play(url, playBehavior)](#new_Play_new)
    * [.setToken(token)](#Play+setToken)
    * [.getToken()](#Play+getToken) ⇒ <code>string</code>
    * [.setUrl(url)](#Play+setUrl)
    * [.setOffsetInMilliseconds(milliSeconds)](#Play+setOffsetInMilliseconds)
    * [.setExpiryTime(expiryTime)](#Play+setExpiryTime)
    * [.setReportDelayInMs(reportDelayMs)](#Play+setReportDelayInMs)
    * [.setReportIntervalInMs(intervalMs)](#Play+setReportIntervalInMs)
    * [.setExpectedPreviousToken(previousToken)](#Play+setExpectedPreviousToken)
    * [.setStopPointsInMilliseconds(stopPoints)](#Play+setStopPointsInMilliseconds)

<a name="new_Play_new"></a>

### new Play(url, playBehavior)
构造方法


| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | 音频播放地址 |
| playBehavior | <code>string</code> | 默认替换所有               REPLACE_ALL: 立即停止当前播放并清除播放队列，立即播放指令中的audio item。               ENQUEUE: 将audio item添加到当前队列的尾部。               REPLACE_ENQUEUED: 替换播放队列中的所有audio item，但不影响当前正在播放的audio item。 |

<a name="Play+setToken"></a>

### play.setToken(token)
设置directive的token. 默认在构造时自动生成了token，可以覆盖

**Kind**: instance method of [<code>Play</code>](#Play)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>string</code> | 视频的token |

<a name="Play+getToken"></a>

### play.getToken() ⇒ <code>string</code>
获取directive的token. 默认在构造时自动生成了token

**Kind**: instance method of [<code>Play</code>](#Play)  
**Access**: public  
<a name="Play+setUrl"></a>

### play.setUrl(url)
设置directive的视频地址url

**Kind**: instance method of [<code>Play</code>](#Play)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | 视频地址 |

<a name="Play+setOffsetInMilliseconds"></a>

### play.setOffsetInMilliseconds(milliSeconds)
设置directive的属性。从指定的offset开始进行播放

**Kind**: instance method of [<code>Play</code>](#Play)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| milliSeconds | <code>number</code> | 毫秒数,比如5分钟的视频，播放的长度是5*60*1000毫秒，选择起始的播放位置 |

<a name="Play+setExpiryTime"></a>

### play.setExpiryTime(expiryTime)
stream过期时间

**Kind**: instance method of [<code>Play</code>](#Play)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| expiryTime | <code>string</code> | 过期时间 |

<a name="Play+setReportDelayInMs"></a>

### play.setReportDelayInMs(reportDelayMs)
设置directive的属性。如果此字段存在，则设备端在播放该video item时，播放到所指定时间之后应该上报ProgressReportDelayElapsed事件；如果此字段不存在，则设备端端不需要上报ProgressReportDelayEsapsed事件

**Kind**: instance method of [<code>Play</code>](#Play)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| reportDelayMs | <code>number</code> | 毫秒数。 |

<a name="Play+setReportIntervalInMs"></a>

### play.setReportIntervalInMs(intervalMs)
设置directive的属性。定时上报事件的间隔时间,如果此字段存在，则设备端在播放该video item时，每隔指定时间上报ProgressReportIntervalElapsed事件；如果此字段不存在，则设备端不需要上报ProgressReportIntervalElapsed事件

**Kind**: instance method of [<code>Play</code>](#Play)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| intervalMs | <code>number</code> | 毫秒数。 |

<a name="Play+setExpectedPreviousToken"></a>

### play.setExpectedPreviousToken(previousToken)
设置directive的属性。如果此字段存在，则应当匹配前一个video item中的token，如果不匹配则不执行本Play指令

**Kind**: instance method of [<code>Play</code>](#Play)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| previousToken | <code>string</code> | 上一首的token。 |

<a name="Play+setStopPointsInMilliseconds"></a>

### play.setStopPointsInMilliseconds(stopPoints)
播放到指定的offset后停止播放，并且会上报PlaybackScheduledStopReached事件

**Kind**: instance method of [<code>Play</code>](#Play)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| stopPoints | <code>number</code> \| <code>Array</code> | 停止点。 |

