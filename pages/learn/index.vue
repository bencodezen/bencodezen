<script>
export default {
  async asyncData({ $content }) {
    const page = await $content('learn').fetch()

    return { page }
  }
}
</script>

<template>
  <main class="container mx-auto content">
    <nuxt-content :document="page"></nuxt-content>
  </main>
</template>

<style lang="scss">
@import '../../styles/_settings.scss';

.page-title {
  @apply font-bold;
  @apply text-4xl;
  font-family: $ff-sans;
  @apply mt-5 mb-3;
  color: $c-navy;
}
</style>
