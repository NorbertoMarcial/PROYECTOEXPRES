var express = require('express');
var port = 8080;
var app = express();
var dataUsers = [ 
	{ name: "ROP", hobbies : ["sleep"]},
	{ name: "ROP1", hobbies : ["work"]},
	{ name: "ROP2", hobbies : ["living"]},
	{ name: "ROP5", hobbies : ["play"]},
];

app.get('/users', function(req, res) {
console.log(dataUsers);
res.send(dataUsers);
 });


app.get('/', function(req, res) {
console.log("GET REQUEST");
res.send("GET REQUEST");
 });

// localhost:8080/


app.get('/user/:username', function(req, res) {
console.log(req.params.username);
res.send(req.params.username);
 });
	
app.post('/', function(req, res) {
console.log("POST  EXPRESS APP");
res.send("POST Express app");
 });



app.listen( port, function(){
	console.log("Aplicación en ejecución")
})




