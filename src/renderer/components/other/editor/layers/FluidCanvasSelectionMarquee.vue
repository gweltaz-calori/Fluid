<template>
    <canvas ></canvas>
</template>

<script>
import { mapGetters } from "vuex";
import { getPositionRelativeToCanvas, isRoot } from "@/editor/tree-helpers";
import SuperMath from "@/importer/utils/SuperMath";
export default {
  props: {
    isDragging: {
      default: false
    },
    position: {
      default: {
        x: 0,
        y: 0
      }
    },
    origin: {
      default: {
        x: 0,
        y: 0
      }
    }
  },
  watch: {
    position: {
      handler() {
        this.draw();
      },
      deep: true
    },
    isDragging() {
      if (!this.isDragging) {
        this.clear();
      }
    }
  },
  methods: {
    draw() {
      this.clear();

      const width = this.position.x - this.origin.x;
      const height = this.position.y - this.origin.y;

      this.ctx.beginPath();
      this.ctx.moveTo(this.origin.x, this.origin.y);
      this.ctx.lineTo(this.origin.x + width, this.origin.y);
      this.ctx.lineTo(this.origin.x + width, this.origin.y + height);
      this.ctx.lineTo(this.origin.x, this.origin.y + height);
      this.ctx.closePath();
      this.ctx.fillStyle = "rgba(31, 138, 255, 0.1)";
      this.ctx.strokeStyle = "rgba(31, 138, 255, 0.4)";
      this.ctx.fill();
      this.ctx.stroke();
    },
    clear() {
      this.ctx.clearRect(0, 0, this.$el.width, this.$el.height);
    },
    setDimensions() {
      let { width, height } = document.documentElement.getBoundingClientRect();

      this.$el.width = width;
      this.$el.height = height;
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  mounted() {
    this.ctx = this.$el.getContext("2d");
    this.setDimensions();

    window.addEventListener("resize", this.setDimensions);
  }
};
</script>

<style scoped>
canvas {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}
</style>
