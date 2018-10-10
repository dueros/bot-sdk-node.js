# 指南技能模板

指南技能模板是针对指南类技能设计的模板，如鸡尾酒大全技能，术语解释技能等。本文以鸡尾酒大全技能为例，从技能交互、技能CFC部署讲述如何快速搭建指南类技能。


## 指南技能模板的交互模型

指南类技能存储了相关的知识名称和知识详细介绍。当用户说出了想要了解的知识名称后，指南类技能向用户读出该知识的详细介绍。

下面以`鸡尾酒大全`技能为例，描述指南类技能与用户交互过程：

>**用户**：打开鸡尾酒大全
>**技能**：欢迎使用鸡尾酒大全!我知道很多鸡尾酒的做法，你可以对我说：血腥玛丽怎么做？
>**用户**：血腥玛丽怎么做？
>**技能**：伏特加1份，番茄汁3份。。。

## 使用模板开发技能的流程
### 新建技能

新建技能详情请参阅[自定义技能创建](https://dueros.baidu.com/didp/doc/dueros-bot-platform/dbp-custom/create-custom-skill_markdown)
### 配置意图

意图配置详情请参阅[意图、常用表达和槽位](https://dueros.baidu.com/didp/doc/dueros-bot-platform/dbp-nlu/intents_markdown)

鸡尾酒大全技能需要创建“获取做法”意图。
获取做法意图如下图所示：

![获取做法意图](http://dbp-resource.gz.bcebos.com/3cf53f8d-cb32-916a-b972-c07dfb2967f1/intent_inquiry.jpeg?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2018-10-08T05%3A57%3A30Z%2F-1%2F%2F65bb56350f60897126f842ea57c7b8bb44b9a79425be894fcd83845e90c63da0)

另外，为处理用户直接说鸡尾酒名称的用例，鸡尾酒大全技能还引用了[系统缺省意图](https://developer.dueros.baidu.com/didp/doc/dueros-bot-platform/dbp-nlu/defaultIntent_markdown)。
![意图列表](http://dbp-resource.gz.bcebos.com/3cf53f8d-cb32-916a-b972-c07dfb2967f1/default_intent.jpeg?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2018-10-08T06%3A01%3A12Z%2F-1%2F%2F26e798da08339c99343b09e38a2f7e325df914eb426e99b930e0c2590ca0f046)

### 配置技能服务部署

指南类技能模板使用CFC部署技能服务。使用CFC部署技能服务详情请参阅 [百度云CFC](https://dueros.baidu.com/didp/doc/dueros-bot-platform/dbp-deploy/cfc-deploy_markdown)

### 修改CFC函数代码
开发者通过模板创建函数以后，可在线编辑函数。具体流程如下：

* 在CFC控制台通过模板创建函数, 选择node.js DuerOS Bot SDK模板
* 将小知识技能模板中的index.js文件内容覆盖在线编辑框中代码
* 保存

CFC操作说明请参阅[函数计算 CFC](https://cloud.baidu.com/doc/CFC/GettingStarted.html#.E4.BB.8E.E6.A8.A1.E6.9D.BF.E5.88.9B.E5.BB.BA.E5.87.BD.E6.95.B0)

### 测试技能
至此，指南类技能就开发完成了。开发者可以在技能开放平台的模拟测试页面对技能进行测试。