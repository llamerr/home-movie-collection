'use strict';

angular.module('homeMovieCollectionApp')
  .filter('isEmpty', function () {
    return function (obj) {
      if (angular.equals(obj, {})) return false;
      else return true;
    };
  });
