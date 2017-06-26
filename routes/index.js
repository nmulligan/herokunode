var express = require('express');
var router = express.Router();
var Entity = require('../models/entity.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  Entity.find({}, function(err, entities) {
    if(err) {
      console.log(err);
    }

    res.render('index', { title: 'Heroku Node', entities: entities });
  });
});

router.post('/addvalue', function(req, res){
  var newValue = req.body.value;

  var entity = { value: newValue };

  Entity.create(entity, function(err, newEntity) {
    if(err) {
      console.log(err);
    } else {
      console.log('Added new entity: ' + newEntity);
    }

    res.redirect('/');
  });
});

module.exports = router;
