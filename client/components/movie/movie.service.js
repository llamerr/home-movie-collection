'use strict';

angular.module('homeMovieCollectionApp')
  .factory('Movie', function (store) {
    return store.defineResource('movie');
  });
