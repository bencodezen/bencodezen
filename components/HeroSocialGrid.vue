<script>
export default {
  data: () => ({
    socialList: [
      {
        name: 'Twitter',
        url: 'https://www.twitter.com/bencodezen'
      },
      {
        name: 'YouTube',
        url: 'https://www.youtube.com/bencodezen'
      },
      {
        name: 'Twitch',
        url: 'https://www.twitch.tv/bencodezen'
      },
      {
        name: 'GitHub',
        url: 'https://www.github.com/bencodezen'
      },
      {
        name: 'Polywork',
        url: 'https://www.polywork.com/bencodezen'
      },
      {
        name: 'TikTok',
        url: 'https://www.tiktok.com/@bencodezen'
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/bencodezen'
      },
      {
        name: 'CodePen',
        url: 'https://www.codepen.io/bencodezen'
      }
    ]
  })
}
</script>

<template>
  <div class="hero-social-grid">
    <a
      v-for="social in socialList"
      :key="`hero-${social.name}-social`"
      :class="`hero-social-grid-link ${social.name.toLowerCase()}`"
      :href="social.url"
    >
      <base-icon :name="social.name" class="link-icon" />
      <span class="link-text">{{ social.name }}</span>
    </a>
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
