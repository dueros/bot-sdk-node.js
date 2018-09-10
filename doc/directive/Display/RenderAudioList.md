## Classes

<dl>
<dt><a href="#RenderAudioList">RenderAudioList</a> ⇐ <code>BaseDirective</code></dt>
<dd></dd>
<dt><a href="#RenderAudioList">RenderAudioList</a></dt>
<dd></dd>
</dl>

<a name="RenderAudioList"></a>

## RenderAudioList ⇐ <code>BaseDirective</code>
**Kind**: global class  
**Extends**: <code>BaseDirective</code>  

* [RenderAudioList](#RenderAudioList) ⇐ <code>BaseDirective</code>
    * [new RenderAudioList(title, behavior)](#new_RenderAudioList_new)
    * [.setToken(token)](#RenderAudioList+setToken)
    * [.addAudioItem(audioListItem)](#RenderAudioList+addAudioItem)
    * [.getData()](#RenderAudioList+getData) ⇒ <code>Object</code>

<a name="new_RenderAudioList_new"></a>

### new RenderAudioList(title, behavior)
构造方法


| Param | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | 列表的标题 |
| behavior | <code>string</code> | 默认替换所有               REPLACE: 清空当前的列表，再渲染，用于首次第一页数据的渲染               APPEND: 当前列表不变，在当前的列表后面渲染，用于往后翻页的渲染               PREPEND:当前列表不变，在当前的列表前面渲染，用于往前翻页的渲染 |

<a name="RenderAudioList+setToken"></a>

### renderAudioList.setToken(token)
设置directive的token. 默认在构造时自动生成了token，可以覆盖

**Kind**: instance method of [<code>RenderAudioList</code>](#RenderAudioList)  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>string</code> | 视频的token |

<a name="RenderAudioList+addAudioItem"></a>

### renderAudioList.addAudioItem(audioListItem)
增加audioListItem

**Kind**: instance method of [<code>RenderAudioList</code>](#RenderAudioList)  

| Param | Type | Description |
| --- | --- | --- |
| audioListItem | <code>AudioListItem</code> | 音频项 |

<a name="RenderAudioList+getData"></a>

### renderAudioList.getData() ⇒ <code>Object</code>
获取数据

**Kind**: instance method of [<code>RenderAudioList</code>](#RenderAudioList)  
<a name="RenderAudioList"></a>

## RenderAudioList
**Kind**: global class  

* [RenderAudioList](#RenderAudioList)
    * [new RenderAudioList(title, behavior)](#new_RenderAudioList_new)
    * [.setToken(token)](#RenderAudioList+setToken)
    * [.addAudioItem(audioListItem)](#RenderAudioList+addAudioItem)
    * [.getData()](#RenderAudioList+getData) ⇒ <code>Object</code>

<a name="new_RenderAudioList_new"></a>

### new RenderAudioList(title, behavior)
构造方法


| Param | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | 列表的标题 |
| behavior | <code>string</code> | 默认替换所有               REPLACE: 清空当前的列表，再渲染，用于首次第一页数据的渲染               APPEND: 当前列表不变，在当前的列表后面渲染，用于往后翻页的渲染               PREPEND:当前列表不变，在当前的列表前面渲染，用于往前翻页的渲染 |

<a name="RenderAudioList+setToken"></a>

### renderAudioList.setToken(token)
设置directive的token. 默认在构造时自动生成了token，可以覆盖

**Kind**: instance method of [<code>RenderAudioList</code>](#RenderAudioList)  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>string</code> | 视频的token |

<a name="RenderAudioList+addAudioItem"></a>

### renderAudioList.addAudioItem(audioListItem)
增加audioListItem

**Kind**: instance method of [<code>RenderAudioList</code>](#RenderAudioList)  

| Param | Type | Description |
| --- | --- | --- |
| audioListItem | <code>AudioListItem</code> | 音频项 |

<a name="RenderAudioList+getData"></a>

### renderAudioList.getData() ⇒ <code>Object</code>
获取数据

**Kind**: instance method of [<code>RenderAudioList</code>](#RenderAudioList)  
