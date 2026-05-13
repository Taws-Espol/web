/**
 * Estimate reading time for a given text body.
 *
 * @param body - Raw text content (Markdown/MDX source)
 * @param wpm  - Reading speed in words per minute (default: 200)
 * @returns Estimated reading time in minutes (minimum 1)
 */
export function readingTime(body: string, wpm = 200): number {
  const wordCount = body.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(wordCount / wpm));
}
