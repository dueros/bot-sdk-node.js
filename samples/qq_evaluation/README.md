# QQ号测吉凶功能demo

实现根据QQ号测吉凶功能

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

# 询问QQ号
../scripts/test.sh part/ask_qqNumber.js

# 执行查询，技能返回结果
../scripts/test.sh part/create.js

# 结束会话
../scripts/test.sh part/end.js


```
