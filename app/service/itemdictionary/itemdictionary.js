/**
 * ItemDictionary Service module.
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

    /**
     * My property description.  Like other pieces of your comment blocks,
     * this can span multiple lines.
     *
     * @property propertyName
     * @type {Object}
     * @default "foo"
     */
    var someProperty = {};

    var getSelectedCulture = function() {
      return LanguageManagerService.selectedCulture();
    };

    var itemdictionaryService = {
      get: function(programID, labelID) {
        return $q(function(resolve, reject) {
          var culture = getSelectedCulture();
          $http({
            method: 'GET',
            url: '../../resources/' + programID + '/' + programID + '.' + culture + '.json'
          }).then(function successCallback(response) {
            console.log(angular.fromJson(response.data)[labelID]);
            return resolve(angular.fromJson(response.data)[labelID]);
          }, function errorCallback(response) {
            console.log(response);
            return reject();
          });
        });
      }
    };

    return itemdictionaryService;
  }

})();
