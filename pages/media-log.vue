<script setup lang="ts">
const { data } = await useAsyncData('media-log', () =>
  queryContent('media-log').find()
)
</script>

<template>
  <p>{{ data }}</p>
</template>

<style></style>
