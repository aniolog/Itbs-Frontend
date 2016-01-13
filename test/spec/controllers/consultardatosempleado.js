'use strict';

describe('Controller: ConsultardatosempleadoCtrl', function () {

  // load the controller's module
  beforeEach(module('intranetFrontEndApp'));

  var ConsultardatosempleadoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ConsultardatosempleadoCtrl = $controller('ConsultardatosempleadoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ConsultardatosempleadoCtrl.awesomeThings.length).toBe(3);
  });
});
