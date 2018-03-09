myApp.service('ShelfService', ['$http', '$location', function ($http, $location) {
    console.log('ShelfService Loaded');

    var self = this;
    self.uploadSuccess = {success: false};
    self.shelfObject = {list: []};
    self.newItem = {};

    self.getShelf = function() {
        $http({
            method:'GET',
            url:'/shelf'
        }).then(function (response) {
            console.log(response.data);
            self.shelfObject.list = response.data;
        }).catch(function (error) {
            console.log('get error', error);
        })
    }


self.addItem = function(newItem, name) {
    console.log(newItem, name);
    $http({
        method: 'POST',
        url: '/shelf',
        data: {newItem: newItem, name: name}
    }).then(function (response) {
        self.getShelf();
        $location.url('/user');
        self.newItem = {};
    }).catch(function (error) {
        console.log('post error', error);
    })
}

//Filestack API method 'pick()' that opens the file picker
self.upload = function(){
  console.log('in upload');
  self.typeUrl = false;
  client.pick({
    accept:'image/*',
    maxFiles: 1
  }).then(function(result){
    // self.uploadSuccess.success = true;
    alert("Successful Upload!");
    // console.log(JSON.stringify(result));
    self.newItem.itemUrl = result.filesUploaded[0].url;
    console.log('self.newItem.itemUrl',self.newItem.itemUrl);

});
}

self.deleteItem = function(id) {
    console.log('delete this item', id);
    $http({
        method: 'DELETE',
        url: `/shelf/${id}`,
        data: id
    }).then(function (response) {
          console.log('success delete');
          self.getShelf();
      })
      .catch(function (response) {
          console.log('error delete', response);
      });
}



}]);
