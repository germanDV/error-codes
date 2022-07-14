'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var pointErrorCodes = {
  10: {
    code: 10,
    name: 'DEAD_ENGINE',
    text: 'Unable to start Point Engine for unknown reasons.'
  },
  11: {
    code: 11,
    name: 'INVALID_KEYFILE',
    text: 'Keyfile has missing or invalid data.'
  },
  12: {
    code: 12,
    name: 'LOCKFILE_PRESENT',
    text: 'Unable to create lockfile, process must be already running.'
  },
  13: {
    code: 13,
    name: 'DDBB_FAILED_MIGRATION',
    text: 'Failed to run database migrations.'
  }
};

exports.pointErrorCodes = pointErrorCodes;
//# sourceMappingURL=point-error-codes.cjs.development.js.map
