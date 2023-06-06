export default defineEventHandler(async (event) => {
  const ghostContent = await $fetch(
    'https://bencodezen.ghost.io/ghost/api/content/posts/?key=81bd665ebdb4dfcb238c38995b&include=tags'
  )

  const posts = ghostContent.posts.filter((post) => {
    return post.tags.findIndex((tag) => tag.name === 'Post') !== -1
  })

  return posts
})
