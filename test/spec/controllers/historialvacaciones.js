'use strict';

describe('Controller: HistorialvacacionesCtrl', function () {

  // load the controller's module
  beforeEach(module('intranetFrontEndApp'));

  var HistorialvacacionesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HistorialvacacionesCtrl = $controller('HistorialvacacionesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(HistorialvacacionesCtrl.awesomeThings.length).toBe(3);
  });
});
