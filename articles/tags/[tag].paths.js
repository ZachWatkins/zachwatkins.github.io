export const tags = [
  'career',
  'life',
  'wordpress',
  'comparison',
  'development',
];
export default {
  paths() {
    return tags.map((tag) => ({
      params: { tag },
    }));
  },
};
