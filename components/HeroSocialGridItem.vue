<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
})
</script>

<template>
  <nuxt-link :class="`hero-social-grid-link ${name.toLowerCase()}`" :href="url">
    <BaseIcon class="link-icon"><slot /></BaseIcon>
    <span class="link-text">{{ name }}</span>
  </nuxt-link>
</template>

<style lang="scss">
.hero-social-grid-link {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  width: 100%;
  height: 40px;
  padding: 0.5rem;
  border: 1px solid #fff;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  filter: grayscale(1);
  transition: all 0.5s ease;

  .link-icon {
    position: absolute;
    transition: transform 0.5s ease;
  }

  .link-text {
    opacity: 0;
    padding-left: 2rem;
    white-space: nowrap;
    transition: all 0.2s ease;
  }

  &:hover {
    background-color: #f8f8f8;
    color: #222;
    filter: grayscale(0);

    .link-icon {
      transform: translateX(-30px);
    }

    .link-text {
      width: auto;
      height: auto;
      opacity: 1;
    }

    &.codepen {
      .link-icon {
        transform: translateX(-35px);
      }

      svg {
        fill: #333;
      }
    }

    &.github {
      svg {
        fill: #222;
      }
    }

    &.instagram {
      .link-icon {
        transform: translateX(-40px);
      }
    }

    &.polywork {
      .link-icon {
        transform: translateX(-38px);
      }
    }

    &.tiktok {
      .link-icon {
        transform: translateX(-28px);
      }

      svg {
        fill: #333;
      }
    }

    &.twitch {
      .link-icon {
        transform: translateX(-28px);
      }

      svg {
        fill: #6441a4;
      }
    }

    &.twitter {
      svg {
        fill: #1da1f2;
      }
    }

    &.youtube {
      .link-icon {
        transform: translateX(-35px);
      }

      svg {
        fill: #ff0000;
      }
    }
  }
}
</style>
