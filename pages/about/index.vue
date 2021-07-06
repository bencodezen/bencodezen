<script>
export default {
  async asyncData({ $content }) {
    const page = await $content('about').fetch()

    return { page }
  }
}
</script>

<template>
  <div class="content">
    <nuxt-content :document="page"></nuxt-content>
  </div>
</template>

<style lang="scss" scoped>
@import '../../styles/_settings.scss';
</style>
