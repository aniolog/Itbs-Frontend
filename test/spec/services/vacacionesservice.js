'use strict';

describe('Service: vacacionesservice', function () {

  // load the service's module
  beforeEach(module('intranetFrontEndApp'));

  // instantiate service
  var vacacionesservice;
  beforeEach(inject(function (_vacacionesservice_) {
    vacacionesservice = _vacacionesservice_;
  }));

  it('should do something', function () {
    expect(!!vacacionesservice).toBe(true);
  });

});
