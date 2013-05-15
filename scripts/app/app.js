angular.module('koans', ['koans.messageboard'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', { templateUrl: 'views/home.html' })
      .when('/greeting', { templateUrl: 'views/greeting.html' })
      .when('/messageboard', { templateUrl: 'views/messageboard.html', controller: 'MessageBoardController' })
      .otherwise({redirectTo: '/home'});
  }])
  .run(['$rootScope', function($rootScope) {
    $rootScope.app = {
      name: 'Angular Koans'
    }
  }])

