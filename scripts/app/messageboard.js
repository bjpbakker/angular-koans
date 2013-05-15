angular.module('koans.messageboard', [])
  .controller('MessageBoardController', ['$scope', 'MessageBoard', function($scope, messageBoard) {
    $scope.messages = messageBoard.messages();
  }])
  .factory('MessageBoard', ['$http', function($http) {
    return MessageBoard.create($http);
  }]);

var MessageBoard = {
  create: function($http) {
    return Object.create(MessageBoard, {
        $http: { value: $http }
    })
  },

  messages: function() {
    return this.$http.get('/api/messageboard/list').then(function(response) {
      return response.data.map(MessageData.load)
    });
  },
}

var MessageData = {
  load: function(data) {
    return { id: data.id,
             text: data.message }
  }
}

