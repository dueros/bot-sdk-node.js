## Classes

<dl>
<dt><a href="#ListCardItem">ListCardItem</a> ⇐ <code>BaseCard</code></dt>
<dd><p>ListCardItem  多图片文本列表项</p>
</dd>
<dt><a href="#ListCard">ListCard</a> ⇐ <code>BaseCard</code></dt>
<dd><p>ListCard 多图片文本卡片</p>
</dd>
</dl>

<a name="ListCardItem"></a>

## ListCardItem ⇐ <code>BaseCard</code>
ListCardItem  多图片文本列表项

**Kind**: global class  
**Extends**: <code>BaseCard</code>  
<a name="ListCard"></a>

## ListCard ⇐ <code>BaseCard</code>
ListCard 多图片文本卡片

**Kind**: global class  
**Extends**: <code>BaseCard</code>  

* [ListCard](#ListCard) ⇐ <code>BaseCard</code>
    * _instance_
        * [.addItem(listCardItem)](#ListCard+addItem)
    * _static_
        * [.Item](#ListCard.Item)

<a name="ListCard+addItem"></a>

### listCard.addItem(listCardItem)
添加一个图片项

**Kind**: instance method of [<code>ListCard</code>](#ListCard)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| listCardItem | [<code>ListCardItem</code>](#ListCardItem) | 列表项 |

**Example**  
```javascript
let listCardItem = new ListCardItem();
listCardItem.setTitle('标题');
listCardItem.setContent('内容');
listCardItem.setUrl('http://wwww.');
listCardItem.setImage('http://wwww.image');

let listCard = new ListCard();
listCard.addItem(listCardItem);
```
<a name="ListCard.Item"></a>

### ListCard.Item
**Kind**: static property of [<code>ListCard</code>](#ListCard)  
**Access**: public  
