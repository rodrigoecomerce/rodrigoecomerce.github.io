(function() {
  'use strict';
var app = angular.module("app", ["ngRoute"]); 
/*  
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
*/
  app.controller("MainController", function($scope) {
    $('.slider').slider();
});
      app.controller("NavController", function($scope, $location) {
 $('.button-collapse').sideNav();
        
         $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    }
      });
  
  app.controller("HelloController", function($scope) {

});
  
    app.controller("EmpresaController", function($scope) {

});
    
      app.directive('navbar', function () {
  return {
    restrict: 'A',
    controller: 'NavController',
    controllerAs: 'ctrl',
    templateUrl: 'nav.html'
  };
});
  
  app.controller("ContatoController", function($scope) {
});
    app.config(function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'mainpage.html',
          controller: 'MainController'
        })
        .when('/contato', {
          templateUrl: 'contactpage.html',
          controller: 'ContatoController'
        })
      .when('/hello', {
          templateUrl: 'hello.html',
          controller: 'HelloController'
        })     
            .when('/empresa', {
          templateUrl: 'https://rodrigoecomerce.github.io/templates/empresa.html',
          controller: 'EmpresaController'
        })     
       .otherwise({
        redirectTo: '/'
       });
    
     // use the HTML5 History API
      //  $locationProvider.html5Mode(true);
        //$locationProvider.hashPrefix('');

    
    });
})();
