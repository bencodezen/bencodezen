<script>
export default {
  props: {
    day: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    surpriseVisible: false
  }),
  computed: {
    devaDayClassNames() {
      if (this.surpriseVisible) {
        return 'deva-day'
      } else if (this.day.ready) {
        return 'deva-day has-cover is-ready'
      } else {
        return 'deva-day has-cover'
      }
    },
    showSurprise() {
      return this.day.surprise && this.surpriseVisible
    }
  },
  methods: {
    revealSurprise() {
      this.surpriseVisible = true
    }
  }
}
</script>

<template>
  <li :class="devaDayClassNames">
    <span class="deva-day-number">{{ day.number }}</span>
    <div v-if="showSurprise" class="deva-day-surprise">
      <img
        class="deva-day-surprise-icon"
        src="../assets/icons/play.svg"
        alt="Play Button"
      />
      <p class="deva-day-text">
        <a :href="day.surprise.url">
          {{ day.surprise.text }} More Text and Some Words
        </a>
      </p>
    </div>
    <div v-else>
      <img
        class="deva-day-icon"
        :src="require(`../assets/images/dev-advent-2020/${day.icon}.svg`)"
      />
      <button v-if="day.ready" class="deva-day-button" @click="revealSurprise">
        Open
      </button>
    </div>
  </li>
</template>

<style lang="scss" scoped>
$fontHeading: 'Playfair Display', serif;

.deva-day {
  background-color: white;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.deva-day.has-cover {
  background-image: url('../assets/images/dev-advent-2020/bg-dots.png');
}

.deva-day.is-ready {
  background-image: url('../assets/images/dev-advent-2020/stars@2x.png');
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

.deva-day-surprise {
  display: flex;
  align-items: center;
  padding: 0 16px;
}

.deva-day-surprise-icon {
  width: 26px;
  height: 26px;
}

.deva-day-text {
  color: #1f1f1f;
  font-weight: 600;
  font-family: 'Titillium Web', sans-serif;
  font-size: 15px;
}
</style>
