<template>
    <div ref="panel" class="panel" >
        <div ref="canvas" class="canvas" ></div>
        <fluid-canvas-selection-marquee :is-dragging="isDragging" :position="position" :origin="origin"></fluid-canvas-selection-marquee>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { getNodeFromEvent } from "@/editor/tree-actions";
import Importer from "@/importer/Importer";
import Mouse from "@/js/mouse";
import FluidCanvasSelectionMarquee from "@/components/other/editor/layers/FluidCanvasSelectionMarquee.vue";

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
    ...mapGetters(["zoomLevel", "currentSlide", "highlightedLayer"])
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
      "deselectAllNodes",
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
        this.deselectAllNodes();
        const isLeftClick = e.which === 3;
        if (this.isDragging || isLeftClick) return;
        this.isDragging = true;
        const { x, y } = e;

        this.origin.x = x;
        this.origin.y = y;
      }
    },
    onMouseMove(e) {
      this.hover(e);
    },
    onDoubleClick(e) {
      const nodes = getNodeFromEvent(e, this.$refs.canvas);
      if (nodes.length > 0) {
        this.selectNodes(nodes.map(node => node.id));

        this.setHighlightedLayer(nodes.map(node => node.id)[0]);
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

      const nodes = getNodeFromEvent(
        e,
        this.$refs.canvas,
        {
          x: this.origin.x,
          y: this.origin.y,
          width: this.position.x - this.origin.x,
          height: this.position.y - this.origin.y
        },
        {
          x: this.position.x,
          y: this.position.y
        }
      );

      if (nodes.length > 0) {
        this.selectNodes(nodes.map(node => node.id));
      } else {
        this.deselectAllNodes();
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
      this.$refs.canvas.addEventListener("mousemove", this.onMouseMove);
      window.addEventListener("keydown", this.onKeyDown);
      window.addEventListener("keyup", this.onKeyUp);
      window.addEventListener("resize", this.onResize);

      window.addEventListener("mouseup", this.onDropWindow);
      window.addEventListener("mousemove", this.onMoveWindow);
      Mouse.start();
    },
    removeListeners() {
      this.$el.removeEventListener("mousedown", this.onMouseDown);
      this.$refs.canvas.removeEventListener("mousemove", this.onMouseMove);
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
    let { page, tree } = Importer.loadPage({
      id: "0:1",
      name: "Page 1",
      type: "CANVAS",
      children: [
        {
          id: "1:2",
          name: "Frame",
          type: "FRAME",
          blendMode: "PASS_THROUGH",
          children: [
            {
              id: "1:3",
              name: "Rectangle",
              type: "RECTANGLE",
              blendMode: "PASS_THROUGH",
              absoluteBoundingBox: {
                x: -63.85577392578127,
                y: -345.85577392578125,
                width: 358,
                height: 358
              },
              constraints: {
                vertical: "TOP",
                horizontal: "LEFT"
              },
              relativeTransform: [
                [1, -5.551115123125783e-17, 612.1442260742188],
                [5.551115123125783e-17, 1, 479.14422607421875]
              ],
              size: {
                x: 358,
                y: 358
              },
              fills: [
                {
                  type: "SOLID",
                  blendMode: "NORMAL",
                  color: {
                    r: 0.7686274509803922,
                    g: 0.7686274509803922,
                    b: 0.7686274509803922,
                    a: 1
                  }
                }
              ],
              fillGeometry: [
                {
                  path: "M 0 0 L 358 0 L 358 358 L 0 358 L 0 0 Z",
                  windingRule: "NONZERO"
                }
              ],
              strokes: [],
              strokeWeight: 1,
              strokeAlign: "INSIDE",
              strokeGeometry: [],
              exportSettings: [],
              effects: []
            },
            {
              id: "5:2",
              name: "Rectangle",
              type: "RECTANGLE",
              blendMode: "PASS_THROUGH",
              absoluteBoundingBox: {
                x: 690,
                y: -34,
                width: 358,
                height: 358
              },
              constraints: {
                vertical: "TOP",
                horizontal: "LEFT"
              },
              relativeTransform: [
                [1, -5.551115123125783e-17, 1366],
                [5.551115123125783e-17, 1, 791]
              ],
              size: {
                x: 358,
                y: 358
              },
              fills: [
                {
                  type: "SOLID",
                  blendMode: "NORMAL",
                  color: {
                    r: 1,
                    g: 0.42745098039215684,
                    b: 0.42745098039215684,
                    a: 1
                  }
                }
              ],
              fillGeometry: [
                {
                  path: "M 0 0 L 358 0 L 358 358 L 0 358 L 0 0 Z",
                  windingRule: "NONZERO"
                }
              ],
              strokes: [],
              strokeWeight: 1,
              strokeAlign: "INSIDE",
              strokeGeometry: [],
              exportSettings: [],
              effects: []
            },
            {
              id: "5:5",
              name: "Group",
              type: "GROUP",
              blendMode: "PASS_THROUGH",
              children: [
                {
                  id: "5:3",
                  name: "Rectangle",
                  type: "RECTANGLE",
                  blendMode: "PASS_THROUGH",
                  absoluteBoundingBox: {
                    x: 672,
                    y: -692,
                    width: 102,
                    height: 102
                  },
                  constraints: {
                    vertical: "TOP",
                    horizontal: "LEFT"
                  },
                  relativeTransform: [
                    [1, -5.551115123125783e-17, 0],
                    [5.551115123125783e-17, 1, 0]
                  ],
                  size: {
                    x: 102,
                    y: 102
                  },
                  fills: [
                    {
                      type: "SOLID",
                      blendMode: "NORMAL",
                      color: {
                        r: 0.7686274509803922,
                        g: 0.7686274509803922,
                        b: 0.7686274509803922,
                        a: 1
                      }
                    }
                  ],
                  fillGeometry: [
                    {
                      path: "M 0 0 L 102 0 L 102 102 L 0 102 L 0 0 Z",
                      windingRule: "NONZERO"
                    }
                  ],
                  strokes: [],
                  strokeWeight: 1,
                  strokeAlign: "INSIDE",
                  strokeGeometry: [],
                  exportSettings: [],
                  effects: []
                },
                {
                  id: "5:4",
                  name: "Rectangle",
                  type: "RECTANGLE",
                  blendMode: "PASS_THROUGH",
                  absoluteBoundingBox: {
                    x: 1015,
                    y: -623,
                    width: 66,
                    height: 66
                  },
                  constraints: {
                    vertical: "TOP",
                    horizontal: "LEFT"
                  },
                  relativeTransform: [
                    [1, 5.551115123125783e-17, 343],
                    [5.551115123125783e-17, -1, 135]
                  ],
                  size: {
                    x: 66,
                    y: 66
                  },
                  fills: [
                    {
                      type: "SOLID",
                      blendMode: "NORMAL",
                      color: {
                        r: 1,
                        g: 0.42745098039215684,
                        b: 0.42745098039215684,
                        a: 1
                      }
                    }
                  ],
                  fillGeometry: [
                    {
                      path: "M 0 0 L 66 0 L 66 66 L 0 66 L 0 0 Z",
                      windingRule: "NONZERO"
                    }
                  ],
                  strokes: [],
                  strokeWeight: 1,
                  strokeAlign: "INSIDE",
                  strokeGeometry: [],
                  exportSettings: [],
                  effects: []
                }
              ],
              absoluteBoundingBox: {
                x: 672,
                y: -692,
                width: 409,
                height: 135
              },
              constraints: {
                vertical: "TOP",
                horizontal: "LEFT"
              },
              relativeTransform: [[1, 0, 1348], [0, 1, 133]],
              size: {
                x: 409,
                y: 135
              },
              backgroundColor: {
                r: 0,
                g: 0,
                b: 0,
                a: 0
              },
              clipsContent: false,
              exportSettings: [],
              effects: []
            }
          ],
          absoluteBoundingBox: {
            x: -676,
            y: -825,
            width: 2014,
            height: 1363
          },
          constraints: {
            vertical: "TOP",
            horizontal: "LEFT"
          },
          relativeTransform: [[1, 0, -676], [0, 1, -825]],
          size: {
            x: 2014,
            y: 1363
          },
          backgroundColor: {
            r: 1,
            g: 1,
            b: 1,
            a: 1
          },
          clipsContent: true,
          exportSettings: [],
          effects: []
        },
        {
          id: "1:4",
          name: "Frame",
          type: "FRAME",
          blendMode: "PASS_THROUGH",
          children: [
            {
              id: "1:5",
              name: "Frame",
              type: "FRAME",
              blendMode: "PASS_THROUGH",
              children: [
                {
                  id: "1:6",
                  name: "Rectangle",
                  type: "RECTANGLE",
                  blendMode: "PASS_THROUGH",
                  absoluteBoundingBox: {
                    x: 2867.5185546875,
                    y: -750.8557815551758,
                    width: 358,
                    height: 358
                  },
                  constraints: {
                    vertical: "TOP",
                    horizontal: "LEFT"
                  },
                  relativeTransform: [
                    [1, -5.551115123125783e-17, 464.5185546875],
                    [5.551115123125783e-17, 1, 74.14421844482422]
                  ],
                  size: {
                    x: 358,
                    y: 358
                  },
                  fills: [
                    {
                      type: "SOLID",
                      blendMode: "NORMAL",
                      color: {
                        r: 0.7686274509803922,
                        g: 0.7686274509803922,
                        b: 0.7686274509803922,
                        a: 1
                      }
                    }
                  ],
                  fillGeometry: [
                    {
                      path: "M 0 0 L 358 0 L 358 358 L 0 358 L 0 0 Z",
                      windingRule: "NONZERO"
                    }
                  ],
                  strokes: [],
                  strokeWeight: 1,
                  strokeAlign: "INSIDE",
                  strokeGeometry: [],
                  exportSettings: [],
                  effects: []
                }
              ],
              absoluteBoundingBox: {
                x: 2403,
                y: -825,
                width: 989,
                height: 506
              },
              constraints: {
                vertical: "TOP",
                horizontal: "LEFT"
              },
              relativeTransform: [[1, 0, 1025], [0, 1, 0]],
              size: {
                x: 989,
                y: 506
              },
              backgroundColor: {
                r: 0,
                g: 0,
                b: 0,
                a: 0
              },
              clipsContent: true,
              exportSettings: [],
              effects: []
            }
          ],
          absoluteBoundingBox: {
            x: 1378,
            y: -825,
            width: 2014,
            height: 1363
          },
          constraints: {
            vertical: "TOP",
            horizontal: "LEFT"
          },
          relativeTransform: [[1, 0, 1378], [0, 1, -825]],
          size: {
            x: 2014,
            y: 1363
          },
          backgroundColor: {
            r: 1,
            g: 1,
            b: 1,
            a: 1
          },
          clipsContent: true,
          exportSettings: [],
          effects: []
        }
      ],
      backgroundColor: {
        r: 0.8980392156862745,
        g: 0.8980392156862745,
        b: 0.8980392156862745,
        a: 1
      }
    });
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
