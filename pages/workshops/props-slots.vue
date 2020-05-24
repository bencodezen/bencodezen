<script>
import IconLabel from '~/components/IconLabel'

export default {
  components: {
    IconLabel
  }
}
</script>

<template>
  <div>
    <header class="hero">
      <h1 class="hero-title mb-5">
        Ridiculously Reusable Components Workshop Using Vue.js
      </h1>
      <div class="hero-meta">
        <icon-label icon="calendar" class="mr-5">
          <time datetime="2020-04-04">April 4th</time>
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
      <div class="container mx-auto">
        <h2>Description</h2>
        <p>
          Components are the bread and butter of modern front-end frameworks.
          They help you structure and manage your application by gluing together
          your application logic and the interface. However, as an application
          scales and teams get larger, components often get bigger and difficult
          to manage.
        </p>
        <h2>What You'll Learn</h2>
        <ul>
          <li>
            Best practices and techniques for designing components that are more
            resilient as your application and team grows and scales
          </li>
          <li>
            Best practices and techniques for designing components that are more
            resilient as your application and team grows and scales
          </li>
          <li>
            Best practices and techniques for designing components that are more
            resilient as your application and team grows and scales
          </li>
        </ul>
        <h2>Prerequisites</h2>
        <ul>
          <li>Intermediate HTML, CSS and JavaScript</li>
          <li>Familiarity with Vue.js</li>
        </ul>
        <div>
          <h2>Your Instructor</h2>
          <img
            src="https://pbs.twimg.com/profile_images/1106293516697849856/iW-hJPKU_400x400.png"
            alt="Ben Hong Profile Image"
          />
          <p>
            Ben Hong is a self-taught developer / psychologist / educator hybrid
            that hails from the house of Ravenclaw. He is a Vue Core Team member
            and a Google Developer Expert. He currently works on the Meltano
            team at GitLab as a Senior Frontend Engineer and teaches courses on
            Vue Mastery. Ben has previously taught workshops at Vue Conf US
            2020, Vue Conf US 2019, and Vue Conf Toronto.
          </p>
          <p>
            In addition to his coding work, he is a big advocate in giving back
            to the community through speaking, teaching, mentoring, and
            organizing events. He's the co-founder of VueDC and VueMeetups which
            helps to organize Vue.js prospectives and enthusiasts.
          </p>
        </div>
        <h2>Workshop Details</h2>
        <p>
          Each workshop will have a maximum of twelve attendees, giving you the
          opportunity to get more personalized attention during the course.
        </p>
        <ul>
          <li>
            <div>
              <h3>April 7th: 1pm - 5pm EST</h3>
              <p>Remote (Zoom)</p>
              <p>Price: $125</p>
            </div>
          </li>
          <li>
            <div>
              <h3>April 7th: 1pm - 5pm EST</h3>
              <p>Remote (Zoom)</p>
              <p>Price: $125</p>
            </div>
          </li>
        </ul>
      </div>
      <p>Registration opens on Friday!</p>
      <h2>FAQs</h2>
      <h3>What if I need to cancel?</h3>
      <p>
        Get a full 100% refund up to 5 days prior to the course. No questions
        asked. All other cancellations will be considered on a case-by-case
        basis.
      </p>
      <h3>How is this different from the conference workshop?</h3>
      <p>
        This workshop is designed to maximize student and instructor time to
        ensure the time is more personalized to the class. In addition, a full
        day workshop (estimated 8 hours) can be a lot of information to take in
        at once. By providing a half day workshop, this allows more flexibility
        for attendees to request for time off and get support from their
        companies.
      </p>
      <h3>Could I request my company to pay for the workshop?</h3>
      <p>
        Absolutely! You will still be getting the same caliber of instruction
        and material as you would from a conference. The only thing that makes
        it even better is your company doesn't need to pay for travel or
        extensive time off!
      </p>
      <h3>
        What if I want to attend the course, but the days and times listed don’t
        work for me?
      </h3>
      <p>
        Sign up to receive information about the next time this course will be
        offered.
      </p>
    </main>
  </div>
</template>

<style lang="scss">
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
</style>
