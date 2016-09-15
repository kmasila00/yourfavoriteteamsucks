var express = require('express');
var router = express.Router();
var db = require('../../db/');
var Promise = require('bluebird');
var Rankings = db.model('rankings');

module.exports = router;

router.get('/qbs', function(req,res,next){
	Rankings.findAll({
		where:{
			Pos: 'QB'
		},
		order: '"Avg" ASC'
	})
	.then(function(found){
		res.status(200).send(found);
	})
});

router.get('/wrs', function(req,res,next){
	Rankings.findAll({
		where:{
			Pos: 'WR'
		},
		order: '"Avg" ASC'
	})
	.then(function(found){
		res.status(200).send(found);
	})
});

router.get('/rbs', function(req,res,next){
	Rankings.findAll({
		where:{
			Pos: 'RB'
		},
		order: '"Avg" ASC'
	})
	.then(function(found){
		res.status(200).send(found);
	})
});

router.get('/tes', function(req,res,next){
	Rankings.findAll({
		where:{
			Pos: 'TE'
		},
		order: '"Avg" ASC'
	})
	.then(function(found){
		res.status(200).send(found);
	})
});

router.get('/defs', function(req,res,next){
	Rankings.findAll({
		where:{
			Pos: 'DEF'
		},
		order: '"Avg" ASC'
	})
	.then(function(found){
		res.status(200).send(found);
	})
});

router.get('/ks', function(req,res,next){
	Rankings.findAll({
		where:{
			Pos: 'K'
		},
		order: '"Avg" ASC'
	})
	.then(function(found){
		res.status(200).send(found);
	})
});

router.put('/qbs', function(req,res,next){
	Rankings.findOne({
		where:{
			Pos: 'QB',
			Num: req.body.Num
		}
	})
	.then(function(one){
		one.Player = req.body.Player;
		one.Avg = req.body.Avg;
		one.Jason = req.body.Jason;
		one.Jack = req.body.Jack;
		one.Amoni = req.body.Amoni;
		one.Eddie = req.body.Eddie;
		one.Nick = req.body.Nick;
		one.save().then(function(){});
	})
});

router.put('/wrs', function(req,res,next){
	Rankings.findOne({
		where:{
			Pos: 'WR',
			Num: req.body.Num
		}
	})
	.then(function(one){
		one.Player = req.body.Player;
		one.Avg = req.body.Avg;
		one.Jason = req.body.Jason;
		one.Jack = req.body.Jack;
		one.Amoni = req.body.Amoni;
		one.Eddie = req.body.Eddie;
		one.Nick = req.body.Nick;
		one.save().then(function(){});
	})
});

router.put('/rbs', function(req,res,next){
	Rankings.findOne({
		where:{
			Pos: 'RB',
			Num: req.body.Num
		}
	})
	.then(function(one){
		one.Player = req.body.Player;
		one.Avg = req.body.Avg;
		one.Jason = req.body.Jason;
		one.Jack = req.body.Jack;
		one.Amoni = req.body.Amoni;
		one.Eddie = req.body.Eddie;
		one.Nick = req.body.Nick;
		one.save().then(function(){});
	})
});

router.put('/tes', function(req,res,next){
	Rankings.findOne({
		where:{
			Pos: 'TE',
			Num: req.body.Num
		}
	})
	.then(function(one){
		one.Player = req.body.Player;
		one.Avg = req.body.Avg;
		one.Jason = req.body.Jason;
		one.Jack = req.body.Jack;
		one.Amoni = req.body.Amoni;
		one.Eddie = req.body.Eddie;
		one.Nick = req.body.Nick;
		one.save().then(function(){});
	})
});

router.put('/defs', function(req,res,next){
	Rankings.findOne({
		where:{
			Pos: 'DEF',
			Num: req.body.Num
		}
	})
	.then(function(one){
		one.Player = req.body.Player;
		one.Avg = req.body.Avg;
		one.Jason = req.body.Jason;
		one.Jack = req.body.Jack;
		one.Amoni = req.body.Amoni;
		one.Eddie = req.body.Eddie;
		one.Nick = req.body.Nick;
		one.save().then(function(){});
	})
});

router.put('/ks', function(req,res,next){
	Rankings.findOne({
		where:{
			Pos: 'K',
			Num: req.body.Num
		}
	})
	.then(function(one){
		one.Player = req.body.Player;
		one.Avg = req.body.Avg;
		one.Jason = req.body.Jason;
		one.Jack = req.body.Jack;
		one.Amoni = req.body.Amoni;
		one.Eddie = req.body.Eddie;
		one.Nick = req.body.Nick;
		one.save().then(function(){});
	})
});