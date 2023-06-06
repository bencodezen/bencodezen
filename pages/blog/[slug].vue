<script setup lang="ts">
const route = useRoute()
const { data: post } = await useAsyncData('blogPost', () =>
  queryContent(`blog/${route.params.slug}`).findOne()
)

const formatPublishDate = computed(() => {
  const dateFormat = new Date(post.value.date)
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }

  return dateFormat.toLocaleDateString('en-US', options)
})
</script>

<template>
  <article class="post-section">
    <div class="post-content">
      <p class="blog-publish-date">{{ formatPublishDate }}</p>
      <h1 class="blog-title">{{ post.title }}</h1>
      <ContentDoc :path="post._path" />
    </div>
  </article>
</template>

<style lang="scss"></style>
