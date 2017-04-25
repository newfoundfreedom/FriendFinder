// Require Package Dependencies
let friendArray = require('../data/friends');

// Setup API routing
module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(friendArray);
    });
    app.post('/api/friends', function (req, res) {

        // console.log(req.body.scores);
        let newFriendScores = req.body.scores;

        for (i in friendArray){
            // console.log(friendArray[object].scores);

            for (j in friendArray[i].scores){
                Math.abs(friendArray[i].scores[j] - newFriendScores[j]);
            }
        }




        // create a total variable where we will sum the users attribute scores
        let newFriendtotal = 0;
        // add all the attribute scores from the data being passed in
        for (var i = 0; i < req.body.scores.length; i++) {
            newFriendtotal += parseInt(req.body.scores[i]);
        }
        console.log(newFriendtotal);
        friendArray.push(req.body);
        res.json(true);
    })
};
