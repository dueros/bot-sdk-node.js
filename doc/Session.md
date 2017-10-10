## Classes

<dl>
<dt><a href="#Session">Session</a></dt>
<dd></dd>
<dt><a href="#Session">Session</a></dt>
<dd></dd>
</dl>

<a name="Session"></a>

## Session
**Kind**: global class  

* [Session](#Session)
    * [new Session()](#new_Session_new)
    * [new Session(data)](#new_Session_new)
    * [.clear()](#Session+clear)
    * [.toResponse()](#Session+toResponse) ⇒ <code>Object</code>
    * [.getData(field, def)](#Session+getData) ⇒ <code>string</code> \| <code>Object</code>
    * [.setData(field, value, def)](#Session+setData) ⇒ <code>null</code>

<a name="new_Session_new"></a>

### new Session()
封装对session的操作。DuerOS提过了多轮对话的能力，也能替Bot管理多轮对话，无须Bot自己维护session状态。
同时，也提供了Session存储，Bot还可以将对话的状态保存session中，自己处理多轮逻辑。
但是，存储在session中的数据，DuerOS是无法将其自动应用到下一轮的query解析中，对话状态的维护需要Bot自己完成

<a name="new_Session_new"></a>

### new Session(data)

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | 请求bot的session数据 |

<a name="Session+clear"></a>

### session.clear()
清空session的所有attributes

**Kind**: instance method of [<code>Session</code>](#Session)  
**Access**: public  
<a name="Session+toResponse"></a>

### session.toResponse() ⇒ <code>Object</code>
将session输出response的格式

**Kind**: instance method of [<code>Session</code>](#Session)  
<a name="Session+getData"></a>

### session.getData(field, def) ⇒ <code>string</code> \| <code>Object</code>
从session中获取一个属性的值

**Kind**: instance method of [<code>Session</code>](#Session)  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| field | <code>string</code> |  | 属性名称 |
| def | <code>string</code> | <code>null</code> | 默认值 |

**Example**  
```javascript
this.getData('status');
this.getData('status', '1');
```
<a name="Session+setData"></a>

### session.setData(field, value, def) ⇒ <code>null</code>
将一个值存储到session中
注意：
     value必须是字符串

**Kind**: instance method of [<code>Session</code>](#Session)  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| field | <code>string</code> |  | 属性名称 |
| value | <code>string</code> |  | 属性值 |
| def | <code>string</code> | <code>null</code> | 默认值 |

**Example**  
```javascript
this.setData('status', '1');
this.setData('status', '1', '8');
```
<a name="Session"></a>

## Session
**Kind**: global class  

* [Session](#Session)
    * [new Session()](#new_Session_new)
    * [new Session(data)](#new_Session_new)
    * [.clear()](#Session+clear)
    * [.toResponse()](#Session+toResponse) ⇒ <code>Object</code>
    * [.getData(field, def)](#Session+getData) ⇒ <code>string</code> \| <code>Object</code>
    * [.setData(field, value, def)](#Session+setData) ⇒ <code>null</code>

<a name="new_Session_new"></a>

### new Session()
封装对session的操作。DuerOS提过了多轮对话的能力，也能替Bot管理多轮对话，无须Bot自己维护session状态。
同时，也提供了Session存储，Bot还可以将对话的状态保存session中，自己处理多轮逻辑。
但是，存储在session中的数据，DuerOS是无法将其自动应用到下一轮的query解析中，对话状态的维护需要Bot自己完成

<a name="new_Session_new"></a>

### new Session(data)

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | 请求bot的session数据 |

<a name="Session+clear"></a>

### session.clear()
清空session的所有attributes

**Kind**: instance method of [<code>Session</code>](#Session)  
**Access**: public  
<a name="Session+toResponse"></a>

### session.toResponse() ⇒ <code>Object</code>
将session输出response的格式

**Kind**: instance method of [<code>Session</code>](#Session)  
<a name="Session+getData"></a>

### session.getData(field, def) ⇒ <code>string</code> \| <code>Object</code>
从session中获取一个属性的值

**Kind**: instance method of [<code>Session</code>](#Session)  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| field | <code>string</code> |  | 属性名称 |
| def | <code>string</code> | <code>null</code> | 默认值 |

**Example**  
```javascript
this.getData('status');
this.getData('status', '1');
```
<a name="Session+setData"></a>

### session.setData(field, value, def) ⇒ <code>null</code>
将一个值存储到session中
注意：
     value必须是字符串

**Kind**: instance method of [<code>Session</code>](#Session)  
**Access**: public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| field | <code>string</code> |  | 属性名称 |
| value | <code>string</code> |  | 属性值 |
| def | <code>string</code> | <code>null</code> | 默认值 |

**Example**  
```javascript
this.setData('status', '1');
this.setData('status', '1', '8');
```
