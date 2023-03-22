<script setup lang="ts">
const { data } = await useAsyncData('about', () =>
  queryContent('about').findOne()
)
</script>

<template>
  <article class="post-section">
    <div class="post-content">
      <ContentRenderer v-if="data" :value="data" />
    </div>
  </article>
</template>

<style lang="scss" scoped></style>
