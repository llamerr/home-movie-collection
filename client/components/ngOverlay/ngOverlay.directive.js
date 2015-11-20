'use strict';

angular.module('homeMovieCollectionApp')
  .directive('ngOverlay', function () {
    return {
      restrict: 'E',
      template: '<div class="ng-overlay"></div>'
    };
  });
