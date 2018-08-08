<template>
    <div ref="panel" class="panel" @mousedown="deselectAllNodes">
        <div @mousedown.stop ref="canvas" class="canvas" ></div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { getNodeFromEvent } from "@/editor/tree-actions";
import Importer from "@/importer/Importer";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["zoomLevel", "currentSlide"])
  },
  watch: {
    zoomLevel() {},
    currentSlide() {}
  },
  methods: {
    ...mapActions([
      "setFrames",
      "setSelectedFrame",
      "selectNodes",
      "deselectAllNodes",
      "setNodesTree"
    ]),
    hover(e) {
      const node = getNodeFromEvent(e, this.$refs.canvas);
      //@todo store node as hightlighted layer

      if (node) {
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
      }
    },
    setDimensions() {
      const slideBounds = this.currentSlide.absoluteBoundingBox;
      const panelDimensions = this.$el.getBoundingClientRect();

      this.$refs.canvas.style.transform = `scale(${panelDimensions.width /
        slideBounds.width})`;
    },
    addListeners() {
      this.$refs.canvas.addEventListener("mousedown", this.onClick);
      this.$refs.canvas.addEventListener("mousemove", this.onMouseMove);
      this.$refs.canvas.addEventListener("dblclick", this.onDoubleClick);
      document.addEventListener("keydown", this.onKeyDown);
      document.addEventListener("keyup", this.onKeyUp);
    },
    removeListeners() {
      this.$refs.canvas.removeEventListener("mousedown", this.onClick);
      this.$refs.canvas.removeEventListener("mousemove", this.onMouseMove);
      this.$refs.canvas.removeEventListener("dblclick", this.onDoubleClick);
      document.removeEventListener("keydown", this.onKeyDown);
      document.removeEventListener("keyup", this.onKeyUp);
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
              id: "3:2",
              name: "big",
              type: "GROUP",
              blendMode: "PASS_THROUGH",
              children: [
                {
                  id: "1:6",
                  name: "rightBigRec",
                  type: "RECTANGLE",
                  blendMode: "PASS_THROUGH",
                  absoluteBoundingBox: {
                    x: 1986.239501953125,
                    y: 7708.89794921875,
                    width: 215.859130859375,
                    height: 310.85205078125
                  },
                  constraints: {
                    vertical: "TOP",
                    horizontal: "LEFT"
                  },
                  relativeTransform: [
                    [1, 0, 544.4853515625],
                    [0, 1, 146.02880859375]
                  ],
                  size: {
                    x: 215.859130859375,
                    y: 310.85205078125
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
                      path:
                        "M 0 0 L 215.859130859375 0 L 215.859130859375 310.85205078125 L 0 310.85205078125 L 0 0 Z",
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
                  id: "1:7",
                  name: "leftBigRec",
                  type: "RECTANGLE",
                  blendMode: "PASS_THROUGH",
                  absoluteBoundingBox: {
                    x: 1441.754150390625,
                    y: 7562.869140625,
                    width: 215.859130859375,
                    height: 310.85205078125
                  },
                  constraints: {
                    vertical: "TOP",
                    horizontal: "LEFT"
                  },
                  relativeTransform: [
                    [1, 3.3306690738754696e-16, 0],
                    [-3.3306690738754696e-16, 1, 7.189553314669583e-14]
                  ],
                  size: {
                    x: 215.859130859375,
                    y: 310.85205078125
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
                      path:
                        "M 0 0 L 215.859130859375 0 L 215.859130859375 310.85205078125 L 0 310.85205078125 L 0 0 Z",
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
                x: 1441.754150390625,
                y: 7562.869140625,
                width: 760.344482421875,
                height: 456.880859375
              },
              constraints: {
                vertical: "TOP",
                horizontal: "LEFT"
              },
              relativeTransform: [
                [1, 0, 230.754150390625],
                [0, 1, 189.869140625]
              ],
              size: {
                x: 760.344482421875,
                y: 456.880859375
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
            },
            {
              id: "3:4",
              name: "alone",
              type: "GROUP",
              blendMode: "PASS_THROUGH",
              children: [
                {
                  id: "26:0",
                  name: "subAlone",
                  type: "GROUP",
                  blendMode: "PASS_THROUGH",
                  children: [
                    {
                      id: "3:3",
                      name: "aloneRec",
                      type: "RECTANGLE",
                      blendMode: "PASS_THROUGH",
                      absoluteBoundingBox: {
                        x: 2847.53515625,
                        y: 7888.2255859375,
                        width: 215.859130859375,
                        height: 173.30563354492188
                      },
                      constraints: {
                        vertical: "TOP",
                        horizontal: "LEFT"
                      },
                      relativeTransform: [[1, 0, 0], [0, 1, 0]],
                      size: {
                        x: 215.859130859375,
                        y: 173.30563354492188
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
                          path:
                            "M 0 0 L 215.859130859375 0 L 215.859130859375 173.30563354492188 L 0 173.30563354492188 L 0 0 Z",
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
                    x: 2847.53515625,
                    y: 7888.2255859375,
                    width: 215.859130859375,
                    height: 173.30563354492188
                  },
                  constraints: {
                    vertical: "TOP",
                    horizontal: "LEFT"
                  },
                  relativeTransform: [[1, 0, 0], [0, 1, 0]],
                  size: {
                    x: 215.859130859375,
                    y: 173.30563354492188
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
                x: 2847.53515625,
                y: 7888.2255859375,
                width: 215.859130859375,
                height: 173.30563354492188
              },
              constraints: {
                vertical: "TOP",
                horizontal: "LEFT"
              },
              relativeTransform: [
                [1, 0, 1636.53515625],
                [0, 1, 515.2255859375]
              ],
              size: {
                x: 215.859130859375,
                y: 173.30563354492188
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
            },
            {
              id: "3:5",
              name: "small",
              type: "GROUP",
              blendMode: "PASS_THROUGH",
              children: [
                {
                  id: "3:6",
                  name: "leftRec",
                  type: "RECTANGLE",
                  blendMode: "PASS_THROUGH",
                  absoluteBoundingBox: {
                    x: 2411.7467041015625,
                    y: 8117.888427734375,
                    width: 130.30995178222656,
                    height: 104.6212387084961
                  },
                  constraints: {
                    vertical: "TOP",
                    horizontal: "LEFT"
                  },
                  relativeTransform: [[1, 0, 0], [0, 1, 0]],
                  size: {
                    x: 130.30995178222656,
                    y: 104.6212387084961
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
                      path:
                        "M 0 0 L 130.30995178222656 0 L 130.30995178222656 104.6212387084961 L 0 104.6212387084961 L 0 0 Z",
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
                  id: "3:7",
                  name: "rightContainer",
                  type: "GROUP",
                  blendMode: "PASS_THROUGH",
                  children: [
                    {
                      id: "3:8",
                      name: "rightRec",
                      type: "RECTANGLE",
                      blendMode: "PASS_THROUGH",
                      absoluteBoundingBox: {
                        x: 2670.0601806640625,
                        y: 8243.521423339844,
                        width: 130.30995178222656,
                        height: 104.6212387084961
                      },
                      constraints: {
                        vertical: "TOP",
                        horizontal: "LEFT"
                      },
                      relativeTransform: [[1, 0, 0], [0, 1, 0]],
                      size: {
                        x: 130.30995178222656,
                        y: 104.6212387084961
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
                          path:
                            "M 0 0 L 130.30995178222656 0 L 130.30995178222656 104.6212387084961 L 0 104.6212387084961 L 0 0 Z",
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
                    x: 2670.0601806640625,
                    y: 8243.521423339844,
                    width: 130.30995178222656,
                    height: 104.6212387084961
                  },
                  constraints: {
                    vertical: "TOP",
                    horizontal: "LEFT"
                  },
                  relativeTransform: [
                    [1, 0, 258.3134765625],
                    [0, 1, 125.63299560546875]
                  ],
                  size: {
                    x: 130.30995178222656,
                    y: 104.6212387084961
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
                x: 2411.7467041015625,
                y: 8117.888427734375,
                width: 388.6234130859375,
                height: 230.25424194335938
              },
              constraints: {
                vertical: "TOP",
                horizontal: "LEFT"
              },
              relativeTransform: [
                [1, 0, 1200.7467041015625],
                [0, 1, 744.888427734375]
              ],
              size: {
                x: 388.6234130859375,
                y: 230.25424194335938
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
            },
            {
              id: "39:2",
              name: "rightBigRec",
              type: "RECTANGLE",
              blendMode: "PASS_THROUGH",
              absoluteBoundingBox: {
                x: 1540.999994635582,
                y: 8027,
                width: 268.70057225227356,
                height: 268.70057225227356
              },
              constraints: {
                vertical: "TOP",
                horizontal: "LEFT"
              },
              relativeTransform: [
                [0.7071067690849304, -0.7071067690849304, 464.35028076171875],
                [0.7071067690849304, 0.7071067690849304, 654]
              ],
              size: {
                x: 190,
                y: 190
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
                  path:
                    "M 0 22.999998092651367 C 0 10.297449111938477 10.29745101928711 0 23 0 L 167 0 C 179.70254516601562 0 190 10.29745101928711 190 23 L 190 167 C 190 179.70254516601562 179.70254516601562 190 167 190 L 22.999998092651367 190 C 10.297449111938477 190 0 179.70254516601562 0 167 L 0 22.999998092651367 Z",
                  windingRule: "NONZERO"
                }
              ],
              strokes: [],
              strokeWeight: 1,
              strokeAlign: "INSIDE",
              strokeGeometry: [],
              exportSettings: [],
              effects: [],
              cornerRadius: 23,
              rectangleCornerRadii: [23, 23, 23, 23]
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
    this.$refs.canvas.appendChild(this.currentSlide.draw({}));

    this.setDimensions();
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
.canvas {
}
</style>
