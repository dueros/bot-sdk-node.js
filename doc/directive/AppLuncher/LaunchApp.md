<a name="LaunchApp"></a>

## LaunchApp
**Kind**: global class  

* [LaunchApp](#LaunchApp)
    * [new LaunchApp(appName, packageName, deepLink)](#new_LaunchApp_new)
    * [.setToken(token)](#LaunchApp+setToken)
    * [.getToken()](#LaunchApp+getToken) ⇒ <code>string</code>
    * [.setAppName(appName)](#LaunchApp+setAppName)
    * [.setPackageName(packageName)](#LaunchApp+setPackageName)
    * [.setDeepLink(deepLink)](#LaunchApp+setDeepLink)

<a name="new_LaunchApp_new"></a>

### new LaunchApp(appName, packageName, deepLink)
LaunchApp构造函数


| Param | Type | Description |
| --- | --- | --- |
| appName | <code>string</code> | 应用的名称 |
| packageName | <code>string</code> | 应用的包名 |
| deepLink | <code>string</code> | 打开应用指定功能     注意：以上appName，packageName和deepLink三个参数至少一个 |

<a name="LaunchApp+setToken"></a>

### launchApp.setToken(token)
设置directive的token. 默认在构造时自动生成了token，可以覆盖

**Kind**: instance method of [<code>LaunchApp</code>](#LaunchApp)  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>string</code> | token |

<a name="LaunchApp+getToken"></a>

### launchApp.getToken() ⇒ <code>string</code>
获取directive的token. 默认在构造时自动生成了token

**Kind**: instance method of [<code>LaunchApp</code>](#LaunchApp)  
**Returns**: <code>string</code> - token  
<a name="LaunchApp+setAppName"></a>

### launchApp.setAppName(appName)
设置应用的名称

**Kind**: instance method of [<code>LaunchApp</code>](#LaunchApp)  

| Param | Type | Description |
| --- | --- | --- |
| appName | <code>string</code> | 应用的名称 |

<a name="LaunchApp+setPackageName"></a>

### launchApp.setPackageName(packageName)
设置应用的包名

**Kind**: instance method of [<code>LaunchApp</code>](#LaunchApp)  

| Param | Type | Description |
| --- | --- | --- |
| packageName | <code>string</code> | 应用的包名 |

<a name="LaunchApp+setDeepLink"></a>

### launchApp.setDeepLink(deepLink)
设置deepLink

**Kind**: instance method of [<code>LaunchApp</code>](#LaunchApp)  

| Param | Type | Description |
| --- | --- | --- |
| deepLink | <code>string</code> | 应用指定功能 |

