var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Opened');
});

router.get('/cluster', function(req, res, next) {
  res.send("Opened/cluster");
});

// router.get('/tables', function(req, res, next) {
//   res.send("Opened/tables");
// });

module.exports = router;
