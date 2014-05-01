if (!global.Promise) {
  global.Promise = require('bluebird')
  console.log('polyfilled Promise')
}

// todo: strip out non-standard methods and things