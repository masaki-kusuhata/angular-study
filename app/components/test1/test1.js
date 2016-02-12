/**
 * Test1 Components module.
 *
 * @module angularstudy.components.test1
 */
/* global angular */
(function () {
  'use strict';

  angular
    .module('angularstudy.components.test1', [
      'angularstudy.service.itemdictionary',
      'angularstudy.directive.label'
    ])
    .component('test1Controller', {
      controller: Test1Controller,
      templateUrl: 'components/test1/test1.html',
      $canActivate: $canActivate
    });

  Test1Controller.$inject = [
    'ItemDictionaryService'
  ];

  var ctrl;

  function Test1Controller(ItemDictionaryService) {
    console.log('Test1Controller Constructor');
    ctrl = this;
    ctrl.ItemDictionaryService = ItemDictionaryService;
  }

  function $canActivate() {
    console.log('Test1Controller $canActivate');
    return true;
  }

  Test1Controller.prototype.$onInit = function() {
    console.log('Test1Controller $onInit');
  };
})();
