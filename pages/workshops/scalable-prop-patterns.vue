<script>
/* eslint-disable vue/no-unused-components */
import BaseIcon from '~/components/BaseIcon'
import Countdown from '~/components/Countdown'
import IconLabel from '~/components/IconLabel'
import WorkshopDetails from '~/components/WorkshopDetails'

export default {
  components: {
    BaseIcon,
    Countdown,
    IconLabel,
    WorkshopDetails
  },
  async asyncData({ $content }) {
    const pageContent = await $content(
      'workshops/scalable-prop-patterns'
    ).fetch()

    return {
      pageContent
    }
  }
}
</script>

<template>
  <div>
    <header class="hero">
      <h1 class="hero-title mb-5">
        Scalable Prop Patterns with Vue.js
      </h1>
      <div class="hero-meta">
        <icon-label icon="calendar" class="mr-5">
          <p>June 10th or 13th</p>
        </icon-label>
        <icon-label icon="clock" class="mr-5">
          <p>3 hours</p>
        </icon-label>
        <icon-label icon="location">
          <p>Remote</p>
        </icon-label>
      </div>
    </header>
    <main>
      <article class="container mx-auto w-3/5 pt-10">
        <nuxt-content :document="pageContent" />
      </article>
    </main>
  </div>
</template>

<style lang="scss">
.highlight {
  font-weight: bold;
  line-height: 30px;
  font-size: 20px;
  position: relative;
  @apply mb-5;

  &:before {
    content: '';
    width: 95%;
    height: 12px;
    background-color: yellow;
    position: absolute;
    left: 0;
    top: 15px;
    z-index: -1;
  }
}

.hero {
  background: linear-gradient(200.04deg, #0ea3a2 0.87%, #2599e2 93.36%);
  padding: 72px 55px;

  &-meta {
    display: flex;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 27px;
    /* identical to box height */

    letter-spacing: 0.165121px;

    color: #ffffff;
  }

  &-title {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 63px;
    /* or 131% */

    letter-spacing: 0.272581px;

    color: #ffffff;
  }
}

.profile-image {
  border-radius: 50%;
  width: 125px;
  height: 125px;
}

.nuxt-content {
  h2 {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 42px;
    letter-spacing: 0.299664px;
    color: #2599e2;
    @apply mb-2;

    &:nth-child(n + 2) {
      @apply mt-8;
    }
  }

  h3 {
    @apply font-bold;
    @apply text-xl;
    @apply mt-3;
  }

  ul {
    @apply mt-3 mb-3;
    @apply list-disc;
    @apply list-inside;
    font-family: PT Serif;
  }

  p {
    font-family: PT Serif;
  }
}
</style>
