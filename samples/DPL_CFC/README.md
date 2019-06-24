# 说明
这个DPL的样例比较完整的展示了DPL的页面构建以及交互的实现，涉及11种组件(9种基础组件+2种复合组件)和8种常见的交互Command。
组件：Text、Image、Container、Frame、List、Pager、ScrollView、Audio、Video、Header、Footer。
交互Command： AutoPage、SetPage、Scroll、ScrollToIndex、Animation、ControlMedia、SendEvent、SetState、Parallel。
页面交互的部分支持：页面点击和通过query控制
后续组件变更时候会定期更新此demo， 使用前请先配置好列表中的意图，运行服务后在小度在家有屏系列产品上体验。

## 如何运行demo
#### 1. 在DBP技能开发平台创建一个技能 如: 技能名称：DPL例子， 调用名称：上海，调用名称在调试模式下可以自定义。
#### 2. 给新建技能创建demo中需要的意图，demo中一共有14个意图, 具体配置可以如下：
在配置意图之前需要配置一个自定义词典：pageDirection, 词条： 上、下、左(前）、右(后)

| 意图中文名        | 意图标识名    |常用表达|
| :--------:       | :-----:   | :----: |
| 简单图片      |     dpl_demo1      |  简单图片  |
| 长文本      |     dpl_demo2     |  长文本  |
| 短文本      |     dpl_demo3      |  短文本  |
| 右图详情      |     dpl_demo4      |  右图  |
| 左图详情      |     dpl_demo5      |  左图详情／左图  |
| 横向列表      |     dpl_demo6      |  横向列表  |
| 视频相册      |     dpl_demo7      |  视频相册  |
| 回到列表顶部      |  go_list_top |  回到列表顶部/返回列表顶部  |
| 收藏这个视频      |  favourite_video|  收藏／喜欢／收藏这个视频  |
| 下拉查看更多      |  pull_scrollview      |  滚动／继续滚动／下拉  |
| 视频继续播放      |  video_continue      |  继续播放／播放  |
| 暂停播放      |     pause_video      |  暂停／暂停播放  |
| 滑动列表(引用pageDirection词典) |     move_list      |  向下滑动列表／向上滑动列表  |
| 左右翻页      |     move_page      |  向左翻页／向右翻页 |


#### 3. 进入DPL_CFC,  npm install 下载安装依赖
#### 4. 将demo服务地址配置CFC, 方法是直接导入第3步骤的DPL_CFC zip包
#### 5. 在小度在家或者小度在家1S上绑定自己的开发者账户，进行如下操作：
     1.打开技能调试模式 2.打开上海 3. query：简单图片／长文本／短文本／右图／左图详情／横向列表／视频相册

