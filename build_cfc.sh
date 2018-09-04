
rm -rf /tmp/template
mkdir -p  /tmp/template

cp cfc/index.js /tmp/template
cp cfc/package.json /tmp/template

cd /tmp/template

npm install bot-sdk --production --save

cd node_modules/bot-sdk
rm -rf doc_html data doc samples test script

cd -

# 打包
zip -r template.zip ./*
