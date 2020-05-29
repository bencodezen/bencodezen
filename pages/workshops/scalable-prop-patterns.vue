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
        <h2>About</h2>

        <p>
          In almost every codebase, there is always that one component. You know
          the one that I am talking about. That one component where:
        </p>

        <ul>
          <li>It is difficult to understand how it works</li>
          <li>It is painful to make any changes to it</li>
          <li>
            People would rather create a new component instead of modifying the
            existing one
          </li>
          <li>
            The same developer keeps getting assigned to work on it because they
            are the only one who understand it
          </li>
        </ul>

        <p>
          One of the common causes for this is the misuse of props. While props
          are one of the first techniques Vue.js developers learn, it is
          surprisingly complex because the technical debts do not show up until
          it is seemingly "too late" or "too difficult" to refactor and change.
          And before you know it, what was once a simple component becomes the
          component that no one wants to maintain.
        </p>

        <p class="mt-4">
          In this workshop, you will be guided through fundamental prop
          techniques, best practices and patterns for creating scalable Vue.js
          components.
        </p>

        <h2 class="section-title">What You Will Learn</h2>

        <p>After taking this workshop, you will better understand:</p>

        <ul>
          <li>How to master using props with components</li>
          <li>Best practices for creating and maintaining props</li>
          <li>Scalable patterns for reusable components</li>
        </ul>

        ## Benefits

        <ul>
          <li>Small classroom experience (12 students maximum)</li>
          <li>Interactive learning experience with code challenges</li>
          <li>Opportunities to ask questions about your own code</li>
        </ul>

        <h2>Instructor</h2>

        <div class="instructor-wrapper">
          <img
            src="/images/ben-profile-circle.jpg"
            alt="Ben Hong Profile Image"
            class="profile-image"
          />

          <p>
            Ben Hong is a Vue Core Team member, Google Developer Expert and Vue
            Mastery instructor. He is an international speaker and his workshops
            were sold out for the last two years at VueConfUS. He is also a
            self-taught developer, who believes in creating educational content
            that is approachable to people regardless of their training or
            skillset.
          </p>
        </div>

        <h2>Workshop Details</h2>

        <countdown
          :deadline="new Date('2020-05-29T12:00-05:00')"
          style="margin-bottom: 1.5rem;"
        ></countdown>

        <workshop-details
          :option="1"
          date="Wednesday, June 10th"
          time="1:30PM - 4:30PM EDT"
          datetime="2020-06-10T13:30-5:00"
          class="mb-5"
        ></workshop-details>

        <workshop-details
          :option="2"
          date="Saturday, June 13th"
          time="1:30PM - 4:30PM EDT"
          datetime="2020-06-13T13:30-5:00"
          class="mb-5"
        ></workshop-details>

        <p class="highlight">
          Registration opens on Friday, May 29th at 12:00PM EDT!
        </p>

        <h2>Prerequisites</h2>

        <ul>
          <li>Intermediate HTML, CSS & JavaScript</li>
          <li>
            Familiarity with [Vue.js Essentials](https://vuejs.org/v2/guide/)
          </li>
        </ul>
        <h2>FAQs</h2>

        <h3>Will this workshop be recorded?</h3>

        <p>
          No. This is to ensure that all students have the privacy and safety to
          ask questions and share code with the instructor and class.
        </p>

        <h3>What if I need to cancel?</h3>

        <p>
          Get a full refund (100%) up to 5 days prior to the course. No
          questions asked. All other cancellations will be considered on a
          case-by-case basis.
        </p>

        <h3>How do I convince my boss to let me take the workshop?</h3>

        <p>
          This workshop is designed to only take a half day, which allows for
          lower impact on work hours while giving you opportunity to maximize
          your learning by diving deep into a specific topic. In addition, you
          will be able to ask questions about any code you want to bring in.
        </p>

        <h3>How is this different from a conference workshop?</h3>

        <p>
          This workshop is designed to maximize student and instructor
          interaction so that the material can be personalized to the class.
        </p>

        <h3>Will there be other workshops in the future?</h3>

        <p class="mb-3">
          To get updates for any other workshops I'm teaching in the future, you
          can sign up below:
        </p>

        <form
          netlify-honeypot="seek-field"
          name="workshop-interest"
          method="POST"
          data-netlify="true"
          class="mb-5"
        >
          <label class="hidden"
            >Don't fill out if you're a human:
            <input name="seek-field-2" type="text"
          /></label>
          <label class="form-label" for="workshop-interest-email">
            Email Address
            <input
              class="form-input"
              type="email"
              id="workshop-interest-email"
              name="workshop-interest-email"
            />
          </label>
          <button class="form-submit" type="submit">Sign up</button>
        </form>

        <h3>I have another question!</h3>

        <p>
          Email me at
          <a href="mailto:hello@bencodezen.io">hello@bencodezen.io</a> and we'll
          take it from there!
        </p>
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

.content {
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
