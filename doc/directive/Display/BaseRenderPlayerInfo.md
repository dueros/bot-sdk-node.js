<a name="BaseRenderPlayerInfo"></a>

## BaseRenderPlayerInfo
{BaseRenderPlayerInfo} 用于生成RenderAudioPlayerInfo指令的类

**Kind**: global class  

* [BaseRenderPlayerInfo](#BaseRenderPlayerInfo)
    * [new BaseRenderPlayerInfo(type, content, controls)](#new_BaseRenderPlayerInfo_new)
    * [.setToken(token)](#BaseRenderPlayerInfo+setToken)
    * [.setControls(controls)](#BaseRenderPlayerInfo+setControls)
    * [.addControl(control)](#BaseRenderPlayerInfo+addControl)
    * [.setContent(content)](#BaseRenderPlayerInfo+setContent)
    * [.getData()](#BaseRenderPlayerInfo+getData) ⇒ <code>Object</code>

<a name="new_BaseRenderPlayerInfo_new"></a>

### new BaseRenderPlayerInfo(type, content, controls)
构造方法


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| type | <code>string</code> |  | 指令类型 |
| content | <code>BasePlayerInfoContent</code> | <code></code> | 内容 |
| controls | <code>BaseButton</code> \| <code>Array</code> |  | 控件 |

<a name="BaseRenderPlayerInfo+setToken"></a>

### baseRenderPlayerInfo.setToken(token)
设置directive的token. 默认在构造时自动生成了token，可以覆盖

**Kind**: instance method of [<code>BaseRenderPlayerInfo</code>](#BaseRenderPlayerInfo)  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>string</code> | 视频的token |

<a name="BaseRenderPlayerInfo+setControls"></a>

### baseRenderPlayerInfo.setControls(controls)
设置控件列表

**Kind**: instance method of [<code>BaseRenderPlayerInfo</code>](#BaseRenderPlayerInfo)  

| Param | Type | Description |
| --- | --- | --- |
| controls | <code>BaseButton</code> \| <code>Array</code> | 控件列表 |

<a name="BaseRenderPlayerInfo+addControl"></a>

### baseRenderPlayerInfo.addControl(control)
增加一个控件

**Kind**: instance method of [<code>BaseRenderPlayerInfo</code>](#BaseRenderPlayerInfo)  

| Param | Type | Description |
| --- | --- | --- |
| control | <code>Control</code> | 控件 |

<a name="BaseRenderPlayerInfo+setContent"></a>

### baseRenderPlayerInfo.setContent(content)
设置content

**Kind**: instance method of [<code>BaseRenderPlayerInfo</code>](#BaseRenderPlayerInfo)  

| Param | Type | Description |
| --- | --- | --- |
| content | <code>BasePlayerInfoContent</code> | 播放信息内容 |

<a name="BaseRenderPlayerInfo+getData"></a>

### baseRenderPlayerInfo.getData() ⇒ <code>Object</code>
获取data

**Kind**: instance method of [<code>BaseRenderPlayerInfo</code>](#BaseRenderPlayerInfo)  
