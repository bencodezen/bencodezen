<script>
export default {
  async asyncData({ env }) {
    const databaseContent = await fetch(
      `${env.baseUrl}/api/courses`
    ).then((res) => res.json())

    return {
      databaseContent
    }
  }
}
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

      <h2>Live Stream</h2>

      <p>
        If you want the latest and greatest, be sure to check out my live
        streams on Twitch where you can ask questions and chat with me. For
        upcoming sessions, check out
        <nuxt-link to="/schedule">schedule page</nuxt-link>!
      </p>

      <ul>
        <li>
          <p>
            <b>Build with Ben</b> - In this session, we focus on building things
            (usually for the web) and I'll share my thoughts as I embark on
            various coding adventures!
          </p>
          <p>
            For past episodes, check out this
            <a
              href="https://www.youtube.com/watch?v=WQa9-4K3me4&list=PLdW65tjm2FbZeF5wtyoAyhSvZf6oUCxId"
              >Building with Ben YouTube playlist</a
            >!
          </p>
        </li>
        <li>
          <p>
            <b>Obsidian Office Hours</b> - In this session, we talk about all
            things <a href="https://obsidian.md/">Obsidian</a> and productivity
            workflow things.
          </p>
          <p>
            For past episodes, check out this
            <a
              href="https://www.youtube.com/playlist?list=PLdW65tjm2FbbDGQHpi_ywrOYreLfxWKDi"
              >Obsidian Office Hours YouTube playlist</a
            >!
          </p>
        </li>
      </ul>

      <h2>Courses</h2>

      <p>
        While you can find a lot of my free resources on YouTube and Twitch,
        here you can find some of the official video courses that I've created
        on other platforms.
      </p>

      <guide-item v-for="resource in databaseContent" :key="resource.id">
        <template v-slot:content>
          <h3>
            <a :href="resource.publishUrl">
              {{ resource.title }}
            </a>
          </h3>
          <p class="description">
            {{ resource.description }}
          </p>
        </template>
      </guide-item>

      <h2>Obsidian Notes</h2>

      <p>
        If you're looking for my public digital forest, you can find it here:
        <a href="https://publish.obsidian.md/bencodezen/Home+Page"
          >https://publish.obsidian.md/bencodezen/Home+Page</a
        >
      </p>

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

.guide-item-content .description {
  margin-top: 1rem;
}
</style>
