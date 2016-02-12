'use strict';

describe('Directive: labelDirective', function() {

  beforeEach(module('angularstudy.directive.label'));

  var element, scope, $rootScope, $compile;
  var compareHTML   = '';
  var resultHTML    = '<div>' + compareHTML + '</div>';
  var directiveHTML = '';

  beforeEach(inject(function(_$rootScope_, _$compile_, $templateCache) {
    $rootScope = _$rootScope_;
    scope = _$rootScope_.$new();
    $compile = _$compile_;
    $templateCache.put('directives/label/label.html', resultHTML);
  }));

  describe('someThing', function() {

    beforeEach(function Compile() {

    });

    it ('someThing', function () {

    });
  });
});
