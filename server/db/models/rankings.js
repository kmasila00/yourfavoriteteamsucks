'use strict';
var Sequelize = require('sequelize');
var db = require('../_db');

var rankings = db.define('rankings',{
	Pos: Sequelize.STRING,
	Num: Sequelize.INTEGER,
	Player: Sequelize.STRING,
	Avg: Sequelize.DECIMAL,
	Jason: Sequelize.INTEGER,
	Jack: Sequelize.INTEGER,
	Amoni: Sequelize.INTEGER,
	Eddie: Sequelize.INTEGER,
	Nick: Sequelize.INTEGER
});

rankings.hook('afterUpdate', function(ranking){
	ranking.Avg = (ranking.Jason + ranking.Jack + ranking.Amoni + ranking.Eddie + ranking.Nick) / 6;
})

module.exports = {
	rankings: rankings
}