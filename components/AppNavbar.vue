<script>
export default {}
</script>

<template>
  <nav class="navbar">
    <div class="flex items-center">
      <nuxt-link to="/" class="logo" exact-active-class="no-active-style">
        <img class="mini-logo" src="~/assets/bencodezen-logo.png" /> BenCodeZen
      </nuxt-link>
    </div>
    <div>
      <nuxt-link to="/" class="nav-item mr-5">Home</nuxt-link>
      <nuxt-link to="/blog" class="nav-item mr-5">Blog</nuxt-link>
      <nuxt-link to="/learn" class="nav-item mr-5">Learn</nuxt-link>
      <nuxt-link to="/about" class="nav-item mr-5">About</nuxt-link>
      <nuxt-link to="/contact" class="nav-item ">Contact</nuxt-link>
    </div>
  </nav>
</template>

<style lang="scss">
.nuxt-link-exact-active {
  border-bottom: 2px solid #34b1ff;
}

.logo {
  @apply flex items-center;
  font-size: 1.3rem;
  font-weight: 600;
}

.navbar {
  @apply flex justify-between items-center;
  @apply py-3 px-5;
  border-bottom: 2px solid #eaecef;
  color: #2c3e50;
  font-weight: 500;
  font-family: 'Poppins';
}

.nav-item {
  font-size: 0.9rem;
}

.mini-logo {
  width: 36px;
  display: inline-block;
  @apply mr-2;
}
</style>
