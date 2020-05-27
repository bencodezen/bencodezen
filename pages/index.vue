<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<template>
  <div class="container">
    <div>
      <logo class="mt-10" />
      <h1 class="title">
        BenCodeZen
      </h1>
      <p class="subtitle">Not your average coding blog</p>
      <div class="links">
        <nuxt-link to="/workshops" class="button--green">Workshops</nuxt-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../styles/_settings.scss';

.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Poppins', 'Quicksand', 'Source Sans Pro', -apple-system,
    BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  color: #35495e;
  letter-spacing: 1px;
  @apply mt-3;
  @apply font-semibold;
  @apply text-5xl;
}

.subtitle {
  font-weight: 300;
  font-size: 1.6rem;
  line-height: 1.3;
  color: #57708a;
  padding-bottom: 15px;
  font-family: $ff-serif;
}

.links {
  padding-top: 15px;
}
</style>
