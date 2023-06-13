<script setup lang="ts">
const { data: localPosts } = await useAsyncData('blog', () =>
  queryContent('blog').find()
)

const { data: ghostPosts } = await useFetch('/api/ghost', {
  transform: (posts) => {
    return posts.map((post) => ({
      title: post.title,
      excerpt: post.excerpt,
      date: post.published_at,
      tags: post.tags.map((tag) => tag.name),
      _path: `/blog/${post.slug}`,
    }))
  },
})

const allPosts = computed(() => {
  return [...ghostPosts.value, ...localPosts.value]
})
</script>

<template>
  <article class="post-section">
    <div class="post-content">
      <BlogPostList v-if="allPosts" :list="allPosts" />
    </div>
  </article>
</template>

<style></style>
