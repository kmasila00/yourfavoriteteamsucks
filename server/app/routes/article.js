var express = require('express');
var router = express.Router();
var db = require('../../db/');
var Promise = require('bluebird');
var Article = db.model('article');

module.exports = router;

router.get('/', function(req,res,next){
	Article.findAll({
		order: '"createdAt" ASC'
	})
	.then(function(articles){
		res.status(200).send(articles);
	})
	.catch(next);
});

router.get('/:id', function(req,res,next){
	Article.findOne({
		where:{
			id: req.params.id
		}
	})
	.then(function(article){
		res.status(200).send(article);
	})
})

router.get('/author/:author', function(req,res,next){
	console.log(req.params.author);
	Article.findAll({
		where:{
			Author: req.params.author
		}
	})
	.then(function(articles){
		res.status(200).send(articles);
	})
})

router.post('/', function(req,res,next){
	Article.create(req.body)
	.then(function(){
		res.send(201);
	})
	.catch(next);
});

