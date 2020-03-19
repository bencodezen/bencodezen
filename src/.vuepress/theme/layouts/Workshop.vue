<template>
  <div class="page workshop">
    <slot name="top" />

    <div class="hero">
      <div class="hero-content">
        <h1>Ridiculously Reusable Components Workshop with Vue.js</h1>
        <div class="hero-meta">
          <span><Icon /><time>April 4th, 2020</time></span>
          <span style="display: flex; margin-left: 1rem;">
            <Icon />
            <p>Remote</p>
          </span>
        </div>
      </div>
    </div>

    <div class="content default ">
      <h2>About</h2>

      <p>
        Components are the bread and butter of modern front-end frameworks. They
        help you structure and manage your application by gluing together your
        application logic and the interface. However, as an application scales
        and teams get larger, components often get bigger and difficult to
        manage.
      </p>

      <p>
        Throughout the workshop, we’ll **build a set of components for a
        preexisting application**. Following the evolving requirements, we will
        perform a series of refactoring cycles to explore different possible
        solutions and patterns/anti-patterns.
      </p>

      <h2>What You'll Learn</h2>
      <ul>
        <li>
          Best practices and techniques for designing components that are more
          resilient as your application and team grows and scales
        </li>

        <li>
          Component design patterns that give you more options to solve common
          problems found in applications
        </li>

        <li>
          Tips and tricks to make you more efficient in your development
          workflow
        </li>
      </ul>

      <h2>Recommended Prerequisites</h2>
      <ul>
        <li>
          Intermediate HTML
        </li>
        <li>
          Intermediate CSS
        </li>
        <li>
          Intermediate JavaScript
        </li>
        <li>
          Familiarity with Vue.js
        </li>
      </ul>

      <section class="instructor">
        <h2 style="margin-bottom: 0;">Instructor</h2>
        <div style="display: flex;">
          <img
            src="https://pbs.twimg.com/profile_images/1106293516697849856/iW-hJPKU_200x200.png"
            alt=""
          />
          <div>
            <p>
              Ben Hong is a self-taught developer / psychologist / educator
              hybrid that hails from the house of Ravenclaw. He is a Vue Core
              Team member and a Google Developer Expert. He currently works on
              the Meltano team at GitLab as a Senior Frontend Engineer and
              teaches courses on Vue Mastery. Ben has previously taught
              workshops at Vue Conf US 2020, Vue Conf US 2019, and Vue Conf
              Toronto.
            </p>

            <p>
              In addition to his coding work, he is a big advocate in giving
              back to the community through speaking, teaching, mentoring, and
              organizing events. He's the co-founder of VueDC and VueMeetups
              which helps to organize Vue.js prospectives and enthusiasts.
            </p>
          </div>
        </div>
      </section>
      <h2>Workshop Details</h2>

      <p>
        Each workshop will have a maximum of twelve attendees, giving you the
        opportunity to get more personalized attention during the course.
      </p>

      <div class="workshop-item" style="margin-bottom: 1.5rem;">
        <div class="workshop-item-text">
          <h3 class="workshop-item-title">
            March 31st & April 7th from 7PM to 9PM ET
          </h3>
          <p>Remote</p>
          <p>Early Bird Pricing Until March 24th: TBD</p>
        </div>
        <button>Register</button>
      </div>

      <div class="workshop-item" style="margin-bottom: 1rem;">
        <div class="workshop-item-text">
          <h3 class="workshop-item-title">
            March 31st & April 7th from 7PM to 9PM ET
          </h3>
          <p>Remote</p>
          <p>Early Bird Pricing Until March 24th: TBD</p>
        </div>
        <button>Register</button>
      </div>

      <p class="striped">
        Registration opens on March 23rd at 12PM ET
      </p>
      <p>
        Receive an email reminder the moment the workshop registration opens!
      </p>
      <form style="display: flex;">
        <div class="input-group">
          <label for="first-name">First Name</label>
          <input type="text" id="first-name" />
        </div>
        <div class="input-group">
          <label for="email">Email</label>
          <input type="email" id="email" />
        </div>
        <button class="submit-button">Sign Up ></button>
      </form>

      <h2>FAQs</h2>
      <h3>How can I learn more about the course?</h3>

      <p>
        Ben will be holding a webinar to give an overview of the course and
        answer any questions on March 22nd at 7 PM ET. You can sign up here.
      </p>

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
        What if I want to attend the course, but the times listed don't work for
        me?
      </h3>

      <p>
        Sign up to receive information about the next time this course will be
        offered.
      </p>
    </div>

    <slot name="bottom" />
  </div>
</template>

<script>
import {
  resolvePage,
  normalize,
  outboundRE,
  endingSlashRE
} from '../mixins/util'

