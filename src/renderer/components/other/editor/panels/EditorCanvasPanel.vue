<template>
    <div ref="panel" class="panel" @mousedown="deselectAllNodes">
        <div @mousedown.stop ref="canvas" class="canvas" ></div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { getNodeFromEvent } from "@/editor/tree-actions";
import Importer from "@/importer/Importer";
import Mouse from "@/js/mouse";

export default {
  data() {
    return {};
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
      "setNodesTreeHtmlRefs"
    ]),
    hover(e) {
      const node = getNodeFromEvent(e, this.$refs.canvas);

      if (node) {
        this.setHighlightedLayer(node.id);
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
      const node = getNodeFromEvent(e, this.$refs.canvas);
      if (node) {
        this.selectNodes([node.id]);
      } else {
        this.deselectAllNodes();
      }
    },
    onMouseMove(e) {
      this.hover(e);
    },
    onDoubleClick(e) {
      const node = getNodeFromEvent(e, this.$refs.canvas);
      if (node) {
        this.selectNodes([node.id]);

        this.setHighlightedLayer(node.id);
      }
    },
    setDimensions() {
      const slideBounds = this.currentSlide.absoluteBoundingBox;
      const panelDimensions = this.$el.getBoundingClientRect();

      this.$refs.canvas.style.transform = `scale(${panelDimensions.width /
        slideBounds.width})`;
    },
    onResize() {
      this.setDimensions();
      this.setCanvasBounds(this.$refs.canvas.getBoundingClientRect());
    },
    addListeners() {
      this.$refs.canvas.addEventListener("mousedown", this.onMouseDown);
      this.$refs.canvas.addEventListener("mousemove", this.onMouseMove);
      document.addEventListener("keydown", this.onKeyDown);
      document.addEventListener("keyup", this.onKeyUp);
      window.addEventListener("resize", this.onResize);
      Mouse.start();
    },
    removeListeners() {
      this.$refs.canvas.removeEventListener("mousedown", this.onMouseDown);
      this.$refs.canvas.removeEventListener("mousemove", this.onMouseMove);
      document.removeEventListener("keydown", this.onKeyDown);
      document.removeEventListener("keyup", this.onKeyUp);
      window.removeEventListener("resize", this.onResize);
      Mouse.stop();
    },
    drawCanvas() {
      let { frame, htmlTree } = Importer.drawRootFrame(this.currentSlide);

      this.setNodesTreeHtmlRefs(htmlTree);

      if (this.$refs.canvas.childNodes.length > 0) {
        this.$refs.canvas.removeChild(this.$refs.canvas.childNodes[0]);
      }

      this.$refs.canvas.appendChild(frame);
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
          name: "slide",
          type: "FRAME",
          blendMode: "PASS_THROUGH",
          children: [
            {
              id: "1:15",
              name: "Rectangle",
              type: "RECTANGLE",
              blendMode: "PASS_THROUGH",
              absoluteBoundingBox: {
                x: 1922.098450422287,
                y: 7664.098419189453,
                width: 497.803165435791,
                height: 497.803165435791
              },
              constraints: {
                vertical: "TOP",
                horizontal: "LEFT"
              },
              relativeTransform: [
                [0.7071067690849304, -0.7071067690849304, 934.544189453125],
                [0.7071067690849304, 0.7071067690849304, 291.0984191894531]
              ],
              size: {
                x: 388,
                y: 316
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
                  path: "M 0 0 L 388 0 L 388 316 L 0 316 L 0 0 Z",
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
              id: "1:16",
              name: "Ellipse",
              type: "ELLIPSE",
              blendMode: "PASS_THROUGH",
              absoluteBoundingBox: {
                x: 1388,
                y: 7546,
                width: 302,
                height: 302
              },
              constraints: {
                vertical: "TOP",
                horizontal: "LEFT"
              },
              relativeTransform: [[1, 0, 177], [0, 1, 173]],
              size: {
                x: 302,
                y: 302
              },
              fills: [
                {
                  type: "SOLID",
                  blendMode: "NORMAL",
                  color: {
                    r: 1,
                    g: 0.611764705882353,
                    b: 0.611764705882353,
                    a: 1
                  }
                }
              ],
              fillGeometry: [
                {
                  path:
                    "M 302 151 C 302 234.39500427246094 234.39500427246094 302 151 302 C 67.6050033569336 302 0 234.39500427246094 0 151 C 0 67.6050033569336 67.6050033569336 0 151 0 C 234.39500427246094 0 302 67.6050033569336 302 151 Z",
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
            x: 1211,
            y: 7373,
            width: 1920,
            height: 1080
          },
          constraints: {
            vertical: "TOP",
            horizontal: "LEFT"
          },
          relativeTransform: [[1, 0, 1211], [0, 1, 7373]],
          size: {
            x: 1920,
            y: 1080
          },
          backgroundColor: {
            r: 1,
            g: 1,
            b: 1,
            a: 1
          },
          clipsContent: true,
          exportSettings: [
            {
              suffix: "",
              format: "SVG",
              constraint: {
                type: "SCALE",
                value: 1
              }
            }
          ],
          effects: []
        },
        {
          id: "1:14",
          name: "slide",
          type: "FRAME",
          blendMode: "PASS_THROUGH",
          children: [
            {
              id: "1:17",
              name: "Ellipse",
              type: "ELLIPSE",
              blendMode: "PASS_THROUGH",
              absoluteBoundingBox: {
                x: 3980,
                y: 7762,
                width: 302,
                height: 302
              },
              constraints: {
                vertical: "TOP",
                horizontal: "LEFT"
              },
              relativeTransform: [[1, 0, 809], [0, 1, 389]],
              size: {
                x: 302,
                y: 302
              },
              fills: [
                {
                  type: "SOLID",
                  blendMode: "NORMAL",
                  color: {
                    r: 1,
                    g: 0.611764705882353,
                    b: 0.611764705882353,
                    a: 1
                  }
                }
              ],
              fillGeometry: [
                {
                  path:
                    "M 302 151 C 302 234.39500427246094 234.39500427246094 302 151 302 C 67.6050033569336 302 0 234.39500427246094 0 151 C 0 67.6050033569336 67.6050033569336 0 151 0 C 234.39500427246094 0 302 67.6050033569336 302 151 Z",
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
              id: "1:18",
              name: "Rectangle",
              type: "RECTANGLE",
              blendMode: "PASS_THROUGH",
              absoluteBoundingBox: {
                x: 3289.9999961853027,
                y: 7664.098694562912,
                width: 497.803165435791,
                height: 497.803165435791
              },
              constraints: {
                vertical: "TOP",
                horizontal: "LEFT"
              },
              relativeTransform: [
                [-0.7071067690849304, -0.7071067690849304, 616.8031616210938],
                [0.7071067690849304, -0.7071067690849304, 514.54443359375]
              ],
              size: {
                x: 388,
                y: 316
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
                  path: "M 0 0 L 388 0 L 388 316 L 0 316 L 0 0 Z",
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
            x: 3171,
            y: 7373,
            width: 1920,
            height: 1080
          },
          constraints: {
            vertical: "TOP",
            horizontal: "LEFT"
          },
          relativeTransform: [[1, 0, 3171], [0, 1, 7373]],
          size: {
            x: 1920,
            y: 1080
          },
          backgroundColor: {
            r: 1,
            g: 1,
            b: 1,
            a: 1
          },
          clipsContent: true,
          exportSettings: [
            {
              suffix: "",
              format: "SVG",
              constraint: {
                type: "SCALE",
                value: 1
              }
            }
          ],
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

    this.onResize();
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
