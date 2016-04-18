var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ticketSchema = new Schema ({
  name: String,
  type: String,
  priority: String,
  description: String,
  assignee: String,
  reporter: String,
  created: Date,
  Updated: Date
});

var Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
