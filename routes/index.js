var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Disposal = require('../models/Disposal.js')
var pageSize = 8;

/* GET home page. */
router.get('/', function(req, res, next) {
 
  var page = 1;
  
   Disposal.find()
    .limit(pageSize)
    .skip(pageSize * page)
    .exec(function(err, disposals) {
       if (err) {
         return next(err);
       }  
       res.render('index', { data: disposals, pageSize: pageSize, page: page });
    });
  
});

router.get('/disposalRow/:page', function(req, res, next) {

  var page = req.params.page;
  
  Disposal.find()
    .limit(pageSize)
    .skip(pageSize * page)
    .exec(function(err, disposals) {
       if (err) {
         return next(err);
       }  
       res.render('./particular/disposalRow', {data: disposals,pageSize: pageSize, page: page});
    });
 
 
});

module.exports = router;
