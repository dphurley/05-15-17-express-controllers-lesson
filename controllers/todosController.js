var express = require('express');

var router = express.Router();

router.get('/', function(req, res){
	console.log('getting all of the todos');
	res.send('All of the todos!');
});

router.get('/:id', function(req, res){
   	console.log('getting one todo');
	res.send('Getting todo with the ID of ' + req.params.id); 
});

router.get('/:id/edit', function(req, res){
    console.log('editing one todo');
	res.send('Editing todo with the ID of ' + req.params.id);
});

module.exports = router;
