(function() {
  'use strict';
var app = angular.module("myApp", []); 
  app.controller("MainController", function($scope) {
});
    
    
  app.controller("ContatoController", function($scope) {
});
    app.config(function($routeProvider) {
      $routeProvider
        .when('/contato', {
          templateUrl: 'contactpage.html',
          controller: 'ContatoController'
        })
        .when('/', {
          templateUrl: 'mainpage.html',
          controller: 'MainController'
        }).otherwise({
          redirectTo: '/'
        });
    });
})();
