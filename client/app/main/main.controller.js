'use strict';

angular.module('homeMovieCollectionApp')
  .controller('MainCtrl', function ($scope, $http, socket, Modal) {
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = Modal.confirm.delete(function(thing) {
      $http.delete('/api/things/' + thing._id);
    });

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });
  });
