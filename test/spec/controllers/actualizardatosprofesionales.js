'use strict';

describe('Controller: ActualizardatosprofesionalesCtrl', function () {

  // load the controller's module
  beforeEach(module('intranetFrontEndApp'));

  var ActualizardatosprofesionalesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ActualizardatosprofesionalesCtrl = $controller('ActualizardatosprofesionalesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ActualizardatosprofesionalesCtrl.awesomeThings.length).toBe(3);
  });
});
