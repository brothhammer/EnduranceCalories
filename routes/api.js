var db = require("../models");

module.exports = function(app) {

  //get one user
  app.get("/api/users/:id", function(req, res) {

	db.User.findOne({
	      where: {
	        id: req.params.id
	      },
	    }).then(function(dbUser) {
	      res.json(dbUser);
	    });
	  });

  //save user info
  app.post("/api/users", function(req, res) {
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  //get one activity
  app.get("/api/calories/:id", function(req, res) {

	db.Calorie.findOne({
	      where: {
	        id: req.params.id
	      },
	    }).then(function(dbCalorie) {
	      res.send(calculator(dbCalorie))
	    });
	  });

  //post one activity
  app.post("/api/calories", function(req, res) {
    db.Calorie.create(req.body).then(function(dbCalorie) {
      res.json(dbCalorie);
    });
  });
}
