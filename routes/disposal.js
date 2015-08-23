var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Disposal = require('../models/Disposal.js');

/* POST /disposals */
router.post('/', function(req, res, next) {
  Disposal.create(req.body, function (err, post) {
    if (err) {
         return next(err);
    }
    res.json(post);
  });
});


/* GET /disposals listing */
router.get('/', function(req, res, next) {
  Disposal.find(function (err, disposals) {
    if (err) {
         return next(err);
    }
    res.json(disposals);
  });
});


/* GET /disposals/:searchText */
router.get('/:searchText', function(req, res, next) {
  Disposal.find(
        { $text : { $search : req.params.searchText} }, 
        { score : { $meta: "textScore" } }
    )
    .sort({ score : { $meta : 'textScore' } })
    .exec(function(err, results) {
       if (err) {
         return next(err);
       }
       
       res.json(results);
    });
});

module.exports = router;