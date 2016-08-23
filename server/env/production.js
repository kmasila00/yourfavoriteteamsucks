/*
    These environment variables are not hardcoded so as not to put
    production information in a repo. They should be set in your
    heroku (or whatever VPS used) configuration to be set in the
    applications environment, along with NODE_ENV=production

 */

module.exports = {
    "DATABASE_URI": "postgres://znglmawteqhcwa:ht2aO04su5L6wVcjWxmWu9vMil@ec2-184-73-202-229.compute-1.amazonaws.com:5432/ddvtjj4f5jg34f",
    "SESSION_SECRET": "anythingYouWant",
    "LOGGING": true
};
