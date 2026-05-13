/**
 * CV data types and parsing utilities.
 *
 * Supports two formats:
 *   'rendercv'   — src/data/cv.yml  (RenderCV YAML format)
 *   'jsonresume' — src/data/resume.json  (JSONResume schema v1)
 */

// ─── RenderCV types ──────────────────────────────────────────────────────────

export interface RenderCVEntry {
  institution?: string;
  company?: string;
  position?: string;
  area?: string;
  degree?: string;
  title?: string;
  authors?: string[];
  doi?: string;
  date?: string | number;
  start_date?: string | number;
  end_date?: string | number | 'present';
  location?: string;
  journal?: string;
  publisher?: string;
  url?: string;
  highlights?: string[];
  name?: string;
  issuer?: string;
  label?: string;
  details?: string;
}

export interface RenderCV {
  cv: {
    name: string;
    location?: string;
    email?: string;
    phone?: string;
    website?: string;
    summary?: string;
    social_networks?: Array<{ network: string; username: string }>;
    sections: {
      education?: RenderCVEntry[];
      experience?: RenderCVEntry[];
      publications?: RenderCVEntry[];
      awards?: RenderCVEntry[];
      skills?: RenderCVEntry[];
      languages?: RenderCVEntry[];
      interests?: RenderCVEntry[];
      [key: string]: RenderCVEntry[] | undefined;
    };
  };
}

// ─── JSONResume types ────────────────────────────────────────────────────────

export interface JSONResumeWork {
  name?: string;
  position?: string;
  url?: string;
  startDate?: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

export interface JSONResumeEducation {
  institution?: string;
  url?: string;
  area?: string;
  studyType?: string;
  startDate?: string;
  endDate?: string;
  score?: string;
  courses?: string[];
}

export interface JSONResumeAward {
  title?: string;
  date?: string;
  awarder?: string;
  summary?: string;
}

export interface JSONResumePublication {
  name?: string;
  publisher?: string;
  releaseDate?: string;
  url?: string;
  summary?: string;
}

export interface JSONResumeSkill {
  name?: string;
  level?: string;
  keywords?: string[];
}

export interface JSONResumeLanguage {
  language?: string;
  fluency?: string;
}

export interface JSONResumeInterest {
  name?: string;
  keywords?: string[];
}

export interface JSONResume {
  basics?: {
    name?: string;
    label?: string;
    email?: string;
    phone?: string;
    url?: string;
    summary?: string;
    location?: {
      address?: string;
      postalCode?: string;
      city?: string;
      countryCode?: string;
      region?: string;
    };
    profiles?: Array<{ network?: string; username?: string; url?: string }>;
  };
  work?: JSONResumeWork[];
  education?: JSONResumeEducation[];
  awards?: JSONResumeAward[];
  publications?: JSONResumePublication[];
  skills?: JSONResumeSkill[];
  languages?: JSONResumeLanguage[];
  interests?: JSONResumeInterest[];
}

// ─── Utilities ───────────────────────────────────────────────────────────────

/** Format a date string or number as "Month Year" or just "Year". */
export function formatCVDate(d: string | number | undefined): string {
  if (!d || d === 'present') return d === 'present' ? 'Present' : '';
  const str = String(d);
  // ISO: 2025-01 or 2025-01-01
  const isoMatch = str.match(/^(\d{4})(?:-(\d{2}))?/);
  if (isoMatch) {
    const [, year, month] = isoMatch;
    if (month) {
      const date = new Date(Number(year), Number(month) - 1);
      return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
    }
    return year;
  }
  return str;
}

/** Format a date range like "Jan 2020 – Present". */
export function formatDateRange(
  start: string | number | undefined,
  end: string | number | undefined,
): string {
  const s = formatCVDate(start);
  const e = end === 'present' || !end ? 'Present' : formatCVDate(end);
  if (!s && !e) return '';
  if (!s) return e;
  if (!e || s === e) return s;
  return `${s} – ${e}`;
}
