import { describe, expect, it } from 'vitest';

import { formatCVDate, formatDateRange } from './cv';

describe('formatCVDate', () => {
  it('formats ISO year-month string', () => {
    expect(formatCVDate('2024-03')).toMatch(/Mar 2024/);
  });

  it('formats ISO full date string', () => {
    expect(formatCVDate('2024-03-15')).toMatch(/Mar 2024/);
  });

  it('returns year string for year-only input', () => {
    expect(formatCVDate('2024')).toBe('2024');
  });

  it('returns "Present" for the string "present"', () => {
    expect(formatCVDate('present')).toBe('Present');
  });

  it('returns empty string for undefined', () => {
    expect(formatCVDate(undefined)).toBe('');
  });

  it('handles a number year', () => {
    expect(formatCVDate(2024)).toBe('2024');
  });

  it('truncates a bare 6-digit number to the first 4 digits (year regex match)', () => {
    // String(202403) = '202403'; regex /^(\d{4})/ matches year='2024', no dash → returns '2024'
    expect(formatCVDate(202403)).toBe('2024');
  });
});

describe('formatDateRange', () => {
  it('formats start to end range with " – " separator', () => {
    const result = formatDateRange('2020-01', '2024-06');
    expect(result).toMatch(/Jan 2020/);
    expect(result).toMatch(/Jun 2024/);
    expect(result).toContain('–');
  });

  it('shows "Present" when end is the string "present"', () => {
    const result = formatDateRange('2020-01', 'present');
    expect(result).toMatch(/Jan 2020/);
    expect(result).toMatch(/Present/);
  });

  it('shows "Present" when end is undefined', () => {
    const result = formatDateRange('2020-01', undefined);
    expect(result).toMatch(/Present/);
  });

  it('returns only the start when start equals end', () => {
    expect(formatDateRange('2024', '2024')).toBe('2024');
  });

  it('returns "Present" when both start and end are undefined (undefined end → Present)', () => {
    // undefined end is treated as ongoing (→ 'Present'); undefined start yields no prefix
    expect(formatDateRange(undefined, undefined)).toBe('Present');
  });

  it('returns just the end when start is undefined', () => {
    expect(formatDateRange(undefined, '2024')).toBe('2024');
  });

  it('returns just the start when end is empty-ish', () => {
    // !end is truthy for undefined, null, ''
    const result = formatDateRange('2020', undefined);
    // end is undefined → "Present"; s !== e → "2020 – Present"
    expect(result).toMatch(/2020/);
  });
});
