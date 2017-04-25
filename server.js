// Require Package Dependencies
const express = require('express'),
    bodyParser = require('body-parser');

// Setup Express App
const app = express();
// Set port to utilize deployment site default or failing that port 3333
const PORT = process.env.PORT || 3333;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

// Require Routing files
// require("./app/routing/apiRoutes.js")(app);
// require("./app/routing/htmlRoutes.js")(app);

// Start server listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
