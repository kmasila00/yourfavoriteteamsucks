/*
    These environment variables are not hardcoded so as not to put
    production information in a repo. They should be set in your
    heroku (or whatever VPS used) configuration to be set in the
    applications environment, along with NODE_ENV=production

 */

module.exports = {
    "DATABASE_URI": "postgres://bmcghanhjxkvnd:tN4xjd80h3PDtc1ty2I_-Z4F1L@ec2-54-243-249-154.compute-1.amazonaws.com:5432/db7oo96pohk5uq",
    "SESSION_SECRET": "anythingYouWant",
    "LOGGING": true
};
