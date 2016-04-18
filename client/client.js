var app = angular.module('myApp', []);

app.controller("TicketController", ["$http", function($http){
  var vm = this;
  vm.newTicket = {};
  vm.ticketList=[];


vm.getTicket= function(){
  $http.post("/new", vm.newTicket).then(function(response){
    console.log('created tickets');
    vm.updateTickets();
  });
  //get tickets
  vm.updateTickets();
};

vm.updateTickets = function() {
  $http.get('/add').then(function(response){
    vm.ticketList = response.data;
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
