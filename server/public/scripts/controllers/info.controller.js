myApp.controller('InfoController', ['UserService', 'ShelfService', function(UserService, ShelfService) {
  console.log('InfoController created');
  var self = this;
  self.userService = UserService;
  self.name = UserService.userObject.userName;
  self.addItem = ShelfService.addItem;
}]);
