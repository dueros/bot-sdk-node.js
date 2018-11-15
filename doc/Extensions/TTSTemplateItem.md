<a name="TTSTemplateItem"></a>

## TTSTemplateItem
{TTSTemplateItem} TTS模版项

**Kind**: global class  

* [TTSTemplateItem](#TTSTemplateItem)
    * [new TTSTemplateItem(ttsKey)](#new_TTSTemplateItem_new)
    * [.addTemplateSlot(slotKey, slotValue)](#TTSTemplateItem+addTemplateSlot)
    * [.setTtsKey(ttsKey)](#TTSTemplateItem+setTtsKey)
    * [.clearTemplateSlots()](#TTSTemplateItem+clearTemplateSlots)
    * [.getData()](#TTSTemplateItem+getData) ⇒ <code>Object</code>

<a name="new_TTSTemplateItem_new"></a>

### new TTSTemplateItem(ttsKey)
构造方法


| Param | Type | Description |
| --- | --- | --- |
| ttsKey | <code>string</code> | 每个话术模板对应的唯一key |

<a name="TTSTemplateItem+addTemplateSlot"></a>

### ttsTemplateItem.addTemplateSlot(slotKey, slotValue)
添加TemplateSlot

**Kind**: instance method of [<code>TTSTemplateItem</code>](#TTSTemplateItem)  

| Param | Type | Description |
| --- | --- | --- |
| slotKey | <code>string</code> | 槽位名称 |
| slotValue | <code>string</code> | 槽位值 |

<a name="TTSTemplateItem+setTtsKey"></a>

### ttsTemplateItem.setTtsKey(ttsKey)
设置话术模板key

**Kind**: instance method of [<code>TTSTemplateItem</code>](#TTSTemplateItem)  

| Param | Type | Description |
| --- | --- | --- |
| ttsKey | <code>string</code> | 每个话术模板对应的唯一key |

<a name="TTSTemplateItem+clearTemplateSlots"></a>

### ttsTemplateItem.clearTemplateSlots()
清除话术模板的槽位信息

**Kind**: instance method of [<code>TTSTemplateItem</code>](#TTSTemplateItem)  
<a name="TTSTemplateItem+getData"></a>

### ttsTemplateItem.getData() ⇒ <code>Object</code>
获取数据

**Kind**: instance method of [<code>TTSTemplateItem</code>](#TTSTemplateItem)  
