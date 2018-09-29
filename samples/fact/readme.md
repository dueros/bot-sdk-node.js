# 小知识技能模板

小知识技能模板是针对知识类技能设计的模板，如足球小知识，篮球小知识等。本文从小知识类技能交互、部署讲述如何快速搭建小知识类技能。 


## 小知识技能模板的交互模型

小知识类技能跟用户的交互很简单。技能从小知识列表中选取一条读给用户，用户可以说“下一条”继续听，或者说“退出”以结束交互。

## 使用模板开发技能的流程
### 新建技能

新建技能详情请参阅[自定义技能创建](https://dueros.baidu.com/didp/doc/dueros-bot-platform/dbp-custom/create-custom-skill_markdown)
### 配置意图

意图配置详情请参阅[意图、常用表达和槽位](https://dueros.baidu.com/didp/doc/dueros-bot-platform/dbp-nlu/intents_markdown)

小知识技能模板需要创建“下一条知识”意图。
下一条知识意图如下图所示：

![下一条知识意图](http://dbp-resource.gz.bcebos.com/892a7571-8a1f-52d6-3732-03413d9d0d29/next_fact.png?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2018-09-29T02%3A28%3A28Z%2F-1%2F%2F8d44f0368c6b150392cca715d664c96e10d7a9d39fc121cc0d2d0d296632003a)

### 配置技能服务部署

小知识技能模板使用CFC部署技能服务。使用CFC部署技能服务详情请参阅 [百度云CFC](https://dueros.baidu.com/didp/doc/dueros-bot-platform/dbp-deploy/cfc-deploy_markdown)

### 修改CFC函数代码
开发者通过模板创建函数以后，可在线编辑函数。具体流程如下：

* 在CFC控制台通过模板创建函数, 选择node.js DuerOS Bot SDK模板
* 将小知识技能模板中的index.js文件内容覆盖在线编辑框中代码
* 保存

CFC操作说明请参阅[函数计算 CFC](https://cloud.baidu.com/doc/CFC/GettingStarted.html#.E4.BB.8E.E6.A8.A1.E6.9D.BF.E5.88.9B.E5.BB.BA.E5.87.BD.E6.95.B0)

### 测试技能
至此，小知识技能就开发完成了。开发者可以在技能开放平台的模拟测试页面对技能进行测试。