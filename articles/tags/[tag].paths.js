export const tags = [
  'career',
  'life',
  'wordpress',
  'comparison',
  'development',
  'accessibility',
  'productivity',
];
export default {
  paths() {
    return tags.map((tag) => ({
      params: { tag },
    }));
  },
};
