## Classes

<dl>
<dt><a href="#BaseCard.js">BaseCard.js</a></dt>
<dd><p>BaseCard 抽象类. 卡片基类</p>
</dd>
<dt><a href="#BaseCard">BaseCard</a></dt>
<dd></dd>
</dl>

<a name="BaseCard.js"></a>

## BaseCard.js
BaseCard 抽象类. 卡片基类

**Kind**: global class  
**Author**: yuanpeng01@baidu.com  
<a name="new_BaseCard.js_new"></a>

### new BaseCard.js()
卡片基础类

<a name="BaseCard"></a>

## BaseCard
**Kind**: global class  

* [BaseCard](#BaseCard)
    * [new BaseCard(fields)](#new_BaseCard_new)
    * [.addCueWords(arr)](#BaseCard+addCueWords) ⇒ [<code>BaseCard</code>](#BaseCard)
    * [.setAnchor(url, anchorText)](#BaseCard+setAnchor) ⇒ [<code>BaseCard</code>](#BaseCard)
    * [.getData(key)](#BaseCard+getData) ⇒ <code>mixed</code>

<a name="new_BaseCard_new"></a>

### new BaseCard(fields)
构造函数


| Param | Type | Description |
| --- | --- | --- |
| fields | <code>Array</code> | 字段名列表  能够设置的字段名列表。通过set`FieldName`来设置的字段名 |

<a name="BaseCard+addCueWords"></a>

### baseCard.addCueWords(arr) ⇒ [<code>BaseCard</code>](#BaseCard)
添加用户操作提示。所有卡片都可以添加引导提升

**Kind**: instance method of [<code>BaseCard</code>](#BaseCard)  
**Returns**: [<code>BaseCard</code>](#BaseCard) - 返回自己  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array</code> | 提示的话术 |

**Example**  
```javascript
this.addCueWords(['十元', '二十元']);

 
```
<a name="BaseCard+setAnchor"></a>

### baseCard.setAnchor(url, anchorText) ⇒ [<code>BaseCard</code>](#BaseCard)
设置"查看更多" ，设置卡片锚点

**Kind**: instance method of [<code>BaseCard</code>](#BaseCard)  
**Returns**: [<code>BaseCard</code>](#BaseCard) - 返回自己  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | 链接地址 |
| anchorText | <code>string</code> | 锚点展现的文字，可选。如果不设置，默认为"查看更多" |

<a name="BaseCard+getData"></a>

### baseCard.getData(key) ⇒ <code>mixed</code>
获取卡片数据，或者某个字段的值
Example:
     this.getData();
     this.getData('fieldName');

**Kind**: instance method of [<code>BaseCard</code>](#BaseCard)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | 字段名，可选。如果不提供字段名，返回整个卡片数据 |

