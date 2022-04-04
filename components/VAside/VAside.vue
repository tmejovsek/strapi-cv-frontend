<template>
  <aside class="v-aside">
    <aside-item
      :title="content.training_title"
      :items="content.trainings"
    ></aside-item>

    <aside-item
      :title="content.volunteering_title"
      :items="content.volunteerings"
    ></aside-item>

    <aside-item
      :title="content.hobbies_title"
      :items="content.hobbies"
    ></aside-item>
  </aside>
</template>

<script>
import AsideItem from '@/components/AsideItem/AsideItem'

export default {
  name: 'VAside',
  components: { AsideItem },
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

.v-aside {
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
