<script>
export default {
  name: 'BlogPostPreview',
  props: {
    published: {
      type: String,
      required: true
    },
    tags: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true
    },
    excerpt: {
      type: String,
      default: ''
    }
  },
  computed: {
    formatPublishDate() {
      const dateFormat = new Date(this.published)
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }

      return dateFormat.toLocaleDateString('en-US', options)
    }
  }
}
</script>

<template>
  <section class="blog-post">
    <time class="blog-post__time">{{ formatPublishDate }}</time>
    <h3 class="title">
      <a :href="path" class="blog-post__link">{{ title }}</a>
    </h3>
    <p v-if="excerpt" class="blog-post__excerpt">{{ excerpt }}</p>
    <nuxt-link class="button blog-post__button " :to="path">
      Read More
    </nuxt-link>
  </section>
</template>

<style lang="scss">
@import '../styles/_settings.scss';
$primary-color: #22aaff;

.blog-post {
  margin-bottom: 2.5rem;
}

a.blog-post__button {
  display: inline-block;
  padding: 0.5rem 1rem;
  text-decoration: none;
}

.blog-post__excerpt {
  margin-top: 0;
  @apply mb-3;
  font-size: 1.2rem;
}

.blog-post__link {
  font-weight: 700;
  color: #2c3e50;

  &:hover {
    text-decoration: underline;
  }
}

.blog-post__time {
  font-weight: 500;
}

.blog-post .title {
  margin-top: 0.5rem;
  margin-bottom: 0.75rem;
  color: #fff;

  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}

.button {
  font-weight: 500;
  border: 1px solid $c-primary;
  border-radius: 4px;
  color: $c-primary;
  font-size: 0.9rem;
  padding: 0.3rem 0.6rem;
  text-transform: uppercase;
  box-shadow: 0 0;
  transition: background-color 0.2s ease-in, color 0.2s ease-in;
}

.button:hover {
  background-color: primary-color;
  color: #fff;
  text-decoration: none;
}

.tag-list {
  list-style: none;
  padding-left: 0;
  display: flex;
  margin-bottom: 25px;
}

.tag-list__item {
  margin-left: 10px;
}

.tag-list__item:first-child {
  margin-left: 0;
}

.tag-list__btn {
  padding: 5px;
  font-size: 0.9rem;
  background-color: #fff;
}
</style>
