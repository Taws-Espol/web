import { site } from '@config/site';
import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const sitemapUrl = new URL(`${site.base}/sitemap.xml`, site.url).toString();
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl}\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
