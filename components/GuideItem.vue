<script>
export default {
  name: 'GuideItem',
  props: {
    description: {
      type: String,
      required: true
    },
    href: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <div class="guide-item">
    <img class="guide-item-logo" :src="image" :alt="imgAlt" />
    <div>
      <nuxt-link class="guide-item-title" :to="href">{{ title }}</nuxt-link>
      <p class="guide-item-description">{{ description }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.guide-item {
  display: flex;
  @apply p-5;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.guide-item-description {
  @apply mt-0 mb-2;
}

.guide-item-logo {
  max-width: 150px;
  max-height: 150px;
  @apply mr-5;
}

.guide-item-title {
  display: block;
  font-family: 'Poppins';
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
}
</style>
