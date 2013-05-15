angular.module('koans.messageboard', [])
  .controller('MessageBoardController', ['$scope', function($scope) {
    $scope.messages = ['msg-1', 'msg-2', 'msg-3']
  }]);
