'use strict';

angular.module('homeMovieCollectionApp')
  .controller('MoviesCtrl', function (Modal, Movie, Actor, ActorMovie, $scope, $window) {

    var vm = this;

    $window.Actor = Actor;
    $window.Movie = Movie;
    $window.ActorMovie = ActorMovie;

    Movie.findAll().then(function (movies) {
      vm.movies = $window.movies = movies;
      console.log(movies)
    });
    Movie.bindAll({}, $scope, 'vm.movies');

    Actor.findAll().then(function (actors) {
      console.log(actors)
      vm.actors = $window.actors = actors;
    });

    vm.newMovieTitle = '';
    vm.editedMovie = null;
    vm.editedMovieActors = [];

    vm.changeActor = function (movie, actor) {
      console.log(movie, actor);
      ActorMovie.create({
        movie_id: movie.id,
        actor_id: actor.id
      })
    };

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

  });
