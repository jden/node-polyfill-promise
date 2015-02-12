var orig = global.Promise

var P

if (typeof global.Promise !== 'function') {
  P = require('bluebird')
  Object.defineProperty(P, 'polyfilled', {
    value: true,
    writable: false,
    enumerable: false
  })
} else {
  P = global.Promise
}

Object.defineProperty(P, 'noConflict', {
  value: noConflict,
  writable: false,
  enumerable: false
})

function noConflict () {
  global.Promise = orig
  return require('bluebird')
}

module.exports = function () {
  global.Promise = P
  return P
}
module.exports.noConflict = function () {
  return P
}