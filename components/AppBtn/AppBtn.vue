<template>
  <component
    :is="tag"
    class="app-btn"
    :href="href ? href : false"
    @click="$emit('click')"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'AppBtn',
  props: {
    href: {
      type: String,
      default: '',
    },
  },
  computed: {
    tag() {
      return this.href ? 'a' : 'button'
    },
  },
}
</script>

<style lang="scss">
@use 'utilities/colors';
@use 'utilities/fonts';

.app-btn {
  display: inline-block;
  width: auto;
  padding: 10px 20px;
  border: 1px solid colors.$main;
  color: colors.$main;
  text-align: center;
  font-family: fonts.$montserrat;
  font-weight: 600;
  box-shadow: 0 0 0 0 colors.$main;
  transition: box-shadow 0.25s ease;

  &:hover,
  &:focus {
    box-shadow: -5px -5px 0 0 colors.$main;
  }
}
</style>
