<script setup lang="ts">
const { data: posts } = await useAsyncData('blog', () =>
  queryContent('blog').find()
)
</script>

<template>
  <article class="post-section">
    <div class="post-content">
      <BlogPostList v-if="posts" :list="posts" />
    </div>
  </article>
</template>

<style></style>