export default {
  props: ['sidebarItems'],

  computed: {
    lastUpdated() {
      if (this.$page.lastUpdated) {
        return new Date(this.$page.lastUpdated).toLocaleString(this.$lang)
      }
    },

    lastUpdatedText() {
      if (typeof this.$themeLocaleConfig.lastUpdated === 'string') {
        return this.$themeLocaleConfig.lastUpdated
      }
      if (typeof this.$site.themeConfig.lastUpdated === 'string') {
        return this.$site.themeConfig.lastUpdated
      }
      return 'Last Updated'
    },

    prev() {
      const prev = this.$page.frontmatter.prev
      if (prev === false) {
        return
      } else if (prev) {
        return resolvePage(this.$site.pages, prev, this.$route.path)
      } else {
        return resolvePrev(this.$page, this.sidebarItems)
      }
    },

    next() {
      const next = this.$page.frontmatter.next
      if (next === false) {
        return
      } else if (next) {
        return resolvePage(this.$site.pages, next, this.$route.path)
      } else {
        return resolveNext(this.$page, this.sidebarItems)
      }
    },

    editLink() {
      if (this.$page.frontmatter.editLink === false) {
        return
      }
      const {
        repo,
        editLinks,
        docsDir = '',
        docsBranch = 'master',
        docsRepo = repo
      } = this.$site.themeConfig

      let path = normalize(this.$page.path)
      if (endingSlashRE.test(path)) {
        path += 'README.md'
      } else {
        path += '.md'
      }
      if (docsRepo && editLinks) {
        return this.createEditLink(repo, docsRepo, docsDir, docsBranch, path)
      }
    },

    editLinkText() {
      return (
        this.$themeLocaleConfig.editLinkText ||
        this.$site.themeConfig.editLinkText ||
        `Edit this page`
      )
    }
  },

  methods: {
    createEditLink(repo, docsRepo, docsDir, docsBranch, path) {
      const bitbucket = /bitbucket.org/
      if (bitbucket.test(repo)) {
        const base = outboundRE.test(docsRepo) ? docsRepo : repo
        return (
          base.replace(endingSlashRE, '') +
          `/${docsBranch}` +
          (docsDir ? '/' + docsDir.replace(endingSlashRE, '') : '') +
          path +
          `?mode=edit&spa=0&at=${docsBranch}&fileviewer=file-view-default`
        )
      }

      const base = outboundRE.test(docsRepo)
        ? docsRepo
        : `https://github.com/${docsRepo}`

      return (
        base.replace(endingSlashRE, '') +
        `/edit/${docsBranch}` +
        (docsDir ? '/' + docsDir.replace(endingSlashRE, '') : '') +
        path
      )
    }
  }
}

function resolvePrev(page, items) {
  return find(page, items, -1)
}

function resolveNext(page, items) {
  return find(page, items, 1)
}

function find(page, items, offset) {
  const res = []
  items.forEach(item => {
    if (item.type === 'group') {
      res.push(...(item.children || []))
    } else {
      res.push(item)
    }
  })
  for (let i = 0; i < res.length; i++) {
    const cur = res[i]
    if (cur.type === 'page' && cur.path === page.path) {
      return res[i + offset]
    }
  }
}
</script>

<style lang="stylus">
@import '../styles/config.styl'
@require '../styles/wrapper.styl'

.submit-button {
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  background-color: #2599e2;
  padding: 0.75rem;
  margin-left: 1rem;
  border-radius: 8px;
  align-self: flex-end;
}

.input-group {
  display: flex;
  flex-direction: column;

  label {
    font-size: 0.8rem;
    font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif
    font-weight: bold;
    text-transform: uppercase;
  }

  input {
    border: 1px solid #232323;
    font-size: 1rem;
    padding: 0.5rem;
  }
}

.input-group + .input-group {
  margin-left: 1rem;
}

.workshop .hero {
  background-image: linear-gradient(257deg, #0ea3a2, #2599e2);
  color: white;
  height: 250px;
  margin-top: 57px;
  padding-left: 36px;
  padding-right: 36px;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    margin-top: 0;
  }
}

.striped {
  background-color: #FFF;
  background-image: linear-gradient(transparent 60%, rgba(243, 244, 41, 0.6) 40%);
  background-size: 10px 30px;
  font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif
  position: relative;
  z-index: 1;
  display: inline;
  font-weight: bold;
  font-size: 1.5rem;
}

.workshop-item {
  padding: 1rem;
  border: solid 1px #2599e2;
  display: flex;
  justify-content: space-between;

  &-title {
    font-size: 1.3rem;
    color: #2599e2;
    margin 0
    margin-bottom: 0.5rem;
    padding 0
  }

  p {
    margin: 0;
  }

  button {
    align-self: center;
    text-transform: uppercase;
    font-weight: bold;
    color: white;
    background-color: #d4dce0;
    font-size: 1rem;
    padding: 0.75rem 0.75rem;
    border: 0;
  }
}

.instructor img {
  width: 125px;
  max-width: 100%;
  align-self: flex-start;
  margin-top: 1rem;
  border-radius: 50%;
  margin-right: 2rem;
}

.hero-content {
  max-width: 740px;
}

.workshop .hero-meta {
  display: flex;
  align-items: center;
  font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif
  font-weight: bold;

  p {
    margin: 0;
    margin-left: 0.5rem;
  }

  time {
    margin-left: 0.5rem;
  }
}

.workshop .content:not([custom]) > h2:first-child + p {
  margin-top: 0;
}

.workshop .content:not([custom]) > h2:first-child {
  padding-top: 25px;
}

.workshop h2 {
  color: #2599e2;
  font-weight: bold;
  border: 0;
}

.page
  padding-bottom 2rem

.page-edit
  @extend $wrapper
  padding-top 1rem
  padding-bottom 1rem
  overflow auto
  .edit-link
    display inline-block
    a
      color lighten($textColor, 25%)
      margin-right 0.25rem
  .last-updated
    float right
    font-size 0.9em
    .prefix
      font-weight 500
      color lighten($textColor, 25%)
    .time
      font-weight 400
      color #aaa

.page-nav
  @extend $wrapper
  padding-top 1rem
  padding-bottom 0
  .inner
    min-height 2rem
    margin-top 0
    border-top 1px solid $borderColor
    padding-top 1rem
    overflow auto // clear float
  .next
    float right

@media (max-width: $MQMobile)
  .page-edit
    .edit-link
      margin-bottom .5rem
    .last-updated
      font-size .8em
      float none
      text-align left
</style>
