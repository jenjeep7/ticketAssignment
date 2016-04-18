var express= require('express');
var Ticket = require('../../Ticket');
var router = express.Router();
// //bring in ticket schema from mongoose to post new ticket
// var Ticket = mongoose.model('tickets', {name:String});
var path = require('path');



//posting new ticket to database?
router.post('/new', function(request, response){
  var ticket= new Ticket(request.body);
  ticket.dateCreated = new Date();
  ticket.dateUpdated= new Date();
  ticket.save(function(err){
    if(err) {console.log('error', err);
    // response.send(ticket.toJSON());
  } else {
    response.sendStatus(200);
    console.log("ticket saved");
  }
  });
});
//getting all tickets from database
router.get('/all', function(request, response){
  Ticket.find({}, function(err, tickets){
    if(err){
      console.log('error receiving from DB');
      response.sendStatus(500);
    } else {
    console.log('Tickets received');
    response.send(tickets);
  }
  });
});

router.delete('/delete:id', function(request, response){
  var id = request.params.id;
  Ticket.findOneAndRemove({_id: id}).exec(function(err, ticket){
    if(err){
      console.log(err);
      response.sendStatus(500);
    } else{
      console.log("The ticket is gone!");
      response.sendStatus(200);
    }
  });
});


module.exports = router;
