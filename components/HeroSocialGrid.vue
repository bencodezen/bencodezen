<script setup lang="ts"></script>

<template>
  <div class="hero-social-grid">
    <HeroSocialGridItem name="Twitter" url="https://www.twitter.com/bencodezen">
      <IconTwitter />
    </HeroSocialGridItem>
    <HeroSocialGridItem name="YouTube" url="https://www.youtube.com/bencodezen">
      <IconYouTube />
    </HeroSocialGridItem>
    <HeroSocialGridItem name="Twitch" url="https://www.twitch.tv/bencodezen">
      <IconTwitch />
    </HeroSocialGridItem>
    <HeroSocialGridItem name="GitHub" url="https://www.github.com/bencodezen">
      <IconGitHub />
    </HeroSocialGridItem>
    <HeroSocialGridItem
      name="Polywork"
      url="https://www.polywork.com/bencodezen"
    >
      <IconPolywork />
    </HeroSocialGridItem>
    <HeroSocialGridItem name="TikTok" url="https://www.tiktok.com/@bencodezen">
      <IconTikTok />
    </HeroSocialGridItem>
    <HeroSocialGridItem
      name="Instagram"
      url="https://www.instagram.com/bencodezen"
    >
      <IconInstagram />
    </HeroSocialGridItem>
    <HeroSocialGridItem name="CodePen" url="https://www.codepen.io/bencodezen">
      <IconCodePen />
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
