# 音乐播放demo说明

这是一个简单的音乐播放器，支持音乐播放、暂停、上一曲、下一曲、继续播放

## 本地把服务起来

```shell

# 默认监控8016端口
../scripts/control.sh start

```

## 发送模拟数据

part里是不同的模拟数据，可以用作本地调试

```shell

# 打开技能，模拟发生lanuch request
../scripts/test.sh part/launch.js

# 播放音乐
../scripts/test.sh part/play.js

# 暂停播放
../scripts/test.sh part/pause.js

# 继续播放
../scripts/test.sh part/event-playback-started.js

# 播放上一首
../scripts/test.sh part/previous.js

# 播放下一首
../scripts/test.sh part/next.js

```
