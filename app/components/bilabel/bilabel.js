/**
 * フォームIDと項目IDを元にLabel名を取得するコンポーネント
 * <bi-label formid="フォームID" itemid="項目ID"></bi-label>
 * @module angularstudy.components.biLabel
 */
/* global angular */
(function () {
  'use strict';

  angular
    .module('angularstudy.components.biLabel', [
      'angularstudy.service.itemdictionary'
    ])
    .component('biLabel', {
      controller: Controller,
      templateUrl: 'components/bilabel/bilabel.html',
      $canActivate: $canActivate,
      bindings: {
        formid: '@',
        itemid: '@'
      }
    });

  Controller.$inject = [
    'ItemDictionaryService'
  ];

  var ctrl;

  function Controller(ItemDictionaryService) {
    console.log('biLabel Controller Constructor');
    ctrl = this;
    ctrl.name = '';
    ctrl.ItemDictionaryService = ItemDictionaryService;
  }

  function $canActivate() {
    console.log('biLabel Controller $canActivate');
    return true;
  }

  Controller.prototype.$onInit = function() {
    console.log('biLabel Controller $onInit');
    // Label名取得
    ctrl.ItemDictionaryService.get(
      ctrl.formid,
      ctrl.itemid
    ).then(function(res) {
      ctrl.name = res;
    })
    .catch(function(ex) {
      return ex;
    });
  };
})();
