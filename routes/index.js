var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Disposal = require('../models/Disposal.js')

var config = require('../config');
var pageSize = config.pageSize;

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
       res.render('index', { 
         data: disposals,
         pageSize: pageSize,
         page: page });
    });
  
});


router.get('/disposalRow/:page', function(req, res, next) {

  var page = req.params.page;
  var skip  = 0;
  
  if(page > 1) {
    skip = pageSize * page;
  }
  
  var searchText = req.params.searchText;
  
  if(searchText == undefined) {
    searchText = "";
  }
  
  Disposal.find()
    .limit(pageSize)
    .skip(skip)
    .exec(function(err, disposals) {
       if (err) {
         return next(err);
       }  
       res.render('./particular/disposalRow', {
         data: disposals,
         pageSize: pageSize,
         page: page});
    });
 
 
});


router.get('/disposalRow/:searchText/:page', function(req, res, next) {

  var page = req.params.page;
  var skip  = 0;
  
  if(page > 1) {
    skip = pageSize * page;
  }
  
  var searchText = req.params.searchText;
  
  if(searchText == undefined) {
    searchText = "";
  }
  
  searchText = decodeURIComponent(searchText);
  
  console.log('/disposalRow/ searchText'+searchText);
  
  Disposal.find(
       { $text : { $search : searchText} }, 
       { score : { $meta: "textScore" } }
    )
    .sort({ score : { $meta : 'textScore' }  })
    .limit(pageSize)
    .skip(skip)
    .exec(function(err, disposals) {
       if (err) {
         return next(err);
       }  
       res.render('./particular/disposalRow', {
         data: disposals,
         pageSize: pageSize,
         searchText: searchText,
         page: page});
    });
 
 
});

module.exports = router;
