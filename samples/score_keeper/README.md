# 比赛计分技能使用说明

帮助记分员记分，支持负分（可用于比赛，游戏等）

## 本地把服务起来

```shell

# 默认监控8016端口
../scripts/control.sh start

```

## 发送模拟数据

part 里是不同的模拟数据，可以用作本地调试

```shell

# 打开技能，模拟发生lanuch request
../scripts/test.sh part/launch.js

# 增加选手
../scripts/test.sh part/add_player.js

# 给选手加分
../scripts/test.sh part/add_score.js

# 减分
../scripts/test.sh part/minus_score.js

# 查询选手得分情况
../scripts/test.sh part/query_players.js

# 删除选手
../scripts/test.sh part/remove_player.js

# 退出记分，删除redis数据
../scripts/test.sh part/exit_score.js

# 结束会话
../scripts/test.sh part/end.js

```
