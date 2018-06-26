cd $(dirname $0)
dir=$(pwd)
node $dir/$1 |xargs -0 -i curl -H "Content-Type: application/json" -XPOST -d{} http://0.0.0.0:8016
