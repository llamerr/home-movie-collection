'use strict';

describe('Service: ActorMovie', function () {

  // load the service's module
  beforeEach(module('homeMovieCollectionApp'));

  // instantiate service
  var ActorMovie;
  beforeEach(inject(function (_ActorMovie_) {
    ActorMovie = _ActorMovie_;
  }));

  it('should do something', function () {
    expect(!!ActorMovie).toBe(true);
  });

});
