<script>
export default {
  props: {
    alt: {
      type: String,
      required: true
    },
    src: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <nuxt-img :src="src" :alt="alt" sizes="lg:100vw md:100vw sm:100vw"></nuxt-img>
</template>

<style></style>
