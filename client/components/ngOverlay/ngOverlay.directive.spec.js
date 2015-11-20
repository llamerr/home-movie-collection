'use strict';

describe('Directive: ngOverlay', function () {

  // load the directive's module and view
  beforeEach(module('homeMovieCollectionApp'));
  beforeEach(module('components/ngOverlay/ngOverlay.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ng-overlay></ng-overlay>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the ngOverlay directive');
  }));
});