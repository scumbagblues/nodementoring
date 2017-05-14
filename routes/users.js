var express = require('express');
var router = express.Router();

var User = require('../models/users');

router.get('/add', function(req, res, next) {
    res.render('users/add', {contextPath:req.originalUrl});
});

router.post("/add", function (req, res, next) {
    //console.log(User.fetchAll());
    new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }).save()
        .then(function (result) {
            res.redirect("/");
        })
        .catch(function (error) {
            res.end(error.message);
        });


});

module.exports = router;
