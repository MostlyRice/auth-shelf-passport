myApp.controller('ShelfController', ['ShelfService', function(ShelfService) {
    console.log('ShelfController created');
    var self = this;
    self.shelfObject = ShelfService.shelfObject;
    self.getShelf = ShelfService.getShelf;
    self.deleteItem = ShelfService.deleteItem;

    self.getShelf();
  }]);