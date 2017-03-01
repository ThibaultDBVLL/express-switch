var express = require("express");
var app = express();
var path = require ('path');
var fs = require('fs');
var bodyParser = require('body-parser');
var linkjson = require('./data/data.json')

app.use(express.static('public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// app.get("/", function(req, res){
//     res.sendFile(path.join("/public/index.html"));
// });

app.post('/post', function(req, res) {
	fs.readFile("data/data.json", 'utf-8', function(err, res) {
		if (err) {
			console.log("error")
		};
		var database = JSON.parse(sres);
		var len = database.articles.length;
		var newCustomer = req.body;

		newCustomer.id = len + 1
		database.customers.push(req.body);

		var newDatabase = JSON.stringify(database, null, 2)

		fs.writeFile("data/data.json", newDatabase, function(err) {
			if (err) {
				console.log("error")
			}
		});
	});
});


app.listen(1337, function(){
    console.log("Listen port 1337");
});
