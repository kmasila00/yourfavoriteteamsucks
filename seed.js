/*

This seed file is only a placeholder. It should be expanded and altered
to fit the development of your application.

It uses the same file the server uses to establish
the database connection:
--- server/db/index.js

The name of the database used is set in your environment files:
--- server/env/*

This seed file has a safety check to see if you already have users
in the database. If you are developing multiple applications with the
fsg scaffolding, keep in mind that fsg always uses the same database
name in the environment files.

*/

var chalk = require('chalk');
var db = require('./server/db');
var User = db.model('user');
var Top10 = db.model('top10');
var Rankings = db.model('rankings');
var Article = db.model('article');
var Promise = require('sequelize').Promise;

var seedUsers = function () {

    var users = [
        {
            username: 'YFTS',
            email: 'yfts@gmail.com',
            password: '36cansofcoke',
            isAdmin: true
        }
    ];

    var creatingUsers = users.map(function (userObj) {
        return User.create(userObj);
    });
    return Promise.all(creatingUsers);

};

var seedWelcome = function () {

    var welcome = [
        {
            Title: 'Welcome To YFTS',
            Author: 'Jason Olivo',
            Date: '09/01/16',
            Text: 'First off we would like to thank you for visiting our site and if you are here by accident please don’t leave. Welcome to Yourfavoriteteamssucks.com, the official website for the Your Favorite Team Sucks podcast. We are just a couple of New Yorkers that would like to think we know what we are talking about. We are going to be with you throughout the fantasy season giving you our thoughts and advice. We look forward to you interweb travelers tuning in to our podcast and check our weekly rankings throughout the season. Our goal is to get you that extra win that will catapult you into the playoffs and to a fantasy championship.',
            Image: 'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/14102671_172992229800007_5932486622695628935_n.png?oh=a00e465557a87bf100ee98b835f72a35&oe=58827057'
        }
    ];

    var creatingWelcome = welcome.map(function (welcomeObj) {
        return Article.create(welcomeObj);
    });
    return Promise.all(creatingWelcome);

};

var seedTop10 = function () {

    var topTen = [];

    for(var i = 0; i < 10; i++){
        topTen.push({ Num:i+1, Player:'playerName', Opp:'oppName' });
    }

    var creatingTop10 = topTen.map(function (rowObj) {
        return Top10.create(rowObj);
    });
    return Promise.all(creatingTop10);

};

var seedQBs = function () {

    var qbs = [];

    for(var i = 0; i < 20; i++){
        qbs.push({ Pos:'QB', Num:i+1, Avg:0, Player:'playerName', Jason: 0, Jack: 0, Amoni: 0, Eddie: 0, Nick: 0 });
    }

    var creatingQBs = qbs.map(function (rowObj) {
        return Rankings.create(rowObj);
    });

    return Promise.all(creatingQBs);

}

var seedRBs = function(){

    var rbs = [];

    for(var i = 0; i < 20; i++){
        rbs.push({ Pos:'RB', Num:i+1, Avg:0, Player:'playerName', Jason: 0, Jack: 0, Amoni: 0, Eddie: 0, Nick: 0 });
    }

    var creatingRBs = rbs.map(function (rowObj) {
        return Rankings.create(rowObj);
    });

    return Promise.all(creatingRBs);

}

var seedWRs = function(){

    var wrs = [];

    for(var i = 0; i < 20; i++){
        wrs.push({ Pos:'WR', Num:i+1, Avg:0, Player:'playerName', Jason: 0, Jack: 0, Amoni: 0, Eddie: 0, Nick: 0 });
    }

    var creatingWRs = wrs.map(function (rowObj) {
        return Rankings.create(rowObj);
    });

    return Promise.all(creatingWRs);

}

var seedTEs = function(){

    var tes = [];

    for(var i = 0; i < 20; i++){
        tes.push({ Pos:'TE', Num:i+1, Avg:0, Player:'playerName', Jason: 0, Jack: 0, Amoni: 0, Eddie: 0, Nick: 0 });
    }

    var creatingTEs = tes.map(function (rowObj) {
        return Rankings.create(rowObj);
    });

    return Promise.all(creatingTEs);

}

var seedDEFs = function(){

    var defs = [];

    for(var i = 0; i < 20; i++){
        defs.push({ Pos:'DEF', Num:i+1, Avg:0, Player:'playerName', Jason: 0, Jack: 0, Amoni: 0, Eddie: 0, Nick: 0 });
    }

    var creatingDEFs = defs.map(function (rowObj) {
        return Rankings.create(rowObj);
    });

    return Promise.all(creatingDEFs);

}

var seedKs = function(){

    var ks = [];

    for(var i = 0; i < 20; i++){
        ks.push({ Pos:'K', Num:i+1, Avg:0, Player:'playerName', Jason: 0, Jack: 0, Amoni: 0, Eddie: 0, Nick: 0 });
    }

    var creatingKs = ks.map(function (rowObj) {
        return Rankings.create(rowObj);
    });

    return Promise.all(creatingKs);

}

db.sync({ force: true })
    .then(function () {
      return seedUsers();
    })
    .then(function(){
        return seedWelcome();
    })
    .then(function () {
      return seedTop10();
    })
    .then(function(){
      return seedQBs();
    })
    .then(function(){
      return seedWRs();
    })
    .then(function(){
      return seedRBs();
    })
    .then(function(){
      return seedTEs();
    })
    .then(function(){
      return seedDEFs();
    })
    .then(function(){
      return seedKs();
    })
    .then(function () {
        console.log(chalk.green('Seed successful!'));
        process.exit(0);
    })
    .catch(function (err) {
        console.error(err);
        process.exit(1);
    });
