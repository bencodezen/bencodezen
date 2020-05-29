<template>
  <div class="workshop">
    <header class="workshop-hero">
      <div class="workshop-content">
        <h1 class="workshop-hero-title">
          Scalable Prop Patterns <br />
          with Vue.js
        </h1>
        <div class="workshop-hero-meta">
          <div class="workshop-hero-meta-item">
            <img
              src="../assets/calendar.png"
              style="margin-right: 0.5rem; max-width: 100%;"
            />
            <p style="margin: 0">June 10th or 13th</p>
          </div>
          <div class="workshop-hero-meta-item">
            <img
              src="../assets/location.png"
              style="margin-right: 0.5rem; max-width: 100%;"
            />
            <p style="margin: 0">Remote</p>
          </div>
        </div>
      </div>
    </header>

    <main class="wrapper">
      <Content custom />
    </main>

    <div class="page-edit">
      <div class="edit-link" v-if="editLink">
        <a
          href="https://github.com/bencodezen/bencodezen/issues/new"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open an issue on GitHub <OutboundLink />
        </a>
      </div>
      <div class="last-updated" v-if="lastUpdated">
        <span class="prefix">{{ lastUpdatedText }}: </span>
        <time class="time" :datetime="$page.lastUpdated">{{
          lastUpdated
        }}</time>
      </div>
    </div>

    <div class="page-nav" v-if="prev || next">
      <p class="inner">
        <span v-if="prev" class="prev">
          ←
          <router-link v-if="prev" class="prev" :to="prev.path">
            {{ prev.title || prev.path }}
          </router-link>
        </span>

        <span v-if="next" class="next">
          <router-link v-if="next" :to="next.path">
            {{ next.title || next.path }}
          </router-link>
          →
        </span>
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
  name: 'Workshop',

  props: ['sidebarItems'],

  computed: {
    lastUpdated() {
      if (this.$page.lastUpdated) {
        const dateFormat = new Date(this.$page.lastUpdated)

        const options = {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }

        return `${dateFormat.toLocaleDateString(
          this.$lang,
          options
        )}, ${dateFormat.toLocaleTimeString(this.$lang)}`
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
    },

    publishDate() {
      const dateFormat = new Date(this.$frontmatter.date)
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }

      return dateFormat.toLocaleDateString(this.$lang, options)
    },

    urlPostTitle() {
      return encodeURIComponent(this.$page.title)
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
  },

  mounted() {
    let tweets = document.querySelectorAll('.twitter-tweet')

    if (tweets && tweets.length > 0) {
      tweets.forEach(tweet => {
        let id = tweet.dataset.twitterId
        twttr.widgets.createTweet(id, tweet)
        tweet.setAttribute('style', 'border: 0; padding: 0; margin-right: 0;')
        tweet.children[0].setAttribute('style', 'display: none;')
      })
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

.bcz-form {
  display: flex;
  align-items: flex-end;
}

.form-input {
  display: block;
  border: 2px solid #232323;
  padding: 10px;
  font-size: 1rem;
  font-family: 'Poppins';
  margin-top: 3px;
  width: 100%;
}

.form-label {
  text-transform: uppercase;
  font-family: 'Poppins';
  font-size: 12px;
  font-weight: 600;
  margin-right: 1rem;
  flex: 1;
}

.form-submit {
  background-color: #2599E2;
  color: #fff;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 600;
  padding: 14px;
  border: 1px solid #2599E2;
  height: 49px;
  box-sizing: border-box;
  line-height: 0.7;
}

.instructor-wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.workshop {
  &-content {
    max-width: 850px;
    margin: 0 auto;
  }

  h2 {
    color: #2599E2;
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

.wrapper {
  @extend $wrapper;
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

.workshop-hero {
  background: linear-gradient(200.04deg, #0ea3a2 0.87%, #2599e2 93.36%);
  padding: 107px 55px 72px;

  &-meta {
    display: flex;
    flex-direction: column;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 27px;
    /* identical to box height */

    letter-spacing: 0.165121px;

    color: #ffffff;
  }
}

.workshop-hero-meta-item {
  display: flex;
  align-items: center;

  &:nth-child(2) {
    margin-top: 8px;
    margin-left: -3px;
  }
}

@media (min-width: 576px) {
  .workshop-hero-meta {
    flex-direction: row;
  }

  .workshop-hero-meta-item {

    &:nth-child(2) {
      margin-top: 0;
      margin-left: 1.25rem;
    }
  }
}

.workshop-hero-title {
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 3rem;
  letter-spacing: 0.272581px;

  color: #ffffff;
}

@media (min-width: 768px) {
  .workshop-hero-title {
    font-size: 4rem;
    line-height: 4.25rem;
  }
}

.profile-image {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  flex: 1;
}

@media (min-width: 535px) {
  .instructor-wrapper {
    flex-direction: row;
  }

  .profile-image {
    margin-right: 1.25rem;
  }
}

.blog__header {
  padding-top: 4.6rem;
}

.blog__title {
  margin-top: 0;
}

.publish-date {
  margin-bottom: 0.5rem;
  font-family: 'Poppins';
}

.page-edit
  @extend $wrapper
  padding-top 1rem
  padding-bottom 1rem
  padding-left 0
  padding-right 0
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

.share {
  margin-bottom: 2rem;

  &__button {
    padding: 0.5rem 1rem;
    border: 1px solid $accentColor;
    border-radius: 10px;
    background-color: $accentColor;
    color: #fff;
    transition: 0.2s ease-in background-color,
      0.2s ease-in color;

    &:hover {
      background-color: #fff;
      color: $accentColor;
  }
  }
}

.flex {
  display: flex;
}

.mb-5 {
  margin-bottom: 1.25rem;
}

.mr-2 {
  margin-right: 0.5rem;
}

.twitter-tweet-rendered {
  margin: 10px auto;
}

@media (max-width: $MQMobile)
  .page-edit
    .edit-link
      margin-bottom .5rem
    .last-updated
      font-size .8em
      float none
      text-align left

@media (max-width: $MQMobileNarrow) {
  .blog__title {
    font-size: 2.441rem;
  }
}
</style>
