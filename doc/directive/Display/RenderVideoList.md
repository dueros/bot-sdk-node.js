## Classes

<dl>
<dt><a href="#RenderVideoList">RenderVideoList</a> ⇐ <code>BaseDirective</code></dt>
<dd></dd>
<dt><a href="#RenderVideoList">RenderVideoList</a></dt>
<dd></dd>
</dl>

<a name="RenderVideoList"></a>

## RenderVideoList ⇐ <code>BaseDirective</code>
**Kind**: global class  
**Extends**: <code>BaseDirective</code>  

* [RenderVideoList](#RenderVideoList) ⇐ <code>BaseDirective</code>
    * [new RenderVideoList(title, behavior)](#new_RenderVideoList_new)
    * [.setToken(token)](#RenderVideoList+setToken)
    * [.addVideoItem(videoListItem)](#RenderVideoList+addVideoItem)
    * [.getData()](#RenderVideoList+getData) ⇒ <code>Object</code>

<a name="new_RenderVideoList_new"></a>

### new RenderVideoList(title, behavior)
构造方法


| Param | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | 列表的标题 |
| behavior | <code>string</code> | 默认替换所有               REPLACE: 清空当前的列表，再渲染，用于首次第一页数据的渲染               APPEND: 当前列表不变，在当前的列表后面渲染，用于往后翻页的渲染               PREPEND:当前列表不变，在当前的列表前面渲染，用于往前翻页的渲染 |

<a name="RenderVideoList+setToken"></a>

### renderVideoList.setToken(token)
设置directive的token. 默认在构造时自动生成了token，可以覆盖

**Kind**: instance method of [<code>RenderVideoList</code>](#RenderVideoList)  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>string</code> | 视频的token |

<a name="RenderVideoList+addVideoItem"></a>

### renderVideoList.addVideoItem(videoListItem)
增加audioItem

**Kind**: instance method of [<code>RenderVideoList</code>](#RenderVideoList)  

| Param | Type | Description |
| --- | --- | --- |
| videoListItem | <code>VideoListItem</code> | 视频项 |

<a name="RenderVideoList+getData"></a>

### renderVideoList.getData() ⇒ <code>Object</code>
获取数据

**Kind**: instance method of [<code>RenderVideoList</code>](#RenderVideoList)  
<a name="RenderVideoList"></a>

## RenderVideoList
**Kind**: global class  

* [RenderVideoList](#RenderVideoList)
    * [new RenderVideoList(title, behavior)](#new_RenderVideoList_new)
    * [.setToken(token)](#RenderVideoList+setToken)
    * [.addVideoItem(videoListItem)](#RenderVideoList+addVideoItem)
    * [.getData()](#RenderVideoList+getData) ⇒ <code>Object</code>

<a name="new_RenderVideoList_new"></a>

### new RenderVideoList(title, behavior)
构造方法


| Param | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | 列表的标题 |
| behavior | <code>string</code> | 默认替换所有               REPLACE: 清空当前的列表，再渲染，用于首次第一页数据的渲染               APPEND: 当前列表不变，在当前的列表后面渲染，用于往后翻页的渲染               PREPEND:当前列表不变，在当前的列表前面渲染，用于往前翻页的渲染 |

<a name="RenderVideoList+setToken"></a>

### renderVideoList.setToken(token)
设置directive的token. 默认在构造时自动生成了token，可以覆盖

**Kind**: instance method of [<code>RenderVideoList</code>](#RenderVideoList)  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>string</code> | 视频的token |

<a name="RenderVideoList+addVideoItem"></a>

### renderVideoList.addVideoItem(videoListItem)
增加audioItem

**Kind**: instance method of [<code>RenderVideoList</code>](#RenderVideoList)  

| Param | Type | Description |
| --- | --- | --- |
| videoListItem | <code>VideoListItem</code> | 视频项 |

<a name="RenderVideoList+getData"></a>

### renderVideoList.getData() ⇒ <code>Object</code>
获取数据

**Kind**: instance method of [<code>RenderVideoList</code>](#RenderVideoList)  
