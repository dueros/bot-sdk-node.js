## Classes

<dl>
<dt><a href="#BaseButton">BaseButton</a></dt>
<dd><p>PlayerInfo 播放信息类</p>
</dd>
<dt><a href="#PlayerInfo">PlayerInfo</a></dt>
<dd></dd>
</dl>

<a name="BaseButton"></a>

## BaseButton
PlayerInfo 播放信息类

**Kind**: global class  
<a name="PlayerInfo"></a>

## PlayerInfo
**Kind**: global class  

* [PlayerInfo](#PlayerInfo)
    * [new PlayerInfo()](#new_PlayerInfo_new)
    * [.setAudioItemType(type)](#PlayerInfo+setAudioItemType)
    * [.setTitle(title)](#PlayerInfo+setTitle)
    * [.setTitleSubtext1(titleSubtext1)](#PlayerInfo+setTitleSubtext1)
    * [.setTitleSubtext2(titleSubtext2)](#PlayerInfo+setTitleSubtext2)
    * [.setLyric(url)](#PlayerInfo+setLyric)
    * [.setMediaLengthInMs(mediaLengthInMs)](#PlayerInfo+setMediaLengthInMs)
    * [.setArt(src)](#PlayerInfo+setArt)
    * [.setProvider(name, logo)](#PlayerInfo+setProvider)
    * [.setControls(controls)](#PlayerInfo+setControls)
    * [.addControl(control)](#PlayerInfo+addControl)
    * [.getData()](#PlayerInfo+getData) ⇒ <code>Object</code>

<a name="new_PlayerInfo_new"></a>

### new PlayerInfo()
构造方法

<a name="PlayerInfo+setAudioItemType"></a>

### playerInfo.setAudioItemType(type)
设置audioItemType值

**Kind**: instance method of [<code>PlayerInfo</code>](#PlayerInfo)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | 类型值 |

<a name="PlayerInfo+setTitle"></a>

### playerInfo.setTitle(title)
设置title值

**Kind**: instance method of [<code>PlayerInfo</code>](#PlayerInfo)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | 音频的标题 |

<a name="PlayerInfo+setTitleSubtext1"></a>

### playerInfo.setTitleSubtext1(titleSubtext1)
设置音频子标题1

**Kind**: instance method of [<code>PlayerInfo</code>](#PlayerInfo)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| titleSubtext1 | <code>string</code> | 音频子标题1 |

<a name="PlayerInfo+setTitleSubtext2"></a>

### playerInfo.setTitleSubtext2(titleSubtext2)
设置音频子标题2

**Kind**: instance method of [<code>PlayerInfo</code>](#PlayerInfo)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| titleSubtext2 | <code>string</code> | 音频子标题2 |

<a name="PlayerInfo+setLyric"></a>

### playerInfo.setLyric(url)
设置歌词url

**Kind**: instance method of [<code>PlayerInfo</code>](#PlayerInfo)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | 歌词url |

<a name="PlayerInfo+setMediaLengthInMs"></a>

### playerInfo.setMediaLengthInMs(mediaLengthInMs)
设置音频流的长度，单位为ms

**Kind**: instance method of [<code>PlayerInfo</code>](#PlayerInfo)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| mediaLengthInMs | <code>number</code> | 音频流的长度，单位为ms |

<a name="PlayerInfo+setArt"></a>

### playerInfo.setArt(src)
设置音频封面图片

**Kind**: instance method of [<code>PlayerInfo</code>](#PlayerInfo)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| src | <code>string</code> | 图片地址 |

<a name="PlayerInfo+setProvider"></a>

### playerInfo.setProvider(name, logo)
设置资源提供方信息

**Kind**: instance method of [<code>PlayerInfo</code>](#PlayerInfo)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | 资源提供方的名字 |
| logo | <code>string</code> | 资源提供方的logo |

<a name="PlayerInfo+setControls"></a>

### playerInfo.setControls(controls)
设置控件列表

**Kind**: instance method of [<code>PlayerInfo</code>](#PlayerInfo)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| controls | <code>Control</code> \| <code>Array</code> | 单个控件或者控件列表 |

<a name="PlayerInfo+addControl"></a>

### playerInfo.addControl(control)
增加一个控件

**Kind**: instance method of [<code>PlayerInfo</code>](#PlayerInfo)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| control | <code>Control</code> | 控件 |

<a name="PlayerInfo+getData"></a>

### playerInfo.getData() ⇒ <code>Object</code>
获取data

**Kind**: instance method of [<code>PlayerInfo</code>](#PlayerInfo)  
**Access**: public  
