/**
 * Test Directive module.
 *
 * @module angularstudy.directive.test
 */
(function () {
  'use strict';

  angular
    .module('angularstudy.directive.test', [])
    .directive('angularstudyTest', TestDirective);

  TestDirective.$inject = [];

  /**
   * TestDirective
   *
   * @class TestDirective
   * @constructor
   */
  function TestDirective() {
    function testLink(scope, element) {

    }

    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'directives/test/test.html',
      scope: {
        title: '=',
        message: '='
      },
      link: testLink
    };
  }

})();
