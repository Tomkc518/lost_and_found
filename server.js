var express = require("express");
var bodyParser = require("body-parser");

var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

var db = require("./models");

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });
  
/*var mysql = require("mysql");



connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);
});

// Use Handlebars to render the main index.html page with the lost items in it.
app.get("/", function (req, res) {
    connection.query("SELECT * FROM lost;", function (err, data) {
        if (err) {
            return res.status(500).end();
        }

        res.render("index", { lost: data });
    });
});

// Create a new lost item
app.post("/lost", function (req, res) {
    connection.query("INSERT INTO lost (thing, date_lost, time_lost, color, description, searcher_name, searcher_phone, searcher_email)  VALUES (?)", [
        req.body.thing, 
        req.body.date_lost, 
        req.body.time_lost, 
        req.body.color, 
        req.body.description, 
        req.body.searcher_name, 
        req.body.searcher_phone, 
        req.body.searcher_email
    ], function (err, result) {
        if (err) {
            return res.status(500).end();
        }

        // Send back the ID of the new todo
        res.json({ id: result.insertId });
        console.log({ id: result.insertId });
    });
});



//-------------------------------------------------------------------------------------------------------------------------
// Retrieve all lost items
app.get("/lost", function (req, res) {
    connection.query("SELECT * FROM lost;", function (err, data) {
        if (err) {
            return res.status(500).end();
        }

        res.render("partials/lost/lost", {lost: data});
    
    });
});


//-------------------------------------------------------------------------------------------------------------------------

// Update a lost item as found
app.put("/lost/:id", function (req, res) {
    





});

// Delete an item
app.delete("/lost/:id", function (req, res) {
    connection.query("DELETE FROM lost WHERE id = ?", [req.params.id], function (err, result) {
        






    });
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});*/
