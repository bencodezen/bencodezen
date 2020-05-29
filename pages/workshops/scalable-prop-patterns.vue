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
      <div class="hero-content">
        <h1 class="hero-title mb-5">
          Scalable Prop Patterns <br />with Vue.js
        </h1>
        <div class="hero-meta">
          <icon-label icon="location" class="mr-5">
            <p>Remote</p>
          </icon-label>
          <icon-label icon="clock">
            <p>3 hours</p>
          </icon-label>
        </div>
      </div>
    </header>
    <main>
      <article class="container mx-auto content pt-10">
        <nuxt-content :document="pageContent" />
      </article>
    </main>
  </div>
</template>

<style lang="scss">
@import '../../styles/_settings.scss';

.hidden {
  display: none;
}

.form-input {
  display: block;
  border: 2px solid #232323;
  padding: 10px;
  font-size: 1rem;
  font-family: 'Poppins';
  margin-top: 3px;
  margin-bottom: 1rem;
  width: 100%;
}

.form-label {
  text-transform: uppercase;
  font-family: 'Poppins';
  font-size: 12px;
  font-weight: 600;
}

.form-submit {
  background-color: #2599e2;
  color: #fff;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 600;
  padding: 14px;
  border: 1px solid #2599e2;
  height: 49px;
  box-sizing: border-box;
  line-height: 0.7;
}

.instructor-wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;

  @include breakpoint(700px) {
    flex-direction: row;
  }
}

.workshop {
  &-content {
    max-width: 850px;
    margin: 0 auto;
  }

  h2 {
    color: #2599e2;
  }
}

.workshop .content {
  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.25rem;
  }

  p,
  ul {
    font-size: 16px;
  }
}

@media (min-width: 768px) {
  .workshop .content {
    h2 {
      font-size: 2rem;
    }

    p,
    ul {
      font-size: 18px;
    }
  }
}

.highlight {
  font-weight: bold;
  line-height: 30px;
  font-size: 1.3rem !important;
  position: relative;
  display: inline-block;
  font-family: Poppins;
  margin-top: 0;

  &:before {
    content: '';
    width: 100%;
    height: 12px;
    background-color: yellow;
    position: absolute;
    left: 0;
    top: 15px;
    z-index: -1;
  }

  &:after {
    content: '';
    width: 100%;
    height: 12px;
    background-color: yellow;
    position: absolute;
    left: 0;
    top: 45px;
    z-index: -1;
  }
}

@media (min-width: 638px) {
  .highlight {
    &:after {
      width: 0;
    }
  }
}

.hero {
  background: linear-gradient(200.04deg, #0ea3a2 0.87%, #2599e2 93.36%);
  padding: 50px 40px;

  @include breakpoint(600px) {
    padding: 72px 55px;
  }

  &-meta {
    display: flex;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: 0.165121px;
    color: #ffffff;
  }
}

.hero-title {
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 3rem;
  line-height: 1.2;
  letter-spacing: 0.272581px;
  color: #ffffff;

  @include breakpoint(600px) {
    font-size: 3.5rem;
  }
}

.hero-content {
  max-width: 825px;
  @apply mx-auto;
}

.profile-image {
  border-radius: 50%;
  width: 125px;
  height: 125px;
  @apply mb-4;

  @include breakpoint(700px) {
    @apply mb-0 mr-4;
  }
}

.nuxt-content {
  a {
    color: $c-primary;

    &:hover {
      text-decoration: underline;
    }
  }

  h2 {
    font-family: $ff-sans;
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
    font-family: $ff-sans;
    @apply font-bold;
    @apply text-xl;
    @apply mt-3;
    @apply mb-2;
  }

  ul {
    @apply mt-3 mb-3;
    @apply list-disc;
    @apply list-inside;
    font-family: PT Serif;
    @apply text-lg;
  }

  li {
    line-height: 1.6;
  }

  p {
    font-family: PT Serif;
    @apply text-lg;
  }
}
</style>
