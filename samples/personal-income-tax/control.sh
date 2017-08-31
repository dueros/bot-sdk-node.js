#!/bin/bash

action=$1
port=8014

if [ "${action}" == "start" ]; then
    nohup node index.js &
fi

if [ "${action}" == "stop" ]; then
    pid=$(netstat -tlnp|grep $port|awk '{print $7}'|awk -F '/' '{print$1}')
    kill -9 $pid
fi

if [ "${action}" == "restart" ]; then
    pid=$(netstat -tlnp|grep $port|awk '{print $7}'|awk -F '/' '{print$1}')
    kill -9 $pid
    nohup node index.js &
fi

