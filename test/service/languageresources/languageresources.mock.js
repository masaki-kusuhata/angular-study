(function() {
  'use strict';

  angular
    .module('angularstudy.mock.service.languageresources', [])
    .factory('LanguageResourcesService', LanguageResourcesService);

  function LanguageResourcesService() {
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
