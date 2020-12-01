<script>
export default {
  computed: {
    days() {
      const daysList = []

      for (let i = 1; i < 25; i++) {
        daysList.push(i)
      }

      return daysList
    }
  }
}
</script>

<template>
  <main class="dev-advent-wrapper">
    <h1>DevAdvent Calendar</h1>
    <p>
      December is going to be an exciting month! Come back each day before
      Christmas to see a new video, livestream, and/or talk that'll go live!
    </p>
    <ul>
      <li v-for="day in days" :key="`day-${day}`">
        {{ day }}
        <img src="../../assets/images/dev-advent-2020/lights.svg" />
      </li>
    </ul>
  </main>
</template>

<style>
.dev-advent-wrapper {
  width: 766px;
  margin: 0 auto;
}
</style>
