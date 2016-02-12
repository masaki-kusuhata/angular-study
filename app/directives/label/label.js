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
    .directive('lawsonMultiLang', LabelDirective);

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
      console.log(attrs);
      ItemDictionaryService.get(
        attrs.lawsonFormid,
        attrs.lawsonLabelid
      ).then(function(res) {
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
