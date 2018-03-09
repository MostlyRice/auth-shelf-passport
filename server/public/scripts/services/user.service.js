myApp.service('UserService', ['$http', '$location', function ($http, $location) {
  console.log('UserService Loaded');

  var self = this;

  self.userObject = {};

  self.getuser = function () {
    $http.get('/user').then(function (response) {
      console.log(response, 'before if');
      if (response.data.username) {
        // user has a curret session on the server
        self.userObject.userName = response.data.username;
        self.userObject.admin = response.data.admin;
        console.log('User Data: ', self.userObject.userName);
        console.log(self.userObject, 'object');
        console.log(self.userObject.admin, 'admin');

      } else {
        // user has no session, bounce them back to the login page
        $location.path("/home");
      }
    });
  }

  self.logout = function () {
    $http.get('/user/logout').then(function (response) {
      console.log('logged out');
      $location.path("/home");
      self.reset();
    });
  }

self.reset = function() {
  location.reload(true);
}


}]);
