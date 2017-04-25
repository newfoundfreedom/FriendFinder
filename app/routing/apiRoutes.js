// Require Package Dependencies
let friendArray = require('../data/friends');

// Setup API routing
module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(friendArray);
    });

    app.post('/api/friends', function (req, res) {
        friendArray.push(req.body);
        res.json(true);
        let total = 0;
        for(var i = 0; i < req.body.scores.length; i++){

        }
    });

};
