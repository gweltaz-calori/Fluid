<template>
    <div ref="panel" class="panel">
        <div :style="{'transform':`scale(${this.zoomLevel / 100})`}" ref="canvas" class="canvas" ></div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import EditorLayerSelectionOutline from "@/components/other/EditorLayerSelectionOutline.vue";

export default {
  components: { EditorLayerSelectionOutline },
  data() {
    return {
      x: 16,
      y: 9,
      margin: 10
    };
  },
  computed: {
    ...mapGetters(["zoomLevel", "currentSlide"])
  },
  watch: {
    zoomLevel() {}
  },
  methods: {
    setWidth() {
      this.$refs.canvas.style.width = `${this.$el.clientWidth -
        2 * this.margin}px`;
    },
    setHeight() {
      this.$refs.canvas.style.height = `${(this.$el.clientWidth -
        2 * this.margin) /
        (this.x / this.y)}px`;
    },
    onResize() {
      this.setWidth();
      this.setHeight();
    }
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
  cursor: url("../../../../assets/icons/cursor.png") 2 2, auto;
}
.canvas {
}
</style>
