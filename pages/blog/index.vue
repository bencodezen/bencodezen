<script>
import BlogPostList from '~/components/BlogPostList'

export default {
  components: {
    BlogPostList
  },
  async asyncData({ $content }) {
    const posts = await $content('blog').fetch()

    return {
      posts
    }
  }
}
</script>

<template>
  <article class="post-section">
    <div class="post-content">
      <BlogPostList :list="posts" />
    </div>
  </article>
</template>

<style></style>
