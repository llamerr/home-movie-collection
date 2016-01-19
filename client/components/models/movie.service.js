'use strict';

angular.module('homeMovieCollectionApp')
  .factory('Movie', function (store) {
    return store.defineResource({
      name: 'movie',
      hasMany: {
        actor_movie: {
          localField: 'actors',
          foreignKey: 'actor_id'
        },
        movie_genre: {
          localField: 'genres',
          foreignKey: 'genre_id'
        }
      }
    })
  });
