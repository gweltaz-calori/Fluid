<template>
    <div ref="panel" class="panel" :style="{'background-color' : themeColors.background}">
        <div ref="canvas" class="canvas"></div>
        <fluid-canvas-selection-marquee :is-dragging="isDragging" :position="position" :origin="origin"></fluid-canvas-selection-marquee>
    </div>
</template>

<script>
import Bus from "@/bus";
import { mapGetters, mapActions } from "vuex";
import { getNodeFromEvent } from "@/editor/tree-actions";
import Importer from "@/importer/Importer";
import Mouse from "@/js/mouse";
import FluidCanvasSelectionMarquee from "@/components/other/editor/layers/FluidCanvasSelectionMarquee.vue";

import canvasJson from "@/data/canvas.json";
export default {
  components: { FluidCanvasSelectionMarquee },
  data() {
    return {
      canvasMargin: 20,
      isDragging: false,
      position: {
        x: 0,
        y: 0
      },
      origin: {
        x: 0,
        y: 0
      }
    };
  },
  computed: {
    ...mapGetters([
      "zoomLevel",
      "currentSlide",
      "highlightedLayer",
      "themeColors"
    ])
  },
  watch: {
    currentSlide() {
      this.drawCanvas();
    }
  },
  methods: {
    ...mapActions([
      "setFrames",
      "setSelectedFrame",
      "selectNodes",
      "selectRootNode",
      "setNodesTree",
      "setHighlightedLayer",
      "setCanvasBounds",
      "setNodesTreeHtmlRefs",
      "addNodeToSelection"
    ]),
    hover(e) {
      if (this.isDragging) return; //disable hove if the user is trying to do a multiselection

      const nodes = getNodeFromEvent(e, this.$refs.canvas);

      if (nodes.length > 0) {
        this.setHighlightedLayer(nodes[0].id);
      } else {
        this.setHighlightedLayer();
      }
    },
    onKeyUp(e) {
      if (e.repeat) return;
      this.hover(e);
    },
    onKeyDown(e) {
      if (e.repeat) return;
      this.hover(e);
    },
    onMouseDown(e) {
      e.stopPropagation();

      let time = performance.now();
      if (e.target && time - e.target.__oldTime <= 400) {
        e.__type = "dblclick";
        this.onDoubleClick(e);
      } else {
        this.onClick(e);
      }
      e.target.__oldTime = performance.now();
    },
    onClick(e) {
      const nodes = getNodeFromEvent(e, this.$refs.canvas);
      if (nodes.length > 0) {
        this.selectNodes(nodes.map(node => node.id));
      } else {
        this.selectRootNode();
        this.startDrag(e);
      }
    },
    startDrag(e) {
      const isLeftClick = e.which === 3;
      if (this.isDragging || isLeftClick) return;
      this.isDragging = true;
      const { x, y } = e;

      this.origin.x = x;
      this.origin.y = y;
    },
    onMouseMove(e) {
      this.hover(e);
    },
    onDoubleClick(e) {
      const nodes = getNodeFromEvent(e, this.$refs.canvas);
      if (nodes.length > 0) {
        this.selectNodes(nodes.map(node => node.id));

        this.setHighlightedLayer(nodes.map(node => node.id)[0]);
      } else {
        this.startDrag(e);
      }
    },
    onMovePanel(e) {
      if (this.$el !== e.target) return;

      this.setHighlightedLayer();
    },
    onDropWindow(e) {
      if (!this.isDragging) return;
      this.isDragging = false;
    },
    onMoveWindow(e) {
      if (!this.isDragging) return;
      const { x, y } = e;

      this.position.x = x;
      this.position.y = y;

      const nodes = getNodeFromEvent(e, this.$refs.canvas, this.origin);

      if (nodes.length > 0) {
        this.selectNodes(nodes.map(node => node.id));
      } else {
        this.selectRootNode();
      }
    },
    setDimensions() {
      const slideBounds = this.currentSlide.absoluteBoundingBox;
      const panelDimensions = this.$el.getBoundingClientRect();

      this.$refs.canvas.style.transform = `scale(${Math.min(
        (panelDimensions.width - 2 * this.canvasMargin) / slideBounds.width,
        (panelDimensions.height - 2 * this.canvasMargin) / slideBounds.height
      )})`;
    },
    onResize() {
      this.setDimensions();
      this.setCanvasBounds(this.$refs.canvas.getBoundingClientRect());
    },
    addListeners() {
      this.$el.addEventListener("mousedown", this.onMouseDown);
      this.$el.addEventListener("mousemove", this.onMouseMove);
      window.addEventListener("keydown", this.onKeyDown);
      window.addEventListener("keyup", this.onKeyUp);
      window.addEventListener("resize", this.onResize);

      window.addEventListener("mouseup", this.onDropWindow);
      window.addEventListener("mousemove", this.onMoveWindow);
      Mouse.start();
    },
    removeListeners() {
      this.$el.removeEventListener("mousedown", this.onMouseDown);
      this.$el.removeEventListener("mousemove", this.onMouseMove);
      window.removeEventListener("keydown", this.onKeyDown);
      window.removeEventListener("keyup", this.onKeyUp);
      window.removeEventListener("resize", this.onResize);
      window.removeEventListener("mouseup", this.onDropWindow);
      window.removeEventListener("mousemove", this.onMoveWindow);
      Mouse.stop();
    },
    drawCanvas() {
      let { frame, htmlTree } = Importer.drawRootFrame(this.currentSlide);

      this.setNodesTreeHtmlRefs(htmlTree);

      if (this.$refs.canvas.childNodes.length > 0) {
        this.$refs.canvas.removeChild(this.$refs.canvas.childNodes[0]);
      }

      this.$refs.canvas.appendChild(frame);

      this.onResize();
    }
  },
  beforeDestroy() {
    this.removeListeners();
  },
  mounted() {
    this.addListeners();
    let { page, tree } = Importer.loadPage(canvasJson);
    this.setFrames(page.children);
    this.setNodesTree(tree);
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
  z-index: 0;
}
</style>
