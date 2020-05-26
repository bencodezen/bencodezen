<script>
export default {}
</script>

<template>
  <div :class="$style.wrapper" class="flex items-center justify-between">
    <div>
      <time :class="$style.date">Wednesday, April 7th</time>
      <p class="font-bold text-lg mt-1">1:00PM - 5:00PM EST</p>
      <p class="flex items-center">Remote</p>
      <p>Price: $100 USD</p>
    </div>
    <a :class="$style.button" href="#">Register</a>
  </div>
</template>

<style lang="scss" module>
.button {
  border-radius: 4px;
  background: #d4dce0;
  padding: 12px 14px;
  text-transform: capitalize;
  color: white;
}

.date {
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 20px;
  /* identical to box height, or 100% */

  letter-spacing: 0.0838709px;

  color: #2599e2;
}

.wrapper {
  padding: 22px 24px;
  border: 2px solid #2599e2;
}
</style>
