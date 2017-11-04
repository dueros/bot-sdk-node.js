<a name="Nlu"></a>

## Nlu
封装DuerOS 对query的解析结果
只有IntentRequest 才有Nlu结构

**Kind**: global class  

* [Nlu](#Nlu)
    * [new Nlu(intents)](#new_Nlu_new)
    * [._directive](#Nlu+_directive)
    * [.setSlot(field, value, index)](#Nlu+setSlot)
    * [.getSlot(field, index)](#Nlu+getSlot) ⇒ <code>null</code> \| <code>string</code>
    * [.getIntentName()](#Nlu+getIntentName) ⇒ <code>string</code> \| <code>null</code>
    * [.hasAsked()](#Nlu+hasAsked) ⇒ <code>Boolean</code>
    * [.ask(slot)](#Nlu+ask) ⇒ <code>null</code>
    * [.toDirective()](#Nlu+toDirective) ⇒ <code>array</code>
    * [.toUpdateIntent()](#Nlu+toUpdateIntent) ⇒ <code>Object</code>
    * [.setDelegate()](#Nlu+setDelegate)
    * [.setConfirmSlot(field)](#Nlu+setConfirmSlot)
    * [.setConfirmIntent()](#Nlu+setConfirmIntent)
    * [.getSlotConfirmationStatus(field)](#Nlu+getSlotConfirmationStatus) ⇒ <code>string</code>
    * [.getIntentConfirmationStatus()](#Nlu+getIntentConfirmationStatus) ⇒

<a name="new_Nlu_new"></a>

### new Nlu(intents)
构造函数


| Param | Type | Description |
| --- | --- | --- |
| intents | <code>array</code> | IntentRequest 中的intents |

<a name="Nlu+_directive"></a>

### nlu._directive
记录返回的指令

**Kind**: instance property of [<code>Nlu</code>](#Nlu)  
<a name="Nlu+setSlot"></a>

### nlu.setSlot(field, value, index)
通过槽位名设置一个槽位的值，如果没有此槽位，新增一个

**Kind**: instance method of [<code>Nlu</code>](#Nlu)  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| field | <code>string</code> |  | 槽位名 |
| value | <code>string</code> |  | 值 |
| index | <code>Integer</code> | <code>0</code> | 第几个intent，默认第一个 |

<a name="Nlu+getSlot"></a>

### nlu.getSlot(field, index) ⇒ <code>null</code> \| <code>string</code>
通过槽位名获取一个槽位的值

**Kind**: instance method of [<code>Nlu</code>](#Nlu)  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| field | <code>string</code> |  | 槽位名 |
| index | <code>Integer</code> | <code>0</code> | 第几个intent，默认第一个 |

<a name="Nlu+getIntentName"></a>

### nlu.getIntentName() ⇒ <code>string</code> \| <code>null</code>
获取DuerOS请求中的意图名

**Kind**: instance method of [<code>Nlu</code>](#Nlu)  
**Access**: public  
<a name="Nlu+hasAsked"></a>

### nlu.hasAsked() ⇒ <code>Boolean</code>
Bot是否在询问用户，等待用户的回复

**Kind**: instance method of [<code>Nlu</code>](#Nlu)  
<a name="Nlu+ask"></a>

### nlu.ask(slot) ⇒ <code>null</code>
Bot主动发起对一个槽位的询问。比如：打车时询问用户目的地

**Kind**: instance method of [<code>Nlu</code>](#Nlu)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| slot | <code>string</code> | 槽位名 |

**Example**  
```javascript
this.ask('destination');
```
<a name="Nlu+toDirective"></a>

### nlu.toDirective() ⇒ <code>array</code>
**Kind**: instance method of [<code>Nlu</code>](#Nlu)  
<a name="Nlu+toUpdateIntent"></a>

### nlu.toUpdateIntent() ⇒ <code>Object</code>
**Kind**: instance method of [<code>Nlu</code>](#Nlu)  
<a name="Nlu+setDelegate"></a>

### nlu.setDelegate()
设置将对话的处理代理给Dialog Management(DM)。
    按事先配置的顺序，包括对缺失槽位的询问，槽位值的确认（如果设置了槽位需要确认，以及确认的话术）
    和整个意图的确认（如果设置了意图需要确认，以及确认的话术。比如可以将收集的槽位依次列出，等待用户确认）

**Kind**: instance method of [<code>Nlu</code>](#Nlu)  
**Access**: public  
<a name="Nlu+setConfirmSlot"></a>

### nlu.setConfirmSlot(field)
主动发起对一个槽位的确认，此时还需同时返回询问的outputSpeach。
主动发起的确认，DM不会使用默认配置的话术。

**Kind**: instance method of [<code>Nlu</code>](#Nlu)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| field | <code>string</code> | 槽位名 |

**Example**  
```javascript
this.setConfirmSlot('destination');
```
<a name="Nlu+setConfirmIntent"></a>

### nlu.setConfirmIntent()
主动发起对一个意图的确认，此时还需同时返回询问的outputSpeach。
主动发起的确认，DM不会使用默认配置的话术。
一般当槽位填槽完毕，在进行下一步操作之前，一次性的询问各个槽位，是否符合用户预期。

**Kind**: instance method of [<code>Nlu</code>](#Nlu)  
**Access**: public  
**Example**  
```javascript
this.setConfirmIntent();
```
<a name="Nlu+getSlotConfirmationStatus"></a>

### nlu.getSlotConfirmationStatus(field) ⇒ <code>string</code>
获取一个slot对应的confirmationStatus

**Kind**: instance method of [<code>Nlu</code>](#Nlu)  
**Returns**: <code>string</code> - 槽位的confirmationStatus  

| Param | Type | Description |
| --- | --- | --- |
| field | <code>string</code> | 槽位名 |

<a name="Nlu+getIntentConfirmationStatus"></a>

### nlu.getIntentConfirmationStatus() ⇒
获取一个intent对应的confirmationStatus

**Kind**: instance method of [<code>Nlu</code>](#Nlu)  
**Returns**: {string 意图的confirmationStatus  
