require('mocha')
require('chai').should()



describe('Promise', function () {
  beforeEach(function () {
    delete require.cache[require.resolve('../index')]
    require('../index')
  })
  afterEach(function () {
    if (global.Promise && global.Promise.polyfilled) {
      delete global.Promise
    }
  })
  it('should have the Promise interface', function () {
    require('../index')
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
  describe('.noConflict()', function () {
    it('leaves globals alone', function () {
      global.Promise = 'FOO'
      // force reload module for test
      delete require.cache[require.resolve('../index')]
      var Promise = require('../index').noConflict()
      global.Promise.should.equal('FOO')
      Promise.should.be.a('function')
      Promise.all.should.be.a('function')
      Promise.race.should.be.a('function')
      Promise.reject.should.be.a('function')
      Promise.resolve.should.be.a('function')
      Promise.cast.should.be.a('function')
    })
  })
})