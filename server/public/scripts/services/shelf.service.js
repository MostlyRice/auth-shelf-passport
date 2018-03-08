myApp.service('ShelfService', ['$http', '$location', function ($http, $location) {
    console.log('ShelfService Loaded');
    
    var self = this;

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
    }).catch(function (error) {
        console.log('post error', error);
    })
}




}]);