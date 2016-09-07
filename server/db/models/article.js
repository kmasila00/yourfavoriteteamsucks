'use strict';
var Sequelize = require('sequelize');
var db = require('../_db');

var article = db.define('article',{
	Title: Sequelize.STRING,
	Author: Sequelize.STRING,
	Date: Sequelize.STRING,
	Text: Sequelize.TEXT,
	Image: Sequelize.STRING
});

module.exports = {
	article: article
}