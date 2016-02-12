/**
 * Test1 Components module.
 *
 * @module angularstudy.components.test1
 */
/* global angular */
(function () {
  'use strict';

  angular
    .module('angularstudy.components.test1', [])
    .component('test1Controller', {
      controller: Test1Controller,
      templateUrl: 'components/test1/test1.html',
      $canActivate: $canActivate
    });

  Test1Controller.$inject = [];

  var ctrl;

  function Test1Controller() {
    console.log('Test1Controller Constructor');
    ctrl = this;
  }

  function $canActivate() {
    console.log('Test1Controller $canActivate');
    return true;
  }

  Test1Controller.prototype.$onInit = function() {
    console.log('Test1Controller $onInit');
    ctrl.name = 'Test1';
  };
})();
