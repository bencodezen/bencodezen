<script setup lang="ts"></script>

<template>
  <div class="global-wrap">
    <div class="global-content">
      <AppHeader />
      <main class="global-main">
        <slot />
      </main>
      <AppFooter />
    </div>
  </div>
</template>
