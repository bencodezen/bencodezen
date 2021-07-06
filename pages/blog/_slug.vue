<script>
export default {
  async asyncData(ctx) {
    const page = await ctx.$content(`blog/${ctx.params.slug}`).fetch()
    return {
      page
    }
  },
  computed: {
    formatPublishDate() {
      const dateFormat = new Date(this.page.date)
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }

      return dateFormat.toLocaleDateString('en-US', options)
    }
  }
}
</script>

<template>
  <article class="post-section">
    <div class="post-content">
      <p class="blog-publish-date">{{ formatPublishDate }}</p>
      <h1 class="blog-title">{{ page.title }}</h1>
      <nuxt-content :document="page" />
    </div>
  </article>
</template>

<style lang="scss">
@import '../../styles/_settings.scss';
</style>
