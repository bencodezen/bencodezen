<script>
export default {}
</script>

<template>
  <svg width="100%" height="100%" viewBox="0 0 200 200">
    <!-- Credit to https://codepen.io/rulinshyu/pen/vKJNVO -->
    <defs>
      <linearGradient id="gradient1" x1=".8" y1=".8" x2="0">
        <stop offset="0" stop-color="#c92bb7" />
        <stop offset="1" stop-color="#3051f1" />
      </linearGradient>
      <radialGradient id="gradient2" cx=".2" cy="1" r="1.2">
        <stop offset="0" stop-color="#fcdf8f" />
        <stop offset=".1" stop-color="#fbd377" />
        <stop offset=".25" stop-color="#fa8e37" />
        <stop offset=".35" stop-color="#f73344" />
        <stop offset=".65" stop-color="#f73344" stop-opacity="0" />
      </radialGradient>
      <rect
        id="logoContainer"
        x="0"
        y="0"
        width="200"
        height="200"
        rx="50"
        ry="50"
      />
    </defs>

    <use xlink:href="#logoContainer" fill="url(#gradient1)" />
    <use xlink:href="#logoContainer" fill="url(#gradient2)" />

    <rect
      x="35"
      y="35"
      width="130"
      height="130"
      rx="30"
      ry="30"
      fill="none"
      stroke="#fff"
      stroke-width="13"
    />

    <circle
      cx="100"
      cy="100"
      r="32"
      fill="none"
      stroke="#fff"
      stroke-width="13"
    />

    <circle cx="140" cy="62" r="9" fill="#fff" />
  </svg>
</template>
