'use strict';

describe('Controller: HistorialpagosCtrl', function () {

  // load the controller's module
  beforeEach(module('intranetFrontEndApp'));

  var HistorialpagosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HistorialpagosCtrl = $controller('HistorialpagosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(HistorialpagosCtrl.awesomeThings.length).toBe(3);
  });
});
