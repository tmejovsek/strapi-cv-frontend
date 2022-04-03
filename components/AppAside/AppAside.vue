<template>
  <aside class="app-aside">
    <app-aside-item
      :title="content.training_title"
      :items="content.trainings"
    ></app-aside-item>

    <app-aside-item
      :title="content.volunteering_title"
      :items="content.volunteerings"
    ></app-aside-item>

    <app-aside-item
      :title="content.hobbies_title"
      :items="content.hobbies"
    ></app-aside-item>
  </aside>
</template>

<script>
import AppAsideItem from '@/components/AppAsideItem/AppAsideItem'

export default {
  name: 'AppAside',
  components: { AppAsideItem },
  props: {
    content: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss">
@use 'utilities/colors';
@use 'utilities/mq';

.app-aside {
  width: 100%;
  min-height: 500px;
  padding: 30px 40px;
  background-color: colors.$main;
  color: #fff;

  @include mq.media('<desktop') {
    margin-top: 50px;
    padding: 30px;
  }
}
</style>
