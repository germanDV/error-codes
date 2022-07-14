export type PointErr = {
  code: number;
  name: string;
  text: string;
};

export const pointErrorCodes: Record<number, PointErr> = {
  11: {
    code: 11,
    name: 'INVALID_KEYFILE',
    text: 'Keyfile has missing or invalid data.',
  },
  12: {
    code: 12,
    name: 'LOCKFILE_PRESENT',
    text: 'Unable to create lockfile, process must be already running.',
  },
  13: {
    code: 13,
    name: 'DDBB_FAILED_MIGRATION',
    text: 'Failed to run database migrations.',
  },
};
