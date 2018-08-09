<template>
    <div class="canvas-container">
      <canvas ref="selectionCanvas"></canvas>
      <canvas ref="highlightCanvas"></canvas>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getPositionRelativeToCanvas, isRoot } from "@/editor/tree-helpers";
export default {
  computed: {
    ...mapGetters(["highlightedLayer", "selectedLayers", "nodesTree"])
  },
  watch: {
    highlightedLayer() {
      if (this.highlightedLayer) {
        const node = this.nodesTree[this.highlightedLayer];

        if (isRoot(node)) return;

        const bounds = getPositionRelativeToCanvas(node);

        this.draw(bounds, this.highlightCtx, this.$refs.highlightCanvas);
      } else {
        this.clear(this.highlightCtx, this.$refs.highlightCanvas);
      }
    },
    selectedLayers() {
      if (this.selectedLayers) {
        const nodes = this.selectedLayers.map(
          layerId => this.nodesTree[layerId]
        );
        for (let node of nodes) {
          if (isRoot(node)) {
            this.clear(this.selectionCtx, this.$refs.selectionCanvas);
            return;
          }
          const bounds = getPositionRelativeToCanvas(node);
          this.draw(bounds, this.selectionCtx, this.$refs.selectionCanvas);
        }
      } else {
        this.clear(this.selectionCtx, this.$refs.selectionCanvas);
      }
    }
  },
  methods: {
    draw(bounds, ctx, canvas) {
      this.clear(ctx, canvas);

      ctx.strokeStyle = "#1f8aff";
      ctx.lineWidth = 2;

      ctx.strokeRect(bounds.x, bounds.y, bounds.width, bounds.height);
    },
    clear(ctx, canvas) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    },
    setDimensions() {
      let { width, height } = document.documentElement.getBoundingClientRect();

      [this.$refs.selectionCanvas, this.$refs.highlightCanvas].map(canvas => {
        canvas.width = width;
        canvas.height = height;
      });
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  mounted() {
    this.selectionCtx = this.$refs.selectionCanvas.getContext("2d");
    this.highlightCtx = this.$refs.highlightCanvas.getContext("2d");
    this.setDimensions();

    window.addEventListener("resize", this.setDimensions);
  }
};
</script>

<style scoped>
.canvas-container {
  position: relative;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
canvas {
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
