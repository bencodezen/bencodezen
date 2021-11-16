<script>
import { Client } from '@notionhq/client'

export default {
  async asyncData({ env }) {
    const notion = new Client({ auth: env.notionApiKey })
    const databaseId = '52fcfd11b497413387ec15c9db5f4bd6'
    const databaseContent = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          property: 'End Date',
          direction: 'descending'
        }
      ]
    })

    return {
      databaseContent
    }
  },
  computed: {
    databaseCourses() {
      return this.databaseContent.results.filter((item) => {
        const typeList = item.properties.Type.multi_select

        return typeList.find((type) => type.name === 'Course')
      })
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

      <h2>Courses</h2>

      <p>
        While you can find a lot of my free resources on YouTube and Twitch,
        here you can find some of the official video courses that I've created
        on other platforms.
      </p>

      <guide-item v-for="resource in databaseCourses" :key="resource.id">
        <template v-slot:content>
          <h3>
            <a :href="resource.properties['Publish URL'].url">
              {{ resource.properties.Name.title[0].text.content }}
            </a>
          </h3>
          <p class="subtitle">
            {{ resource.properties.Platform.select.name }} ({{
              resource.properties['End Date'].date.start
            }})
          </p>
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
