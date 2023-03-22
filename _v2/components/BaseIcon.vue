<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    iconComponent() {
      return () => import(`./icons/social/${this.name}`)
    }
  }
}
</script>

<template>
  <div class="base-icon">
    <component :is="iconComponent" />
  </div>
</template>

<style lang="scss">
.base-icon {
  display: inline-block;
  width: 24px;
  height: 24px;

  svg {
    width: 24px;
    height: 24px;
    fill: #fff;
  }
}
</style>
