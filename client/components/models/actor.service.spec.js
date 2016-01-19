'use strict';

describe('Service: Actor', function () {

  // load the service's module
  beforeEach(module('homeMovieCollectionApp'));

  // instantiate service
  var Actor;
  beforeEach(inject(function (_Actor_) {
    Actor = _Actor_;
  }));

  it('should do something', function () {
    expect(!!Actor).toBe(true);
  });

});
