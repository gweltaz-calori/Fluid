<template>
    <div class="slide" :class="{'selected':selected}">
      <!-- <div ref="preview" v-html="slide.svg"></div> -->
      <canvas ref="canvas"></canvas>
    </div>
</template>

<script>
import { rasterize } from "@/utils/svgRasterizer";
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
    let ctx = this.$refs.canvas.getContext("2d");
    rasterize(this.slide.svg).then(bitmap => {
      this.$refs.canvas.width = this.$el.clientWidth;
      this.$refs.canvas.height =
        this.slide.absoluteBoundingBox.height *
        this.$el.clientWidth /
        this.slide.absoluteBoundingBox.width;
      ctx.drawImage(
        bitmap,
        0,
        0,
        this.$el.clientWidth,
        this.slide.absoluteBoundingBox.height *
          this.$el.clientWidth /
          this.slide.absoluteBoundingBox.width
      );
    });
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
