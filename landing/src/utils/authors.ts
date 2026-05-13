/**
 * Author name processing utilities for publication lists.
 *
 * Supports co-author URL linking via coauthors.yml and self-identification
 * by last name match.
 */

export interface AuthorLink {
  /** Display name exactly as it appears in the author list. */
  name: string;
  /** Profile URL from coauthors.yml, if matched. */
  url?: string;
  /** True when the last name matches the site owner's configured last name. */
  isSelf: boolean;
}

/** One entry in coauthors.yml (keyed by last name). */
export interface CoauthorEntry {
  /** Author's personal or lab website URL. */
  url?: string;
  /** Google Scholar user ID. */
  scholar?: string;
  /** ORCID iD. */
  orcid?: string;
}

/** Parsed structure of src/data/coauthors.yml. */
export type CoauthorMap = Record<string, CoauthorEntry>;

/** Strip Unicode combining diacritics and lowercase a string for comparison. */
function normalizeForMatch(str: string): string {
  return str
    .normalize('NFD')
    .replace(/\p{Mn}/gu, '')
    .toLowerCase()
    .trim();
}

/**
 * Annotate a list of author name strings with profile URLs and self-identification.
 *
 * Looks up each author's last name in coauthors.yml for a profile URL.
 * Matching is case- and accent-insensitive.
 *
 * @param authorList      Names in "First Last" format (output of getAuthors()).
 * @param coauthors       Parsed coauthors.yml data.
 * @param authorLastName  Site owner's last name for self-identification.
 */
export function linkAuthors(
  authorList: string[],
  coauthors: CoauthorMap,
  authorLastName: string,
): AuthorLink[] {
  const normOwner = normalizeForMatch(authorLastName);
  return authorList.map((author) => {
    const parts = author.trim().split(/\s+/);
    if (parts.length === 0) return { name: author, isSelf: false };

    const last = parts[parts.length - 1];
    const normLast = normalizeForMatch(last);

    const isSelf = normOwner !== '' && normLast === normOwner;

    // Find coauthor entry: exact key first, then accent-normalized fallback
    const entry: CoauthorEntry | undefined =
      coauthors[last] ??
      Object.entries(coauthors).find(([k]) => normalizeForMatch(k) === normLast)?.[1];

    return { name: author, url: entry?.url, isSelf };
  });
}
