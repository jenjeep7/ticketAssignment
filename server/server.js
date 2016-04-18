var express=require('express');
var mongoose=require('mongoose');
var index=require('./routes/index');
var bodyParser= require('body-parser');
var app=express();
//////////////////////////////////GLOBAL//////////////////////
app.use(express.static('server/public'));
app.use(bodyParser.json());


//////////////////////Routers///////////////////////
app.use('/', index);

///////////////////////////////MONGO/////////////////////////////////////
var mongoURI = 'mongodb://localhost/tickets';
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function(err){
  console.log('mongodb connection error', err);
});

MongoDB.once('open', function(){
  console.log('mongodb connection open!');
});

/////////////////////////////////SERVER RUN///////////////////////////////////
var server = app.listen(3000, function(){
  var port=server.address().port;
  console.log('listening on port: ', port);
});
