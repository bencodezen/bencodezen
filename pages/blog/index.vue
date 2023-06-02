<script setup lang="ts">
const { data: posts } = await useAsyncData('blog', () =>
  queryContent('blog').find()
)

const { data: ghostPosts } = await useFetch('/api/ghost')
</script>

<template>
  <article class="post-section">
    <pre>
      {{ ghostPosts }}
    </pre>
    <div class="post-content">
      <BlogPostList v-if="posts" :list="posts" />
    </div>
  </article>
</template>

<style></style>
