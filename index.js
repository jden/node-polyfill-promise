if (!global.Promise) {
  global.Promise = require('bluebird')
  global.Promise.polyfilled = true
}
