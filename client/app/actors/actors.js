'use strict';

angular.module('homeMovieCollectionApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('actors', {
        url: '/actors',
        templateUrl: 'app/actors/actors.html',
        controller: 'ActorsCtrl',
        controllerAs: 'vm'
      });
  });
