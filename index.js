var express = require('express');
var app = express();

var path = require('path');
var bodyParser = require('body-parser');
var server = require('http').Server(app);

app.use(express.static(path.join(__dirname,'public')));
app.use('/nm',express.static(path.join(__dirname,'node_modules')));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'public','views','index.html'));
})

app.listen(1357,function(){
    console.log('Connected to server at port 1357');
});