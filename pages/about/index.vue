<script>
export default {
  async asyncData({ $content }) {
    const page = await $content('about').fetch()

    return { page }
  }
}
</script>

<template>
  <article class="post-section">
    <div class="post-content">
      <nuxt-content :document="page"></nuxt-content>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '../../styles/_settings.scss';
</style>
