## Classes

<dl>
<dt><a href="#BaseButton">BaseButton</a> ⇐ <code><a href="#BaseButton">BaseButton</a></code></dt>
<dd><p>RadioButton 单选按钮</p>
</dd>
<dt><a href="#RadioButton">RadioButton</a></dt>
<dd></dd>
</dl>

<a name="BaseButton"></a>

## BaseButton ⇐ [<code>BaseButton</code>](#BaseButton)
RadioButton 单选按钮

**Kind**: global class  
**Extends**: [<code>BaseButton</code>](#BaseButton)  
<a name="RadioButton"></a>

## RadioButton
**Kind**: global class  
**Access**: public  

* [RadioButton](#RadioButton)
    * [new RadioButton(name, selectedValue)](#new_RadioButton_new)
    * [.setSelectedValue(selectedValue)](#RadioButton+setSelectedValue)

<a name="new_RadioButton_new"></a>

### new RadioButton(name, selectedValue)
RadioButton 构造方法.


| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | 控件名字 |
| selectedValue | <code>string</code> | 选中的选项值，设备端应该根据此选项值把对应的按钮渲染为选中状态 |

<a name="RadioButton+setSelectedValue"></a>

### radioButton.setSelectedValue(selectedValue)
设置选中的选项值

**Kind**: instance method of [<code>RadioButton</code>](#RadioButton)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| selectedValue | <code>string</code> | 选中的选项值 |

