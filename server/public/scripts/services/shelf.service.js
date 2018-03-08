myApp.service('ShelfService', ['$http', function ($http) {
    console.log('ShelfService Loaded');
    
    var self = this;

    self.shelfObject = {list: []};
    
    
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






}]);