'use strict';

angular.module('homeMovieCollectionApp')
  .controller('MoviesCtrl', function (Modal, Movie, $scope) {

    var vm = this;

    Movie.findAll().then(function (movies) {
      vm.movies = movies;
    });
    Movie.bindAll({}, $scope, 'vm.movies');

    vm.newMovieTitle = '';
    vm.editedMovie = null;

    vm.editMovie = function (movie) {
      vm.newMovieTitle = '';
      vm.editedMovie = angular.copy(movie);
    };

    vm.saveEdits = function (movie) {
      movie.title = movie.title.trim();

      if (movie.id && angular.equals(movie, vm.originalMovie)) {
        vm.editedMovie = null;
        return;
      }

      if (!movie.id) {
        Movie.create(movie).finally(function(){
          vm.editedMovie = null;
        })
      } else {
        var m = Movie.get(movie.id);
        angular.extend(m, movie);
        Movie.save(movie.id)
          .finally(function () {
            vm.editedMovie = null;
          });
      }
    };

    vm.revertEdits = function () {
      vm.editedMovie = null;
    };

    vm.removeMovie = Modal.confirm.delete(function (movie) {
      Movie.destroy(movie);
    });

  })
  .filter('isEmpty', function () {
    return function (obj) {
      if (angular.equals(obj, {})) return false;
      else return true;
    };
  });
