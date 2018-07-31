<template>
    <div ref="panel" class="panel">
        <div  ref="canvas" class="canvas" ></div>
    </div>
</template>

<script>
//:style="{'transform':`scale(${this.zoomLevel / 100})`}"
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
    zoomLevel() {},
    currentSlide() {
      this.$refs.canvas.removeChild(this.$refs.canvas.children[0]);
      this.$refs.canvas.appendChild(this.currentSlide.draw());
    }
  },
  methods: {
    setScale() {
      this.$refs.canvas.style.transform = `scale(${(this.$el.clientWidth -
        2 * this.margin) /
        this.currentSlide.absoluteBoundingBox.width})`;
    },
    onResize() {
      this.setScale();
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  mounted() {
    this.setScale();

    window.addEventListener("resize", this.onResize);

    this.$refs.canvas.appendChild(this.currentSlide.draw());
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
