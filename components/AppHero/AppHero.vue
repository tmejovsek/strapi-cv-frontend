<template>
  <div class="app-hero">
    <div class="app-hero__container container">
      <div class="app-hero__image">
        <img :src="api_url + avatar.src" :alt="avatar.alt" />
      </div>
      <div class="app-hero__content">
        <h1 class="app-hero__title" v-html="title"></h1>
        <p class="app-hero__subtitle">{{ description }}</p>
        <p class="app-hero__quote">{{ quote }}</p>
      </div>
      <div class="app-hero__btn">
        <app-btn :href="api_url + pdf" target="_blank">
          <svg
            class="icon"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 57 50"
          >
            <path
              d="M48.752 32.163v11.232H8.104V32.163H.292v14.534c0 1.822 1.746 3.3 3.912 3.3h48.449c2.164 0 3.912-1.476 3.912-3.3V32.163h-7.813Zm-21.039-1.114L16.528 19.625s-1.702-1.358.144-1.358h6.303V1.637s-.25-.811 1.193-.811h8.872c1.04 0 1.017.682 1.017.682v16.416h5.818c2.239 0 .553 1.422.553 1.422S30.91 30.024 29.584 31.144c-.955.812-1.87-.095-1.87-.095Z"
              fill="currentColor"
              fill-opacity=".945"
            />
          </svg>
          {{ btn_text }}
        </app-btn>
      </div>
    </div>
  </div>
</template>

<script>
import AppBtn from '@/components/AppBtn/AppBtn'
export default {
  name: 'AppHero',
  components: { AppBtn },
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    avatar: {
      type: Object,
      default: () => {},
    },
    quote: {
      type: String,
      default: '',
    },
    btn_text: {
      type: String,
      default: '',
    },
    pdf: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      api_url: process.env.strapiBaseUri,
    }
  },
}
</script>

<style lang="scss">
@use 'utilities/colors';
@use 'utilities/fonts';
@use 'utilities/mq';

.app-hero {
  margin: 20px 0 50px;
  font-family: fonts.$montserrat;

  @include mq.media('>tablet') {
    margin-top: 100px;
  }
}

.app-hero__container {
  @include mq.media('>tablet') {
    display: flex;
    flex-wrap: wrap;
  }
}

.app-hero__image {
  flex-shrink: 0;
  position: relative;
  padding: 30px;

  @include mq.media('<tablet') {
    text-align: center;
  }

  @include mq.media('>desktop') {
    margin-right: 50px;
  }

  img {
    width: 300px;
    height: auto;
    box-shadow: -30px -30px 0 0 colors.$main;
    transition: box-shadow 0.25s ease;

    @include mq.media('>=tablet', '<desktop') {
      width: 260px;
    }

    &:hover {
      box-shadow: -35px -25px 0 0 colors.$main;
    }
  }
}

.app-hero__content {
  max-width: 330px;

  @include mq.media('<tablet') {
    margin: 0 auto;
  }
}

.app-hero__title {
  margin: 0 0 10px;
  font-size: 4rem;
  text-transform: uppercase;
  letter-spacing: 5px;
  line-height: 1.2;

  @include mq.media('>tablet') {
    margin-top: 70px;
    font-size: 5rem;
  }

  span {
    display: block;
    font-weight: 700;
  }
}

.app-hero__subtitle {
  font-size: 1.75rem;
  font-weight: 400;
  letter-spacing: 5px;
  text-transform: uppercase;

  @include mq.media('>tablet') {
    font-size: 2.25rem;
  }
}

.app-hero__quote {
  margin-top: 30px;
  font-style: italic;
  font-weight: 500;
  line-height: 1.5;
}

.app-hero__btn {
  align-self: center;
  flex: 1;
  white-space: nowrap;
  text-align: center;

  @include mq.media('>tablet') {
    margin-left: 40px;
  }

  .app-btn {
    width: 100%;
    max-width: 330px;
    margin: 50px 0;

    @include mq.media('>tablet') {
      width: auto;
      margin: 0;
    }
  }

  .icon {
    width: 22px;
    height: 22px;
    margin-right: 15px;
    vertical-align: middle;
  }
}
</style>
