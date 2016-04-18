var express= require('express');
var path = require('path');

var router = express.Router();

var path = require('path');


router.get('/', function(request, response){
  response.sendFile(path.join(__dirname, '../public/views/index.html'));
});




module.exports = router;
