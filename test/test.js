require('mocha')
require('chai').should()

require('../index')

describe('Promise', function () {
  it('should have the Promise interface', function () {
    Promise.should.be.a('function')
    Promise.all.should.be.a('function')
    Promise.race.should.be.a('function')
    Promise.reject.should.be.a('function')
    Promise.resolve.should.be.a('function')
    Promise.cast.should.be.a('function')
  })
  it('should create Promises/A+ promises', function () {
    var promise = Promise.cast('test')
    promise.then.should.be.a('function')
    promise.catch.should.be.a('function')
  })
})