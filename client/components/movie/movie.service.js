'use strict';

angular.module('homeMovieCollectionApp')
  .factory('Movie', function ($q, rfc4122) {
    var STORAGE_ID = 'movies-angularjs';
    var defaults = {
      _id: null,
      title: ''
    };

    var store = {
      movies: {},

      _getFromLocalStorage: function () {
        return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
      },

      _saveToLocalStorage: function (movies) {
        localStorage.setItem(STORAGE_ID, JSON.stringify(movies));
      },

      delete: function (movie) {
        var deferred = $q.defer();

        delete store.movies[movie._id];

        store._saveToLocalStorage(store.movies);
        deferred.resolve();

        return deferred.promise;
      },

      get: function () {
        var deferred = $q.defer();

        angular.copy(store._getFromLocalStorage(), store.movies);
        deferred.resolve(store.movies);

        return deferred.promise;
      },

      create: function (title) {
        var deferred = $q.defer();
        var movie = angular.copy(defaults);

        if (title) movie.title = title;
        deferred.resolve(movie);
        return deferred.promise;
      },

      insert: function (movie) {
        var deferred = $q.defer();

        if (!movie._id) movie._id = rfc4122.v4();
        store.movies[movie._id] = movie;

        store._saveToLocalStorage(store.movies);
        deferred.resolve(movie);

        return deferred.promise;
      },

      put: function (movie) {
        var deferred = $q.defer();

        if (!movie._id) movie._id = rfc4122.v4();
        store.movies[movie._id] = movie;

        store._saveToLocalStorage(store.movies);
        deferred.resolve(movie);

        return deferred.promise;
      }
    };

    //get movies from store upon loading
    store.get();

    return store;
  });
