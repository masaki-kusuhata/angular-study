/**
 * Label Directive module.
 *
 * @module angularstudy.directive.label
 */
(function () {
  'use strict';

  angular
    .module('angularstudy.directive.label', [
      'angularstudy.service.itemdictionary'
    ])
    .directive('angularstudyLabel', LabelDirective);

  LabelDirective.$inject = [
    'ItemDictionaryService'
  ];

  /**
   * LabelDirective
   *
   * @class LabelDirective
   * @constructor
   */
  function LabelDirective(ItemDictionaryService) {
    function labelLink(scope, element, attrs) {
      console.log();
      ItemDictionaryService.get(
        attrs.angularstudyForm,
        attrs.angularstudyLabel
      ).then(function(res) {
        console.log('1');
        element[0].innerHTML = res;
      });
    }

    return {
      restrict: 'A',
      replace: true,
      scope: {
        title: '=',
        message: '='
      },
      link: labelLink
    };
  }

})();
