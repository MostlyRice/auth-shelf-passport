myApp.controller('ShelfController', ['ShelfService', 'UserService', function(ShelfService, UserService) {
    console.log('ShelfController created');
    var self = this;
    self.shelfObject = ShelfService.shelfObject;
    self.getShelf = ShelfService.getShelf;
    self.deleteItem = ShelfService.deleteItem;
    self.name = UserService.userObject.userName;

    self.getShelf();
  }]);