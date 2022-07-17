var _pointErrorCodes;

var PointErrCodes;

(function (PointErrCodes) {
  PointErrCodes[PointErrCodes["INVALID_KEYFILE"] = 11] = "INVALID_KEYFILE";
  PointErrCodes[PointErrCodes["LOCKFILE_PRESENT"] = 12] = "LOCKFILE_PRESENT";
  PointErrCodes[PointErrCodes["DDBB_FAILED_MIGRATION"] = 13] = "DDBB_FAILED_MIGRATION";
  PointErrCodes[PointErrCodes["INVALID_CHECKSUM"] = 14] = "INVALID_CHECKSUM";
})(PointErrCodes || (PointErrCodes = {}));

var pointErrorCodes = (_pointErrorCodes = {}, _pointErrorCodes[PointErrCodes.INVALID_KEYFILE] = {
  code: 11,
  name: 'INVALID_KEYFILE',
  text: 'Keyfile has missing or invalid data.'
}, _pointErrorCodes[PointErrCodes.LOCKFILE_PRESENT] = {
  code: 12,
  name: 'LOCKFILE_PRESENT',
  text: 'Unable to create lockfile, process must be already running.'
}, _pointErrorCodes[PointErrCodes.DDBB_FAILED_MIGRATION] = {
  code: 13,
  name: 'DDBB_FAILED_MIGRATION',
  text: 'Failed to run database migrations.'
}, _pointErrorCodes[PointErrCodes.INVALID_CHECKSUM] = {
  code: 14,
  name: 'INVALID_CHECKSUM',
  text: 'Checksum for downloaded file does not match the expected one.'
}, _pointErrorCodes);

export { PointErrCodes, pointErrorCodes };
//# sourceMappingURL=point-error-codes.esm.js.map
