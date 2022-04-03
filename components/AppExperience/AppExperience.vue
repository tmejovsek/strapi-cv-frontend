<template>
  <div class="app-experience">
    <h2 class="title">{{ title }}</h2>
    <div
      v-for="(experience, key) in experiences"
      :key="key"
      class="app-experience__item"
    >
      <p class="app-experience__date">
        {{
          beginDate(experience.begin, experience.end ? experience.end : false)
        }}
      </p>
      <div class="app-experience__infos">
        <h3 class="app-experience__title">{{ experience.title }}</h3>
        <p class="app-experience__location">{{ experience.location }}</p>
        <div
          v-if="experience.description"
          class="app-experience__description"
          v-html="$md.render(experience.description)"
        ></div>
        <p v-if="experience.promote" class="app-experience__promote">
          {{ experience.promote }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppExperience',
  props: {
    title: {
      type: String,
      default: '',
    },
    experiences: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    beginDate(dateBegin, dateEnd = false) {
      if (dateEnd) {
        return `${new Date(dateBegin).getFullYear()} / ${new Date(
          dateEnd
        ).getFullYear()}`
      } else {
        return `Depuis ${new Date(dateBegin).getFullYear()}`
      }
    },
  },
}
</script>

<style lang="scss">
@use 'utilities/mq';

.app-experience {
  .title {
    margin-bottom: 50px;
  }
}

.app-experience__item {
  max-width: 425px;
  margin: 0 0 50px;

  @include mq.media('>tablet') {
    max-width: 550px;
    display: flex;
  }
}

.app-experience__date {
  flex: 0 0 100px;
  margin: 0 0 20px 0;
  font-weight: 700;

  @include mq.media('>tablet') {
    margin: 0 50px 0 0;
  }
}

.app-experience__infos {
  flex: 1;
}

.app-experience__title {
  font-size: 1.7rem;
  font-weight: 600;
  text-transform: uppercase;
  line-height: 1.5;
}

.app-experience__location {
  font-weight: 600;
  margin-bottom: 10px;
}

.app-experience__promote {
  margin-top: 5px;
  font-size: 1.4rem;
  color: #666768;
}
</style>
