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
   * 画面ID,項目IDを元に項目名称を取得するディレクティブ
   *
   * @class LabelDirective
   * @constructor
   */
  function LabelDirective(ItemDictionaryService) {

    /**
     * [画面ID,項目IDを元に項目名称を取得する]
     * @param  {[object]} scope   [スコープ]
     * @param  {[object]} element [エレメント]
     * @param  {[object]} attrs   [属性]
     */
    function labelLink(scope, element, attrs) {
      ItemDictionaryService.get(
        attrs.lawsonFormid,
        attrs.lawsonLabelid
      ).then(function(res) {
        element[0].innerHTML = res;
      })
      .catch(function(ex) {
        return ex;
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
