'use strict';

describe('Service: vacaciones', function () {

  // load the service's module
  beforeEach(module('intranetFrontEndApp'));

  // instantiate service
  var vacaciones;
  beforeEach(inject(function (_vacaciones_) {
    vacaciones = _vacaciones_;
  }));

  it('should do something', function () {
    expect(!!vacaciones).toBe(true);
  });

});
