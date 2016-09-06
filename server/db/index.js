'use strict';
var db = require('./_db');
module.exports = db;

var User = require('./models/user');
var Article = require('./models/article');
var Top10 = require('./models/top10');
var Rankings = require('./models/rankings');
