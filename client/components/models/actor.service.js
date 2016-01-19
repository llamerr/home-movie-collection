'use strict';

angular.module('homeMovieCollectionApp')
  .factory('Actor', function (store) {
    return store.defineResource({
      name: 'actor',
      hasMany: {
        actor_movie: {
          localField: 'movie',
          foreignKey: 'movie_id'
        }
      }
    });
  });
