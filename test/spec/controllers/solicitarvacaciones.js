'use strict';

describe('Controller: SolicitarvacacionesCtrl', function () {

  // load the controller's module
  beforeEach(module('intranetFrontEndApp'));

  var SolicitarvacacionesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SolicitarvacacionesCtrl = $controller('SolicitarvacacionesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SolicitarvacacionesCtrl.awesomeThings.length).toBe(3);
  });
});
