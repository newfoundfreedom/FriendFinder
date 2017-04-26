// Require Dependencies
let friendArray = require('../data/friends');

// Declare module exports
module.exports = function (app) {
    // Create an API GET route to display the JSON friendIndex of all friends
    app.get('/api/friends', function (req, res) {
        res.json(friendArray);
    });

    // Create an API POST route to receive incoming survey data and compare
    //  new users survey scores to that of every other friend and display the
    //  best match
    app.post('/api/friends', function (req, res) {
        // set variable to hold latest survey scores
        let newFriendScores = req.body.scores;
        // set a variable just higher than the highest possible difference amount
        let lowestDiffTotal = 41;
        // loop through all friends in the friendArray
        // create variable to hold the survey scores from latest survey
        for (friendIndex in friendArray) {
            // zero out a variable which will tally the differences in survey scores
            let diffTotal = 0;
            // loop through each score within the friendIndex summing up the
            //  differences in score for each category
            for (scoreIndex in friendArray[friendIndex].scores) {
                diffTotal += Math.abs(friendArray[friendIndex].scores[scoreIndex] - newFriendScores[scoreIndex]);
            }
            // if current difference to lowest yet - if lower then replace
            //  when complete report closest match
            if (diffTotal < lowestDiffTotal){
                lowestDiffTotal = diffTotal;
                closestMatch = friendArray[friendIndex];
            }
            // console.log(`Difference = ${diffTotal}`);
        }
        // console.log(`LowestDiff is: ${lowestDiffTotal}`);
        res.json(closestMatch);
        // add latest user to the friends listing
        friendArray.push(req.body);
        // res.json(true);
    })
};
// Setup API routing

// Require Package Dependencies
