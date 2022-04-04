<template>
  <div class="v-competence">
    <h2 class="title">{{ title }}</h2>
    <div class="v-competence__content">
      <div
        v-for="competence in competences"
        :key="competence.id"
        class="v-competence__item"
      >
        <h3 class="v-competence__sub-title" v-html="competence.title"></h3>
        <ul
          class="v-competence__list"
          v-html="$md.render(competence.content)"
        ></ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VCompetence',
  props: {
    title: {
      type: String,
      default: '',
    },
    competences: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss">
@use 'utilities/fonts';
@use 'utilities/mq';

.v-competence__content {
  display: flex;
  flex-wrap: wrap;
  max-width: 750px;

  @include mq.media('>tablet') {
    justify-content: space-between;
  }
}

.v-competence__item {
  flex: 1 1 calc(50% - 10px);
  margin: 20px 10px 0 0;

  @include mq.media('>tablet') {
    flex: 1 1 100px;
    max-width: 165px;
  }
}

.v-competence__sub-title {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-weight: 700;
  margin-bottom: 20px;
  min-height: 50px;
  max-width: 165px;

  span {
    display: block;
  }
}

.v-competence__list {
  font-family: fonts.$montserrat;
  font-weight: 500;

  li {
    list-style: none;
    margin: 0;
    padding: 0;
    line-height: 2;
  }
}
</style>
