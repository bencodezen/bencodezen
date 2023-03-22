<script>
export default {
  head: {
    bodyAttrs: {
      class: 'global-hash-dark-version'
    }
  }
}
</script>

<template>
  <div class="global-wrap">
    <div class="global-content">
      <AppHeader />
      <main class="global-main">
        <nuxt />
      </main>
      <AppFooter />
    </div>
  </div>
</template>
