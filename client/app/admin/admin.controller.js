'use strict';

angular.module('homeMovieCollectionApp')
  .controller('AdminCtrl', function ($scope, $http, Auth, User, Modal) {

    // Use the User $resource to fetch all users
    $scope.users = User.query();

    $scope.delete = Modal.confirm.delete(function (user) {
      User.remove({ id: user._id });
      angular.forEach($scope.users, function(u, i) {
        if (u === user) {
          $scope.users.splice(i, 1);
        }
      });
    });
  });
