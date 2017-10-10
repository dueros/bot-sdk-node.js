const jsdoc2md = require("jsdoc-to-markdown");
const fs = require('fs');
const path = require('path');

const src = path.normalize(__dirname + '/../lib');

let apiPath = path.dirname(src) + '/doc'; 


function deleteall(path) {  
    var files = [];  
    if(fs.existsSync(path)) {  
        files = fs.readdirSync(path);  
        files.forEach(function(file, index) {  
            var curPath = path + "/" + file;  
            if(fs.statSync(curPath).isDirectory()) { // recurse  
                deleteall(curPath);  
            } else { // delete file  
                fs.unlinkSync(curPath);  
            }  
        });  
        fs.rmdirSync(path);  
    }  
} 

let apiDoc = function(dir, docPath) {
    let obj = {};
    let files = fs.readdirSync(dir);

    for (let file of files) {
        let filename = dir + '/' + file;
        if (fs.statSync(filename).isDirectory()) {
            let doc = docPath + '/' + file;
            fs.mkdirSync(doc);
            apiDoc(filename, doc); 
            continue;
        }

        let docFile = docPath + '/' + file.replace('.js', '.md');
        //fs.createReadStream(filename).pipe(jsdoc2md()).pipe(fs.createWriteStream(docFile));
        let templateData = jsdoc2md.getTemplateDataSync({ files: filename});
        let output = jsdoc2md.renderSync({ data: templateData, 'example-lang': 'javascript'});
        fs.writeFileSync(docFile, output);
        console.log(`gen api doc ${filename}`);
    }
};

deleteall(apiPath);
fs.mkdirSync(apiPath);

apiDoc(src, apiPath);
