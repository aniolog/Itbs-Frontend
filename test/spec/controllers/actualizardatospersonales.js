'use strict';

describe('Controller: ActualizardatospersonalesCtrl', function () {

  // load the controller's module
  beforeEach(module('intranetFrontEndApp'));

  var ActualizardatospersonalesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ActualizardatospersonalesCtrl = $controller('ActualizardatospersonalesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ActualizardatospersonalesCtrl.awesomeThings.length).toBe(3);
  });
});
