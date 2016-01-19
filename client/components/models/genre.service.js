'use strict';

angular.module('homeMovieCollectionApp')
  .factory('Genre', function (store) {
    return store.defineResource('genre');
  });
