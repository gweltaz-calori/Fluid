<template>
    <div ref="slide" class="slide" :class="{'selected':selected}">
      <div ref="canvas"></div>
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
  methods: {
    setScale() {
      this.$refs.slide.style.transformOrigin = "top left";
      this.$refs.slide.style.height = `${this.$el.clientWidth /
        this.slide.absoluteBoundingBox.width *
        this.slide.absoluteBoundingBox.height}px`;
      this.$refs.slide.style.transform = `scale(${this.$el.clientWidth /
        this.slide.absoluteBoundingBox.width})`;
    }
  },
  mounted() {
    this.setScale();
    this.$refs.canvas.appendChild(this.slide.draw());
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
