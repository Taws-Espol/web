import { describe, expect, it } from 'vitest';

import type { CoauthorMap } from './authors';
import { linkAuthors } from './authors';

const coauthors: CoauthorMap = {
  Podolsky: { url: 'https://example.com/podolsky', scholar: 'abc123' },
  Rosen: { url: 'https://example.com/rosen' },
  Müller: { url: 'https://example.com/muller' },
};

describe('linkAuthors', () => {
  it('returns empty array for empty input', () => {
    expect(linkAuthors([], coauthors, 'Einstein')).toEqual([]);
  });

  it('marks self by last name match (case-insensitive)', () => {
    const result = linkAuthors(['Albert Einstein'], coauthors, 'Einstein');
    expect(result[0].isSelf).toBe(true);
    expect(result[0].url).toBeUndefined();
  });

  it('marks self with different casing', () => {
    const result = linkAuthors(['Albert EINSTEIN'], coauthors, 'einstein');
    expect(result[0].isSelf).toBe(true);
  });

  it('does not mark self when authorLastName is empty', () => {
    const result = linkAuthors(['Albert Einstein'], coauthors, '');
    expect(result[0].isSelf).toBe(false);
  });

  it('links coauthor URL by last name', () => {
    const result = linkAuthors(['Boris Podolsky'], coauthors, 'Einstein');
    expect(result[0].url).toBe('https://example.com/podolsky');
    expect(result[0].isSelf).toBe(false);
  });

  it('links coauthor URL with accent-normalized last name', () => {
    const result = linkAuthors(['Hans Muller'], coauthors, 'Einstein');
    expect(result[0].url).toBe('https://example.com/muller');
  });

  it('preserves original name display string', () => {
    const result = linkAuthors(['Nathan Rosen'], coauthors, 'Einstein');
    expect(result[0].name).toBe('Nathan Rosen');
  });

  it('handles multiple authors in one call', () => {
    const result = linkAuthors(
      ['Albert Einstein', 'Boris Podolsky', 'Nathan Rosen'],
      coauthors,
      'Einstein',
    );
    expect(result).toHaveLength(3);
    expect(result[0].isSelf).toBe(true);
    expect(result[1].url).toBe('https://example.com/podolsky');
    expect(result[2].url).toBe('https://example.com/rosen');
  });

  it('returns isSelf=false and url=undefined for unknown authors', () => {
    const result = linkAuthors(['Max Planck'], coauthors, 'Einstein');
    expect(result[0].isSelf).toBe(false);
    expect(result[0].url).toBeUndefined();
  });

  it('handles single-word name (no last name split)', () => {
    const result = linkAuthors(['Einstein'], coauthors, 'Einstein');
    expect(result[0].isSelf).toBe(true);
  });

  it('handles empty coauthors map', () => {
    const result = linkAuthors(['Albert Einstein', 'Boris Podolsky'], {}, 'Einstein');
    expect(result[0].isSelf).toBe(true);
    expect(result[0].url).toBeUndefined();
    expect(result[1].isSelf).toBe(false);
    expect(result[1].url).toBeUndefined();
  });
});
