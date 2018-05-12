var express = require("express");
var bodyParser = require("body-parser");

var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Tricia615", //<-----------------put password in here 
  database: "lost_and_found_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

// Use Handlebars to render the main index.html page with the lost items in it.
app.get("/", function(req, res) {
  connection.query("SELECT * FROM lost;", function(err, data) {
    if (err) {
      return res.status(500).end();
    }

    res.render("index", { lost: data });
  });
});

// Create a new lost item
app.post("/lost", function(req, res) {
  connection.query("INSERT INTO lost (thing, date_lost, time_lost, color, description, searcher_name, searcher_phone, searcher_email)  VALUES (?)", [req.body.thing, req.body.date_lost, req.body.time_lost, req.body.color, req.body.description, req.body.searcher_name, req.body.searcher_phone, req.body.searcher_email], function(err, result) {
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
app.get("/lost", function(req, res) {
  connection.query("SELECT * FROM lost;", function(err, data) {
    if (err) {
      return res.status(500).end();
    }

    res.json(data);
  });
});


//-------------------------------------------------------------------------------------------------------------------------

// Update a lost item as found
app.put("/lost/:id", function(req, res) {
//   connection.query("UPDATE lost SET lost = ? WHERE id = ?", [req.body.plan, req.params.id], function(err, result) {
//     if (err) {
//       // If an error occurred, send a generic server failure
//       return res.status(500).end();
//     }
//     else if (result.changedRows === 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     }
//     res.status(200).end();

//   });
});

// Delete an item
app.delete("/lost/:id", function(req, res) {
  connection.query("DELETE FROM lost WHERE id = ?", [req.params.id], function(err, result) {
    // if (err) {
    //   // If an error occurred, send a generic server failure
    //   return res.status(500).end();
    // }
    // else if (result.affectedRows === 0) {
    //   // If no rows were changed, then the ID must not exist, so 404
    //   return res.status(404).end();
    // }
    // res.status(200).end();

  });
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
