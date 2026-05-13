# as-folio Components

Component inventory for the as-folio template. Components are organized by domain.

---

## Layout Components (`src/layouts/`)

### `Base.astro`
Root HTML shell used by all pages. Manages `<head>`, meta tags, analytics, dark mode,
View Transitions, and global scripts.

**Props:**
- `title?: string` — Page title (defaults to `site.author.name`)
- `description?: string` — Meta description
- `image?: string` — OG image URL or path
- `noindex?: boolean` — Add `noindex, nofollow` robots tag
- `robots?: string` — Override full robots tag string
- `isHome?: boolean` — Injects `Person` JSON-LD when true (homepage only)

**Named slots:**
- `head` — Inject additional `<head>` content (JSON-LD, citation meta tags)

---

### `Page.astro`
Standard page layout. Wraps `Base.astro` with a `.page-container` centred column and
passes all props through.

**Props:** Same as `Base.astro`

**Named slots:** `head`

---

### `Post.astro`
Blog post layout with reading progress bar, TOC sidebar, related posts, social sharing,
Giscus comments, and per-post CDN widget injection.

**Props:**
- `post: CollectionEntry<'posts'>` — The post entry from the `posts` collection
- `headings?: MarkdownHeading[]` — Headings array (passed from MDX `getHeadings()` or
  Astro's `render()` result) used to build the TOC

---

### `Distill.astro`
Distill-style article layout for long-form research posts. Mirrors the Distill
publication format with side-notes and bibliography support.

**Props:**
- `post: CollectionEntry<'posts'>` — Post data (must have `distill: true` in frontmatter)
- `headings?: MarkdownHeading[]`

---

## Global Components (`src/components/`)

### `Navbar.astro`
Site navigation bar. Renders items from `site.navbar.items`, which supports plain links
and dropdown groups (max 2 levels). Includes dark mode toggle and search trigger.

No props — reads from `site.ts` directly.

---

### `Footer.astro`
Site footer. Shows the configured footer text and optional "Last updated" timestamp.
Controlled by `site.footer`.

No props.

---

### `Pagination.astro`
Previous / Next page links for paginated listing pages.

**Props:**
- `prevUrl?: string` — URL of the previous page
- `nextUrl?: string` — URL of the next page
- `currentPage: number`
- `totalPages: number`

---

### `ThemeToggle.astro`
Sun/moon button that toggles `data-theme` between `'light'` and `'dark'` and saves the
preference to `localStorage`.

No props — embedded inside `Navbar.astro`.

---

### `Giscus.astro`
Giscus (GitHub Discussions) comment widget. Reads all configuration from `site.giscus`.
Only renders when `site.giscus.enabled` is `true`.

No props.

---

### `SocialLinks.astro`
Row of social icon links (GitHub, ORCID, Scholar, etc.). Reads from `site.socials`.

No props.

---

### `Newsletter.astro`
Loops.so newsletter subscription form. Only visible when `site.features.newsletter`
is `true` and `site.newsletter.endpoint` is configured.

No props.

---

### `ReadingProgress.astro`
Thin progress bar at the top of the viewport showing scroll position. Only shown on
blog posts when `site.features.progressBar` is `true`.

No props.

---

### `TOC.astro`
Table of contents sidebar (desktop only). Highlights the active heading as the user
scrolls.

**Props:**
- `headings: MarkdownHeading[]`

---

### `Figure.astro`
Accessible `<figure>` wrapper with optional caption.

**Props:**
- `src: string` — Image path
- `alt: string`
- `caption?: string`
- `class?: string`

---

### `Tabs.astro`
Tab switcher component for MDX posts. Children are slotted in and shown/hidden by the
active tab.

**Props:**
- `labels: string[]` — Tab labels in order

---

### `VideoEmbed.astro`
Lazy-loaded YouTube/Vimeo embed that respects `site.features.videoEmbedding`.

**Props:**
- `src: string` — Video URL

---

### `AudioPlayer.astro`
HTML5 `<audio>` player with a minimal UI.

**Props:**
- `src: string` — Audio file URL

---

### `JupyterNotebook.astro`
Renders a Jupyter notebook (`.ipynb`) as HTML inside a post.

**Props:**
- `src: string` — Path to the `.ipynb` file (relative to `public/`)

---

## Blog Components (`src/components/blog/`)

### `PostCard.astro`
Card used in blog listing pages.

**Props:**
- `post: CollectionEntry<'posts'>`

---

### `PostMeta.astro`
Date, tags, categories, and reading-time line shown below a post title.

**Props:**
- `date: Date`
- `tags?: string[]`
- `categories?: string[]`
- `readingTime?: number` — Minutes

---

### `RelatedPosts.astro`
"You might also like" section at the bottom of a post.

**Props:**
- `posts: CollectionEntry<'posts'>[]`

---

### `SocialShare.astro`
X, LinkedIn, Facebook, and email share buttons.

**Props:**
- `title: string`
- `url: string`
- `description?: string`

---

## Publication Components (`src/components/publications/`)

### `BibSearch.tsx`
Interactive React component for the publications page. Provides client-side full-text
search, year filtering, and expandable abstract/BibTeX panels.

**Props:**
- `entries: BibEntry[]` — Parsed BibTeX entries
- `authorLastName?: string` — Name to bold in author lists
- `labels: { abstract, bibtex, supp, searchPlaceholder, noResults }` — UI labels
- `badges: { altmetric, dimensions, googleScholar, inspirehep }` — Badge visibility
- `maxAuthorLimit?: number` — Truncate long author lists
- `thumbnails?: boolean` — Show preview images
- `previewDir?: string` — Path prefix for preview images
- `pdfDir?: string` — Path prefix for local PDFs
- `detailBase?: string` — Base path for internal publication detail pages

---

### `BadgeSet.astro`
Renders Altmetric, Dimensions, Google Scholar, and InspireHEP badge iframes for a
publication.

**Props:**
- `doi?: string`
- `scholarId?: string`
- `inspireId?: string`
- `badges: { altmetric, dimensions, googleScholar, inspirehep }`

---

## Project Components (`src/components/projects/`)

### `ProjectCard.astro`
Masonry-compatible project card with image, title, description, and badges.

**Props:**
- `project: CollectionEntry<'projects'>`

---

## CV Components (`src/components/cv/`)

### `CVSection.astro`
Renders a single CV section (e.g. Education, Experience) with a heading.

**Props:**
- `title: string`

---

### `CVEntry.astro`
Renders a single CV entry (role, dates, institution, highlights).

**Props:**
- `entry: RenderCVEntry`

---

## About Components (`src/components/about/`)

### `ProfilePhoto.astro`
Circular profile photo with configurable size and border.

**Props:**
- `src: string`
- `alt?: string`

---

## Search Components (`src/components/search/`)

### `SearchTrigger.astro`
Initializes ninja-keys + Pagefind for the ⌘K command palette. Must be rendered with
`transition:persist` to survive View Transitions.

No props.
