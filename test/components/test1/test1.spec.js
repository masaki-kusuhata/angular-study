(function() {
  'use strict';

  describe('Controller: Test1Controller', function() {

    beforeEach(module('angularstudy.components.test1'));

    var Test1Controller;

    beforeEach(inject(function($controller) {
      Test1Controller = $controller('Test1Controller');
    }));

    describe('Test1Controller', function() {
      it('Test Case', function() {
        Test1Controller.activate();
      });
    });
  });
})();
