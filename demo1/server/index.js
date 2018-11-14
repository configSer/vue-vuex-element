
const express = require("express");
const data = require("./data.json");
const app = express();

app.all('*', function (req, res, next) {
//响应头指定了该响应的资源是否被允许与给定的origin共享。*表示所有域都可以访问，同时可以将*改为指定的url，表示只有指定的url可以访问到资源
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    //允许请求资源的方式
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.get('/',function(req,res,next){
    res.send(`<h1>Hello World !!!</h1>`)
    next();
});

app.get('/data',function(req,res,next){
    res.send(data);
    next();
});

app.listen(9395,function(){
    console.log("open in port 9395");
});
