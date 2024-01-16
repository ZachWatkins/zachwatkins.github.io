export const tags = ['career', 'life']
export default {
  paths() {
    return tags.map((tag) => ({
      params: { tag },
    }))
  },
}
