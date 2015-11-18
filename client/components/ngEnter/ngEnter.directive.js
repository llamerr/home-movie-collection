'use strict';

/**
 * http://stackoverflow.com/questions/21633422/angularjs-accept-a-ui-bootstrap-modal-with-enter-key
 */
angular.module('homeMovieCollectionApp')
  .directive('ngEnter', function ($document) {
    return {
      scope: {
        ngEnter: "&"
      },
      link: function(scope, element, attrs) {
        var enterWatcher = function(event) {
          if (event.which === 13) {
            scope.ngEnter();
            scope.$apply();
            console.log('ENTER')
            event.preventDefault();
            $document.unbind("keydown keypress", enterWatcher);
          }
        };
        $document.bind("keydown keypress", enterWatcher);
      }
    }
  });
