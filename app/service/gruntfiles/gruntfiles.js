/**
 * Gruntfiles Service module.
 *
 * @module angularstudy.service.gruntfiles
 */
(function () {
  'use strict';

  angular
    .module('angularstudy.service.gruntfiles', [
      'ngResource'
    ])
    .factory('GruntfilesService', GruntfilesService);

  GruntfilesService.$inject = ['$resource'];

  /**
   * @class GruntfilesService
   * @constructor
   */
  function GruntfilesService($resource) {
    var gruntfiles = $resource('/api/gruntfiles', {
      query: {
        transformResponse: function (data) {
          return angular.fromJson(data);
        }
      }
    });
    return gruntfiles;
  }
})();
