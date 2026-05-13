import { describe, expect, it } from 'vitest';

import { getAuthors, getBoolField, getTitle, getVenue, getYear, parseBibtex } from './bibtex';

describe('parseBibtex', () => {
  it('parses a basic article entry', () => {
    const bib = `@article{key2024,
  title = {My Title},
  author = {Smith, John},
  year = {2024},
  journal = {My Journal},
}`;
    const entries = parseBibtex(bib);
    expect(entries).toHaveLength(1);
    expect(entries[0].key).toBe('key2024');
    expect(entries[0].type).toBe('article');
    expect(entries[0].fields.title).toBe('My Title');
    expect(entries[0].fields.year).toBe('2024');
    expect(entries[0].fields.journal).toBe('My Journal');
  });

  it('handles nested braces in values', () => {
    const bib = `@article{key,
  title = {The {Special} Word},
  author = {Author},
  year = {2024},
}`;
    const entries = parseBibtex(bib);
    expect(entries[0].fields.title).toBe('The {Special} Word');
  });

  it('skips @string, @preamble, and @comment directives', () => {
    const bib = `@string{pub = {Publisher}}
@preamble{"A preamble"}
@comment{This is a comment block}
@article{key2024,
  title = {My Title},
  author = {Author},
  year = {2024},
}`;
    const entries = parseBibtex(bib);
    expect(entries).toHaveLength(1);
    expect(entries[0].key).toBe('key2024');
  });

  it('strips line comments', () => {
    const bib = `@article{key, % this is a comment
  title = {Title}, % another comment
  author = {Author},
  year = {2024},
}`;
    const entries = parseBibtex(bib);
    expect(entries).toHaveLength(1);
    expect(entries[0].fields.title).toBe('Title');
  });

  it('parses multiple entries', () => {
    const bib = `@article{key1,
  title = {First},
  author = {Author},
  year = {2023},
}
@inproceedings{key2,
  title = {Second},
  author = {Author},
  year = {2024},
  booktitle = {ICML},
}`;
    const entries = parseBibtex(bib);
    expect(entries).toHaveLength(2);
    expect(entries[0].key).toBe('key1');
    expect(entries[1].key).toBe('key2');
  });

  it('returns empty array for empty input', () => {
    expect(parseBibtex('')).toEqual([]);
  });

  it('parses quoted string values', () => {
    const bib = `@article{key,
  title = "Quoted Title",
  author = {Author},
  year = {2024},
}`;
    const entries = parseBibtex(bib);
    expect(entries[0].fields.title).toBe('Quoted Title');
  });

  it('lowercases field names', () => {
    const bib = `@article{key,
  Title = {My Title},
  Author = {Someone},
  Year = {2024},
}`;
    const entries = parseBibtex(bib);
    expect(entries[0].fields.title).toBe('My Title');
    expect(entries[0].fields.author).toBe('Someone');
    expect(entries[0].fields.year).toBe('2024');
  });

  it('parses custom fields like selected and abbr', () => {
    const bib = `@article{key,
  title = {Title},
  author = {Author},
  year = {2024},
  selected = {true},
  abbr = {J. Ex.},
}`;
    const entries = parseBibtex(bib);
    expect(entries[0].fields.selected).toBe('true');
    expect(entries[0].fields.abbr).toBe('J. Ex.');
  });
});

describe('getTitle', () => {
  it('strips curly braces from title', () => {
    const entry = { type: 'article', key: 'k', fields: { title: '{Special} Word' } };
    expect(getTitle(entry)).toBe('Special Word');
  });

  it('handles nested curly braces', () => {
    const entry = { type: 'article', key: 'k', fields: { title: 'On {The {Nature}} of Things' } };
    expect(getTitle(entry)).toBe('On The Nature of Things');
  });

  it('returns empty string when title is missing', () => {
    const entry = { type: 'article', key: 'k', fields: {} };
    expect(getTitle(entry)).toBe('');
  });
});

describe('getYear', () => {
  it('parses year as a number', () => {
    const entry = { type: 'article', key: 'k', fields: { year: '2024' } };
    expect(getYear(entry)).toBe(2024);
  });

  it('returns 0 when year field is missing', () => {
    const entry = { type: 'article', key: 'k', fields: {} };
    expect(getYear(entry)).toBe(0);
  });

  it('returns NaN for non-numeric year', () => {
    const entry = { type: 'article', key: 'k', fields: { year: 'unknown' } };
    expect(getYear(entry)).toBeNaN();
  });
});

describe('getBoolField', () => {
  it('returns true for value "true"', () => {
    const entry = { type: 'article', key: 'k', fields: { selected: 'true' } };
    expect(getBoolField(entry, 'selected')).toBe(true);
  });

  it('returns false for value "false"', () => {
    const entry = { type: 'article', key: 'k', fields: { selected: 'false' } };
    expect(getBoolField(entry, 'selected')).toBe(false);
  });

  it('returns false for missing field', () => {
    const entry = { type: 'article', key: 'k', fields: {} };
    expect(getBoolField(entry, 'selected')).toBe(false);
  });

  it('is case-insensitive', () => {
    const entry = { type: 'article', key: 'k', fields: { selected: 'TRUE' } };
    expect(getBoolField(entry, 'selected')).toBe(true);
  });
});

describe('getAuthors', () => {
  it('returns a single author without comma as-is', () => {
    const entry = { type: 'article', key: 'k', fields: { author: 'John Smith' } };
    expect(getAuthors(entry)).toBe('John Smith');
  });

  it('converts "Last, First" to "First Last"', () => {
    const entry = { type: 'article', key: 'k', fields: { author: 'Smith, John' } };
    expect(getAuthors(entry)).toBe('John Smith');
  });

  it('joins multiple authors with ", "', () => {
    const entry = {
      type: 'article',
      key: 'k',
      fields: { author: 'Smith, John and Doe, Jane' },
    };
    expect(getAuthors(entry)).toBe('John Smith, Jane Doe');
  });

  it('handles case-insensitive " and " separator', () => {
    const entry = {
      type: 'article',
      key: 'k',
      fields: { author: 'Einstein, Albert AND Bohr, Niels' },
    };
    expect(getAuthors(entry)).toBe('Albert Einstein, Niels Bohr');
  });

  it('returns empty string when author field is missing', () => {
    const entry = { type: 'article', key: 'k', fields: {} };
    expect(getAuthors(entry)).toBe('');
  });
});

describe('getVenue', () => {
  it('returns journal when present (highest priority)', () => {
    const entry = {
      type: 'article',
      key: 'k',
      fields: { journal: 'Nature', booktitle: 'Conf' },
    };
    expect(getVenue(entry)).toBe('Nature');
  });

  it('falls back to booktitle when journal is absent', () => {
    const entry = { type: 'inproceedings', key: 'k', fields: { booktitle: 'ICML 2024' } };
    expect(getVenue(entry)).toBe('ICML 2024');
  });

  it('falls back to publisher', () => {
    const entry = { type: 'book', key: 'k', fields: { publisher: 'Springer' } };
    expect(getVenue(entry)).toBe('Springer');
  });

  it('falls back to howpublished', () => {
    const entry = { type: 'misc', key: 'k', fields: { howpublished: 'arXiv preprint' } };
    expect(getVenue(entry)).toBe('arXiv preprint');
  });

  it('returns empty string when no venue fields are present', () => {
    const entry = { type: 'misc', key: 'k', fields: {} };
    expect(getVenue(entry)).toBe('');
  });
});
