var db = require("../models");

module.exports = function(app) {

    //get all users, this will be used to populate the user options before entering activity
    app.get("/api/users", function(req, res) {
        db.User.findAll({
            include: [db.Calorie]
        }).then(function(dbUser) {
            res.json(dbUser);
        });
    });
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
    //  app.get("/api/calories/:id", function(req, res) {

    // db.Calorie.findOne({
    //       where: {
    //         UserId: req.params.id
    //       },
    //     }).then(function(dbCalorie) {
    //       res.json(dbCalorie)
    //     });
    //   });

    //get the most recent 7 entries into calories table
    app.get("/api/calories/:id", function(req, res) {

        db.Calorie.findAll({
            limit: 7,
            where: {
                UserId: req.params.id
            },
        }).then(function(dbCalorie) {
            res.json(dbCalorie)
        });
    });

    //post one activity
    app.post("/api/calories", function(req, res) {
        db.Calorie.create(req.body).then(function(dbCalorie) {
            res.json(dbCalorie);
        });
    });


    //added to show addActivity Handlebars
    // app.get("/api/calories", function(req, res) {
    //   res.render("addActivity", {layout: "activityMain"});
    // });




}