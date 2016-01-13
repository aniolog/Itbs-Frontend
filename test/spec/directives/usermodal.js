'use strict';

describe('Directive: usermodal', function () {

  // load the directive's module
  beforeEach(module('intranetFrontEndApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<usermodal></usermodal>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the usermodal directive');
  }));
});
