export enum PointErrCodes {
  INVALID_KEYFILE = 11,
  LOCKFILE_PRESENT = 12,
  DDBB_FAILED_MIGRATION = 13,
  INVALID_CHECKSUM = 14,
}

export type PointErr = {
  code: number;
  name: string;
  text: string;
};

export const pointErrorCodes: { [k in PointErrCodes]: PointErr } & { [k: number]: PointErr } = {
  [PointErrCodes.INVALID_KEYFILE]: {
    code: 11,
    name: 'INVALID_KEYFILE',
    text: 'Keyfile has missing or invalid data.',
  },
  [PointErrCodes.LOCKFILE_PRESENT]: {
    code: 12,
    name: 'LOCKFILE_PRESENT',
    text: 'Unable to create lockfile, process must be already running.',
  },
  [PointErrCodes.DDBB_FAILED_MIGRATION]: {
    code: 13,
    name: 'DDBB_FAILED_MIGRATION',
    text: 'Failed to run database migrations.',
  },
  [PointErrCodes.INVALID_CHECKSUM]: {
    code: 14,
    name: 'INVALID_CHECKSUM',
    text: 'Checksum for downloaded file does not match the expected one.',
  },
};
