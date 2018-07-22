<template>
    <div class="slide" :class="{'selected':selected}">
      <div ref="preview" v-html="slide.svg"></div>
    </div>
</template>

<script>
export default {
  props: {
    selected: {
      default: false
    },
    slide: {}
  },
  data() {
    return {};
  },
  mounted() {
    this.$refs.preview.children[0].style.width = "100%";
    this.$refs.preview.children[0].style.height = "auto";
  }
};
</script>

<style scoped>
.slide {
  width: 146px; /* 
  height: 80px; */

  /*  background: #ffffff; */
  opacity: 0.1;
  border-radius: 4px;
}

.slide.selected {
  opacity: 1;
}
</style>
