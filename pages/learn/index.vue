<script>
export default {}
</script>

<template>
  <article class="post-section">
    <div class="post-content">
      <h1>Learn</h1>

      <p>
        This is the section where I will store more formal articles and
        tutorials for things that I create. It is different from the blog
        section which is more catered to stream of thought writing, whereas the
        content in this section get a lot of revisions.
      </p>

      <h2>Courses</h2>

      <p>
        While you can find a lot of my free resources on YouTube and Twitch,
        here you can find some of the official video courses that I've created
        on other platforms.
      </p>

      <guide-item>
        <template v-slot:image>
          <img
            src="/images/jamstack-explorers-serverless.png"
            alt="Up and Running with Serverless Functions Cover Image"
          />
        </template>
        <template v-slot:content>
          <h3>
            <a href="https://ntl.fyi/3z8ghbZ">
              Up and Running with Serverless Functions
            </a>
          </h3>
          <p class="subtitle">Jamstack Explorers</p>
          <p class="description">
            Serverless functions is a very popular topic, but it can often be
            confusing to many. And if you're like me and come more from the
            front-end side of development, it can be downright intimidating.
            This course will take you from zero to building the foundation you
            need to equip yourselves with the confidence to use serverless
            functions in your applications.
          </p>
        </template>
      </guide-item>

      <guide-item>
        <template v-slot:image>
          <img
            src="/images/production-grade-vue.jpeg"
            alt="Frontend Masters Production Grade Vue"
          />
        </template>
        <template v-slot:content>
          <h3>
            <a href="https://frontendmasters.com/courses/production-vue/">
              Production Grade Vue.js
            </a>
          </h3>
          <p class="subtitle">Frontend Masters</p>
          <p class="description">
            Learn best practices for building production-grade Vue.js
            applications that can scale and grow! You'll learn component design
            patterns, workflows to enhance productivity, testing methodologies,
            state management, routing, best practices for architecting
            increasingly complex applications, and more.
          </p>
        </template>
      </guide-item>

      <guide-item>
        <template v-slot:image>
          <img
            src="/images/vue3-typescript.png"
            alt="Vue Mastery: Vue 3 + TypeScript Logo"
          />
        </template>
        <template v-slot:content>
          <h3>
            <a href="https://www.vuemastery.com/courses/vue3-typescript">
              Vue 3 + TypeScript
            </a>
          </h3>
          <p class="subtitle">Vue Mastery</p>
          <p class="description">
            With Vue 3's enhanced TypeScript support, using it just got easier.
            Learn how to strengthen your Vue apps with this popular technology.
          </p>
        </template>
      </guide-item>

      <h2>Guides</h2>

      <p>
        Inspired from the old 90s game walkthroughs I used to read a ton as a
        kid, I am dedicating a section of my site to guides to various topics
        that are of interest to me as time goes on. More to come in this
        section, but feel free to submit requests for topics if there is
        anything you'd like to see me write one on!
      </p>

      <guide-item>
        <template v-slot:image>
          <img
            src="/images/vuepress-blog-logo.png"
            alt="VuePress Blog Boilerplate logo"
          />
        </template>
        <template v-slot:content>
          <h3>
            <a href="https://vuepress-blog-boilerplate.bencodezen.io/">
              VuePress Blog Boilerplate
            </a>
          </h3>

          <p class="description">
            An ever-evolving and opinionated dev environment for people who want
            to use VuePress to power their blogs.
          </p>
        </template>
      </guide-item>
    </div>
  </article>
</template>

<style lang="scss">
@import '../../styles/_settings.scss';
</style>
