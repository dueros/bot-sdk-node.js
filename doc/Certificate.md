<a name="Certificate"></a>

## Certificate
认证

**Kind**: global class  

* [Certificate](#Certificate)
    * [new Certificate(headers, requestBody, privateKeyContent)](#new_Certificate_new)
    * [.enableVerifyRequestSign()](#Certificate+enableVerifyRequestSign) ⇒ <code>boolean</code>
    * [.disableVerifyRequestSign()](#Certificate+disableVerifyRequestSign) ⇒ <code>boolean</code>
    * [._getRequestPublicKey()](#Certificate+_getRequestPublicKey) ⇒
    * [.verifyRequest(null)](#Certificate+verifyRequest) ⇒
    * [.getRequestSig(null)](#Certificate+getRequestSig) ⇒

<a name="new_Certificate_new"></a>

### new Certificate(headers, requestBody, privateKeyContent)

| Param | Type | Description |
| --- | --- | --- |
| headers | <code>Object</code> | http请求的header |
| requestBody | <code>string</code> | 请求体 |
| privateKeyContent | <code>string</code> | 私钥. 用于请求DuerOS参数签名 |

<a name="Certificate+enableVerifyRequestSign"></a>

### certificate.enableVerifyRequestSign() ⇒ <code>boolean</code>
开启验证请求参数签名，阻止非法请求

**Kind**: instance method of [<code>Certificate</code>](#Certificate)  
**Access**: public  
<a name="Certificate+disableVerifyRequestSign"></a>

### certificate.disableVerifyRequestSign() ⇒ <code>boolean</code>
关闭验证请求参数签名

**Kind**: instance method of [<code>Certificate</code>](#Certificate)  
**Access**: public  
<a name="Certificate+_getRequestPublicKey"></a>

### certificate._getRequestPublicKey() ⇒
**Kind**: instance method of [<code>Certificate</code>](#Certificate)  
**Returns**: promise  
<a name="Certificate+verifyRequest"></a>

### certificate.verifyRequest(null) ⇒
验证请求者是否合法

**Kind**: instance method of [<code>Certificate</code>](#Certificate)  
**Returns**: promise  

| Param |
| --- |
| null | 

<a name="Certificate+getRequestSig"></a>

### certificate.getRequestSig(null) ⇒
**Kind**: instance method of [<code>Certificate</code>](#Certificate)  
**Returns**: string  

| Param |
| --- |
| null | 

