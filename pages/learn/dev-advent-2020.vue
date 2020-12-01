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
  <main class="dev-advent-page">
    <article class="dev-advent-wrapper">
      <h1 class="daw-title">DevAdvent Calendar</h1>
      <p class="daw-description">
        December is going to be an exciting month! Come back each day before
        Christmas to see a new video, livestream, and/or talk that'll go live!
      </p>
      <ul class="deva-calendar">
        <li v-for="day in days" :key="`day-${day}`" class="deva-day">
          <span class="deva-day-number">{{ day }}</span>
          <img
            class="deva-day-icon"
            src="../../assets/images/dev-advent-2020/lights.svg"
          />
        </li>
      </ul>
    </article>
  </main>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&display=swap');

$fontHeading: 'Playfair Display', serif;

.dev-advent-page {
  background-color: #0a4846;
  background-image: url('../../assets/images/dev-advent-2020/bg-snowflake.png');
}

.dev-advent-wrapper {
  max-width: 766px;
  margin: 0 auto;
  color: #fcfcfc;
  text-align: center;
}

.daw-title {
  font-family: $fontHeading;
  text-align: center;
  font-size: 40px;
  margin-top: 60px;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 2px solid #fcfcfc;
  display: inline-block;
}

.daw-description {
  max-width: 700px;
  margin-bottom: 42px;
  font-family: 'Titillium Web', sans-serif;
  font-weight: 600;
}

.deva-calendar {
  display: grid;
  grid-template-columns: repeat(4, 176px);
  grid-template-rows: repeat(6, 176px);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}

.deva-day {
  background-color: white;
  position: relative;
  width: 100%;

  &::after {
    content: '';
    width: 176px;
    height: 176px;
    background-image: url('../../assets/images/dev-advent-2020/bg-dots.png');
    background-size: 25%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.5;
    z-index: 0;
  }
}

.deva-day-icon {
  transform: translateX(50%) translateY(50%);
  z-index: 1;
  position: absolute;
}

.deva-day-number {
  position: absolute;
  top: 0;
  left: 15px;
  z-index: 1;
  color: #951010;
  font-family: $fontHeading;
  font-size: 45px;
  font-weight: 900;
}
</style>
