(function() {
  'use strict';

  describe('Component: bilabel', function () {

    var controller, compile, rootScope;

    beforeEach(module('angularstudy.components.bilabel'));
    beforeEach(module('templates'));

    beforeEach(inject(function($rootScope, $compile, $componentController) {
      controller = $componentController;
      compile = $compile;
      rootScope = $rootScope;
    }));

    describe('BiLabel Controller', function() {
      it('Test Case', function () {
        var $scope = {};

        // Controllerの生成
        var ctrl = controller('bilabel', {$scope: $scope});
        expect(ctrl.name).toEqual('BiLabel');

        // $onInitの実行
        ctrl.$onInit();
        expect(ctrl.onInit).toEqual('Success');
      });
    });

    // selector
    describe('BiLabel templateUrl', function() {
      it('Test Case', function () {
        var factory = compile('<bilabel></bilabel>');
        var scope = rootScope.$new();
        var element = factory(scope);
        scope.$digest();
        console.log(element);
      });
    });
  });
})();

