<script>
export default {
  props: {
    error: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">Oops... We could not find that page</h1>
    <h1 v-else>You stumbled upon a mysterious error...</h1>
    <nuxt-link to="/" class="button">Go back to Home Page</nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
@import '../styles/_settings.scss';

.container {
  text-align: center;
}

h1 {
  font-family: $ff-sans;
  font-size: 2rem;
  @apply m-5;
  @apply pt-5;
}

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
</style>
