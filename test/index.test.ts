import { pointErrorCodes } from '../src';

// Acceptable ranges for point error codes
const r1 = { min: 3, max: 125 };
const r2 = { min: 166, max: 254 };

function isWithinRanges(code: number): boolean {
  return (code >= r1.min && code <= r1.max) || (code >= r2.min && code <= r2.max);
}

describe('pointErrorCodes', () => {
  it('should return the expected error', () => {
    expect(pointErrorCodes[11]).toEqual({
      code: 11,
      name: 'INVALID_KEYFILE',
      text: 'Keyfile has missing or invalid data.',
    });
  });

  it('should return undefined for an inexistent error code', () => {
    expect(pointErrorCodes[1]).toBeUndefined();
  });

  it('should not find any out of range codes', () => {
    Object.keys(pointErrorCodes).forEach(code => {
      expect(isWithinRanges(+code)).toBe(true);
    });
  });
});
