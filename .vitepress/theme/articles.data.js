import { createContentLoader } from 'vitepress';

export default createContentLoader('articles/*/*.md', {
  excerpt: true,
  transform(raw) {
    return raw
      .filter(({ url }) => !url.includes('/tags/'))
      .map(({ url, frontmatter, excerpt }) => ({
        title: frontmatter.title,
        url,
        excerpt,
        date: formatDate(frontmatter.date),
        tags: frontmatter.tags,
      }))
      .sort((a, b) => b.date.time - a.date.time);
  },
});

function formatDate(raw) {
  const date = new Date(raw);
  date.setUTCHours(12);
  return {
    time: +date,
    string: date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
  };
}
