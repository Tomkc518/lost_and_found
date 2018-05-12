var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function (req, res) {
     db.Post.findAll({})
        .then(function(dbPost) {
          res.render("index", { lost: dbPost });
      });
  });

  app.get("/lost", function (req, res) {
    db.Post.findAll({})
       .then(function(dbPost) {
         res.render("partials/lost/lost", { lost: dbPost });
     });
 });
};
