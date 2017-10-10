<a name="ImageCard"></a>

## ImageCard ⇐ <code>BaseCard</code>
ImageCard 全图卡片

**Kind**: global class  
**Extends**: <code>BaseCard</code>  

* [ImageCard](#ImageCard) ⇐ <code>BaseCard</code>
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
