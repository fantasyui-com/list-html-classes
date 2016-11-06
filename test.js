#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
let resolvedPath = path.resolve('./test.html');
let html = fs.readFileSync(resolvedPath, { encoding: 'utf8' });
require(__dirname+'/index.js')({html}).then(result=>{
  if(JSON.stringify(result.classNames) === `["container","lead","row","col-xs-4","col-sm-4","col-md-4","col-lg-4","col-xl-4","col-md-3","col-md-6","col-md-8","text-warning","col-xs-12","col-xs-6","col-sm-6","col-lg-8","col-sm-3","clearfix","hidden-sm-up","col-sm-5","offset-sm-2","offset-md-0","col-md-5","col-lg-6","offset-md-2","offset-lg-0"]`){
    process.exit();
  }else{
    process.exit(1);
  }
})
