'use strict';

describe('Service: certificadoservice', function () {

  // load the service's module
  beforeEach(module('intranetFrontEndApp'));

  // instantiate service
  var certificadoservice;
  beforeEach(inject(function (_certificadoservice_) {
    certificadoservice = _certificadoservice_;
  }));

  it('should do something', function () {
    expect(!!certificadoservice).toBe(true);
  });

});
