<script>
/* eslint-disable vue/no-unused-components */
import GuideItem from '~/components/GuideItem'

export default {
  components: {
    GuideItem
  },
  async asyncData({ $content }) {
    const page = await $content('learn').fetch()

    return { page }
  }
}
</script>

<template>
  <main>
    <nuxt-content :document="page"></nuxt-content>
  </main>
</template>

<style></style>
