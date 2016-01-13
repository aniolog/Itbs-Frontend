'use strict';

describe('Controller: UsermodalCtrl', function () {

  // load the controller's module
  beforeEach(module('intranetFrontEndApp'));

  var UsermodalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UsermodalCtrl = $controller('UsermodalCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UsermodalCtrl.awesomeThings.length).toBe(3);
  });
});
