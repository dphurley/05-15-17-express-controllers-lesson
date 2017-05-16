var express = require('express');

var todosController = require('./controllers/todosController.js');
var userProfileController = require('./controllers/userProfileController.js')

var app = express();

app.use('/todos', todosController);
app.use('/userProfile', userProfileController);

app.listen(3000, function () {
	console.log('Server is running on port 3000!');
});