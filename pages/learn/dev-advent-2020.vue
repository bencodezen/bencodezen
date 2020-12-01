<script>
import DevaDay from '../../components/DevaDay'
import devAdventData from '../../content/_data/devAdvent2020.json'

export default {
  components: {
    DevaDay
  },
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
        <DevaDay v-for="day in devAdventData" :key="`day-${day}`" :day="day" />
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
  padding: 0 42px;
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
  grid-auto-columns: 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  margin-bottom: 120px;
  justify-content: center;
}

@media screen and (min-width: 540px) {
  .deva-calendar {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 120px;
  }
}

@media screen and (min-width: 768px) {
  .deva-calendar {
    grid-template-columns: repeat(3, 176px);
    grid-auto-rows: 176px;
  }
}

@media screen and (min-width: 960px) {
  .deva-calendar {
    grid-template-columns: repeat(4, 176px);
  }
}
</style>
