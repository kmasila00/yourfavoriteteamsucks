var express = require('express');
var router = express.Router();
var db = require('../../db/');
var Promise = require('bluebird');
var Top10 = db.model('top10');

module.exports = router;

router.get('/', function(req,res,next){
	Top10.findAll()
	.then(function(list){
		res.status(200).send(list);
	});
});

router.put('/', function(req,res,next){
	// Top10.update(req.body)
	// .then(function(){
	// 	res.status(200)
	// })
	Top10.findOne({
		where:{
			Num: req.body.Num
		}
	})
	.then(function(one){
		one.Player = req.body.Player;
		one.Opp = req.body.Opp;
		one.save().then(function(){});
	})
});
