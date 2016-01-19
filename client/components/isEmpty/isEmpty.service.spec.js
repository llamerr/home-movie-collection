'use strict';

describe('Service: isEmpty', function () {

  // load the service's module
  beforeEach(module('homeMovieCollectionApp'));

  // instantiate service
  var isEmpty;
  beforeEach(inject(function (_isEmpty_) {
    isEmpty = _isEmpty_;
  }));

  it('should do something', function () {
    expect(!!isEmpty).toBe(true);
  });

});
