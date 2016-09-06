'use strict';
var Sequelize = require('sequelize');
var db = require('../_db');

var top10 = db.define('top10',{
	Num: Sequelize.INTEGER,
	Player: Sequelize.STRING,
	Opp: Sequelize.STRING
});

module.exports = {
	top10: top10
}