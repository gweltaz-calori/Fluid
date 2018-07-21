<template>
    <div ref="panel" class="panel">
        <div :style="{'transform':`scale(${this.zoomLevel / 100})`}" ref="canvas" class="canvas" v-html="currentSlide.svg"></div>
        <editor-layer-selection-outline 
        
        :transform="selectionBounds.transform"
        :top="selectionBounds.top" 
        :left="selectionBounds.left" 
        :height="selectionBounds.height"
        :width="selectionBounds.width">
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
      selectionBounds: {
        top: 0,
        left: 0,
        width: 0,
        height: 0,
        transform: {}
      },
      hoveredDomElement: null
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
      //console.log(e.target);
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
      if (this.hoveredDomElement === e.target) return;

      this.hoveredDomElement = e.target;

      let bounds = e.target.getBoundingClientRect();

      this.selectionBounds.top = bounds.top;
      this.selectionBounds.left = bounds.left;
      this.selectionBounds.width = bounds.width;
      this.selectionBounds.height = bounds.height;
      this.selectionBounds.transform = e.target.getCTM();
    },
    addingSvgEvents() {
      this.x = this.$refs.canvas.children[0].clientWidth;
      this.y = this.$refs.canvas.children[0].clientHeight;
      this.$refs.canvas.children[0].style.width = "100%";
      this.$refs.canvas.children[0].style.height = "auto";
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
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
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
