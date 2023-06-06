<script setup lang="ts"></script>

<template>
  <div class="base-icon">
    <slot />
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
