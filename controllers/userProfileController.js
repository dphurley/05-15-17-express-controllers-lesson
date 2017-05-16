var express = require('express');

var userProfileRouter = express.Router();

userProfileRouter.get('/', function(req, res){
	console.log('getting all of the User Profiles');
	res.send('All of the User Profiles!');
});

userProfileRouter.get('/:id', function(req, res){
   	console.log('getting one User Profile');
	res.send('Getting User Profile with the ID of ' + req.params.id); 
});

userProfileRouter.get('/:id/edit', function(req, res){
    console.log('editing one User Profile');
	res.send('Editing User Profile with the ID of ' + req.params.id);
});

module.exports = userProfileRouter;