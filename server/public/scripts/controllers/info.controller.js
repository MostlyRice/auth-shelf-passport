myApp.controller('InfoController', ['UserService', 'ShelfService', function(UserService, ShelfService) {
  console.log('InfoController created');
  var self = this;
  self.typeUrl = false;
  self.typeUrl = ShelfService.typeUrl;
  self.userService = UserService;
  self.name = UserService.userObject.userName;
  self.addItem = ShelfService.addItem;
  self.upload = ShelfService.upload;
  self.newItem = ShelfService.newItem;
  self.uploadSuccess = ShelfService.uploadSuccess;
  self.typeUrl = ShelfService.typeUrl;


}]);
