<script>
export default {
  data: () => ({
    site: {
      url: 'https://www.bencodezen.io',
      title: 'BenCodeZen'
    }
  })
}
</script>

<template>
  <header class="header-section">
    <div class="header-wrap">
      <div class="header-logo">
        <h1 class="is-title">
          <a :href="site.url">{{ site.title }}</a>
        </h1>
      </div>
      <div class="header-nav">
        <input id="toggle" class="header-checkbox" type="checkbox" />
        <label class="header-toggle" for="toggle">
          <span>
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </span>
        </label>
        <nav>
          <ul>
            <li><nuxt-link to="/">Home</nuxt-link></li>
            <li><nuxt-link to="/schedule">Schedule</nuxt-link></li>
            <li><nuxt-link to="/learn">Learn</nuxt-link></li>
          </ul>
          <ul>
            <li id="search-open" class="header-search">
              <span>Search</span>
            </li>
            <li><nuxt-link to="/blog">Blog</nuxt-link></li>
            <li><nuxt-link to="/uses">Uses</nuxt-link></li>
            <li><nuxt-link to="/about">About</nuxt-link></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>
