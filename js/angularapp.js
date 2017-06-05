(function() {
  'use strict';
var app = angular.module("app", ["ngRoute"]); 
  
  app.run(function($rootScope, $route, $routeParams, $location) {
      
      $rootScope.$on('$routeChangeStart',function(evt,next,current){
        console.log('Nome do Evento:'+evt.name);
        console.log('Próxima Rota:'+ angular.toJson(next));
        console.log('Rota Atual:'+ angular.toJson(current));
      });

      $rootScope.$route = $route;
      $rootScope.$location = $location;
      $rootScope.$routeParams = $routeParams;
});

  app.controller("MainController", function($scope) {
    $('.slider').slider();
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
    
     // use the HTML5 History API
       // $locationProvider.html5Mode(true);
        //$locationProvider.hashPrefix('');

    
    });
})();
