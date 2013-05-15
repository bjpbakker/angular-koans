angular.module('koans', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', { templateUrl: 'views/home.html' });
    $routeProvider.otherwise({redirectTo: '/home'});
  }])
  .run(['$rootScope', function($rootScope) {
    $rootScope.app = {
      name: 'Angular Koans'
    }
  }])

