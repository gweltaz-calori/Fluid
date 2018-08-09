<template>
  <div class="slide-wrapper" :class="{'selected':selected}">
    <div class="background"></div>
    <div ref="slide" class="slide" >
        <div ref="canvas"></div>
    </div>
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
      this.$refs.slide.style.height = `${this.$refs.slide.clientWidth /
        this.slide.absoluteBoundingBox.width *
        this.slide.absoluteBoundingBox.height}px`;
      this.$refs.slide.style.transform = `scale(${this.$refs.slide.clientWidth /
        this.slide.absoluteBoundingBox.width})`;
    }
  },
  mounted() {
    this.setScale();
    this.$refs.canvas.appendChild(this.slide.draw({}));
  }
};
</script>

<style scoped>
.slide {
  width: 146px; /* 
  height: 80px; */

  /*  background: #ffffff; */
  opacity: 1;
  border-radius: 4px;
}

.slide.selected {
  opacity: 1;
}

.slide-wrapper {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 17px 0;
}

.selected .background {
  background: #1f8aff;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
