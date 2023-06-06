<script setup lang="ts">
const { data: content } = await useAsyncData('blog', () =>
  queryContent('uses').findOne()
)
</script>

<template>
  <article class="post-section">
    <div class="post-content">
      <ContentRenderer :value="content" />
    </div>
  </article>
</template>

<style lang="scss"></style>
