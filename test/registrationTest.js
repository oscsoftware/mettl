
var chai = require('chai');
var expect = chai.expect;
var Registration = require('./../src/registration');

describe('Registration', function() {
  it('getTeamMembers should return list of members registered', function() {
    var registration = new Registration();
    expect(registration.getTeamMembers()).to.equal([]);
  });
});
