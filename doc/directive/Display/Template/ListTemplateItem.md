## Classes

<dl>
<dt><a href="#BaseTemplate">BaseTemplate</a> ⇐ <code><a href="#BaseTemplate">BaseTemplate</a></code></dt>
<dd><p>ListTemplateItem 列表模版项</p>
</dd>
<dt><a href="#ListTemplateItem">ListTemplateItem</a></dt>
<dd></dd>
</dl>

<a name="BaseTemplate"></a>

## BaseTemplate ⇐ [<code>BaseTemplate</code>](#BaseTemplate)
ListTemplateItem 列表模版项

**Kind**: global class  
**Extends**: [<code>BaseTemplate</code>](#BaseTemplate)  
<a name="ListTemplateItem"></a>

## ListTemplateItem
**Kind**: global class  

* [ListTemplateItem](#ListTemplateItem)
    * [new ListTemplateItem()](#new_ListTemplateItem_new)
    * [.setImage(url, widthPixels, heightPixels)](#ListTemplateItem+setImage)
    * [.setImageTags(tags)](#ListTemplateItem+setImageTags)
    * [.getImageTagsData(tags)](#ListTemplateItem+getImageTagsData) ⇒ <code>Array</code>
    * [.setPlainPrimaryText(text)](#ListTemplateItem+setPlainPrimaryText)
    * [.setPlainSecondaryText(text)](#ListTemplateItem+setPlainSecondaryText)
    * [.setPlainTertiaryText(text)](#ListTemplateItem+setPlainTertiaryText)
    * [.setContent(text)](#ListTemplateItem+setContent)
    * [.getData(key)](#ListTemplateItem+getData) ⇒ <code>Object</code>
    * [.setAnchorWord(anchorWord)](#ListTemplateItem+setAnchorWord)

<a name="new_ListTemplateItem_new"></a>

### new ListTemplateItem()
ListTemplateItem 构造方法.

<a name="ListTemplateItem+setImage"></a>

### listTemplateItem.setImage(url, widthPixels, heightPixels)
设置图片

**Kind**: instance method of [<code>ListTemplateItem</code>](#ListTemplateItem)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | 图片地址 |
| widthPixels | <code>string</code> | 图片像素宽 |
| heightPixels | <code>string</code> | 图片像素高 |

<a name="ListTemplateItem+setImageTags"></a>

### listTemplateItem.setImageTags(tags)
设置图片tags

**Kind**: instance method of [<code>ListTemplateItem</code>](#ListTemplateItem)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| tags | <code>BaseTag</code> \| <code>Array</code> | 图片标签 |

<a name="ListTemplateItem+getImageTagsData"></a>

### listTemplateItem.getImageTagsData(tags) ⇒ <code>Array</code>
获取imageTags的数据

**Kind**: instance method of [<code>ListTemplateItem</code>](#ListTemplateItem)  

| Param | Type | Description |
| --- | --- | --- |
| tags | <code>BaseTag</code> \| <code>Array</code> | 图片标签 |

<a name="ListTemplateItem+setPlainPrimaryText"></a>

### listTemplateItem.setPlainPrimaryText(text)
设置列表元素一级标题

**Kind**: instance method of [<code>ListTemplateItem</code>](#ListTemplateItem)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | 文本内容 |

<a name="ListTemplateItem+setPlainSecondaryText"></a>

### listTemplateItem.setPlainSecondaryText(text)
设置列表元素二级标题

**Kind**: instance method of [<code>ListTemplateItem</code>](#ListTemplateItem)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | 文本内容 |

<a name="ListTemplateItem+setPlainTertiaryText"></a>

### listTemplateItem.setPlainTertiaryText(text)
设置列表元素三级标题

**Kind**: instance method of [<code>ListTemplateItem</code>](#ListTemplateItem)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | 文本内容 |

<a name="ListTemplateItem+setContent"></a>

### listTemplateItem.setContent(text)
设置列表元素标题

**Kind**: instance method of [<code>ListTemplateItem</code>](#ListTemplateItem)  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | 文本内容 |

<a name="ListTemplateItem+getData"></a>

### listTemplateItem.getData(key) ⇒ <code>Object</code>
返回数据

**Kind**: instance method of [<code>ListTemplateItem</code>](#ListTemplateItem)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | key |

<a name="ListTemplateItem+setAnchorWord"></a>

### listTemplateItem.setAnchorWord(anchorWord)
设置当前元素的名字

**Kind**: instance method of [<code>ListTemplateItem</code>](#ListTemplateItem)  

| Param | Type | Description |
| --- | --- | --- |
| anchorWord | <code>string</code> | 名称 |

