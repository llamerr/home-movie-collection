'use strict';

angular.module('homeMovieCollectionApp')
  .controller('ActorsCtrl', function (Modal, Actor, $scope) {
    var vm = this;

    Actor.findAll().then(function (actors) {
      vm.actors = actors;
    });
    Actor.bindAll({}, $scope, 'vm.actors');

    vm.newActorTitle = '';
    vm.editedActor = null;

    vm.editActor = function (actor) {
      vm.newActorTitle = '';
      vm.editedActor = angular.copy(actor);
    };

    vm.saveEdits = function (actor) {
      actor.title = actor.title.trim();

      if (actor.id && angular.equals(actor, vm.originalActor)) {
        vm.editedActor = null;
        return;
      }

      if (!actor.id) {
        Actor.create(actor).finally(function(){
          vm.editedActor = null;
        })
      } else {
        var m = Actor.get(actor.id);
        angular.extend(m, actor);
        Actor.save(actor.id)
          .finally(function () {
            vm.editedActor = null;
          });
      }
    };

    vm.revertEdits = function () {
      vm.editedActor = null;
    };

    vm.removeActor = Modal.confirm.delete(function (actor) {
      Actor.destroy(actor);
    });

  });
