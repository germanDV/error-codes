
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./point-error-codes.cjs.production.min.js')
} else {
  module.exports = require('./point-error-codes.cjs.development.js')
}
