import { useEffect } from 'react';

interface Props {
  doi?: string;
  arxiv?: string;
  /** Explicit Altmetric ID — overrides DOI/arXiv lookup when provided. */
  altmetricId?: string;
  showAltmetric?: boolean;
  showDimensions?: boolean;
}

/**
 * Renders Altmetric and Dimensions badge placeholder elements.
 *
 * The external widget scripts (loaded on the publications page) scan for these
 * elements and populate them. After React hydration the scripts may need to
 * re-scan, so we trigger their reinit functions in a useEffect.
 */
export function BadgeSet({ doi, arxiv, altmetricId, showAltmetric, showDimensions }: Props) {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    // window may have badge reinit functions after scripts load — cast to access dynamic keys
    const w = window as unknown as Record<string, unknown>;
    if (showAltmetric && typeof w['_altmetric_embed_init'] === 'function') {
      (w['_altmetric_embed_init'] as () => void)();
    }
    if (showDimensions && typeof w['__dimensions_badge_reload'] === 'function') {
      (w['__dimensions_badge_reload'] as () => void)();
    }
  }, [doi, arxiv, altmetricId, showAltmetric, showDimensions]);

  const hasAltmetricSource = !!(altmetricId || doi || arxiv);
  if (!showAltmetric && !showDimensions) return null;

  return (
    <div
      className="badges"
      style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}
    >
      {showAltmetric && hasAltmetricSource && (
        <>
          {altmetricId ? (
            <div
              className="altmetric-embed"
              data-badge-type="2"
              data-badge-popover="right"
              data-altmetric-id={altmetricId}
            />
          ) : doi ? (
            <div
              className="altmetric-embed"
              data-badge-type="2"
              data-badge-popover="right"
              data-doi={doi}
            />
          ) : (
            <div
              className="altmetric-embed"
              data-badge-type="2"
              data-badge-popover="right"
              data-arxiv-id={arxiv}
            />
          )}
        </>
      )}
      {showDimensions && doi && (
        <span
          className="__dimensions_badge_embed__"
          data-doi={doi}
          data-legend="hover-right"
          data-style="small_rectangle"
        />
      )}
    </div>
  );
}
