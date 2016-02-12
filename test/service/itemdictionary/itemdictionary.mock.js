(function() {
  'use strict';

  angular
    .module('angularstudy.mock.service.itemdictionary', [])
    .factory('ItemDictionaryService', ItemDictionaryService);

  function ItemDictionaryService() {
    return {
      some: someSpy
    };
  }

  var someSpy = jasmine.createSpy().and.returnValue(
    function(cb) {
      return result;
    }
  );

  var result = {};
})();
