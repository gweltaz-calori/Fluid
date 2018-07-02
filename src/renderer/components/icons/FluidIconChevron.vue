<template>
    <svg @click="click" width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0L3.22374 3.22725L6.44747 0" transform="translate(1.27004 0.738464)" stroke="white" stroke-width="0.746862" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
</template>

<script>
export default {
  methods: {
    click() {
      this.$emit("click");
    }
  }
};
</script>

<style>
</style>
