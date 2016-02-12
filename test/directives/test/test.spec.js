'use strict';

describe('Directive: testDirective', function() {

  beforeEach(module('angularstudy.directive.test'));

  var element, scope, $rootScope, $compile;
  var compareHTML   = '';
  var resultHTML    = '<div>' + compareHTML + '</div>';
  var directiveHTML = '';

  beforeEach(inject(function(_$rootScope_, _$compile_, $templateCache) {
    $rootScope = _$rootScope_;
    scope = _$rootScope_.$new();
    $compile = _$compile_;
    $templateCache.put('directives/test/test.html', resultHTML);
  }));

  describe('someThing', function() {

    beforeEach(function Compile() {

    });

    it ('someThing', function () {

    });
  });
});
