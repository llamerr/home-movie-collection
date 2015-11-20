'use strict';

angular.module('homeMovieCollectionApp')
  .controller('MoviesCtrl', function (Movie, Modal) {

    var vm = this;

    var movies = vm.movies = Movie.movies;

    vm.newMovie = '';
    vm.editedMovie = null;

    vm.createMovie = function (title) {
      title = title.trim();
      if (!title) return;

      vm.saving = true;
      Movie.create(title)
        .then(function success(movie) {
          vm.editMovie(movie);
        })
        .finally(function () {
          vm.newMovie = '';
          vm.saving = false;
        });
    };

    vm.addMovie = function () {
      var newMovie = {
        title: vm.newMovie.trim()
      };

      if (!newMovie.title) {
        return;
      }

      vm.saving = true;
      Movie.insert(newMovie)
        .then(function success(movie) {
          vm.newMovie = '';
          vm.editMovie(movie);
        })
        .finally(function () {
          vm.saving = false;
        });
    };

    vm.editMovie = function (movie) {
      vm.editedMovie = movie;
      // Clone the original movie to restore it on demand.
      vm.originalMovie = angular.extend({}, movie);
    };

    vm.saveEdits = function (movie, event) {
      // Blur events are automatically triggered after the form submit event.
      // This does some unfortunate logic handling to prevent saving twice.
      if (event === 'blur' && vm.saveEvent === 'submit') {
        vm.saveEvent = null;
        return;
      }

      movie.title = movie.title.trim();

      if (movie._id && angular.equals(movie, vm.originalMovie)) {
        vm.editedMovie = null;
        return;
      }

      Movie.put(movie)
        .then(function success() {}, function error() {
          movie.title = vm.originalMovie.title;
        })
        .finally(function () {
          vm.editedMovie = null;
        });
    };

    vm.revertEdits = function (movie) {
      if (movie._id) movies[movie._id] = vm.originalMovie;
      vm.editedMovie = null;
      vm.originalMovie = null;
    };

    vm.removeMovie = Modal.confirm.delete(function (movie) {
      Movie.delete(movie);
    });

  })
  .filter('isEmpty', function () {
    return function (obj) {
      if (angular.equals(obj, {})) return false;
      else return true;
    };
  });
