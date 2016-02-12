/**
 * LanguageResources Service module.
 *
 * @module angularstudy.service.languageresources
 */
(function() {
  'use strict';

  angular
    .module('angularstudy.service.languageresources', [])
    .factory('LanguageResourcesService', LanguageResourcesService);

  LanguageResourcesService.$inject = [];

  /**
   * LanguageResourcesService
   *
   * @class LanguageResourcesService
   * @constructor
   */
  function LanguageResourcesService() {

    /**
     * My property description.  Like other pieces of your comment blocks,
     * this can span multiple lines.
     *
     * @property propertyName
     * @type {Object}
     * @default "foo"
     */

    var languageresourcesService = {
      getLabel: function(programID, labelID, culture) {
        return;
      }
    };

    return languageresourcesService;
  }

})();
