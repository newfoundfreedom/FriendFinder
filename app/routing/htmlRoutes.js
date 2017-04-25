// Require Package Dependencies
const path = require('path');

// Setup routing for public html pages
module.exports = function (app) {

    // route for home page
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });

    // route for survey page
    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });

};
