<script>
export default {
  async asyncData({ $content }) {
    const page = await $content('uses').fetch()

    return {
      page,
    }
  },
}
</script>

<template>
  <article class="post-section">
    <div class="post-content">
      <nuxt-content :document="page" />
    </div>
  </article>
</template>

<style lang="scss"></style>
