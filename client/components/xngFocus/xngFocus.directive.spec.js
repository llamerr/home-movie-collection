'use strict';

describe('Directive: xngFocus', function () {

  // load the directive's module
  beforeEach(module('homeMovieCollectionApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<xng-focus></xng-focus>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the xngFocus directive');
  }));
});