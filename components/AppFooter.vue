<script>
export default {
  computed: {
    currentYear() {
      const today = new Date()
      return today.getFullYear()
    }
  }
}
</script>

<template>
  <footer class="footer">
    <p class="text-center">
      © BenCodeZen {{ currentYear }}. Made with
      <a href="https://www.nuxtjs.org">NuxtJS</a> 💚.
    </p>
  </footer>
</template>

<style lang="scss">
@import '../styles/_settings.scss';

.footer {
  @apply text-center;
  font-family: $ff-serif;
  @apply text-lg;
  @apply mt-12;
  @apply p-8;
  border-top: 2px solid $c-border;
}
</style>
