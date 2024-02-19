var express = require('express');
var app = express();
var port = 4000;
var msg ="";

app.get("*",(req,res)=>{

  res.send('<h1>Hello world</h1>');

})

const port = process.env.PORT || 8080

app.listen(port, (err, res) => {
    if (err) {
        console.log(err)
        return res.status(500).send(err.message)
    } else {
        console.log('[INFO] Server Running on port:', port)
    }
})