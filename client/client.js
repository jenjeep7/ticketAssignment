var app = angular.module('myApp', []);

app.controller("TicketController", ["$http", function($http){
  var vm = this;
  vm.newTicket = {};
  vm.ticketList=[];


vm.getTicket= function(){
  $http.post("/tickets/new", vm.newTicket).then(function(response){
    console.log('created ticket');
    // vm.updateTickets();
  });
  //get tickets
  vm.updateTickets();
};

vm.updateTickets = function() {
  //the/tickets is the router with the information and then /all can be added to create the end point
  $http.get('/tickets/all').then(function(response){
    vm.ticketList = response.data;
    console.log(vm.ticketList);
  });
};
vm.deleteTicket = function(ticket) {
  $http.delete('/deleteTicket' + ticket._id).then(function(response){
    console.log("Deleted");
    vm.updateTickets();
  });
};


vm.updateTickets();

}]);
