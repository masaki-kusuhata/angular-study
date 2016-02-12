/**
 * This is angularstudy module.
 *
 * @module angularstudy
 */
(function () {
  'use strict';

  angular
    .module('angularstudy', [
      'ngComponentRouter',
      'angularstudy.config',
      'angularstudy.components.home',
      'angularstudy.components.about',
      'angularstudy.components.test1',
      'angularstudy.components.contact'
    ])
    .controller('AppController', AppController);

  AppController.$inject = ['$router'];

  /**
   * AppController
   *
   * @class AppController
   * @main angularstudy
   * @constructor
   */
  function AppController ($router) {
    $router.config([
      {path: '/home',    name:'Home',    component: 'homeController', useAsDefault: true},
      {path: '/about',   name:'About',   component: 'aboutController'},
      {path: '/test1',   name:'Test1',   component: 'Test1Controller'},
      {path: '/contact', name:'Contact', component: 'contactController'}
    ]);
  }
})();
