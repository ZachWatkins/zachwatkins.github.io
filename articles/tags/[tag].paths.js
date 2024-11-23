export const tags = [
  'career',
  'life',
  'wordpress',
  'comparison',
  'development',
  'accessibility',
  'productivity',
  'laravel',
  'rememboard',
];
export default {
  paths() {
    return tags.map((tag) => ({
      params: { tag },
    }));
  },
};
