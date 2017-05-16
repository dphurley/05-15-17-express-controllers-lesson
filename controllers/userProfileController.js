var express = require('express');

var userProfileRouter = express.Router();

userProfileRouter.get('/userProfile', function(req, res){
    //do stuff
});

userProfileRouter.get('/userProfile/:id', function(req, res){
    //do stuff
});

userProfileRouter.get('/userProfile/:id/edit', function(req, res){
    //do stuff
});

function doThings() {
	console.log('doing things');
}

module.exports = userProfileRouter;