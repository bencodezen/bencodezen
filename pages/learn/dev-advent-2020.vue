<script>
import devAdventData from '../../content/_data/devAdvent2020.json'

export default {
  data: () => ({
    devAdventData
  }),
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
        <li
          v-for="day in devAdventData"
          :key="`day-${day}`"
          class="deva-day"
          :class="day.ready ? 'is-ready' : ''"
        >
          <span class="deva-day-number">{{ day.number }}</span>
          <img
            class="deva-day-icon"
            :src="
              require(`../../assets/images/dev-advent-2020/${day.icon}.svg`)
            "
          />
          <button v-if="day.ready" class="deva-day-button">Open</button>
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
  margin-bottom: 120px;
}

.deva-day {
  background-color: white;
  position: relative;
  width: 100%;
  background-image: url('../../assets/images/dev-advent-2020/bg-dots.png');
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.deva-day.is-ready {
  background-image: url('../../assets/images/dev-advent-2020/stars@2x.png');
  background-size: cover;
}

.deva-day-icon {
  width: 88px;
  height: 88px;
}

.deva-day-button {
  font-family: 'Titillium Web', sans-serif;
  font-size: 13px;
  font-weight: bold;
  color: #0a4846;
  padding: 5px 15px;
  border-radius: 2px;
  border: 2px solid #0a4846;
  transition: background 0.2s ease-in, color 0.2s ease-in;

  &:hover {
    background-color: #0a4846;
    color: #fcfcfc;
  }
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
