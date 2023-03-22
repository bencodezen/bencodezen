<script setup lang="ts"></script>

<template>
  <div class="hero-social-grid">
    <HeroSocialGridItem name="Twitter" url="https://www.twitter.com/bencodezen">
      <Twitter />
    </HeroSocialGridItem>
    <HeroSocialGridItem name="YouTube" url="https://www.youtube.com/bencodezen">
      <YouTube />
    </HeroSocialGridItem>
    <HeroSocialGridItem name="Twitch" url="https://www.twitch.tv/bencodezen">
      <Twitch />
    </HeroSocialGridItem>
    <HeroSocialGridItem name="GitHub" url="https://www.github.com/bencodezen">
      <GitHub />
    </HeroSocialGridItem>
    <HeroSocialGridItem
      name="Polywork"
      url="https://www.polywork.com/bencodezen"
    >
      <Polywork />
    </HeroSocialGridItem>
    <HeroSocialGridItem name="TikTok" url="https://www.tiktok.com/@bencodezen">
      <TikTok />
    </HeroSocialGridItem>
    <HeroSocialGridItem
      name="Instagram"
      url="https://www.instagram.com/bencodezen"
    >
      <Instagram />
    </HeroSocialGridItem>
    <HeroSocialGridItem name="CodePen" url="https://www.codepen.io/bencodezen">
      <CodePen />
    </HeroSocialGridItem>
  </div>
</template>

<style lang="scss">
.hero-social-grid {
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-row-gap: 1rem;
  grid-column-gap: 2rem;
  align-items: center;
  justify-items: center;

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}
</style>
