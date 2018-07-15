<template>
    <div ref="panel" class="panel">
        <div ref="canvas" class="canvas" :style="{'transform':`scale(${this.zoomLevel / 100})`}"></div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      x: 16,
      y: 9,
      margin: 10
    };
  },
  computed: {
    ...mapGetters(["zoomLevel"])
  },
  methods: {
    setWidth() {
      this.$refs.canvas.style.width = `${this.$el.clientWidth -
        2 * this.margin}px`;
    },
    setHeight() {
      this.$refs.canvas.style.height = `${this.$el.clientWidth /
        (this.x / this.y)}px`;
    },
    onResize() {
      this.setWidth();
      this.setHeight();
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  mounted() {
    window.addEventListener("resize", this.onResize);
    this.setWidth();
    this.setHeight();
  }
};
</script>

<style scoped>
.panel {
  position: absolute;
  top: 70px;
  bottom: 0;
  left: 246px;
  right: 305px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.canvas {
  background-color: white;
}
</style>
