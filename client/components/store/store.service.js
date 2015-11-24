'use strict';

angular.module('homeMovieCollectionApp')
  .service('store', function () {
    var store = new JSData.DS();
    store.registerAdapter('localstorage', new DSLocalStorageAdapter(), { default: true });
    return store;
  });
