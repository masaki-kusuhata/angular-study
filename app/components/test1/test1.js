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
      'angularstudy.components.biLabel',
      'ngCookies'
    ])
    .component('test1Controller', {
      controller: Test1Controller,
      templateUrl: 'components/test1/test1.html',
      $canActivate: $canActivate
    });

  Test1Controller.$inject = [
    '$cookies'
  ];

  var ctrl;

  function Test1Controller($cookies) {
    console.log('Test1Controller Constructor');
    ctrl = this;
  }

  function $canActivate() {
    console.log('Test1Controller $canActivate');
    return true;
  }

  Test1Controller.prototype.$onInit = function() {
    console.log('Test1Controller $onInit');
  };
})();
