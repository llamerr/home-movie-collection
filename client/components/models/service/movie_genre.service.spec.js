'use strict';

describe('Service: MovieGenre', function () {

  // load the service's module
  beforeEach(module('homeMovieCollectionApp'));

  // instantiate service
  var MovieGenre;
  beforeEach(inject(function (_MovieGenre_) {
    MovieGenre = _MovieGenre_;
  }));

  it('should do something', function () {
    expect(!!MovieGenre).toBe(true);
  });

});
