## Classes

<dl>
<dt><a href="#BaseButton">BaseButton</a> ⇐ <code><a href="#BaseButton">BaseButton</a></code></dt>
<dd><p>Button Button按钮类</p>
</dd>
<dt><a href="#Button">Button</a></dt>
<dd></dd>
</dl>

<a name="BaseButton"></a>

## BaseButton ⇐ [<code>BaseButton</code>](#BaseButton)
Button Button按钮类

**Kind**: global class  
**Extends**: [<code>BaseButton</code>](#BaseButton)  
<a name="Button"></a>

## Button
**Kind**: global class  

* [Button](#Button)
    * [new Button(name)](#new_Button_new)
    * [.setEnabled(bool)](#Button+setEnabled)
    * [.setSelected(bool)](#Button+setSelected)

<a name="new_Button_new"></a>

### new Button(name)
Button 构造函数.


| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | 控件名字 |

<a name="Button+setEnabled"></a>

### button.setEnabled(bool)
按钮是否可点击

**Kind**: instance method of [<code>Button</code>](#Button)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| bool | <code>boolean</code> | 按钮是否可点击，取值为true说明可以点击，取值为false不可点击 |

<a name="Button+setSelected"></a>

### button.setSelected(bool)
按钮是否要渲染为选中状态

**Kind**: instance method of [<code>Button</code>](#Button)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| bool | <code>boolean</code> | 按钮是否要渲染为选中状态，取值为true需要渲染为选中状态，取值为false渲染为非选中状态 |

