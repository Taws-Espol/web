import { describe, expect, it } from 'vitest';

import { readingTime } from './reading-time';

describe('readingTime', () => {
  it('returns 1 for empty string', () => {
    expect(readingTime('')).toBe(1);
  });

  it('returns 1 for a single word', () => {
    expect(readingTime('hello')).toBe(1);
  });

  it('counts words correctly at default 200 wpm', () => {
    // 200 words → exactly 1 min
    const text = Array(200).fill('word').join(' ');
    expect(readingTime(text)).toBe(1);
  });

  it('rounds up to next minute', () => {
    // 201 words at 200 wpm → ceil(1.005) = 2
    const text = Array(201).fill('word').join(' ');
    expect(readingTime(text)).toBe(2);
  });

  it('respects custom wpm', () => {
    const text = Array(100).fill('word').join(' ');
    expect(readingTime(text, 50)).toBe(2);
  });

  it('never returns less than 1 minute', () => {
    expect(readingTime('one two three', 10000)).toBe(1);
  });
});
