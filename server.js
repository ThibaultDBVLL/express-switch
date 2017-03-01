var express = require("express");
var app = express();
var path = require ('path');
var fs = require('fs');
var bodyParser = require('body-parser');

app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: true}));

app.use (bodyParser.json());

app.get("/", function(req, res){
    res.sendFile(path.join("/public/index.html"));
});

app.post("/post/article", function(req, res){
    res.send ('article posté');
    })

app.listen(1337, function(){
    console.log("Listen port 1337");
});
