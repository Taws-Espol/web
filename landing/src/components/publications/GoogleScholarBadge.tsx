interface Props {
  /** Google Scholar user ID from site.socials.scholar_userid. */
  scholarUserId: string;
  /** Per-paper Scholar ID from the BibTeX google_scholar_id field. */
  googleScholarId: string;
  /** Pre-fetched citation count from citations.yml (optional). */
  count?: number;
}

function formatCount(n: number): string {
  return n >= 1000 ? `${Math.round(n / 100) / 10}K` : String(n);
}

/**
 * Renders a Google Scholar citation badge in both light and dark variants.
 * Visibility is toggled by the global `.only-light` / `.only-dark` CSS classes.
 */
export function GoogleScholarBadge({ scholarUserId, googleScholarId, count }: Props) {
  if (!scholarUserId || !googleScholarId) return null;

  const profileUrl = `https://scholar.google.com/citations?view_op=view_citation&hl=en&user=${scholarUserId}&citation_for_view=${scholarUserId}:${googleScholarId}`;
  const label = count !== undefined ? formatCount(count) : 'cite';
  const altText = count !== undefined ? `Google Scholar: ${count} citations` : 'Google Scholar';

  const badgeLight = `https://img.shields.io/badge/scholar-${encodeURIComponent(label)}-4285F4?logo=googlescholar&labelColor=f6f8fa&style=flat`;
  const badgeDark = `https://img.shields.io/badge/scholar-${encodeURIComponent(label)}-4c8bf5?logo=googlescholar&labelColor=21262d&logoColor=8ab4f8&style=flat`;

  return (
    <a href={profileUrl} target="_blank" rel="noopener noreferrer" style={{ lineHeight: 0 }}>
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
