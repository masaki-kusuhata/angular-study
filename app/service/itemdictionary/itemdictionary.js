/**
 * Label名を取得するservice
 *
 * @module angularstudy.service.itemdictionary
 */
(function() {
  'use strict';

  angular
    .module('angularstudy.service.itemdictionary', [
      'angularstudy.service.languagemanager'
    ])
    .factory('ItemDictionaryService', ItemDictionaryService);

  ItemDictionaryService.$inject = [
    'LanguageManagerService',
    '$http',
    '$q'
  ];

  /**
   * ItemDictionaryService
   *
   * @class ItemDictionaryService
   * @constructor
   */
  function ItemDictionaryService(LanguageManagerService, $http, $q) {
    var getSelectedCulture = function() {
      LanguageManagerService.saveSelected();
      return LanguageManagerService.selectedCulture();
    };

    var itemdictionaryService = {
      get: function(programID, labelID) {
        var deferred = $q.defer();
        $http({
          method: 'GET',
          url: createUrl(programID, labelID, getSelectedCulture())
        }).then(function successCallback(response) {
          deferred.resolve(angular.fromJson(response.data)[labelID]);
        }, function errorCallback(response) {
          deferred.reject(response);
        });
        return deferred.promise;
      }
    };

    var createUrl = function(programID, labelID, culture) {
      return '../../resources/' + programID + '/' + programID + '.' + culture + '.json';
    };
    return itemdictionaryService;
  }

})();
