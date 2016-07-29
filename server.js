var path = require('path'),
	express = require('express'),
	app = express(),
	staticPath = path.normalize(__dirname),
	bodyParser = require('body-parser'),
	server = app.listen(7777);

app.use(express.static(staticPath));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

var footballers = [{
	"id": "0",
	"firstName": "Cristiano",
	"lastName": "Ronaldo",
	"email": "cristano@realmadrid.com"
}, {
	"id": "1",
	"firstName": "Lionel",
	"lastName": "Messi",
	"email": "messi@barcelona.sp"
}, {
	"id": "2",
	"firstName": "David",
	"lastName": "Beckham",
	"email": "beckham@united.co.uk"
}, {
	"id": "3",
	"firstName": "Andriy",
	"lastName": "Shevchenko",
	"email": "sheva@dynamo.ua"
}]

app.get('/footballers', function (req, res) {
	res.send(footballers);
});

app.delete('/footballers/:id', function(req, res) {
	footballers.splice(req.params.id, 1);	
});

app.put('/footballers/:id', function(request, response) {	
	var footballerData = request.body;
	console.log(footballerData);
	for (var i = 0; i < footballers.length; i++) {
		if (footballers[i].id === request.params.id) {
			footballers[i].firstName = footballerData.firstName,
			footballers[i].lastName = footballerData.lastName,
			footballers[i].email = footballerData.email
		}		
	}	
});

module.exports = app;