var orig = global.Promise

if (typeof global.Promise !== 'function') {
  global.Promise = require('bluebird')
  Object.defineProperty(global.Promise, 'polyfilled', {
    value: true,
    writable: false,
    enumerable: false
  })
}

Object.defineProperty(global.Promise, 'noConflict', {
  value: noConflict,
  writable: false,
  enumerable: false
})

function noConflict () {
  global.Promise = orig
  return require('bluebird')
}

module.exports = global.Promise