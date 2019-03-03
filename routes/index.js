var express = require('express');
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/*', function(req, res, next) {
  res.render('viterbi', { title: 'Viterbi' });
});


router.post('/viterbi/tag', function(req, res) {
  console.log("ReqContent:"+req.body.sentence);

  var java = require("java");

  java.classpath.push("public/javascripts/viterbi-1.0-SNAPSHOT.jar");
  java.classpath.push('target/classes');

  java.import("com.main.Main");
  var myclass = java.newInstanceSync("com.main.Main");
  res.send(java.callMethodSync(myclass, "examplePoSTagVersion1", req.body.sentence));


});

module.exports = router;
