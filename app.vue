<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'global-hash-dark-version'
  },
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,800;0,900;1,400&display=swap'
    }
  ]
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
