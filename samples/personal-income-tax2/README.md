# 查个税demo2说明

此个税查询的demo增加了槽位和意图的确认、汉语拼音转换、API调用功能

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

# 让用户确认城市槽位
../scripts/test.sh part/test-city-confirm.js

# 让用户确认工资槽位
../scripts/test.sh part/test-salary-confirm.js

# 让用户确认意图
../scripts/test.sh part/test-intent-confirm.js

# 查询个税，返回结果
../scripts/test.sh part/test-query-tax.js


```
