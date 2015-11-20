'use strict';

angular.module('homeMovieCollectionApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('movies', {
        url: '/movies',
        templateUrl: 'app/movies/movies.html',
        controller: 'MoviesCtrl',
        controllerAs: 'vm'
      })
      .state('movies.add', {
        url: '/movies/add',
        templateUrl: 'app/movies/movies.html',
        controller: 'MoviesCtrl',
        controllerAs: 'vm'
      });
  });
