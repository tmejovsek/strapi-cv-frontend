<template>
  <div class="aside-item">
    <h2 class="title title--white" v-html="title"></h2>
    <div v-for="item in items" :key="item.id" class="aside-item__item">
      <h3 class="aside-item__title">{{ item.title }}</h3>
      <p v-if="item.location" class="aside-item__location">
        {{ item.location }}
      </p>
      <p v-if="item.date" class="aside-item__date">{{ item.date }}</p>
      <div
        v-if="item.content"
        class="aside-item__content"
        v-html="$md.render(item.content)"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AsideItem',
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

.aside-item {
  &:not(:last-child) {
    margin-bottom: 50px;
  }
}
.aside-item__title {
  margin-bottom: 5px;
  text-transform: uppercase;
  font-weight: 600;
  font-family: fonts.$montserrat;
}

.aside-item__item {
  margin-bottom: 20px;
}

.aside-item__location {
  font-size: 1.5rem;
  font-weight: 500;
  font-family: fonts.$montserrat;
}

.aside-item__date {
  font-size: 1.5rem;
  font-style: italic;
}

.aside-item__content {
  margin-top: 15px;

  p {
    margin-bottom: 1rem;
  }
}
</style>
