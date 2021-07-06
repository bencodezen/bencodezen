<script>
import Zigzag from '../components/icons/Zigzag'

export default {
  components: {
    Zigzag
  }
}
</script>

<template>
  <div class="loop-section">
    <div class="loop-wrap">
      <article class="item is-hero">
        <small class="item-label global-label global-zigzag">
          Latest posts
          <svg
            role="img"
            viewBox="0 0 136 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.525 1.525a3.5 3.5 0 014.95 0L20 15.05 33.525 1.525a3.5 3.5 0 014.95 0L52 15.05 65.525 1.525a3.5 3.5 0 014.95 0L84 15.05 97.525 1.525a3.5 3.5 0 014.95 0L116 15.05l13.525-13.525a3.5 3.5 0 014.95 4.95l-16 16a3.5 3.5 0 01-4.95 0L100 8.95 86.475 22.475a3.5 3.5 0 01-4.95 0L68 8.95 54.475 22.475a3.5 3.5 0 01-4.95 0L36 8.95 22.475 22.475a3.5 3.5 0 01-4.95 0l-16-16a3.5 3.5 0 010-4.95z"
            ></path>
          </svg>
        </small>
        <div class="item-container">
          <div class="item-image global-image">
            <nuxt-img
              src="/images/home-hero.png"
              sizes="sm:350px md:500px lg:600px"
            />
          </div>
          <div class="item-content">
            <h2 class="item-title">
              Vue, Netlify, Obsidian, Nuxt, Notion and more...
            </h2>
            <p class="item-excerpt global-zigzag">
              <zigzag />
              I love building things for the web and learning about new ideas
              and techniques for productivity and workflows.
            </p>
            <hero-social-grid />
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<style lang="scss"></style>
