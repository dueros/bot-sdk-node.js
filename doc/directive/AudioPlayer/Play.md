<a name="Play"></a>

## Play ⇐ <code>BaseDirective</code>
Play 音频播放指令

**Kind**: global class  
**Extends**: <code>BaseDirective</code>  

* [Play](#Play) ⇐ <code>BaseDirective</code>
    * [new Play(url, playBehavior)](#new_Play_new)
    * [.setToken(token)](#Play+setToken)
    * [.getToken()](#Play+getToken) ⇒ <code>string</code>
    * [.setUrl(url)](#Play+setUrl)
    * [.setOffsetInMilliSeconds(milliSeconds)](#Play+setOffsetInMilliSeconds)
    * [.setStreamFormat($streamFormat)](#Play+setStreamFormat)

<a name="new_Play_new"></a>

### new Play(url, playBehavior)

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | 音频地址 |
| playBehavior | <code>string</code> | 默认替换所有                 REPLACE_ALL: 立即停止当前播放并清除播放队列，立即播放指令中的audio item                 ENQUEUE: 将audio item添加到当前队列的尾部                 REPLACE_ENQUEUED: 替换播放队列中的所有audio item，但不影响当前正在播放的audio item |

<a name="Play+setToken"></a>

### play.setToken(token)
设置directive的token. 默认在构造时自动生成了token，可以覆盖

**Kind**: instance method of [<code>Play</code>](#Play)  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>string</code> | 音频的token |

<a name="Play+getToken"></a>

### play.getToken() ⇒ <code>string</code>
获取directive的token. 默认在构造时自动生成了token

**Kind**: instance method of [<code>Play</code>](#Play)  
<a name="Play+setUrl"></a>

### play.setUrl(url)
设置directive的音频地址url

**Kind**: instance method of [<code>Play</code>](#Play)  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | 音频地址 |

<a name="Play+setOffsetInMilliSeconds"></a>

### play.setOffsetInMilliSeconds(milliSeconds)
设置directive的属性。从指定的offset开始进行播放

**Kind**: instance method of [<code>Play</code>](#Play)  

| Param | Type | Description |
| --- | --- | --- |
| milliSeconds | <code>integer</code> | 毫秒数。比如5分钟的歌曲，播放的长度是5*60*1000毫秒，选择起始的播放位置 |

<a name="Play+setStreamFormat"></a>

### play.setStreamFormat($streamFormat)
设置directive的属性。音频流格式，streamFormat 默认STREAM_FORMAT_MP3

**Kind**: instance method of [<code>Play</code>](#Play)  

| Param | Type | Description |
| --- | --- | --- |
| $streamFormat | <code>string</code> | 取值: STREAM_FORMAT_MP3、STREAM_FORMAT_M3U8、STREAM_FORMAT_M4A |

