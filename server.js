var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use('/public', express.static(path.join(__dirname, 'public')))

// Set Handlebars.
// var exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// Routes
// =============================================================
require("./routes/html-routes.js")(app);
require("./routes/api.js")(app);

//stuff for handlebars
// app.get("/", function(req, res) {

//       res.render("user");
//     });


// Syncing our sequelize models and then starting our Express app
// =============================================================
// db.sequelize.sync({ force: true }).then(function() {
//   app.listen(PORT, function() {
//   	if(error) throw error;
//     console.log("App listening on PORT " + PORT);
//   });
// });

db.sequelize.sync({ force: true });

app.listen(PORT, function(error) {
    if (error) throw error;
    console.log("App listening on PORT " + PORT);
});