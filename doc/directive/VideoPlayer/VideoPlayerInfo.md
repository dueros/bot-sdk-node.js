<a name="VideoPlayerInfo"></a>

## VideoPlayerInfo
{VideoPlayerInfo} 视频播放信息

**Kind**: global class  

* [VideoPlayerInfo](#VideoPlayerInfo)
    * [new VideoPlayerInfo(content, controls)](#new_VideoPlayerInfo_new)
    * [.setControls(controls)](#VideoPlayerInfo+setControls)
    * [.addControl(control)](#VideoPlayerInfo+addControl)
    * [.setContent(content)](#VideoPlayerInfo+setContent)
    * [.getData()](#VideoPlayerInfo+getData) ⇒ <code>Object</code>

<a name="new_VideoPlayerInfo_new"></a>

### new VideoPlayerInfo(content, controls)
构造方法


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| content | <code>BasePlayerInfoContent</code> | <code></code> | 播放信息 |
| controls | <code>BaseButton</code> \| <code>Array</code> |  | 控制按钮 |

<a name="VideoPlayerInfo+setControls"></a>

### videoPlayerInfo.setControls(controls)
设置控件列表

**Kind**: instance method of [<code>VideoPlayerInfo</code>](#VideoPlayerInfo)  

| Param | Type | Description |
| --- | --- | --- |
| controls | <code>Control</code> \| <code>Array</code> | 控件列表 |

<a name="VideoPlayerInfo+addControl"></a>

### videoPlayerInfo.addControl(control)
增加一个控件

**Kind**: instance method of [<code>VideoPlayerInfo</code>](#VideoPlayerInfo)  

| Param | Type | Description |
| --- | --- | --- |
| control | <code>BaseButton</code> | 控件 |

<a name="VideoPlayerInfo+setContent"></a>

### videoPlayerInfo.setContent(content)
设置content

**Kind**: instance method of [<code>VideoPlayerInfo</code>](#VideoPlayerInfo)  

| Param | Type | Description |
| --- | --- | --- |
| content | <code>BasePlayerInfoContent</code> | 播放内容 |

<a name="VideoPlayerInfo+getData"></a>

### videoPlayerInfo.getData() ⇒ <code>Object</code>
获取data

**Kind**: instance method of [<code>VideoPlayerInfo</code>](#VideoPlayerInfo)  
