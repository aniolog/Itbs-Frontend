'use strict';

describe('Controller: GenerardocumentosCtrl', function () {

  // load the controller's module
  beforeEach(module('intranetFrontEndApp'));

  var GenerardocumentosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GenerardocumentosCtrl = $controller('GenerardocumentosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GenerardocumentosCtrl.awesomeThings.length).toBe(3);
  });
});
