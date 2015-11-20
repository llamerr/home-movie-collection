'use strict';

/**
 * http://stackoverflow.com/questions/14076783/angularjs-focusing-an-input-element-when-a-checkbox-is-clicked
 */
angular.module('homeMovieCollectionApp')
  .directive('xngFocus', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        scope.$watch(attrs.xngFocus,
          function () {
            element.focus();
            element[0].setSelectionRange(element[0].value.length, element[0].value.length)
          },true);
      }
    };
  });
