var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
let htmlroute = require('./app/routing/htmlRoutes');
let apiroute = require('./app/routing/apiRoutes');
const PORT = process.env.PORT || 3000;
let api = new apiroute();
let app = express()
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

htmlroute(app, path);
api.getting(app);
api.posting(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  