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
    return {
      canvasMargin: 20
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
              id: "1:4",
              name: "Rectangle",
              type: "RECTANGLE",
              blendMode: "PASS_THROUGH",
              absoluteBoundingBox: {
                x: -137.99999725818634,
                y: -420,
                width: 506.2884466648102,
                height: 506.2884466648102
              },
              constraints: {
                vertical: "TOP",
                horizontal: "LEFT"
              },
              relativeTransform: [
                [0.7071067690849304, -0.7071067690849304, 791.1442260742188],
                [0.7071067690849304, 0.7071067690849304, 405]
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
          id: "1:3",
          name: "Frame",
          type: "FRAME",
          blendMode: "PASS_THROUGH",
          children: [
            {
              id: "1:6",
              name: "Frame",
              type: "FRAME",
              blendMode: "PASS_THROUGH",
              children: [
                {
                  id: "1:5",
                  name: "Rectangle",
                  type: "RECTANGLE",
                  blendMode: "PASS_THROUGH",
                  absoluteBoundingBox: {
                    x: 2802.0000203847885,
                    y: -816.3743286132812,
                    width: 489.0370783209801,
                    height: 489.0370783209801
                  },
                  constraints: {
                    vertical: "TOP",
                    horizontal: "LEFT"
                  },
                  relativeTransform: [
                    [0.4999999701976776, -0.8660253882408142, 709.037109375],
                    [0.8660253882408142, 0.4999999701976776, 8.62567138671875]
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
