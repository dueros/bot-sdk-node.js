## Classes

<dl>
<dt><a href="#BaseDirective">BaseDirective</a></dt>
<dd><p>Charge 用于生成Charge指令的类</p>
</dd>
<dt><a href="#Charge">Charge</a></dt>
<dd></dd>
</dl>

<a name="BaseDirective"></a>

## BaseDirective
Charge 用于生成Charge指令的类

**Kind**: global class  
<a name="Charge"></a>

## Charge
**Kind**: global class  

* [Charge](#Charge)
    * [new Charge(amount, sellerOrderId, productName, description)](#new_Charge_new)
    * [.setToken(token)](#Charge+setToken)
    * [.getToken()](#Charge+getToken) ⇒ <code>string</code>
    * [.setAmount(amount, currencyCode)](#Charge+setAmount)
    * [.setSellerAuthorizationNote(sellerAuthorizationNote)](#Charge+setSellerAuthorizationNote)
    * [.setSellerOrderId(sellerOrderId)](#Charge+setSellerOrderId)
    * [.setProductName(productName)](#Charge+setProductName)
    * [.setDescription(description)](#Charge+setDescription)
    * [.setSellerNode(sellerNode)](#Charge+setSellerNode)

<a name="new_Charge_new"></a>

### new Charge(amount, sellerOrderId, productName, description)
Charge构造方法


| Param | Type | Description |
| --- | --- | --- |
| amount | <code>string</code> | 数量 |
| sellerOrderId | <code>string</code> | 卖家ID |
| productName | <code>string</code> | 产品名称 |
| description | <code>string</code> | 描述 |

<a name="Charge+setToken"></a>

### charge.setToken(token)
设置directive的token. 默认在构造时自动生成了token，可以覆盖

**Kind**: instance method of [<code>Charge</code>](#Charge)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>string</code> | 视频的token |

<a name="Charge+getToken"></a>

### charge.getToken() ⇒ <code>string</code>
获取directive的token. 默认在构造时自动生成了token

**Kind**: instance method of [<code>Charge</code>](#Charge)  
**Returns**: <code>string</code> - token  
**Access**: public  
<a name="Charge+setAmount"></a>

### charge.setAmount(amount, currencyCode)
set amount

**Kind**: instance method of [<code>Charge</code>](#Charge)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| amount | <code>string</code> | 数量 |
| currencyCode | <code>string</code> | 币种 |

<a name="Charge+setSellerAuthorizationNote"></a>

### charge.setSellerAuthorizationNote(sellerAuthorizationNote)
设置sellerAuthorizationNote

**Kind**: instance method of [<code>Charge</code>](#Charge)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| sellerAuthorizationNote | <code>string</code> | 卖家授权 |

<a name="Charge+setSellerOrderId"></a>

### charge.setSellerOrderId(sellerOrderId)
set sellerOrderId

**Kind**: instance method of [<code>Charge</code>](#Charge)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| sellerOrderId | <code>string</code> | 卖家ID |

<a name="Charge+setProductName"></a>

### charge.setProductName(productName)
set productName

**Kind**: instance method of [<code>Charge</code>](#Charge)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| productName | <code>string</code> | 商品名称 |

<a name="Charge+setDescription"></a>

### charge.setDescription(description)
set description

**Kind**: instance method of [<code>Charge</code>](#Charge)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| description | <code>string</code> | 描述 |

<a name="Charge+setSellerNode"></a>

### charge.setSellerNode(sellerNode)
set sellerNode

**Kind**: instance method of [<code>Charge</code>](#Charge)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| sellerNode | <code>string</code> | sellerNode |

