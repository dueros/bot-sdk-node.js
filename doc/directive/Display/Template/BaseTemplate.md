## Classes

<dl>
<dt><a href="#BaseDirective">BaseDirective</a> ⇐ <code><a href="#BaseDirective">BaseDirective</a></code></dt>
<dd><p>BaseTemplate 基础模版类</p>
</dd>
<dt><a href="#BaseTemplate">BaseTemplate</a></dt>
<dd></dd>
</dl>

<a name="BaseDirective"></a>

## BaseDirective ⇐ [<code>BaseDirective</code>](#BaseDirective)
BaseTemplate 基础模版类

**Kind**: global class  
**Extends**: [<code>BaseDirective</code>](#BaseDirective)  
<a name="new_BaseDirective_new"></a>

### new BaseDirective()
Copyright (c) 2017 Baidu, Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

'use strict';

/**

<a name="BaseTemplate"></a>

## BaseTemplate
**Kind**: global class  

* [BaseTemplate](#BaseTemplate)
    * [new BaseTemplate(fields)](#new_BaseTemplate_new)
    * [.setBackGroundImage(url, widthPixels, heightPixels)](#BaseTemplate+setBackGroundImage)
    * [.createImageStructure(url, widthPixels, heightPixels)](#BaseTemplate+createImageStructure) ⇒ <code>Object</code>
    * [.createTextStructure(content, type)](#BaseTemplate+createTextStructure) ⇒ <code>Object</code>

<a name="new_BaseTemplate_new"></a>

### new BaseTemplate(fields)
BaseTemplate constructor.


| Param | Type | Description |
| --- | --- | --- |
| fields | <code>Array</code> | 生成属性对应的set方法 |

<a name="BaseTemplate+setBackGroundImage"></a>

### baseTemplate.setBackGroundImage(url, widthPixels, heightPixels)
设置背景图片

**Kind**: instance method of [<code>BaseTemplate</code>](#BaseTemplate)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | 图片地址 |
| widthPixels | <code>string</code> | 图片的像素宽 |
| heightPixels | <code>string</code> | 图片的像素高 |

<a name="BaseTemplate+createImageStructure"></a>

### baseTemplate.createImageStructure(url, widthPixels, heightPixels) ⇒ <code>Object</code>
构造图片结构体

**Kind**: instance method of [<code>BaseTemplate</code>](#BaseTemplate)  
**Returns**: <code>Object</code> - 图片对象  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | 图片地址 |
| widthPixels | <code>string</code> | 图片的像素宽 |
| heightPixels | <code>string</code> | 图片的像素高 |

<a name="BaseTemplate+createTextStructure"></a>

### baseTemplate.createTextStructure(content, type) ⇒ <code>Object</code>
构造文本结构体

**Kind**: instance method of [<code>BaseTemplate</code>](#BaseTemplate)  
**Returns**: <code>Object</code> - 文本对象  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| content | <code>string</code> | 文本内容 |
| type | <code>string</code> | 文本类型 |

