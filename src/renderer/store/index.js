import Vue from "vue";
import Vuex from "vuex";
import { ipcRenderer } from "electron";

const state = {
  editor: {
    settings: {
      zoomLevel: 100,
      availableZoomLevels: [50, 75, 100]
    },
    frames: [
      {
        id: "1:2",
        name: "Desktop HD",
        type: "FRAME",
        blendMode: "PASS_THROUGH",
        children: [
          {
            id: "1:3",
            name: "Rectangle",
            type: "RECTANGLE",
            blendMode: "PASS_THROUGH",
            absoluteBoundingBox: {
              x: 3182,
              y: -514,
              width: 1921,
              height: 1081
            },
            constraints: { vertical: "TOP", horizontal: "LEFT" },
            fills: [
              {
                type: "GRADIENT_LINEAR",
                blendMode: "NORMAL",
                gradientHandlePositions: [
                  { x: 1.237402354017229, y: -0.09748885613731817 },
                  { x: -2.2544037525662475e-8, y: 0.6957164568150738 },
                  { x: 0.8407996975410331, y: -2.777432232456 }
                ],
                gradientStops: [
                  {
                    color: {
                      r: 0.4823529411764706,
                      g: 0.4196078431372549,
                      b: 1,
                      a: 1
                    },
                    position: 0
                  },
                  {
                    color: {
                      r: 0.24313725490196078,
                      g: 0.45098039215686275,
                      b: 0.984313725490196,
                      a: 1
                    },
                    position: 1
                  }
                ]
              }
            ],
            strokes: [],
            strokeWeight: 1,
            strokeAlign: "INSIDE",
            exportSettings: [],
            effects: []
          },
          {
            id: "1:5",
            name: "Group 5",
            type: "GROUP",
            blendMode: "PASS_THROUGH",
            children: [
              {
                id: "1:37",
                name: "fusee",
                type: "GROUP",
                blendMode: "PASS_THROUGH",
                children: [
                  {
                    id: "1:38",
                    name: "Derniere version IT3 (Amandine)",
                    type: "GROUP",
                    blendMode: "PASS_THROUGH",
                    children: [
                      {
                        id: "1:39",
                        name: "rocket section",
                        type: "GROUP",
                        blendMode: "PASS_THROUGH",
                        children: [
                          {
                            id: "1:40",
                            name: "rocket illustrationcomplete",
                            type: "GROUP",
                            blendMode: "PASS_THROUGH",
                            children: [
                              {
                                id: "1:41",
                                name: "rocket illustration",
                                type: "GROUP",
                                blendMode: "PASS_THROUGH",
                                children: [
                                  {
                                    id: "1:42",
                                    name: "Group 10",
                                    type: "GROUP",
                                    blendMode: "PASS_THROUGH",
                                    children: [
                                      {
                                        id: "1:43",
                                        name: "Fill 1",
                                        type: "VECTOR",
                                        blendMode: "PASS_THROUGH",
                                        absoluteBoundingBox: {
                                          x: 4193.149383544922,
                                          y: -72.36532592773438,
                                          width: 162.8505096435547,
                                          height: 261.8922424316406
                                        },
                                        constraints: {
                                          vertical: "TOP",
                                          horizontal: "LEFT"
                                        },
                                        fills: [
                                          {
                                            type: "SOLID",
                                            blendMode: "NORMAL",
                                            color: {
                                              r: 0.8745098039215686,
                                              g: 0.9058823529411765,
                                              b: 0.9254901960784314,
                                              a: 1
                                            }
                                          }
                                        ],
                                        strokes: [],
                                        strokeWeight: 1,
                                        strokeAlign: "INSIDE",
                                        exportSettings: [],
                                        effects: []
                                      },
                                      {
                                        id: "1:44",
                                        name: "Fill 3",
                                        type: "VECTOR",
                                        blendMode: "PASS_THROUGH",
                                        absoluteBoundingBox: {
                                          x: 3894,
                                          y: -72.36532592773438,
                                          width: 162.8505096435547,
                                          height: 261.8922424316406
                                        },
                                        constraints: {
                                          vertical: "TOP",
                                          horizontal: "LEFT"
                                        },
                                        fills: [
                                          {
                                            type: "SOLID",
                                            blendMode: "NORMAL",
                                            color: {
                                              r: 0.8745098039215686,
                                              g: 0.9058823529411765,
                                              b: 0.9254901960784314,
                                              a: 1
                                            }
                                          }
                                        ],
                                        strokes: [],
                                        strokeWeight: 1,
                                        strokeAlign: "INSIDE",
                                        exportSettings: [],
                                        effects: []
                                      },
                                      {
                                        id: "1:45",
                                        name: "Fill 47",
                                        type: "VECTOR",
                                        blendMode: "PASS_THROUGH",
                                        absoluteBoundingBox: {
                                          x: 4035.609146118164,
                                          y: -426,
                                          width: 175.24130249023438,
                                          height: 629.6832885742188
                                        },
                                        constraints: {
                                          vertical: "TOP",
                                          horizontal: "LEFT"
                                        },
                                        fills: [
                                          {
                                            type: "SOLID",
                                            blendMode: "NORMAL",
                                            color: {
                                              r: 0.9254901960784314,
                                              g: 0.9529411764705882,
                                              b: 0.9686274509803922,
                                              a: 1
                                            }
                                          }
                                        ],
                                        strokes: [],
                                        strokeWeight: 1,
                                        strokeAlign: "INSIDE",
                                        exportSettings: [],
                                        effects: []
                                      },
                                      {
                                        id: "1:46",
                                        name: "Fill 49",
                                        type: "VECTOR",
                                        blendMode: "PASS_THROUGH",
                                        absoluteBoundingBox: {
                                          x: 4035.609146118164,
                                          y: -426,
                                          width: 88.50570678710938,
                                          height: 629.6832885742188
                                        },
                                        constraints: {
                                          vertical: "TOP",
                                          horizontal: "LEFT"
                                        },
                                        fills: [
                                          {
                                            type: "SOLID",
                                            blendMode: "NORMAL",
                                            color: {
                                              r: 0.8588235294117647,
                                              g: 0.9215686274509803,
                                              b: 0.9529411764705882,
                                              a: 1
                                            }
                                          }
                                        ],
                                        strokes: [],
                                        strokeWeight: 1,
                                        strokeAlign: "INSIDE",
                                        exportSettings: [],
                                        effects: []
                                      },
                                      {
                                        id: "1:47",
                                        name: "Fill 51",
                                        type: "VECTOR",
                                        blendMode: "PASS_THROUGH",
                                        absoluteBoundingBox: {
                                          x: 4017.9079055786133,
                                          y: 189.5269775390625,
                                          width: 111.5171890258789,
                                          height: 56.6253547668457
                                        },
                                        constraints: {
                                          vertical: "TOP",
                                          horizontal: "LEFT"
                                        },
                                        fills: [
                                          {
                                            type: "SOLID",
                                            blendMode: "NORMAL",
                                            color: {
                                              r: 0.9098039215686274,
                                              g: 0.9333333333333333,
                                              b: 0.9490196078431372,
                                              a: 1
                                            }
                                          }
                                        ],
                                        strokes: [],
                                        strokeWeight: 1,
                                        strokeAlign: "INSIDE",
                                        exportSettings: [],
                                        effects: []
                                      },
                                      {
                                        id: "1:48",
                                        name: "Fill 53",
                                        type: "VECTOR",
                                        blendMode: "PASS_THROUGH",
                                        absoluteBoundingBox: {
                                          x: 4122.344711303711,
                                          y: 189.5269775390625,
                                          width: 100.8965072631836,
                                          height: 56.6253547668457
                                        },
                                        constraints: {
                                          vertical: "TOP",
                                          horizontal: "LEFT"
                                        },
                                        fills: [
                                          {
                                            type: "SOLID",
                                            blendMode: "NORMAL",
                                            color: {
                                              r: 0.8745098039215686,
                                              g: 0.9058823529411765,
                                              b: 0.9254901960784314,
                                              a: 1
                                            }
                                          }
                                        ],
                                        strokes: [],
                                        strokeWeight: 1,
                                        strokeAlign: "INSIDE",
                                        exportSettings: [],
                                        effects: []
                                      },
                                      {
                                        id: "1:49",
                                        name: "Fill 55",
                                        type: "VECTOR",
                                        blendMode: "PASS_THROUGH",
                                        absoluteBoundingBox: {
                                          x: 3954.1839447021484,
                                          y: -17.509521484375,
                                          width: 38.942508697509766,
                                          height: 152.18064880371094
                                        },
                                        constraints: {
                                          vertical: "TOP",
                                          horizontal: "LEFT"
                                        },
                                        fills: [
                                          {
                                            type: "SOLID",
                                            blendMode: "NORMAL",
                                            color: {
                                              r: 0.7764705882352941,
                                              g: 0.8313725490196079,
                                              b: 0.8588235294117647,
                                              a: 1
                                            }
                                          }
                                        ],
                                        strokes: [],
                                        strokeWeight: 1,
                                        strokeAlign: "INSIDE",
                                        exportSettings: [],
                                        effects: []
                                      },
                                      {
                                        id: "1:50",
                                        name: "Fill 57",
                                        type: "VECTOR",
                                        blendMode: "PASS_THROUGH",
                                        absoluteBoundingBox: {
                                          x: 4255.103668212891,
                                          y: -17.509521484375,
                                          width: 38.942508697509766,
                                          height: 152.18064880371094
                                        },
                                        constraints: {
                                          vertical: "TOP",
                                          horizontal: "LEFT"
                                        },
                                        fills: [
                                          {
                                            type: "SOLID",
                                            blendMode: "NORMAL",
                                            color: {
                                              r: 0.7764705882352941,
                                              g: 0.8313725490196079,
                                              b: 0.8588235294117647,
                                              a: 1
                                            }
                                          }
                                        ],
                                        strokes: [],
                                        strokeWeight: 1,
                                        strokeAlign: "INSIDE",
                                        exportSettings: [],
                                        effects: []
                                      },
                                      {
                                        id: "1:51",
                                        name: "Fill 59",
                                        type: "VECTOR",
                                        blendMode: "PASS_THROUGH",
                                        absoluteBoundingBox: {
                                          x: 4099.333282470703,
                                          y: -426,
                                          width: 44.25285339355469,
                                          height: 15.67258358001709
                                        },
                                        constraints: {
                                          vertical: "TOP",
                                          horizontal: "LEFT"
                                        },
                                        fills: [
                                          {
                                            type: "SOLID",
                                            blendMode: "NORMAL",
                                            color: {
                                              r: 0.792156862745098,
                                              g: 0.8627450980392157,
                                              b: 0.9019607843137255,
                                              a: 1
                                            }
                                          }
                                        ],
                                        strokes: [],
                                        strokeWeight: 1,
                                        strokeAlign: "INSIDE",
                                        exportSettings: [],
                                        effects: []
                                      },
                                      {
                                        id: "1:52",
                                        name: "speed line1",
                                        type: "VECTOR",
                                        blendMode: "PASS_THROUGH",
                                        absoluteBoundingBox: {
                                          x: 3920.5516204833984,
                                          y: 159.4447021484375,
                                          width: 15.93102741241455,
                                          height: 95.5552749633789
                                        },
                                        constraints: {
                                          vertical: "TOP",
                                          horizontal: "LEFT"
                                        },
                                        fills: [
                                          {
                                            type: "SOLID",
                                            blendMode: "NORMAL",
                                            color: {
                                              r: 0.7764705882352941,
                                              g: 0.8313725490196079,
                                              b: 0.8470588235294118,
                                              a: 1
                                            }
                                          }
                                        ],
                                        strokes: [],
                                        strokeWeight: 1,
                                        strokeAlign: "INSIDE",
                                        exportSettings: [],
                                        effects: []
                                      },
                                      {
                                        id: "1:53",
                                        name: "speed line4",
                                        type: "VECTOR",
                                        blendMode: "PASS_THROUGH",
                                        absoluteBoundingBox: {
                                          x: 4308.2069091796875,
                                          y: 159.4447021484375,
                                          width: 15.931026458740234,
                                          height: 95.5552749633789
                                        },
                                        constraints: {
                                          vertical: "TOP",
                                          horizontal: "LEFT"
                                        },
                                        fills: [
                                          {
                                            type: "SOLID",
                                            blendMode: "NORMAL",
                                            color: {
                                              r: 0.7764705882352941,
                                              g: 0.8313725490196079,
                                              b: 0.8470588235294118,
                                              a: 1
                                            }
                                          }
                                        ],
                                        strokes: [],
                                        strokeWeight: 1,
                                        strokeAlign: "INSIDE",
                                        exportSettings: [],
                                        effects: []
                                      },
                                      {
                                        id: "1:54",
                                        name: "speed line2",
                                        type: "VECTOR",
                                        blendMode: "PASS_THROUGH",
                                        absoluteBoundingBox: {
                                          x: 3954.1839447021484,
                                          y: 200.14422607421875,
                                          width: 14.16091251373291,
                                          height: 26.543134689331055
                                        },
                                        constraints: {
                                          vertical: "TOP",
                                          horizontal: "LEFT"
                                        },
                                        fills: [
                                          {
                                            type: "SOLID",
                                            blendMode: "NORMAL",
                                            color: {
                                              r: 0.7764705882352941,
                                              g: 0.8313725490196079,
                                              b: 0.8470588235294118,
                                              a: 1
                                            }
                                          }
                                        ],
                                        strokes: [],
                                        strokeWeight: 1,
                                        strokeAlign: "INSIDE",
                                        exportSettings: [],
                                        effects: []
                                      },
                                      {
                                        id: "1:55",
                                        name: "speed line3",
                                        type: "VECTOR",
                                        blendMode: "PASS_THROUGH",
                                        absoluteBoundingBox: {
                                          x: 4278.114776611328,
                                          y: 200.14422607421875,
                                          width: 14.16091251373291,
                                          height: 26.543134689331055
                                        },
                                        constraints: {
                                          vertical: "TOP",
                                          horizontal: "LEFT"
                                        },
                                        fills: [
                                          {
                                            type: "SOLID",
                                            blendMode: "NORMAL",
                                            color: {
                                              r: 0.7764705882352941,
                                              g: 0.8313725490196079,
                                              b: 0.8470588235294118,
                                              a: 1
                                            }
                                          }
                                        ],
                                        strokes: [],
                                        strokeWeight: 1,
                                        strokeAlign: "INSIDE",
                                        exportSettings: [],
                                        effects: []
                                      }
                                    ],
                                    absoluteBoundingBox: {
                                      x: 3894,
                                      y: -426,
                                      width: 461.9998779296875,
                                      height: 681
                                    },
                                    constraints: {
                                      vertical: "TOP",
                                      horizontal: "LEFT"
                                    },
                                    backgroundColor: { r: 0, g: 0, b: 0, a: 0 },
                                    clipsContent: false,
                                    exportSettings: [],
                                    effects: []
                                  },
                                  {
                                    id: "1:56",
                                    name: "Line",
                                    type: "VECTOR",
                                    blendMode: "PASS_THROUGH",
                                    absoluteBoundingBox: {
                                      x: 3998.2169494628906,
                                      y: -298.17298889160156,
                                      width: 102.27201843261719,
                                      height: 366.76513671875
                                    },
                                    constraints: {
                                      vertical: "TOP",
                                      horizontal: "LEFT"
                                    },
                                    fills: [],
                                    strokes: [
                                      {
                                        type: "SOLID",
                                        blendMode: "NORMAL",
                                        color: {
                                          r: 0.7490196078431373,
                                          g: 0.7803921568627451,
                                          b: 0.8274509803921568,
                                          a: 1
                                        }
                                      }
                                    ],
                                    strokeWeight: 9,
                                    strokeAlign: "CENTER",
                                    exportSettings: [],
                                    effects: []
                                  },
                                  {
                                    id: "1:57",
                                    name: "Line",
                                    type: "VECTOR",
                                    blendMode: "PASS_THROUGH",
                                    absoluteBoundingBox: {
                                      x: 4144.8945236206055,
                                      y: -259.02227783203125,
                                      width: 105.3805923461914,
                                      height: 366.76513671875
                                    },
                                    constraints: {
                                      vertical: "TOP",
                                      horizontal: "LEFT"
                                    },
                                    fills: [],
                                    strokes: [
                                      {
                                        type: "SOLID",
                                        blendMode: "NORMAL",
                                        color: {
                                          r: 0.7490196078431373,
                                          g: 0.7803921568627451,
                                          b: 0.8274509803921568,
                                          a: 1
                                        }
                                      }
                                    ],
                                    strokeWeight: 9,
                                    strokeAlign: "CENTER",
                                    exportSettings: [],
                                    effects: []
                                  },
                                  {
                                    id: "1:58",
                                    name: "circles",
                                    type: "GROUP",
                                    blendMode: "PASS_THROUGH",
                                    children: [
                                      {
                                        id: "1:59",
                                        name: "orange circle",
                                        type: "GROUP",
                                        blendMode: "PASS_THROUGH",
                                        children: [
                                          {
                                            id: "1:60",
                                            name: "Vector",
                                            type: "VECTOR",
                                            blendMode: "PASS_THROUGH",
                                            absoluteBoundingBox: {
                                              x: 3975.7895188331604,
                                              y: 43.68791484832764,
                                              width: 46.42102813720703,
                                              height: 46.46652603149414
                                            },
                                            constraints: {
                                              vertical: "TOP",
                                              horizontal: "LEFT"
                                            },
                                            fills: [
                                              {
                                                type: "SOLID",
                                                blendMode: "NORMAL",
                                                color: {
                                                  r: 0.9529411764705882,
                                                  g: 0.5843137254901961,
                                                  b: 0.5411764705882353,
                                                  a: 1
                                                }
                                              }
                                            ],
                                            strokes: [],
                                            strokeWeight: 1,
                                            strokeAlign: "INSIDE",
                                            exportSettings: [],
                                            effects: []
                                          },
                                          {
                                            id: "1:61",
                                            name: "Vector",
                                            type: "VECTOR",
                                            blendMode: "PASS_THROUGH",
                                            absoluteBoundingBox: {
                                              x: 3970.8156814575195,
                                              y: 38.7093505859375,
                                              width: 56.3683967590332,
                                              height: 56.423641204833984
                                            },
                                            constraints: {
                                              vertical: "TOP",
                                              horizontal: "LEFT"
                                            },
                                            fills: [],
                                            strokes: [
                                              {
                                                type: "SOLID",
                                                blendMode: "NORMAL",
                                                color: {
                                                  r: 0.9725490196078431,
                                                  g: 0.7529411764705882,
                                                  b: 0.7294117647058823,
                                                  a: 1
                                                }
                                              }
                                            ],
                                            strokeWeight: 8.999999046325684,
                                            strokeAlign: "CENTER",
                                            exportSettings: [],
                                            effects: []
                                          }
                                        ],
                                        absoluteBoundingBox: {
                                          x: 3970.8156814575195,
                                          y: 38.7093505859375,
                                          width: 56.3683967590332,
                                          height: 56.423641204833984
                                        },
                                        constraints: {
                                          vertical: "TOP",
                                          horizontal: "LEFT"
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
                                        id: "1:62",
                                        name: "pink circle",
                                        type: "GROUP",
                                        blendMode: "PASS_THROUGH",
                                        children: [
                                          {
                                            id: "1:63",
                                            name: "Vector",
                                            type: "VECTOR",
                                            blendMode: "PASS_THROUGH",
                                            absoluteBoundingBox: {
                                              x: 4245.4733600616455,
                                              y: 100.11157178878784,
                                              width: 46.42102813720703,
                                              height: 46.46652603149414
                                            },
                                            constraints: {
                                              vertical: "TOP",
                                              horizontal: "LEFT"
                                            },
                                            fills: [
                                              {
                                                type: "SOLID",
                                                blendMode: "NORMAL",
                                                color: {
                                                  r: 1,
                                                  g: 0.5882352941176471,
                                                  b: 0.8980392156862745,
                                                  a: 1
                                                }
                                              }
                                            ],
                                            strokes: [],
                                            strokeWeight: 1,
                                            strokeAlign: "INSIDE",
                                            exportSettings: [],
                                            effects: []
                                          },
                                          {
                                            id: "1:64",
                                            name: "Vector",
                                            type: "VECTOR",
                                            blendMode: "PASS_THROUGH",
                                            absoluteBoundingBox: {
                                              x: 4240.499855041504,
                                              y: 95.13300323486328,
                                              width: 56.3683967590332,
                                              height: 56.423641204833984
                                            },
                                            constraints: {
                                              vertical: "TOP",
                                              horizontal: "LEFT"
                                            },
                                            fills: [],
                                            strokes: [
                                              {
                                                type: "SOLID",
                                                blendMode: "NORMAL",
                                                color: {
                                                  r: 0.9882352941176471,
                                                  g: 0.7450980392156863,
                                                  b: 0.9294117647058824,
                                                  a: 1
                                                }
                                              }
                                            ],
                                            strokeWeight: 9,
                                            strokeAlign: "CENTER",
                                            exportSettings: [],
                                            effects: []
                                          }
                                        ],
                                        absoluteBoundingBox: {
                                          x: 4240.499855041504,
                                          y: 95.13300323486328,
                                          width: 56.3683967590332,
                                          height: 56.423641204833984
                                        },
                                        constraints: {
                                          vertical: "TOP",
                                          horizontal: "LEFT"
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
                                      x: 3970.8156814575195,
                                      y: 38.7093505859375,
                                      width: 326.052490234375,
                                      height: 112.84728240966797
                                    },
                                    constraints: {
                                      vertical: "TOP",
                                      horizontal: "LEFT"
                                    },
                                    backgroundColor: { r: 0, g: 0, b: 0, a: 0 },
                                    clipsContent: false,
                                    exportSettings: [],
                                    effects: []
                                  }
                                ],
                                absoluteBoundingBox: {
                                  x: 3894,
                                  y: -426,
                                  width: 461.9998779296875,
                                  height: 681
                                },
                                constraints: {
                                  vertical: "TOP",
                                  horizontal: "LEFT"
                                },
                                backgroundColor: { r: 0, g: 0, b: 0, a: 0 },
                                clipsContent: false,
                                exportSettings: [],
                                effects: []
                              }
                            ],
                            absoluteBoundingBox: {
                              x: 3894,
                              y: -426,
                              width: 461.9998779296875,
                              height: 681
                            },
                            constraints: {
                              vertical: "TOP",
                              horizontal: "LEFT"
                            },
                            backgroundColor: { r: 0, g: 0, b: 0, a: 0 },
                            clipsContent: false,
                            exportSettings: [],
                            effects: []
                          }
                        ],
                        absoluteBoundingBox: {
                          x: 3894,
                          y: -426,
                          width: 461.9998779296875,
                          height: 681
                        },
                        constraints: { vertical: "TOP", horizontal: "LEFT" },
                        backgroundColor: { r: 0, g: 0, b: 0, a: 0 },
                        clipsContent: false,
                        exportSettings: [],
                        effects: []
                      }
                    ],
                    absoluteBoundingBox: {
                      x: 3894,
                      y: -426,
                      width: 461.9998779296875,
                      height: 681
                    },
                    constraints: { vertical: "TOP", horizontal: "LEFT" },
                    backgroundColor: { r: 0, g: 0, b: 0, a: 0 },
                    clipsContent: false,
                    exportSettings: [],
                    effects: []
                  }
                ],
                absoluteBoundingBox: {
                  x: 3894,
                  y: -426,
                  width: 461.9998779296875,
                  height: 681
                },
                constraints: { vertical: "TOP", horizontal: "LEFT" },
                backgroundColor: { r: 0, g: 0, b: 0, a: 0 },
                clipsContent: false,
                exportSettings: [],
                effects: []
              }
            ],
            absoluteBoundingBox: {
              x: 3894,
              y: -426,
              width: 461.9998779296875,
              height: 681
            },
            constraints: { vertical: "TOP", horizontal: "LEFT" },
            backgroundColor: { r: 0, g: 0, b: 0, a: 0 },
            clipsContent: false,
            exportSettings: [],
            effects: []
          },
          {
            id: "1:65",
            name: "Group 3",
            type: "GROUP",
            blendMode: "PASS_THROUGH",
            children: [
              {
                id: "1:66",
                name: "Big Data",
                type: "TEXT",
                blendMode: "PASS_THROUGH",
                absoluteBoundingBox: {
                  x: 4430,
                  y: -24,
                  width: 457,
                  height: 51
                },
                constraints: { vertical: "TOP", horizontal: "LEFT" },
                fills: [
                  {
                    type: "SOLID",
                    blendMode: "NORMAL",
                    color: { r: 1, g: 1, b: 1, a: 1 }
                  }
                ],
                strokes: [],
                strokeWeight: 0,
                strokeAlign: "OUTSIDE",
                exportSettings: [],
                effects: [],
                characters: "Big Data",
                style: {
                  fontFamily: "Muli",
                  fontPostScriptName: "Muli-Bold",
                  fontWeight: 700,
                  fontSize: 40,
                  textAlignHorizontal: "LEFT",
                  textAlignVertical: "CENTER",
                  letterSpacing: 0,
                  lineHeightPx: 46.875,
                  lineHeightPercent: 100
                },
                characterStyleOverrides: [0, 0, 0, 0, 3, 3, 3, 3],
                styleOverrideTable: {
                  "3": {
                    fills: [
                      {
                        type: "SOLID",
                        blendMode: "NORMAL",
                        color: {
                          r: 0.984313725490196,
                          g: 0.5529411764705883,
                          b: 0.8196078431372549,
                          a: 1
                        }
                      }
                    ]
                  }
                }
              },
              {
                id: "1:67",
                name: "Group 2",
                type: "GROUP",
                blendMode: "PASS_THROUGH",
                children: [
                  {
                    id: "1:68",
                    name: "Vector",
                    type: "VECTOR",
                    blendMode: "PASS_THROUGH",
                    absoluteBoundingBox: {
                      x: 4430,
                      y: -169,
                      width: 116,
                      height: 116
                    },
                    constraints: { vertical: "TOP", horizontal: "LEFT" },
                    fills: [
                      {
                        type: "GRADIENT_LINEAR",
                        blendMode: "NORMAL",
                        gradientHandlePositions: [
                          { x: 0.16810343945819728, y: -9.930047228934313e-9 },
                          { x: 1.568965510926436, y: 1.5775862324387102 },
                          { x: -0.6206896817261816, y: 0.7004310258040721 }
                        ],
                        gradientStops: [
                          {
                            color: {
                              r: 1,
                              g: 0.5882352941176471,
                              b: 0.8980392156862745,
                              a: 1
                            },
                            position: 0
                          },
                          {
                            color: {
                              r: 0.8823529411764706,
                              g: 0.37254901960784315,
                              b: 0.4196078431372549,
                              a: 1
                            },
                            position: 1
                          }
                        ]
                      }
                    ],
                    strokes: [],
                    strokeWeight: 1,
                    strokeAlign: "INSIDE",
                    exportSettings: [],
                    effects: [
                      {
                        type: "DROP_SHADOW",
                        visible: true,
                        color: { r: 0, g: 0, b: 0, a: 0.1803921568627451 },
                        blendMode: "NORMAL",
                        offset: { x: 0, y: 4 },
                        radius: 30
                      }
                    ]
                  },
                  {
                    id: "1:69",
                    name: "Group",
                    type: "GROUP",
                    blendMode: "PASS_THROUGH",
                    children: [
                      {
                        id: "1:70",
                        name: "Page 1",
                        type: "GROUP",
                        blendMode: "PASS_THROUGH",
                        children: [
                          {
                            id: "1:71",
                            name: "Derniere version IT3",
                            type: "GROUP",
                            blendMode: "PASS_THROUGH",
                            children: [
                              {
                                id: "1:72",
                                name: "rocket section",
                                type: "GROUP",
                                blendMode: "PASS_THROUGH",
                                children: [
                                  {
                                    id: "1:73",
                                    name: "rocket bigdata",
                                    type: "GROUP",
                                    blendMode: "PASS_THROUGH",
                                    children: [
                                      {
                                        id: "1:74",
                                        name: "Group 11",
                                        type: "GROUP",
                                        blendMode: "PASS_THROUGH",
                                        children: [
                                          {
                                            id: "1:75",
                                            name: "database",
                                            type: "GROUP",
                                            blendMode: "PASS_THROUGH",
                                            children: [
                                              {
                                                id: "1:76",
                                                name: "Oval",
                                                type: "VECTOR",
                                                blendMode: "PASS_THROUGH",
                                                absoluteBoundingBox: {
                                                  x: 4466,
                                                  y: -135,
                                                  width: 44,
                                                  height: 14.22580623626709
                                                },
                                                constraints: {
                                                  vertical: "TOP",
                                                  horizontal: "LEFT"
                                                },
                                                fills: [],
                                                strokes: [
                                                  {
                                                    type: "SOLID",
                                                    blendMode: "NORMAL",
                                                    color: {
                                                      r: 1,
                                                      g: 1,
                                                      b: 1,
                                                      a: 1
                                                    }
                                                  }
                                                ],
                                                strokeWeight: 3,
                                                strokeAlign: "CENTER",
                                                exportSettings: [],
                                                effects: []
                                              },
                                              {
                                                id: "1:77",
                                                name: "Shape",
                                                type: "VECTOR",
                                                blendMode: "PASS_THROUGH",
                                                absoluteBoundingBox: {
                                                  x: 4466,
                                                  y: -127.09677410125732,
                                                  width: 44,
                                                  height: 41.09677505493164
                                                },
                                                constraints: {
                                                  vertical: "TOP",
                                                  horizontal: "LEFT"
                                                },
                                                fills: [],
                                                strokes: [
                                                  {
                                                    type: "SOLID",
                                                    blendMode: "NORMAL",
                                                    color: {
                                                      r: 1,
                                                      g: 1,
                                                      b: 1,
                                                      a: 1
                                                    }
                                                  }
                                                ],
                                                strokeWeight: 3,
                                                strokeAlign: "CENTER",
                                                exportSettings: [],
                                                effects: []
                                              },
                                              {
                                                id: "1:78",
                                                name: "Shape",
                                                type: "VECTOR",
                                                blendMode: "PASS_THROUGH",
                                                absoluteBoundingBox: {
                                                  x: 4466,
                                                  y: -116.03225898742676,
                                                  width: 44,
                                                  height: 18.967741012573242
                                                },
                                                constraints: {
                                                  vertical: "TOP",
                                                  horizontal: "LEFT"
                                                },
                                                fills: [],
                                                strokes: [
                                                  {
                                                    type: "SOLID",
                                                    blendMode: "NORMAL",
                                                    color: {
                                                      r: 1,
                                                      g: 1,
                                                      b: 1,
                                                      a: 1
                                                    }
                                                  }
                                                ],
                                                strokeWeight: 3,
                                                strokeAlign: "CENTER",
                                                exportSettings: [],
                                                effects: []
                                              }
                                            ],
                                            absoluteBoundingBox: {
                                              x: 4466,
                                              y: -135,
                                              width: 44,
                                              height: 49
                                            },
                                            constraints: {
                                              vertical: "TOP",
                                              horizontal: "LEFT"
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
                                          x: 4466,
                                          y: -135,
                                          width: 44,
                                          height: 49
                                        },
                                        constraints: {
                                          vertical: "TOP",
                                          horizontal: "LEFT"
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
                                      x: 4466,
                                      y: -135,
                                      width: 44,
                                      height: 49
                                    },
                                    constraints: {
                                      vertical: "TOP",
                                      horizontal: "LEFT"
                                    },
                                    backgroundColor: { r: 0, g: 0, b: 0, a: 0 },
                                    clipsContent: false,
                                    exportSettings: [],
                                    effects: []
                                  }
                                ],
                                absoluteBoundingBox: {
                                  x: 4466,
                                  y: -135,
                                  width: 44,
                                  height: 49
                                },
                                constraints: {
                                  vertical: "TOP",
                                  horizontal: "LEFT"
                                },
                                backgroundColor: { r: 0, g: 0, b: 0, a: 0 },
                                clipsContent: false,
                                exportSettings: [],
                                effects: []
                              }
                            ],
                            absoluteBoundingBox: {
                              x: 4466,
                              y: -135,
                              width: 44,
                              height: 49
                            },
                            constraints: {
                              vertical: "TOP",
                              horizontal: "LEFT"
                            },
                            backgroundColor: { r: 0, g: 0, b: 0, a: 0 },
                            clipsContent: false,
                            exportSettings: [],
                            effects: []
                          }
                        ],
                        absoluteBoundingBox: {
                          x: 4466,
                          y: -135,
                          width: 44,
                          height: 49
                        },
                        constraints: { vertical: "TOP", horizontal: "LEFT" },
                        backgroundColor: { r: 0, g: 0, b: 0, a: 0 },
                        clipsContent: false,
                        exportSettings: [],
                        effects: []
                      }
                    ],
                    absoluteBoundingBox: {
                      x: 4466,
                      y: -135,
                      width: 44,
                      height: 49
                    },
                    constraints: { vertical: "TOP", horizontal: "LEFT" },
                    backgroundColor: { r: 0, g: 0, b: 0, a: 0 },
                    clipsContent: false,
                    exportSettings: [],
                    effects: []
                  }
                ],
                absoluteBoundingBox: {
                  x: 4430,
                  y: -169,
                  width: 116,
                  height: 116
                },
                constraints: { vertical: "TOP", horizontal: "LEFT" },
                backgroundColor: { r: 0, g: 0, b: 0, a: 0 },
                clipsContent: false,
                exportSettings: [],
                effects: []
              }
            ],
            absoluteBoundingBox: { x: 4430, y: -169, width: 457, height: 196 },
            constraints: { vertical: "TOP", horizontal: "LEFT" },
            backgroundColor: { r: 0, g: 0, b: 0, a: 0 },
            clipsContent: false,
            exportSettings: [],
            effects: []
          },
          {
            id: "1:79",
            name: "Group 4",
            type: "GROUP",
            blendMode: "PASS_THROUGH",
            children: [
              {
                id: "1:80",
                name: "Machine Learning",
                type: "TEXT",
                blendMode: "PASS_THROUGH",
                absoluteBoundingBox: {
                  x: 3481,
                  y: 129,
                  width: 339,
                  height: 51
                },
                constraints: { vertical: "TOP", horizontal: "LEFT" },
                fills: [
                  {
                    type: "SOLID",
                    blendMode: "NORMAL",
                    color: { r: 1, g: 1, b: 1, a: 1 }
                  }
                ],
                strokes: [],
                strokeWeight: 0,
                strokeAlign: "OUTSIDE",
                exportSettings: [],
                effects: [],
                characters: "Machine Learning",
                style: {
                  fontFamily: "Muli",
                  fontPostScriptName: "Muli-Bold",
                  fontWeight: 700,
                  fontSize: 40,
                  textAlignHorizontal: "RIGHT",
                  textAlignVertical: "CENTER",
                  letterSpacing: 0,
                  lineHeightPx: 46.875,
                  lineHeightPercent: 100
                },
                characterStyleOverrides: [
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  4,
                  4,
                  4,
                  4,
                  4,
                  4,
                  4,
                  4
                ],
                styleOverrideTable: {
                  "4": {
                    fills: [
                      {
                        type: "SOLID",
                        blendMode: "NORMAL",
                        color: {
                          r: 0.9450980392156862,
                          g: 0.5450980392156862,
                          b: 0.5215686274509804,
                          a: 1
                        }
                      }
                    ]
                  }
                }
              },
              {
                id: "1:81",
                name: "Group 2",
                type: "GROUP",
                blendMode: "PASS_THROUGH",
                children: [
                  {
                    id: "1:82",
                    name: "Vector",
                    type: "VECTOR",
                    blendMode: "PASS_THROUGH",
                    absoluteBoundingBox: {
                      x: 3704,
                      y: -18,
                      width: 116,
                      height: 116
                    },
                    constraints: { vertical: "TOP", horizontal: "LEFT" },
                    fills: [
                      {
                        type: "GRADIENT_LINEAR",
                        blendMode: "NORMAL",
                        gradientHandlePositions: [
                          { x: 0.16810343945819728, y: -9.930047228934313e-9 },
                          { x: 1.568965510926436, y: 1.5775862324387102 },
                          { x: -0.6206896817261816, y: 0.7004310258040721 }
                        ],
                        gradientStops: [
                          {
                            color: {
                              r: 0.9529411764705882,
                              g: 0.5843137254901961,
                              b: 0.5411764705882353,
                              a: 1
                            },
                            position: 0
                          },
                          {
                            color: {
                              r: 0.8823529411764706,
                              g: 0.37254901960784315,
                              b: 0.4196078431372549,
                              a: 1
                            },
                            position: 1
                          }
                        ]
                      }
                    ],
                    strokes: [],
                    strokeWeight: 1,
                    strokeAlign: "INSIDE",
                    exportSettings: [],
                    effects: [
                      {
                        type: "DROP_SHADOW",
                        visible: true,
                        color: { r: 0, g: 0, b: 0, a: 0.1803921568627451 },
                        blendMode: "NORMAL",
                        offset: { x: 0, y: 4 },
                        radius: 30
                      }
                    ]
                  },
                  {
                    id: "1:83",
                    name: "Group",
                    type: "GROUP",
                    blendMode: "PASS_THROUGH",
                    children: [
                      {
                        id: "1:84",
                        name: "Page 1",
                        type: "GROUP",
                        blendMode: "PASS_THROUGH",
                        children: [
                          {
                            id: "1:85",
                            name: "Derniere version IT3",
                            type: "GROUP",
                            blendMode: "PASS_THROUGH",
                            children: [
                              {
                                id: "1:86",
                                name: "rocket section",
                                type: "GROUP",
                                blendMode: "PASS_THROUGH",
                                children: [
                                  {
                                    id: "1:87",
                                    name: "rocket bigdata",
                                    type: "GROUP",
                                    blendMode: "PASS_THROUGH",
                                    children: [
                                      {
                                        id: "1:88",
                                        name: "Group 11",
                                        type: "GROUP",
                                        blendMode: "PASS_THROUGH",
                                        children: [
                                          {
                                            id: "1:89",
                                            name: "database",
                                            type: "GROUP",
                                            blendMode: "PASS_THROUGH",
                                            children: [
                                              {
                                                id: "1:90",
                                                name: "Oval",
                                                type: "VECTOR",
                                                blendMode: "PASS_THROUGH",
                                                absoluteBoundingBox: {
                                                  x: 3740,
                                                  y: 16,
                                                  width: 44,
                                                  height: 14.22580623626709
                                                },
                                                constraints: {
                                                  vertical: "TOP",
                                                  horizontal: "LEFT"
                                                },
                                                fills: [],
                                                strokes: [
                                                  {
                                                    type: "SOLID",
                                                    blendMode: "NORMAL",
                                                    color: {
                                                      r: 1,
                                                      g: 1,
                                                      b: 1,
                                                      a: 1
                                                    }
                                                  }
                                                ],
                                                strokeWeight: 3,
                                                strokeAlign: "CENTER",
                                                exportSettings: [],
                                                effects: []
                                              },
                                              {
                                                id: "1:91",
                                                name: "Shape",
                                                type: "VECTOR",
                                                blendMode: "PASS_THROUGH",
                                                absoluteBoundingBox: {
                                                  x: 3740,
                                                  y: 23.903225898742676,
                                                  width: 44,
                                                  height: 41.09677505493164
                                                },
                                                constraints: {
                                                  vertical: "TOP",
                                                  horizontal: "LEFT"
                                                },
                                                fills: [],
                                                strokes: [
                                                  {
                                                    type: "SOLID",
                                                    blendMode: "NORMAL",
                                                    color: {
                                                      r: 1,
                                                      g: 1,
                                                      b: 1,
                                                      a: 1
                                                    }
                                                  }
                                                ],
                                                strokeWeight: 3,
                                                strokeAlign: "CENTER",
                                                exportSettings: [],
                                                effects: []
                                              },
                                              {
                                                id: "1:92",
                                                name: "Shape",
                                                type: "VECTOR",
                                                blendMode: "PASS_THROUGH",
                                                absoluteBoundingBox: {
                                                  x: 3740,
                                                  y: 34.96774101257324,
                                                  width: 44,
                                                  height: 18.967741012573242
                                                },
                                                constraints: {
                                                  vertical: "TOP",
                                                  horizontal: "LEFT"
                                                },
                                                fills: [],
                                                strokes: [
                                                  {
                                                    type: "SOLID",
                                                    blendMode: "NORMAL",
                                                    color: {
                                                      r: 1,
                                                      g: 1,
                                                      b: 1,
                                                      a: 1
                                                    }
                                                  }
                                                ],
                                                strokeWeight: 3,
                                                strokeAlign: "CENTER",
                                                exportSettings: [],
                                                effects: []
                                              }
                                            ],
                                            absoluteBoundingBox: {
                                              x: 3740,
                                              y: 16,
                                              width: 44,
                                              height: 49
                                            },
                                            constraints: {
                                              vertical: "TOP",
                                              horizontal: "LEFT"
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
                                          x: 3740,
                                          y: 16,
                                          width: 44,
                                          height: 49
                                        },
                                        constraints: {
                                          vertical: "TOP",
                                          horizontal: "LEFT"
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
                                      x: 3740,
                                      y: 16,
                                      width: 44,
                                      height: 49
                                    },
                                    constraints: {
                                      vertical: "TOP",
                                      horizontal: "LEFT"
                                    },
                                    backgroundColor: { r: 0, g: 0, b: 0, a: 0 },
                                    clipsContent: false,
                                    exportSettings: [],
                                    effects: []
                                  }
                                ],
                                absoluteBoundingBox: {
                                  x: 3740,
                                  y: 16,
                                  width: 44,
                                  height: 49
                                },
                                constraints: {
                                  vertical: "TOP",
                                  horizontal: "LEFT"
                                },
                                backgroundColor: { r: 0, g: 0, b: 0, a: 0 },
                                clipsContent: false,
                                exportSettings: [],
                                effects: []
                              }
                            ],
                            absoluteBoundingBox: {
                              x: 3740,
                              y: 16,
                              width: 44,
                              height: 49
                            },
                            constraints: {
                              vertical: "TOP",
                              horizontal: "LEFT"
                            },
                            backgroundColor: { r: 0, g: 0, b: 0, a: 0 },
                            clipsContent: false,
                            exportSettings: [],
                            effects: []
                          }
                        ],
                        absoluteBoundingBox: {
                          x: 3740,
                          y: 16,
                          width: 44,
                          height: 49
                        },
                        constraints: { vertical: "TOP", horizontal: "LEFT" },
                        backgroundColor: { r: 0, g: 0, b: 0, a: 0 },
                        clipsContent: false,
                        exportSettings: [],
                        effects: []
                      }
                    ],
                    absoluteBoundingBox: {
                      x: 3740,
                      y: 16,
                      width: 44,
                      height: 49
                    },
                    constraints: { vertical: "TOP", horizontal: "LEFT" },
                    backgroundColor: { r: 0, g: 0, b: 0, a: 0 },
                    clipsContent: false,
                    exportSettings: [],
                    effects: []
                  }
                ],
                absoluteBoundingBox: {
                  x: 3704,
                  y: -18,
                  width: 116,
                  height: 116
                },
                constraints: { vertical: "TOP", horizontal: "LEFT" },
                backgroundColor: { r: 0, g: 0, b: 0, a: 0 },
                clipsContent: false,
                exportSettings: [],
                effects: []
              }
            ],
            absoluteBoundingBox: { x: 3481, y: -18, width: 339, height: 198 },
            constraints: { vertical: "TOP", horizontal: "LEFT" },
            backgroundColor: { r: 0, g: 0, b: 0, a: 0 },
            clipsContent: false,
            exportSettings: [],
            effects: []
          }
        ],
        absoluteBoundingBox: { x: 3183, y: -513, width: 1920, height: 1080 },
        constraints: { vertical: "TOP", horizontal: "LEFT" },
        backgroundColor: { r: 1, g: 1, b: 1, a: 1 },
        clipsContent: true,
        exportSettings: [
          { suffix: "", format: "SVG", constraint: { type: "SCALE", value: 1 } }
        ],
        effects: [],
        svg:
          '<svg width="1920" height="1080" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">\n<g id="Desktop HD" clip-path="url(#clip0)">\n<rect width="1920" height="1080" fill="white"/>\n<rect id="Rectangle" width="1921" height="1081" transform="translate(-1 -1)" fill="url(#paint0_linear)"/>\n<g id="Group 5">\n<g id="fusee">\n<g id="Derniere version IT3 (Amandine)">\n<g id="rocket section">\n<g id="rocket illustrationcomplete">\n<g id="rocket illustration">\n<g id="Group 10">\n<path id="Fill 1" fill-rule="evenodd" clip-rule="evenodd" d="M54.281 261.892H162.843C162.843 261.892 164.034 160.127 136.344 127.414C108.657 94.6968 86.205 86.0889 16.99 3.44314L-8.1988e-06 -7.33602e-06L0.15606 261.693L54.281 261.892Z" transform="translate(1010.15 440.635)" fill="#DFE7EC"/>\n<path id="Fill 3" fill-rule="evenodd" clip-rule="evenodd" d="M108.569 261.892H0.00746878C0.00746878 261.892 -1.18332 160.127 26.5068 127.414C54.1935 94.6968 76.6455 86.0889 145.861 3.44314L162.851 -7.33602e-06L162.694 261.693L108.569 261.892Z" transform="translate(711 440.635)" fill="#DFE7EC"/>\n<path id="Fill 47" fill-rule="evenodd" clip-rule="evenodd" d="M175.241 620.685C175.241 625.655 170.715 629.683 165.131 629.683H10.1101C4.52595 629.683 -6.96186e-07 625.655 -6.96186e-07 620.685V116.977C-6.96186e-07 112.007 1.57043 106.062 3.37002 101.98C3.37002 101.98 58.2307 0.264481 85.9491 0.000533562C114.244 -0.269413 171.871 101.98 171.871 101.98C174.136 106.95 175.241 112.007 175.241 116.977V620.685Z" transform="translate(852.609 87)" fill="#ECF3F7"/>\n<path id="Fill 49" fill-rule="evenodd" clip-rule="evenodd" d="M88.5057 629.683H10.2122C4.57166 629.683 -6.96186e-07 625.655 -6.96186e-07 620.685V116.977C-6.96186e-07 112.007 1.58629 106.062 3.40406 101.98C3.40406 101.98 58.2027 0.263948 86.1978 1.51686e-08L88.5057 629.683Z" transform="translate(852.609 87)" fill="#DBEBF3"/>\n<path id="Fill 51" fill-rule="evenodd" clip-rule="evenodd" d="M-3.40807e-06 39.446C-3.40807e-06 39.446 46.7903 57.6446 107.95 56.5804L111.517 12.1614C111.517 12.1614 59.3925 11.5088 16.4043 -8.21981e-06C16.1495 1.17798 2.22551 19.1624 -3.40807e-06 39.446Z" transform="translate(834.908 702.527)" fill="#E8EEF2"/>\n<path id="Fill 53" fill-rule="evenodd" clip-rule="evenodd" d="M0.0979023 56.5802L1.13441e-06 12.1482C1.13441e-06 12.1482 44.3999 11.4837 87.1184 -8.21981e-06C87.3716 1.18208 98.6851 19.2774 100.897 39.5166C100.897 39.5166 60.8688 57.6454 0.0979023 56.5802Z" transform="translate(939.345 702.527)" fill="#DFE7EC"/>\n<path id="Fill 55" fill-rule="evenodd" clip-rule="evenodd" d="M38.9425 6.76124e-06C38.9425 6.76124e-06 6.71944 31.2159 -9.10924e-07 37.0672V128.775C-9.10924e-07 128.775 1.24982 152.181 19.7484 152.181C36.2984 152.181 38.3411 127.792 38.3411 127.792L38.9425 6.76124e-06Z" transform="translate(771.184 495.49)" fill="#C6D4DB"/>\n<path id="Fill 57" fill-rule="evenodd" clip-rule="evenodd" d="M2.74589e-06 6.76124e-06C2.74589e-06 6.76124e-06 32.3393 31.2159 38.9425 37.0672V128.775C38.9425 128.775 37.0375 152.181 18.8588 152.181C2.59508 152.181 0.590985 127.792 0.590985 127.792L2.74589e-06 6.76124e-06Z" transform="translate(1072.1 495.49)" fill="#C6D4DB"/>\n<path id="Fill 59" fill-rule="evenodd" clip-rule="evenodd" d="M-7.74116e-06 12.9166C-7.74116e-06 12.9166 12.0794 -0.054164 21.8957 0.000170215C31.7153 0.057523 44.2528 12.1288 44.2528 12.1288C44.2528 12.1288 36.1399 15.6726 21.9805 15.6726C7.82111 15.6726 -7.74116e-06 12.9166 -7.74116e-06 12.9166Z" transform="translate(916.333 87)" fill="#CADCE6"/>\n<path id="speed line1" fill-rule="evenodd" clip-rule="evenodd" d="M15.931 87.0236C15.931 91.7365 12.3657 95.5553 7.96551 95.5553C3.56536 95.5553 8.54447e-07 91.7365 8.54447e-07 87.0236V8.53169C8.54447e-07 3.81877 3.56536 -1.35225e-05 7.96551 -1.35225e-05C12.3657 -1.35225e-05 15.931 3.81877 15.931 8.53169V87.0236Z" transform="translate(737.552 672.445)" fill="#C6D4D8"/>\n<path id="speed line4" fill-rule="evenodd" clip-rule="evenodd" d="M15.931 87.0236C15.931 91.7365 12.3657 95.5553 7.96551 95.5553C3.56536 95.5553 -1.66264e-05 91.7365 -1.66264e-05 87.0236V8.53169C-1.66264e-05 3.81877 3.56536 -1.35225e-05 7.96551 -1.35225e-05C12.3657 -1.35225e-05 15.931 3.81877 15.931 8.53169V87.0236Z" transform="translate(1125.21 672.445)" fill="#C6D4D8"/>\n<path id="speed line2" fill-rule="evenodd" clip-rule="evenodd" d="M14.1609 19.9073C14.1609 23.5703 10.9889 26.5431 7.08046 26.5431C3.17205 26.5431 -9.10924e-07 23.5703 -9.10924e-07 19.9073V6.63577C-9.10924e-07 2.97281 3.17205 -1.40973e-05 7.08046 -1.40973e-05C10.9889 -1.40973e-05 14.1609 2.97281 14.1609 6.63577V19.9073Z" transform="translate(771.184 713.144)" fill="#C6D4D8"/>\n<path id="speed line3" fill-rule="evenodd" clip-rule="evenodd" d="M14.1609 19.9073C14.1609 23.5703 10.9889 26.5431 7.08045 26.5431C3.17204 26.5431 -5.24352e-06 23.5703 -5.24352e-06 19.9073V6.63577C-5.24352e-06 2.97281 3.17204 -1.40973e-05 7.08045 -1.40973e-05C10.9889 -1.40973e-05 14.1609 2.97281 14.1609 6.63577V19.9073Z" transform="translate(1095.11 713.144)" fill="#C6D4D8"/>\n</g>\n<path id="Line" d="M2.83537e-06 366.765L102.272 335.166V0" transform="translate(815.217 214.827)" stroke="#BFC7D3" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>\n<path id="Line_2" d="M0 366.765L105.381 303.735V0" transform="translate(1067.27 253.978) scale(-1 1)" stroke="#BFC7D3" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>\n<g id="circles">\n<g id="orange circle">\n<path id="Vector" d="M23.2105 46.4665C36.0293 46.4665 46.421 36.0646 46.421 23.2333C46.421 10.4019 36.0293 0 23.2105 0C10.3917 0 0 10.4019 0 23.2333C0 36.0646 10.3917 46.4665 23.2105 46.4665Z" transform="translate(792.79 556.688)" fill="#F3958A"/>\n<path id="Vector_2" d="M28.1842 56.4236C43.7499 56.4236 56.3684 43.7928 56.3684 28.2118C56.3684 12.6309 43.7499 0 28.1842 0C12.6185 0 0 12.6309 0 28.2118C0 43.7928 12.6185 56.4236 28.1842 56.4236Z" transform="translate(787.816 551.709)" stroke="#F8C0BA" stroke-width="9"/>\n</g>\n<g id="pink circle">\n<path id="Vector_3" d="M23.2105 46.4665C36.0293 46.4665 46.421 36.0646 46.421 23.2333C46.421 10.4019 36.0293 0 23.2105 0C10.3917 0 0 10.4019 0 23.2333C0 36.0646 10.3917 46.4665 23.2105 46.4665Z" transform="translate(1062.47 613.112)" fill="#FF96E5"/>\n<path id="Vector_4" d="M28.1842 56.4236C43.7499 56.4236 56.3684 43.7928 56.3684 28.2118C56.3684 12.6309 43.7499 0 28.1842 0C12.6185 0 0 12.6309 0 28.2118C0 43.7928 12.6185 56.4236 28.1842 56.4236Z" transform="translate(1057.5 608.133)" stroke="#FCBEED" stroke-width="9"/>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n<g id="Group 3">\n<g id="Big Data" transform="translate(1247 489)">\n<path d="M20.6 25.28C22.2533 25.76 23.52 26.6 24.4 27.8C25.3067 29 25.76 30.48 25.76 32.24C25.76 34.6667 24.8933 36.5733 23.16 37.96C21.4533 39.32 19.0667 40 16 40H3.08V11.52H15.6C18.5333 11.52 20.84 12.1867 22.52 13.52C24.2 14.8267 25.04 16.64 25.04 18.96C25.04 20.4533 24.64 21.76 23.84 22.88C23.0667 23.9733 21.9867 24.7733 20.6 25.28ZM8.12 23.52H14.76C18.3333 23.52 20.12 22.1867 20.12 19.52C20.12 18.1867 19.68 17.1867 18.8 16.52C17.92 15.8533 16.5733 15.52 14.76 15.52H8.12V23.52ZM15.44 36C17.3067 36 18.6667 35.6667 19.52 35C20.4 34.3333 20.84 33.28 20.84 31.84C20.84 30.3733 20.4 29.2933 19.52 28.6C18.6667 27.9067 17.3067 27.56 15.44 27.56H8.12V36H15.44ZM30.3372 19.8H35.2972V40H30.3372V19.8ZM35.5772 10.64V15.56H30.0172V10.64H35.5772ZM60.2869 19.8V39.36C60.2869 42.5067 59.4202 44.8933 57.6869 46.52C55.9535 48.1467 53.4069 48.96 50.0469 48.96C46.9269 48.96 44.1802 48.3067 41.8069 47L42.6069 43.2C45.0602 44.48 47.5002 45.12 49.9269 45.12C53.5269 45.12 55.3269 43.3333 55.3269 39.76V35.76C54.7135 36.8533 53.8202 37.7467 52.6469 38.44C51.4735 39.1067 50.1535 39.44 48.6869 39.44C46.9269 39.44 45.3535 39.0267 43.9669 38.2C42.6069 37.3467 41.5402 36.16 40.7669 34.64C40.0202 33.0933 39.6469 31.3333 39.6469 29.36C39.6469 27.3867 40.0202 25.64 40.7669 24.12C41.5402 22.5733 42.6069 21.3867 43.9669 20.56C45.3535 19.7067 46.9269 19.28 48.6869 19.28C50.1802 19.28 51.5002 19.6 52.6469 20.24C53.8202 20.8533 54.7135 21.72 55.3269 22.84V19.8H60.2869ZM50.0069 35.52C51.6602 35.52 52.9535 34.9733 53.8869 33.88C54.8469 32.7867 55.3269 31.28 55.3269 29.36C55.3269 27.44 54.8602 25.9333 53.9269 24.84C52.9935 23.7467 51.6869 23.2 50.0069 23.2C48.3535 23.2 47.0469 23.7467 46.0869 24.84C45.1535 25.9333 44.6869 27.44 44.6869 29.36C44.6869 31.28 45.1535 32.7867 46.0869 33.88C47.0469 34.9733 48.3535 35.52 50.0069 35.52Z" fill="white"/>\n<path d="M77.0253 11.52H87.5053C92.172 11.52 95.7853 12.76 98.3453 15.24C100.932 17.72 102.225 21.2133 102.225 25.72C102.225 30.2533 100.932 33.7733 98.3453 36.28C95.7853 38.76 92.172 40 87.5053 40H77.0253V11.52ZM87.1853 35.8C93.7453 35.8 97.0253 32.44 97.0253 25.72C97.0253 19.0533 93.7453 15.72 87.1853 15.72H82.1853V35.8H87.1853ZM126.454 19.8V40H121.534V36.76C120.921 37.88 120.041 38.76 118.894 39.4C117.747 40.0133 116.441 40.32 114.974 40.32C113.214 40.32 111.654 39.8933 110.294 39.04C108.934 38.1867 107.881 36.9733 107.134 35.4C106.387 33.8267 106.014 32 106.014 29.92C106.014 27.84 106.387 26 107.134 24.4C107.907 22.7733 108.974 21.52 110.334 20.64C111.694 19.7333 113.241 19.28 114.974 19.28C116.441 19.28 117.747 19.6 118.894 20.24C120.041 20.8533 120.921 21.72 121.534 22.84V19.8H126.454ZM116.334 36.4C117.987 36.4 119.267 35.8267 120.174 34.68C121.081 33.5333 121.534 31.92 121.534 29.84C121.534 27.7067 121.081 26.0667 120.174 24.92C119.267 23.7733 117.974 23.2 116.294 23.2C114.641 23.2 113.347 23.8 112.414 25C111.507 26.1733 111.054 27.8133 111.054 29.92C111.054 32 111.507 33.6 112.414 34.72C113.347 35.84 114.654 36.4 116.334 36.4ZM138.26 23.56V32.6C138.26 34.9733 139.366 36.16 141.58 36.16C142.193 36.16 142.86 36.0533 143.58 35.84V39.8C142.7 40.12 141.633 40.28 140.38 40.28C138.086 40.28 136.326 39.64 135.1 38.36C133.873 37.08 133.26 35.24 133.26 32.84V23.56H129.38V19.8H133.26V14.88L138.26 13.2V19.8H143.62V23.56H138.26ZM166.376 19.8V40H161.456V36.76C160.843 37.88 159.963 38.76 158.816 39.4C157.669 40.0133 156.363 40.32 154.896 40.32C153.136 40.32 151.576 39.8933 150.216 39.04C148.856 38.1867 147.803 36.9733 147.056 35.4C146.309 33.8267 145.936 32 145.936 29.92C145.936 27.84 146.309 26 147.056 24.4C147.829 22.7733 148.896 21.52 150.256 20.64C151.616 19.7333 153.163 19.28 154.896 19.28C156.363 19.28 157.669 19.6 158.816 20.24C159.963 20.8533 160.843 21.72 161.456 22.84V19.8H166.376ZM156.256 36.4C157.909 36.4 159.189 35.8267 160.096 34.68C161.003 33.5333 161.456 31.92 161.456 29.84C161.456 27.7067 161.003 26.0667 160.096 24.92C159.189 23.7733 157.896 23.2 156.216 23.2C154.563 23.2 153.269 23.8 152.336 25C151.429 26.1733 150.976 27.8133 150.976 29.92C150.976 32 151.429 33.6 152.336 34.72C153.269 35.84 154.576 36.4 156.256 36.4Z" fill="#FB8DD1"/>\n</g>\n<g id="Group 2">\n<g id="Vector_5" filter="url(#filter0_d)">\n<path d="M58 116C90.0325 116 116 90.0325 116 58C116 25.9675 90.0325 0 58 0C25.9675 0 0 25.9675 0 58C0 90.0325 25.9675 116 58 116Z" transform="translate(1247 344)" fill="url(#paint1_linear)"/>\n</g>\n<g id="Group">\n<g id="Page 1">\n<g id="Derniere version IT3">\n<g id="rocket section_2">\n<g id="rocket bigdata">\n<g id="Group 11">\n<g id="database">\n<path id="Oval" d="M22 14.2258C34.1503 14.2258 44 11.0413 44 7.1129C44 3.18456 34.1503 0 22 0C9.84974 0 0 3.18456 0 7.1129C0 11.0413 9.84974 14.2258 22 14.2258Z" transform="translate(1283 378)" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>\n<path id="Shape" d="M0 0V33.8444C0 37.8735 9.81538 41.0968 22 41.0968C34.1846 41.0968 44 37.8735 44 33.8444V0" transform="translate(1283 385.903)" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>\n<path id="Shape_2" d="M44 0C44 4.12342 34.1846 7.42216 22 7.42216C14.6667 7.31907 0 6.00645 0 1.58065M44 11.5456C44 15.669 34.1846 18.9677 22 18.9677C9.81538 18.9677 0 15.669 0 11.5456" transform="translate(1283 396.968)" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n<g id="Group 4">\n<g id="Machine Learning" transform="translate(298 642)">\n<path d="M31.2853 11.52V40H26.7253V22.32L19.1653 40H15.7653L8.16531 22.52V40H3.60531V11.52H7.68531L17.4853 33.8L27.2053 11.52H31.2853ZM56.4697 19.8V40H51.5497V36.76C50.9364 37.88 50.0564 38.76 48.9097 39.4C47.763 40.0133 46.4564 40.32 44.9897 40.32C43.2297 40.32 41.6697 39.8933 40.3097 39.04C38.9497 38.1867 37.8964 36.9733 37.1497 35.4C36.403 33.8267 36.0297 32 36.0297 29.92C36.0297 27.84 36.403 26 37.1497 24.4C37.923 22.7733 38.9897 21.52 40.3497 20.64C41.7097 19.7333 43.2564 19.28 44.9897 19.28C46.4564 19.28 47.763 19.6 48.9097 20.24C50.0564 20.8533 50.9364 21.72 51.5497 22.84V19.8H56.4697ZM46.3497 36.4C48.003 36.4 49.283 35.8267 50.1897 34.68C51.0964 33.5333 51.5497 31.92 51.5497 29.84C51.5497 27.7067 51.0964 26.0667 50.1897 24.92C49.283 23.7733 47.9897 23.2 46.3097 23.2C44.6564 23.2 43.363 23.8 42.4297 25C41.523 26.1733 41.0697 27.8133 41.0697 29.92C41.0697 32 41.523 33.6 42.4297 34.72C43.363 35.84 44.6697 36.4 46.3497 36.4ZM71.0753 40.32C68.9686 40.32 67.142 39.8933 65.5953 39.04C64.0486 38.1867 62.862 36.9867 62.0353 35.44C61.2086 33.8667 60.7953 32.0267 60.7953 29.92C60.7953 27.8133 61.222 25.96 62.0753 24.36C62.9553 22.76 64.182 21.52 65.7553 20.64C67.3553 19.7333 69.1953 19.28 71.2753 19.28C72.7153 19.28 74.102 19.5067 75.4353 19.96C76.7953 20.4133 77.8753 21.04 78.6753 21.84L77.2753 25.36C76.422 24.6667 75.5153 24.1467 74.5553 23.8C73.5953 23.4267 72.6486 23.24 71.7153 23.24C69.902 23.24 68.4886 23.8133 67.4753 24.96C66.462 26.08 65.9553 27.7067 65.9553 29.84C65.9553 31.9733 66.4486 33.6 67.4353 34.72C68.4486 35.84 69.8753 36.4 71.7153 36.4C72.6486 36.4 73.5953 36.2133 74.5553 35.84C75.5153 35.4667 76.422 34.9333 77.2753 34.24L78.6753 37.76C77.822 38.56 76.7153 39.1867 75.3553 39.64C73.9953 40.0933 72.5686 40.32 71.0753 40.32ZM93.5925 19.28C98.4192 19.28 100.832 22.0533 100.832 27.6V40H95.8325V27.84C95.8325 26.24 95.5258 25.08 94.9125 24.36C94.2992 23.6133 93.3525 23.24 92.0725 23.24C90.5525 23.24 89.3258 23.7333 88.3925 24.72C87.4592 25.68 86.9925 26.96 86.9925 28.56V40H82.0325V10.56H86.9925V22.72C87.6858 21.6267 88.6058 20.7867 89.7525 20.2C90.8992 19.5867 92.1792 19.28 93.5925 19.28ZM106.134 19.8H111.094V40H106.134V19.8ZM111.374 10.64V15.56H105.814V10.64H111.374ZM128.124 19.28C132.95 19.28 135.364 22.0533 135.364 27.6V40H130.364V27.84C130.364 26.24 130.057 25.08 129.444 24.36C128.83 23.6133 127.884 23.24 126.604 23.24C125.084 23.24 123.857 23.7333 122.924 24.72C121.99 25.68 121.524 26.96 121.524 28.56V40H116.564V25.52C116.564 23.3867 116.457 21.48 116.244 19.8H120.924L121.284 23.12C121.977 21.8933 122.91 20.9467 124.084 20.28C125.284 19.6133 126.63 19.28 128.124 19.28ZM158.345 30.16H144.425C144.532 32.32 145.065 33.92 146.025 34.96C147.012 35.9733 148.465 36.48 150.385 36.48C152.599 36.48 154.652 35.76 156.545 34.32L157.985 37.76C157.025 38.5333 155.839 39.16 154.425 39.64C153.039 40.0933 151.625 40.32 150.185 40.32C146.879 40.32 144.279 39.3867 142.385 37.52C140.492 35.6533 139.545 33.0933 139.545 29.84C139.545 27.7867 139.959 25.96 140.785 24.36C141.612 22.76 142.772 21.52 144.265 20.64C145.759 19.7333 147.452 19.28 149.345 19.28C152.119 19.28 154.305 20.1867 155.905 22C157.532 23.7867 158.345 26.2533 158.345 29.4V30.16ZM149.465 22.88C148.132 22.88 147.039 23.28 146.185 24.08C145.359 24.8533 144.825 25.9867 144.585 27.48H153.985C153.825 25.96 153.359 24.8133 152.585 24.04C151.839 23.2667 150.799 22.88 149.465 22.88Z" fill="white"/>\n<path d="M173.916 11.52H179.076V35.76H192.396V40H173.916V11.52ZM213.502 30.16H199.582C199.688 32.32 200.222 33.92 201.182 34.96C202.168 35.9733 203.622 36.48 205.542 36.48C207.755 36.48 209.808 35.76 211.702 34.32L213.142 37.76C212.182 38.5333 210.995 39.16 209.582 39.64C208.195 40.0933 206.782 40.32 205.342 40.32C202.035 40.32 199.435 39.3867 197.542 37.52C195.648 35.6533 194.702 33.0933 194.702 29.84C194.702 27.7867 195.115 25.96 195.942 24.36C196.768 22.76 197.928 21.52 199.422 20.64C200.915 19.7333 202.608 19.28 204.502 19.28C207.275 19.28 209.462 20.1867 211.062 22C212.688 23.7867 213.502 26.2533 213.502 29.4V30.16ZM204.622 22.88C203.288 22.88 202.195 23.28 201.342 24.08C200.515 24.8533 199.982 25.9867 199.742 27.48H209.142C208.982 25.96 208.515 24.8133 207.742 24.04C206.995 23.2667 205.955 22.88 204.622 22.88ZM237.056 19.8V40H232.136V36.76C231.522 37.88 230.642 38.76 229.496 39.4C228.349 40.0133 227.042 40.32 225.576 40.32C223.816 40.32 222.256 39.8933 220.896 39.04C219.536 38.1867 218.482 36.9733 217.736 35.4C216.989 33.8267 216.616 32 216.616 29.92C216.616 27.84 216.989 26 217.736 24.4C218.509 22.7733 219.576 21.52 220.936 20.64C222.296 19.7333 223.842 19.28 225.576 19.28C227.042 19.28 228.349 19.6 229.496 20.24C230.642 20.8533 231.522 21.72 232.136 22.84V19.8H237.056ZM226.936 36.4C228.589 36.4 229.869 35.8267 230.776 34.68C231.682 33.5333 232.136 31.92 232.136 29.84C232.136 27.7067 231.682 26.0667 230.776 24.92C229.869 23.7733 228.576 23.2 226.896 23.2C225.242 23.2 223.949 23.8 223.016 25C222.109 26.1733 221.656 27.8133 221.656 29.92C221.656 32 222.109 33.6 223.016 34.72C223.949 35.84 225.256 36.4 226.936 36.4ZM253.381 19.32C254.155 19.32 254.821 19.4267 255.381 19.64L255.341 24.2C254.488 23.8533 253.608 23.68 252.701 23.68C250.995 23.68 249.688 24.1733 248.781 25.16C247.901 26.1467 247.461 27.4533 247.461 29.08V40H242.501V25.52C242.501 23.3867 242.395 21.48 242.181 19.8H246.861L247.261 23.36C247.768 22.0533 248.568 21.0533 249.661 20.36C250.755 19.6667 251.995 19.32 253.381 19.32ZM269.725 19.28C274.552 19.28 276.965 22.0533 276.965 27.6V40H271.965V27.84C271.965 26.24 271.659 25.08 271.045 24.36C270.432 23.6133 269.485 23.24 268.205 23.24C266.685 23.24 265.459 23.7333 264.525 24.72C263.592 25.68 263.125 26.96 263.125 28.56V40H258.165V25.52C258.165 23.3867 258.059 21.48 257.845 19.8H262.525L262.885 23.12C263.579 21.8933 264.512 20.9467 265.685 20.28C266.885 19.6133 268.232 19.28 269.725 19.28ZM282.267 19.8H287.227V40H282.267V19.8ZM287.507 10.64V15.56H281.947V10.64H287.507ZM304.257 19.28C309.083 19.28 311.497 22.0533 311.497 27.6V40H306.497V27.84C306.497 26.24 306.19 25.08 305.577 24.36C304.963 23.6133 304.017 23.24 302.737 23.24C301.217 23.24 299.99 23.7333 299.057 24.72C298.123 25.68 297.657 26.96 297.657 28.56V40H292.697V25.52C292.697 23.3867 292.59 21.48 292.377 19.8H297.057L297.417 23.12C298.11 21.8933 299.043 20.9467 300.217 20.28C301.417 19.6133 302.763 19.28 304.257 19.28ZM336.318 19.8V39.36C336.318 42.5067 335.451 44.8933 333.718 46.52C331.985 48.1467 329.438 48.96 326.078 48.96C322.958 48.96 320.211 48.3067 317.838 47L318.638 43.2C321.091 44.48 323.531 45.12 325.958 45.12C329.558 45.12 331.358 43.3333 331.358 39.76V35.76C330.745 36.8533 329.851 37.7467 328.678 38.44C327.505 39.1067 326.185 39.44 324.718 39.44C322.958 39.44 321.385 39.0267 319.998 38.2C318.638 37.3467 317.571 36.16 316.798 34.64C316.051 33.0933 315.678 31.3333 315.678 29.36C315.678 27.3867 316.051 25.64 316.798 24.12C317.571 22.5733 318.638 21.3867 319.998 20.56C321.385 19.7067 322.958 19.28 324.718 19.28C326.211 19.28 327.531 19.6 328.678 20.24C329.851 20.8533 330.745 21.72 331.358 22.84V19.8H336.318ZM326.038 35.52C327.691 35.52 328.985 34.9733 329.918 33.88C330.878 32.7867 331.358 31.28 331.358 29.36C331.358 27.44 330.891 25.9333 329.958 24.84C329.025 23.7467 327.718 23.2 326.038 23.2C324.385 23.2 323.078 23.7467 322.118 24.84C321.185 25.9333 320.718 27.44 320.718 29.36C320.718 31.28 321.185 32.7867 322.118 33.88C323.078 34.9733 324.385 35.52 326.038 35.52Z" fill="#F18B85"/>\n</g>\n<g id="Group 2_2">\n<g id="Vector_6" filter="url(#filter1_d)">\n<path d="M58 116C90.0325 116 116 90.0325 116 58C116 25.9675 90.0325 0 58 0C25.9675 0 0 25.9675 0 58C0 90.0325 25.9675 116 58 116Z" transform="translate(521 495)" fill="url(#paint2_linear)"/>\n</g>\n<g id="Group_2">\n<g id="Page 1_2">\n<g id="Derniere version IT3_2">\n<g id="rocket section_3">\n<g id="rocket bigdata_2">\n<g id="Group 11_2">\n<g id="database_2">\n<path id="Oval_2" d="M22 14.2258C34.1503 14.2258 44 11.0413 44 7.1129C44 3.18456 34.1503 0 22 0C9.84974 0 0 3.18456 0 7.1129C0 11.0413 9.84974 14.2258 22 14.2258Z" transform="translate(557 529)" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>\n<path id="Shape_3" d="M0 0V33.8444C0 37.8735 9.81538 41.0968 22 41.0968C34.1846 41.0968 44 37.8735 44 33.8444V0" transform="translate(557 536.903)" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>\n<path id="Shape_4" d="M44 0C44 4.12342 34.1846 7.42216 22 7.42216C14.6667 7.31907 0 6.00645 0 1.58065M44 11.5456C44 15.669 34.1846 18.9677 22 18.9677C9.81538 18.9677 0 15.669 0 11.5456" transform="translate(557 547.968)" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n<defs>\n<filter id="filter0_d" x="1217" y="318" width="176" height="176" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 255 0"/>\n<feOffset dy="4"/>\n<feGaussianBlur stdDeviation="15"/>\n<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>\n<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>\n<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>\n</filter>\n<filter id="filter1_d" x="491" y="469" width="176" height="176" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n<feFlood flood-opacity="0" result="BackgroundImageFix"/>\n<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 255 0"/>\n<feOffset dy="4"/>\n<feGaussianBlur stdDeviation="15"/>\n<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>\n<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>\n<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>\n</filter>\n<linearGradient id="paint0_linear" x2="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-2377.05 857.455 -1523.75 -5794.04 3138.92 2791.63)">\n<stop stop-color="#7B6BFF"/>\n<stop offset="1" stop-color="#3E73FB"/>\n</linearGradient>\n<linearGradient id="paint1_linear" x2="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(111 -81.25) scale(244.735) rotate(48.3956)">\n<stop stop-color="#FF96E5"/>\n<stop offset="1" stop-color="#E15F6B"/>\n</linearGradient>\n<linearGradient id="paint2_linear" x2="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(111 -81.25) scale(244.735) rotate(48.3956)">\n<stop stop-color="#F3958A"/>\n<stop offset="1" stop-color="#E15F6B"/>\n</linearGradient>\n<clipPath id="clip0">\n<rect width="1920" height="1080" fill="white"/>\n</clipPath>\n</defs>\n</svg>\n'
      }
    ],
    selectedFrame: null,
    fluid: {
      videos: [],
      audios: [],
      animationsIn: [],
      animationsOut: [],
      urls: []
    },
    hightlightedLayer: {},
    currentSelectedLayer: {},
    hasChanges: false,
    isPlaying: false
  }
};

const mutations = {
  setZoomLevel(state, value) {
    state.editor.settings.zoomLevel = value;
  },
  SET_VIDEO_PROPERTY(state, layer) {
    state.editor.fluid.videos[layer.index][layer.key] = layer.value;
  },
  SET_AUDIO_PROPERTY(state, layer) {
    state.editor.fluid.audios[layer.index][layer.key] = layer.value;
  },
  ADD_VIDEO(state, video) {
    state.editor.fluid.videos.push(video);
  },
  ADD_ANIMATION_IN(state, animation) {
    state.editor.fluid.animationsIn.push(animation);
  },
  ADD_ANIMATION_OUT(state, animation) {
    state.editor.fluid.animationsOut.push(animation);
  },
  ADD_AUDIO(state, audio) {
    state.editor.fluid.audios.push(audio);
  },
  REMOVE_VIDEO(state) {
    state.editor.fluid.videos.pop();
  },
  REMOVE_AUDIO(state) {
    state.editor.fluid.audios.pop();
  },
  REMOVE_ANIMATION_IN(state, index) {
    if (index !== undefined && index !== null) {
      state.editor.fluid.animationsIn.splice(index, 1);
    } else {
      state.editor.fluid.animationsIn.pop();
    }
  },
  REMOVE_ANIMATION_OUT(state, index) {
    if (index !== undefined && index !== null) {
      state.editor.fluid.animationsOut.splice(index, 1);
    } else {
      state.editor.fluid.animationsOut.pop();
    }
  },
  SET_ANIMATION_IN_PROPERTY(state, layer) {
    state.editor.fluid.animationsIn[layer.index][layer.key] = layer.value;
  },
  SET_ANIMATION_OUT_PROPERTY(state, layer) {
    state.editor.fluid.animationsOut[layer.index][layer.key] = layer.value;
  },
  ADD_URL(state, url) {
    state.editor.fluid.urls.push(url);
  },
  REMOVE_URL(state) {
    state.editor.fluid.urls.pop();
  },
  SET_URL_PROPERTY(state, layer) {
    state.editor.fluid.urls[layer.index]["websiteUrl"] = layer.value;
  },
  SET_FRAMES(state, frames) {
    state.editor.frames = frames;
  },
  SET_SELECTED_FRAME(state, index) {
    state.editor.selectedFrame = state.editor.frames[index];
  },
  ENTERING_PLAY_MODE(state) {
    state.editor.isPlaying = true;
  },
  TOGGLE_LAYER_VISIBILITY(state) {
    if (state.editor.hightlightedLayer.visible === undefined) {
      Vue.set(state.editor.hightlightedLayer, "visible", true);
    }
    state.editor.hightlightedLayer.visible = !state.editor.hightlightedLayer
      .visible;
  },
  SET_CURRENT_HIGHLIGHTED_LAYER(state, layer) {
    state.editor.hightlightedLayer = layer;
  },
  SET_CURRENT_SELECTED_LAYER(state, layer) {
    state.editor.currentSelectedLayer = layer;
  }
};

const actions = {
  addVideo({ commit }, data) {
    commit("ADD_VIDEO", data);
  },
  addAudio({ commit }, data) {
    commit("ADD_AUDIO", data);
  },
  removeAudio({ commit }) {
    commit("REMOVE_AUDIO");
  },
  removeVideo({ commit }) {
    commit("REMOVE_VIDEO");
  },
  addAnimationIn({ commit }, animation) {
    commit("ADD_ANIMATION_IN", animation);
  },
  addAnimationOut({ commit }, animation) {
    commit("ADD_ANIMATION_OUT", animation);
  },
  removeAnimationIn({ commit }, index) {
    commit("REMOVE_ANIMATION_IN", index);
  },
  removeAnimationOut({ commit }, index) {
    commit("REMOVE_ANIMATION_OUT", index);
  },
  addUrl({ commit }, url) {
    commit("ADD_URL", url);
  },
  removeUrl({ commit }) {
    commit("REMOVE_URL");
  },
  setFrames({ commit }, frames) {
    commit("SET_FRAMES", frames);
  },
  setSelectedFrame({ commit }, index) {
    commit("SET_SELECTED_FRAME", index);
  },
  enterPlayerMode({ commit }) {
    commit("ENTERING_PLAY_MODE");
    ipcRenderer.send("ENTERING_PLAY_MODE");
  },
  toggleLayerVisibility({ commit }) {
    commit("TOGGLE_LAYER_VISIBILITY");
  },
  setCurrentHighlightedLayer({ commit }, layer) {
    commit("SET_CURRENT_HIGHLIGHTED_LAYER", layer);
  },
  setCurrentSelectedLayer({ commit }, layer) {
    commit("SET_CURRENT_SELECTED_LAYER", layer);
  }
};

const getters = {
  availableZoomLevels: state => state.editor.settings.availableZoomLevels,
  zoomLevel: state => state.editor.settings.zoomLevel,
  fluid: state => state.editor.fluid,
  slides: state => state.editor.frames,
  currentSelectedLayer: state => state.editor.currentSelectedLayer,
  currentSlide: state => state.editor.selectedFrame
};

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  strict: process.env.NODE_ENV !== "production"
});
