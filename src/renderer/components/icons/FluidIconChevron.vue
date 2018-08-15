<template>
     <svg @click="click" width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0L3.22374 3.22725L6.44747 0" transform="translate(0.552734 1.0444)" :stroke="tint" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</template>

<script>
export default {
  props: {
    tint: {
      default: "white"
    }
  },
  methods: {
    click() {
      this.$emit("click");
    }
  }
};
</script>

<style>
</style>
