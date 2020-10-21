
var express = require("express");

//for utilizing express
var app = express();
var PORT = 3000;
//necessary dependencies
//express data handling
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes for our htmls and for the methods acting on html
require("./htmlRoutes.js")(app);
require("./apiRoutes.js")(app);

//port listener 
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
  