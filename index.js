if (!global.Promise) {
  global.Promise = require('bluebird')
  global.Promise.polyfilled = true
}

// todo: strip out non-standard methods and things