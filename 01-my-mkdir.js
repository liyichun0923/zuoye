#!/usr/bin/node

var fs = require('fs');

var argv1  = process.argv[2];

var dir = process.argv[3];

if(argv1 == 'mkdir'){
  fs.mkdirSync(dir);
}

if(argv1 == 'list'){
  var fileNames = fs.readdirSync('.');
  fileNames.forEach(function(fileName){                  
    fs.stat('./'+fileName,(error,stats)=>{
      if(error){
        return 0;
      }else{
        console.log('{ "fileName": ' + '"' + fileName + '" , ' + '"fileSize": ' + '"' +  stats.size + '" }');
      }
    });
  });
}

if(argv1 != 'mkdir' && argv1 != 'list'){
  console.log('命令行参数输入错误！！！');
  process.exit(1);
}
