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
    .then(function () {
        console.log(chalk.green('Seed successful!'));
        process.exit(0);
    })
    .catch(function (err) {
        console.error(err);
        process.exit(1);
    });
