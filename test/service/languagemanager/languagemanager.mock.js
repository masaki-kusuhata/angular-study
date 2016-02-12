(function() {
  'use strict';

  angular
    .module('angularstudy.mock.service.languagemanager', [])
    .factory('LanguageManagerService', LanguageManagerService);

  function LanguageManagerService() {
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
