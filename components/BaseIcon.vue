<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: true
  }
})

resolveComponent(props.name)
</script>

<template>
  <div class="base-icon">
    <component :is="name" />
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
