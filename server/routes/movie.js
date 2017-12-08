var express = require('express');
var router = express.Router();
var Movie = require('../models/movie.schema');

router.get('/', function (req, res) {
    
    Movie.find({}, function (errorMakingDatabaseQuery, data) {
        if (errorMakingDatabaseQuery) {
            console.log('error with movie find', errorMakingDatabaseQuery);
            res.sendStatus(500);
        } else {
            // res.send(data);
            res.sendStatus(200);
        }
    })
});

module.exports = router;