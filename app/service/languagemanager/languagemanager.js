/**
 * LanguageManager Service module.
 *
 * @module angularstudy.service.languagemanager
 */
(function() {
  'use strict';

  angular
    .module('angularstudy.service.languagemanager', [
      'ngCookies'
    ])
    .factory('LanguageManagerService', LanguageManagerService);

  LanguageManagerService.$inject = [
    '$cookies'
  ];

  /**
   * LanguageManagerService
   *
   * @class LanguageManagerService
   * @constructor
   */
  function LanguageManagerService($cookies) {

    /**
     * My property description.  Like other pieces of your comment blocks,
     * this can span multiple lines.
     *
     * @property propertyName
     * @type {Object}
     * @default "foo"
     */
    var systemConstant = {
      cookieKey: 'cookie'
    };
    var cookieValue = {
      language: 'JP'
    };
    var CULTURE = {
      JP: 'ja-JP',
      EN: 'en-US',
      CN: 'zh-CN',
      TW: 'zh-TW'
    };

    var languagemanagerService = {
      selectedCulture: function() {
        var LanguageID = angular.fromJson($cookies.get(systemConstant.cookieKey)).language;
        return CULTURE[LanguageID];
      },
      saveSelected: function() {
        $cookies.put(systemConstant.cookieKey, angular.toJson(cookieValue));
        return;
      }
    };

    return languagemanagerService;
  }

})();
