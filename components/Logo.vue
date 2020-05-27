<template>
  <img
    src="~/assets/bencodezen-logo.png"
    alt="BenCodeZen's Dragon Logo"
    :class="$style.logo"
  />
</template>

<style lang="scss" module>
.logo {
  width: 250px;
  @apply mt-3 mx-auto;
  animation: 1s appear;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
