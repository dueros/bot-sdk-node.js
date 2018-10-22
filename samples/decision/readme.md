# 测试类技能模板

测试类技能模板是针对测试类技能设计的模板，如职业推荐技能，心理测试技能等。本文以职业推荐技能为例，从技能交互、技能CFC部署讲述如何快速搭建测试类技能。


## 测试类技能模板的交互模型

测试类技能会向用户提出几个与测试主题相关的问题，当用户回答了所有的问题以后，技能会向用户播报测试结果。

下面以`职业推荐`技能为例，描述测试类技能与用户交互过程：

>**用户**：打开职业推荐
>**技能**：欢迎使用职业推荐!我会问你四个问题，然后根据你的回答像你推荐适合你的职业。现在跟我说开始测试吧！
>**用户**：开始测试
>**技能**：你觉得钱非常重要，不那么重要还是不重要？
>**用户**：重要
>**技能**：[其他问题]
>**用户**：[答案]
>**技能**：你觉得钱很重要，[其他问题的答案]。我们建议你考虑[推荐结果]。

## 使用模板开发技能的流程
### 新建技能

新建技能详情请参阅[自定义技能创建](https://dueros.baidu.com/didp/doc/dueros-bot-platform/dbp-custom/create-custom-skill_markdown)
### 配置意图

意图配置详情请参阅[意图、常用表达和槽位](https://dueros.baidu.com/didp/doc/dueros-bot-platform/dbp-nlu/intents_markdown)

职业推荐技能需要创建“职业推荐”意图。该意图有四个必选槽位，分别是：
- money：对金钱的态度
- personality：个性信息
- likes：喜欢动物还是喜欢人
- blood：是否晕血

职业推荐意图第一页如下图所示：
![职业推荐意图](http://dbp-resource.gz.bcebos.com/98eb6cd4-c926-6202-c82f-689c7e2ccb6b/intent1.jpeg?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2018-10-18T06%3A19%3A17Z%2F-1%2F%2F0e73d8bead104bc61a9343dcd5fba02ee1d95498184f0464ee14140a26fb6340)

职业推荐意图第二页如下图所示：
![职业推荐意图](http://dbp-resource.gz.bcebos.com/98eb6cd4-c926-6202-c82f-689c7e2ccb6b/intent2.jpeg?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2018-10-18T06%3A19%3A17Z%2F-1%2F%2Fd0492e16d119772910385afab3176480cc47d64c5d31b2c222c005d8b7b77f5e)

这里我们[委托DuerOS的方式](https://developer.dueros.baidu.com/didp/doc/dueros-bot-platform/dbp-nlu/defaultIntent_markdown)来完成这四个必填槽位的追问。必填槽位具体设置如下图所示：
![职业推荐意图必填槽位](http://dbp-resource.gz.bcebos.com/98eb6cd4-c926-6202-c82f-689c7e2ccb6b/intent3.jpeg?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2018-10-18T06%3A19%3A17Z%2F-1%2F%2Fffb8dd90a876cd13290d8d1c1be89b37366c25341584e2c39d3f25e885aa1194)

另外，职业推荐技能还引用了[系统缺省意图](https://developer.dueros.baidu.com/didp/doc/dueros-bot-platform/dbp-nlu/defaultIntent_markdown)已处理可能出现的意外对话。

### 配置词典

词典配置详情请参阅[词典文档](https://developer.dueros.baidu.com/didp/doc/dueros-bot-platform/dbp-nlu/entities_markdown)。

职业推荐技能针对每一个问题的答案都设置了词典，并且在词典中对期望的用户回答设置了同义词以实现以保证用户回答的归一性。

词典列表如下图所示：
![词典列表](http://dbp-resource.gz.bcebos.com/98eb6cd4-c926-6202-c82f-689c7e2ccb6b/diclist.jpeg?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2018-10-18T06%3A19%3A17Z%2F-1%2F%2Fc19f8623dcb506a22e63e92284261b5a7d556f540a7a731970b6c013f5f22982)

钱重要性(money)词典设置如下图所示：
![钱重要性(money)词典](http://dbp-resource.gz.bcebos.com/98eb6cd4-c926-6202-c82f-689c7e2ccb6b/money.jpeg?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2018-10-18T06%3A19%3A17Z%2F-1%2F%2Fae6f4aef44721272760c2cb949ca41776ee56384bfa1a1593bcf3e2a52d41f5a)

性格特点(personality)词典设置如下图所示：
![性格特点(personality)词典](http://dbp-resource.gz.bcebos.com/98eb6cd4-c926-6202-c82f-689c7e2ccb6b/person.jpeg?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2018-10-18T06%3A19%3A17Z%2F-1%2F%2Feef732db2c9b36e598f725eaa6b642054c3f0a79f2e272cb7b9e7652449f8874)

喜欢动物(likes)词典设置如下图所示：
![喜欢动物(likes)词典](http://dbp-resource.gz.bcebos.com/98eb6cd4-c926-6202-c82f-689c7e2ccb6b/like.jpeg?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2018-10-18T06%3A19%3A17Z%2F-1%2F%2F4b0054ac24c64e2903f00850a829724d30ee63c68f7eb2e476b69397cbfd00e4)

晕血(blood)词典设置如下图所示：
![晕血(blood)词典](http://dbp-resource.gz.bcebos.com/98eb6cd4-c926-6202-c82f-689c7e2ccb6b/blood.jpeg?authorization=bce-auth-v1%2Fa4d81bbd930c41e6857b989362415714%2F2018-10-18T06%3A19%3A17Z%2F-1%2F%2F7d5807a676c3d8b4905f602d32c42f6f5544b83ca86ff55a1cc530c9c85811db)

### 配置技能服务部署

测试类技能模板使用CFC部署技能服务。使用CFC部署技能服务详情请参阅 [百度云CFC](https://dueros.baidu.com/didp/doc/dueros-bot-platform/dbp-deploy/cfc-deploy_markdown)

### 修改CFC函数代码
开发者通过模板创建函数以后，可在线编辑函数。具体流程如下：

* 在CFC控制台通过模板创建函数, 选择node.js DuerOS Bot SDK模板
* 将测试类技能模板中的index.js文件内容覆盖在线编辑框中代码
* 保存

CFC操作说明请参阅[函数计算 CFC](https://cloud.baidu.com/doc/CFC/GettingStarted.html#.E4.BB.8E.E6.A8.A1.E6.9D.BF.E5.88.9B.E5.BB.BA.E5.87.BD.E6.95.B0)

### 测试技能
至此，测试类技能就开发完成了。开发者可以在技能开放平台的模拟测试页面对技能进行测试。