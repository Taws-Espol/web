import type { CollectionEntry } from 'astro:content';

type Post = CollectionEntry<'posts'>;

/**
 * Sort posts: pinned first, then by date descending.
 */
export function sortPosts(posts: Post[]): Post[] {
  return [...posts].sort((a, b) => {
    if (a.data.pinned !== b.data.pinned) return a.data.pinned ? -1 : 1;
    return b.data.date.getTime() - a.data.date.getTime();
  });
}

/**
 * Filter out hidden and redirect posts.
 */
export function visiblePosts(posts: Post[]): Post[] {
  return posts.filter((p) => !p.data.hidden);
}

/**
 * Compute a similarity score between two posts based on shared tags.
 * Returns a number from 0 (no match) to 1 (identical tags).
 */
function tagSimilarity(a: Post, b: Post): number {
  const tagsA = new Set(a.data.tags);
  const tagsB = new Set(b.data.tags);
  if (tagsA.size === 0 && tagsB.size === 0) return 0;
  const intersection = [...tagsA].filter((t) => tagsB.has(t)).length;
  const union = new Set([...tagsA, ...tagsB]).size;
  return intersection / union;
}

/**
 * Return up to `limit` related posts, ranked by tag similarity to `current`.
 * Excludes the current post and hidden posts.
 */
export function relatedPosts(current: Post, all: Post[], limit = 3): Post[] {
  return all
    .filter((p) => p.id !== current.id && !p.data.hidden)
    .map((p) => ({ post: p, score: tagSimilarity(current, p) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || b.post.data.date.getTime() - a.post.data.date.getTime())
    .slice(0, limit)
    .map(({ post }) => post);
}

/**
 * Get all unique tags across posts, sorted alphabetically.
 */
export function allTags(posts: Post[]): string[] {
  return [...new Set(posts.flatMap((p) => p.data.tags))].sort();
}

/**
 * Get all unique categories across posts, sorted alphabetically.
 */
export function allCategories(posts: Post[]): string[] {
  return [...new Set(posts.flatMap((p) => p.data.categories))].sort();
}
