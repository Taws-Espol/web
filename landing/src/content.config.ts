import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

// ─── Posts ─────────────────────────────────────────────────────────────────

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional().default([]),
    categories: z.array(z.string()).optional().default([]),
    /** Enable KaTeX math rendering. */
    math: z.boolean().optional().default(false),
    /** Show table of contents sidebar. */
    toc: z.boolean().optional().default(true),
    /** Show related posts section. */
    relatedPosts: z.boolean().optional().default(false),
    /** Pin to top of blog listing. */
    pinned: z.boolean().optional().default(false),
    /** Hide from blog listing (but accessible via direct URL). */
    hidden: z.boolean().optional().default(false),
    /** Draft post — hidden from all listings and the search index until published. */
    draft: z.boolean().optional().default(false),
    /** Override the robots meta tag (e.g. 'noindex, nofollow'). Useful for sensitive posts. */
    robots: z.string().optional(),
    /** Last modified date — displayed in the post header and used in JSON-LD dateModified. */
    lastmod: z.coerce.date().optional(),
    /** Redirect to external URL instead of rendering content. */
    redirect: z.string().url().optional(),
    /** Hero/thumbnail image path. */
    image: z.string().optional(),
    /** Distill layout — renders as a Distill article. */
    distill: z.boolean().optional().default(false),
    /** Authors for Distill-style posts. */
    distillAuthors: z
      .array(
        z.object({
          name: z.string(),
          url: z.string().url().optional(),
          affiliations: z.object({ name: z.string() }).optional(),
        }),
      )
      .optional(),
    /** BibTeX bibliography file reference for Distill posts. */
    bibliography: z.string().optional(),
    /** Citation key for this post (used in bibliography). */
    citation_key: z.string().optional(),
    /** Load Mermaid diagram rendering on this post. */
    mermaid: z.boolean().optional().default(false),
    /** Load Chart.js on this post. */
    chart_js: z.boolean().optional().default(false),
    /** Load Apache ECharts on this post. */
    echarts: z.boolean().optional().default(false),
    /** Load Vega/Vega-Lite on this post. */
    vega: z.boolean().optional().default(false),
    /** Load Plotly.js on this post. */
    plotly: z.boolean().optional().default(false),
    /** Load pseudocode.js on this post. */
    pseudocode: z.boolean().optional().default(false),
    /** Load Typograms on this post. */
    typograms: z.boolean().optional().default(false),
    /** Load TikzJax on this post. */
    tikzjax: z.boolean().optional().default(false),
    /** Load Leaflet maps on this post. */
    map: z.boolean().optional().default(false),
    /** Load img-comparison-slider on this post. */
    img_comparison: z.boolean().optional().default(false),
    /** Load Diff2Html on this post. */
    code_diff: z.boolean().optional().default(false),
    /** Load PhotoSwipe gallery on this post. */
    gallery: z.boolean().optional().default(false),
    /** Enable Disqus comments on this post. */
    disqus: z.boolean().optional().default(false),
  }),
});

// ─── Projects ──────────────────────────────────────────────────────────────

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    /** Thumbnail image path. */
    img: z.string().optional(),
    /** Alt text for image. */
    img_alt: z.string().optional(),
    /** External URL (e.g. GitHub repo). */
    url: z.string().url().optional(),
    /** GitHub repo in format owner/repo — auto-links to repo. */
    github: z.string().optional(),
    /** GitHub repo path (owner/repo) for fetching live star count. */
    github_stars: z.string().optional(),
    /** Sort order (lower = shown first). */
    importance: z.number().optional().default(999),
    /** Badge label shown on card (e.g. 'open source'). */
    category: z.string().optional(),
    /** Show redirect to external url instead of project page. */
    redirect: z.string().url().optional(),
    /** Citation keys from papers.bib to show as References at the bottom of the project page. */
    related_publications: z.array(z.string()).optional(),
    /** Enable Giscus comments on the project page. */
    giscus_comments: z.boolean().optional().default(false),
  }),
});

// ─── People ────────────────────────────────────────────────────────────────

const people = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/people' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    /** Photo path in public/assets/img/. */
    photo: z.string().optional(),
    /** Brief description shown on profile card. */
    description: z.string().optional(),
    /** Personal website. */
    website: z.string().url().optional(),
    /** GitHub username. */
    github: z.string().optional(),
    /** Google Scholar user ID. */
    scholar: z.string().optional(),
    /** ORCID ID. */
    orcid: z.string().optional(),
    /** Sort order. */
    importance: z.number().optional().default(999),
    /** 'current' | 'alumni' */
    group: z.enum(['current', 'alumni']).optional().default('current'),
  }),
});

// ─── Teaching ──────────────────────────────────────────────────────────────

const teaching = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/teaching' }),
  schema: z.object({
    title: z.string(),
    /** Short code like 'PHY 101'. */
    code: z.string().optional(),
    description: z.string().optional(),
    /** Term, e.g. 'Spring 2024'. */
    term: z.string().optional(),
    /** Institution. */
    institution: z.string().optional(),
    /** Course URL or syllabus. */
    url: z.string().url().optional(),
    /** Sort order. */
    importance: z.number().optional().default(999),
    /** 'current' | 'past' */
    category: z.enum(['current', 'past']).optional().default('current'),
  }),
});

// ─── Announcements ─────────────────────────────────────────────────────────

const announcements = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/announcements' }),
  schema: z.object({
    date: z.coerce.date(),
    /** Pin this announcement to the top. */
    pinned: z.boolean().optional().default(false),
    /** Hide from the announcements list. */
    hidden: z.boolean().optional().default(false),
  }),
});

// ─── Books ─────────────────────────────────────────────────────────────────

const books = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/books' }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    /** Path to cover image in public/assets/img/book_covers/ */
    cover: z.string().optional(),
    /** Open Library ID for cover lookup (e.g. OL43499941M) */
    olid: z.coerce.string().optional(),
    /** ISBN for cover lookup (digits only, dashes optional) */
    isbn: z.coerce.string().optional(),
    /** Reading status */
    status: z
      .enum(['reading', 'finished', 'queued', 'paused', 'abandoned', 'interested', 'reread'])
      .optional(),
    /** Star rating 1-5 */
    stars: z.number().min(1).max(5).optional(),
    /** Date started reading */
    started: z.coerce.date().optional(),
    /** Date finished reading */
    finished: z.coerce.date().optional(),
    /** Original publication year */
    released: z.number().optional(),
    /** Link to buy the book */
    buy_link: z.string().url().optional(),
    /** Goodreads review ID */
    goodreads_review: z.string().optional(),
    /** Comma-separated categories/genres */
    categories: z.string().optional(),
    /** Sort order */
    importance: z.number().optional().default(999),
  }),
});

export const collections = { posts, projects, people, teaching, announcements, books };
