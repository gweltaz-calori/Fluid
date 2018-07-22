<template>
    <div ref="panel" class="panel">
        <div :style="{'transform':`scale(${this.zoomLevel / 100})`}" ref="canvas" class="canvas" v-html="currentSlide.svg"></div>
        <editor-layer-selection-outline 
        v-if="hoveredDomElement !== null"
        :transform="hoverSelectionBounds.transform"
        :top="hoverSelectionBounds.top" 
        :left="hoverSelectionBounds.left" 
        :height="hoverSelectionBounds.height"
        :width="hoverSelectionBounds.width">
      </editor-layer-selection-outline>

      <editor-layer-selection-outline 
        v-if="selectedDomElement"
        :transform="clickSelectionBounds.transform"
        :top="clickSelectionBounds.top" 
        :left="clickSelectionBounds.left" 
        :height="clickSelectionBounds.height"
        :width="clickSelectionBounds.width">
      </editor-layer-selection-outline>
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
      margin: 10,
      isHovering: false,
      isSelected: false,
      hoverSelectionBounds: {
        top: 0,
        left: 0,
        width: 0,
        height: 0,
        transform: {}
      },
      clickSelectionBounds: {
        top: 0,
        left: 0,
        width: 0,
        height: 0,
        transform: {}
      },
      hoveredDomElement: null,
      selectedDomElement: null
    };
  },
  computed: {
    ...mapGetters(["zoomLevel", "currentSlide"])
  },
  watch: {
    zoomLevel() {
      this.hoveredDomElement = null;
    }
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
      this.hoveredDomElement = null;
      this.setWidth();
      this.setHeight();
    },
    onSvgClick(e) {
      if (
        e.target === this.$refs.canvas.children[0] ||
        this.selectedDomElement === e.target
      ) {
        return;
      }
      this.selectedDomElement = e.target;

      let bounds = e.target.getBBox();

      this.clickSelectionBounds.top = bounds.y;
      this.clickSelectionBounds.left = bounds.x;
      this.clickSelectionBounds.width = bounds.width;
      this.clickSelectionBounds.height = bounds.height;
      this.clickSelectionBounds.transform = e.target.getScreenCTM();
    },
    onSvgClickOut(event) {
      if (!this.selectedDomElement) return;

      let isClickInside = this.selectedDomElement.contains(event.target);

      if (!isClickInside) {
        console.log("clicked outside element");
        this.selectedDomElement = null;
      }
    },
    onSvgMouseEnter() {
      this.isHovering = true;
    },
    onSvgMouseLeave() {
      this.isHovering = false;
    },
    isBackground(el) {
      return (
        el.getAttributeNS(null, "width") ===
          this.$refs.canvas.children[0].getAttributeNS(null, "width") &&
        el.getAttributeNS(null, "height") ===
          this.$refs.canvas.children[0].getAttributeNS(null, "height")
      );
    },
    onSvgMouseMove(e) {
      if (this.hoveredDomElement === e.target) {
        return;
      }
      //element changed reset the hovered
      this.hoveredDomElement = null;

      //check that the target is not the svg root
      if (e.target === this.$refs.canvas.children[0]) {
        return;
      }

      this.hoveredDomElement = e.target;

      let bounds = e.target.getBBox();

      this.hoverSelectionBounds.top = bounds.y;
      this.hoverSelectionBounds.left = bounds.x;
      this.hoverSelectionBounds.width = bounds.width;
      this.hoverSelectionBounds.height = bounds.height;
      this.hoverSelectionBounds.transform = e.target.getScreenCTM();
    },
    addingSvgEvents() {
      this.parseNode(this.$refs.canvas.children[0]);
      this.x = this.$refs.canvas.children[0].clientWidth;
      this.y = this.$refs.canvas.children[0].clientHeight;
      this.$refs.canvas.children[0].style.width = "100%";
      this.$refs.canvas.children[0].style.height = "auto";
      this.$refs.canvas.children[0].style.pointerEvents = " bounding-box";
      this.$refs.canvas.children[0].addEventListener(
        "click",
        this.onSvgClick.bind(this)
      );
      this.$refs.canvas.children[0].addEventListener(
        "mousemove",
        this.onSvgMouseMove.bind(this)
      );
      this.$refs.canvas.children[0].addEventListener(
        "mouseenter",
        this.onSvgMouseEnter.bind(this)
      );
      this.$refs.canvas.children[0].addEventListener(
        "mouseleave",
        this.onSvgMouseLeave.bind(this)
      );
    },
    removingSvgEvents() {
      this.$refs.canvas.children[0].removeEventListener(
        "click",
        this.onSvgClick.bind(this)
      );
      this.$refs.canvas.children[0].removeEventListener(
        "mousemove",
        this.onSvgMouseMove.bind(this)
      );
      this.$refs.canvas.children[0].removeEventListener(
        "mouseenter",
        this.onSvgMouseEnter.bind(this)
      );
      this.$refs.canvas.children[0].removeEventListener(
        "mouseleave",
        this.onSvgMouseLeave.bind(this)
      );
    },
    parseNode(node) {
      let width = node.getAttributeNS(null, "width");
      let height = node.getAttributeNS(null, "height");

      if (
        parseFloat(width) >=
          parseFloat(
            this.$refs.canvas.children[0].getAttributeNS(null, "width")
          ) &&
        parseFloat(height) >=
          parseFloat(
            this.$refs.canvas.children[0].getAttributeNS(null, "height")
          )
      ) {
        node.style.pointerEvents = "none"; //disable events for layers that are bigger than the frame
      }

      for (let child of node.children) {
        this.parseNode(child);
      }
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
    document.removeEventListener("click", this.onSvgClickOut);
    this.removingSvgEvents();
  },
  beforeUpdate() {
    this.$refs.canvas.children[0].removeEventListener(
      "click",
      this.onSvgClick.bind(this)
    );
  },
  updated() {
    this.addingSvgEvents();
  },
  mounted() {
    window.addEventListener("resize", this.onResize);
    document.addEventListener("click", this.onSvgClickOut);

    this.addingSvgEvents();
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
}
</style>
