<template>
  <div class="v-experience">
    <h2 class="title">{{ title }}</h2>
    <div
      v-for="(experience, key) in experiences"
      :key="key"
      class="v-experience__item"
    >
      <p class="v-experience__date">
        {{
          beginDate(experience.begin, experience.end ? experience.end : false)
        }}
      </p>
      <div class="v-experience__infos">
        <h3 class="v-experience__title">{{ experience.title }}</h3>
        <p class="v-experience__location">{{ experience.location }}</p>
        <div
          v-if="experience.description"
          class="v-experience__description"
          v-html="$md.render(experience.description)"
        ></div>
        <p v-if="experience.promote" class="v-experience__promote">
          {{ experience.promote }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VExperience',
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

.v-experience {
  .title {
    margin-bottom: 50px;
  }
}

.v-experience__item {
  max-width: 425px;
  margin: 0 0 50px;

  @include mq.media('>tablet') {
    max-width: 550px;
    display: flex;
  }
}

.v-experience__date {
  flex: 0 0 100px;
  margin: 0 0 20px 0;
  font-weight: 700;

  @include mq.media('>tablet') {
    margin: 0 50px 0 0;
  }
}

.v-experience__infos {
  flex: 1;
}

.v-experience__title {
  font-size: 1.7rem;
  font-weight: 600;
  text-transform: uppercase;
  line-height: 1.5;
}

.v-experience__location {
  font-weight: 600;
  margin-bottom: 10px;
}

.v-experience__promote {
  margin-top: 5px;
  font-size: 1.4rem;
  color: #666768;
}
</style>
