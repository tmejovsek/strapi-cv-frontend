<template>
  <div class="app-aside-item">
    <h2 class="title title--white" v-html="title"></h2>
    <div v-for="item in items" :key="item.id" class="app-aside-item__item">
      <h3 class="app-aside-item__title">{{ item.title }}</h3>
      <p v-if="item.location" class="app-aside-item__location">
        {{ item.location }}
      </p>
      <p v-if="item.date" class="app-aside-item__date">{{ item.date }}</p>
      <div
        v-if="item.content"
        class="app-aside-item__content"
        v-html="$md.render(item.content)"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppAsideItem',
  props: {
    title: {
      type: String,
      default: '',
    },
    items: {
      type: [Array, Object],
      default: () => [],
    },
  },
}
</script>

<style lang="scss">
@use 'utilities/fonts';

.app-aside-item {
  &:not(:last-child) {
    margin-bottom: 50px;
  }
}
.app-aside-item__title {
  margin-bottom: 5px;
  text-transform: uppercase;
  font-weight: 600;
  font-family: fonts.$montserrat;
}

.app-aside-item__item {
  margin-bottom: 20px;
}

.app-aside-item__location {
  font-size: 1.5rem;
  font-weight: 500;
  font-family: fonts.$montserrat;
}

.app-aside-item__date {
  font-size: 1.5rem;
  font-style: italic;
}

.app-aside-item__content {
  margin-top: 15px;

  p {
    margin-bottom: 1rem;
  }
}
</style>
