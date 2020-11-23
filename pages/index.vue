<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<template>
  <div class="container mx-auto text-center">
    <div>
      <logo class="mt-20" />
      <h1 class="title">
        BenCodeZen
      </h1>
      <nuxt-link to="/learn" class="button"
        >Check out the latest news!</nuxt-link
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../styles/_settings.scss';

.button {
  display: inline-block;
  @apply mt-3;
  font-size: 1.2rem;
  font-family: $ff-serif;
  color: #fff;
  background-color: $c-primary;
  padding: 0.8rem 1.6rem;
  border-radius: 4px;
  transition: background-color 0.1s ease;
}

.title {
  @apply block;
  @apply mt-3;
  color: $c-navy;
  font-family: $ff-sans;
  @apply font-semibold;
  @apply text-5xl;
  letter-spacing: 1px;
}
</style>
