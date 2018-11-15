# 1.0.9

* 增加监控统计功能

# 1.2.0

* 增加APP启动指令

* 增加音频控件和播放详情类

* 增加视频指令

* 增加模版渲染/用户提示指令

* 增加支付指令

# 1.2.2

* 修复BaseTemplate、BodyTemplate1静态变量声明
* 修复添加上报时间的变量覆盖
* 添加Audio/PlayerInfo媒体类型校验
* 添加Video/Play的播放行为类型校验
* 添加支付类型校验

# 1.2.3

* 添加单元测试
* doc 404

# 1.2.4

* fix addDefaultEventHandler

# 1.2.5

* 增加RenderAudioList
* 增加RenderVideoList

# 1.2.7
* 增加新的模版指令 BodyTemplate6、ListTemplate3、ListTemplate4
* 增加音频视频播放信息类 AudioPlayerInfoContent VideoPlayerInfoContent
* 增加标签类 (AmountTag)数量标签、(AuditionTag)试听标签、(CustomTag)自定义标签、(FreeTag)免费标签、(HotTag)热门标签、(NewTag)最新标签、(PayTag)支付标签、(PurchasedTag)购买标签、(TimeTag)时间标签、(VIPTag)VIP标签
* 增加端入栈指令 PushStack
* 增加用户授权指令 AskForPermissionsConsent
* 增加录音指令 RecordSpeech
* 增加浏览器访问指令 LaunchBrowser
* 增加TTS模版 TTSTemplate