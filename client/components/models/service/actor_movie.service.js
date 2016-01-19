'use strict';

angular.module('homeMovieCollectionApp')
  .factory('ActorMovie', function (store) {
    return store.defineResource({
      name: 'actor_movie',
      relations: {
        belongsTo: {
          actor: {
            localField: 'actor',
            localKey: 'actor_id'
          },
          movie: {
            localField: 'movie',
            localKey: 'movie_id'
          }
        }
      }
    })
  });
