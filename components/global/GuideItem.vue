<script>
export default {}
</script>

<template>
  <div class="guide-item">
    <div class="guide-item-logo">
      <slot name="image" />
    </div>
    <div class="guide-item-content">
      <slot name="content" />
    </div>
  </div>
</template>

<style lang="scss">
.guide-item {
  display: flex;
  padding: 2rem 1.5rem;
  align-items: center;
  border: 2px solid #ddd;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.guide-item:first-child {
  margin-bottom: 0;
}

.guide-item-logo img {
  max-width: 150px;
  max-height: 150px;
  margin-right: 1rem;
}

.guide-item-content {
  h3 {
    display: block;
    margin-bottom: 0;
    font-size: 1.8rem;
    font-weight: 600;
    text-decoration: none;
  }

  .description {
    margin-bottom: 0;
    font-size: 1.1rem;
  }

  h3 + .subtitle {
    margin-bottom: 1rem;
  }
}
</style>
