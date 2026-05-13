# Quickstart — Deploy in 5 minutes

Fork → configure → deploy. No local setup required.

---

## Step 1 — Fork the repository

Click **Fork** on the [as-folio GitHub page](https://github.com/dadangnh/as-folio).

Keep the default settings. Fork to your personal account.

---

## Step 2 — Enable GitHub Pages

In your fork:

1. Go to **Settings** → **Pages**
2. Under _Source_, select **GitHub Actions**
3. Save

---

## Step 3 — Configure your site

Edit `src/config/site.ts` directly on GitHub (click the file → pencil icon):

```typescript
export const site = {
  title: 'Your Name',
  url: 'https://YOUR-USERNAME.github.io',
  base: '', // keep '' for user pages; set '/as-folio' for project pages

  author: {
    name: 'Your Name',
    email: 'you@example.com',
    subtitle: 'Your Role · Your Institution',
  },

  socials: {
    email: 'you@example.com',
    github_username: 'YOUR-USERNAME',
    // set unused platforms to: undefined
  },
};
```

Commit the change to `main`.

---

## Step 4 — Wait for the build

The GitHub Actions workflow runs automatically on every push to `main`.

Check progress: **Actions** tab → **Deploy to GitHub Pages** → latest run.

Build takes ~90–120 seconds. The first step fetches citation counts from OpenAlex — this adds a few seconds but requires no configuration.

---

## Step 5 — Visit your site

After the workflow completes, your site is live at:

```
https://YOUR-USERNAME.github.io
```

---

## Next steps

- Replace the demo content in `src/content/` with your own
- Add your BibTeX papers to `src/data/papers.bib`
- Add co-author links to `src/data/coauthors.yml`
- Replace `public/assets/img/prof_pic.jpg` with your photo
- Update your CV in `src/data/cv.yml` or `src/data/resume.json`

See [CUSTOMIZE.md](CUSTOMIZE.md) for a complete guide.
