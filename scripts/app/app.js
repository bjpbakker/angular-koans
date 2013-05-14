angular.module('koans', [])
  .run(['$rootScope', function($rootScope) {
    $rootScope.app = {
      name: 'Angular Koans'
    }
  }])

