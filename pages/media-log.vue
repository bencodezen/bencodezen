<script>
export default {
  async asyncData({ $content }) {
    const page = await $content('media-log').fetch()

    return { page }
  }
}
</script>

<template>
  <nuxt-content :document="page"></nuxt-content>
</template>

<style></style>
