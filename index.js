var express = require('express');
var app = express();
var port = 4000;
var msg ="";

app.get("*",(req,res)=>{

  res.send('<h1>Hello world</h1>');

})

  app.listen(port,function(){
    console.log('The server is running, ' + ' please open your browser at http://localhost:%s',port);
    })