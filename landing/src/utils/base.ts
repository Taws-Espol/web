/**
 * Prepend Astro's base path to a root-relative URL.
 *
 * - `/assets/img/1.jpg` → `/as-folio/assets/img/1.jpg`  (when base = '/as-folio')
 * - `/assets/img/1.jpg` → `/assets/img/1.jpg`            (when base = '')
 * - `https://example.com/img.jpg` → unchanged
 * - `data:image/...` → unchanged
 * - relative paths → unchanged
 *
 * import.meta.env.BASE_URL is set by Astro from astro.config base option.
 * It always has a trailing slash: '' base → '/', '/as-folio' base → '/as-folio/'.
 */
export function withBase(path: string): string {
  if (!path || !path.startsWith('/') || path.startsWith('//')) return path;
  const base = import.meta.env.BASE_URL; // e.g. '/as-folio/' or '/'
  if (base === '/') return path;
  // BASE_URL has trailing slash; strip the leading slash from path to avoid double slashes
  return `${base.replace(/\/$/, '')}${path}`;
}
