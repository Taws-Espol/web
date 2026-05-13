import { useEffect, useState } from 'react';

interface Props {
  /** InspireHEP literature record ID from the BibTeX inspirehep_id field. */
  inspirehepId: string;
}

function formatCount(n: number): string {
  return n >= 1000 ? `${Math.round(n / 100) / 10}K` : String(n);
}

/**
 * Fetches the citation count from the public InspireHEP REST API and renders
 * light + dark badge variants. Renders nothing on fetch failure.
 */
export function InspireHEPBadge({ inspirehepId }: Props) {
  const [count, setCount] = useState<number | null>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!inspirehepId) return;
    fetch(`https://inspirehep.net/api/literature/${inspirehepId}?fields=citation_count`)
      .then((r) => {
        if (!r.ok) throw new Error('fetch failed');
        return r.json() as Promise<{ metadata?: { citation_count?: number } }>;
      })
      .then((data) => {
        const c = data?.metadata?.citation_count;
        if (typeof c === 'number') setCount(c);
        setDone(true);
      })
      .catch(() => setDone(true));
  }, [inspirehepId]);

  if (!done || count === null || !inspirehepId) return null;

  const label = formatCount(count);
  const altText = `InspireHEP: ${count} citations`;
  const href = `https://inspirehep.net/literature/${inspirehepId}`;

  const badgeLight = `https://img.shields.io/badge/inspire-${encodeURIComponent(label)}-001628?labelColor=f6f8fa&style=flat`;
  const badgeDark = `https://img.shields.io/badge/inspire-${encodeURIComponent(label)}-6ba3e0?labelColor=21262d&style=flat`;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" style={{ lineHeight: 0 }}>
      <img
        src={badgeLight}
        alt={altText}
        className="only-light"
        loading="lazy"
        style={{ height: '20px', verticalAlign: 'middle' }}
      />
      <img
        src={badgeDark}
        alt={altText}
        className="only-dark"
        loading="lazy"
        style={{ height: '20px', verticalAlign: 'middle' }}
      />
    </a>
  );
}
