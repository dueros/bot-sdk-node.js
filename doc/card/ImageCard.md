## Classes

<dl>
<dt><a href="#全图卡片">全图卡片</a> ⇐ <code>BaseCard</code></dt>
<dd></dd>
<dt><a href="#ImageCard">ImageCard</a></dt>
<dd></dd>
</dl>

<a name="全图卡片"></a>

## 全图卡片 ⇐ <code>BaseCard</code>
**Kind**: global class  
**Extends**: <code>BaseCard</code>  
<a name="ImageCard"></a>

## ImageCard
**Kind**: global class  

* [ImageCard](#ImageCard)
    * [new ImageCard()](#new_ImageCard_new)
    * [.addItem(src, thumbnail)](#ImageCard+addItem) ⇒ [<code>ImageCard</code>](#ImageCard)

<a name="new_ImageCard_new"></a>

### new ImageCard()
构造函数

<a name="ImageCard+addItem"></a>

### imageCard.addItem(src, thumbnail) ⇒ [<code>ImageCard</code>](#ImageCard)
添加一个图片项

**Kind**: instance method of [<code>ImageCard</code>](#ImageCard)  
**Returns**: [<code>ImageCard</code>](#ImageCard) - 返回自己  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| src | <code>string</code> | 图片地址 |
| thumbnail | <code>string</code> | 图片缩率图地址. 可选 |

**Example**  
```javascript
this.addItem('http://image.src', 'http://thumbnail.src');
this.addItem('http://image.src');
```
