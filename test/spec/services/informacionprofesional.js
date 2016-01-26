'use strict';

describe('Service: informacionprofesional', function () {

  // load the service's module
  beforeEach(module('intranetFrontEndApp'));

  // instantiate service
  var informacionprofesional;
  beforeEach(inject(function (_informacionprofesional_) {
    informacionprofesional = _informacionprofesional_;
  }));

  it('should do something', function () {
    expect(!!informacionprofesional).toBe(true);
  });

});
