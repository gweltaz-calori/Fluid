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
        id: "1:3",
        name: "Instagram Story",
        type: "FRAME",
        blendMode: "PASS_THROUGH",
        children: [
          {
            id: "1:6",
            name: "Group",
            type: "GROUP",
            blendMode: "PASS_THROUGH",
            children: [
              {
                id: "1:4",
                name: "Rectangle",
                type: "RECTANGLE",
                blendMode: "PASS_THROUGH",
                absoluteBoundingBox: {
                  x: 160.9708251953125,
                  y: -624.6953735351562,
                  width: 516.058349609375,
                  height: 185.42356872558594
                },
                constraints: { vertical: "TOP", horizontal: "LEFT" },
                fills: [
                  {
                    type: "SOLID",
                    blendMode: "NORMAL",
                    color: {
                      r: 1,
                      g: 0.22745098039215686,
                      b: 0.22745098039215686,
                      a: 1
                    }
                  }
                ],
                strokes: [],
                strokeWeight: 1,
                strokeAlign: "INSIDE",
                exportSettings: [],
                effects: [],
                cornerRadius: 92.71178436279297,
                rectangleCornerRadii: [
                  92.71178436279297,
                  92.71178436279297,
                  92.71178436279297,
                  92.71178436279297
                ]
              },
              {
                id: "1:5",
                name: "Rectangle",
                type: "RECTANGLE",
                blendMode: "PASS_THROUGH",
                absoluteBoundingBox: {
                  x: 160.9708251953125,
                  y: -402.72821044921875,
                  width: 516.058349609375,
                  height: 185.42356872558594
                },
                constraints: { vertical: "TOP", horizontal: "LEFT" },
                fills: [
                  {
                    type: "SOLID",
                    blendMode: "NORMAL",
                    color: {
                      r: 1,
                      g: 0.6823529411764706,
                      b: 0.6823529411764706,
                      a: 1
                    }
                  }
                ],
                strokes: [],
                strokeWeight: 1,
                strokeAlign: "INSIDE",
                exportSettings: [],
                effects: [],
                cornerRadius: 92.71178436279297,
                rectangleCornerRadii: [
                  92.71178436279297,
                  92.71178436279297,
                  92.71178436279297,
                  92.71178436279297
                ]
              }
            ],
            absoluteBoundingBox: {
              x: 160.9708251953125,
              y: -624.6953735351562,
              width: 516.058349609375,
              height: 407.3907470703125
            },
            constraints: { vertical: "TOP", horizontal: "LEFT" },
            backgroundColor: { r: 0, g: 0, b: 0, a: 0 },
            clipsContent: false,
            exportSettings: [],
            effects: []
          }
        ],
        absoluteBoundingBox: { x: -541, y: -961, width: 1920, height: 1080 },
        constraints: { vertical: "TOP", horizontal: "LEFT" },
        backgroundColor: { r: 1, g: 1, b: 1, a: 1 },
        clipsContent: true,
        exportSettings: [],
        effects: [],
        svg:
          '<svg width="1920" height="1080" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">\n<rect width="1920" height="1080" fill="white"/>\n<rect width="516.058" height="185.424" rx="92.7118" transform="translate(701.971 336.305)" fill="#FF3A3A"/>\n<rect width="516.058" height="185.424" rx="92.7118" transform="translate(701.971 558.272)" fill="#FFAEAE"/>\n</svg>\n'
      },
      {
        id: "5:0",
        name: "Instagram Story",
        type: "FRAME",
        blendMode: "PASS_THROUGH",
        children: [
          {
            id: "5:24",
            name: "B",
            type: "TEXT",
            blendMode: "PASS_THROUGH",
            absoluteBoundingBox: {
              x: 1787.7466430664062,
              y: -771.0186920166016,
              width: 90,
              height: 169
            },
            constraints: { vertical: "TOP", horizontal: "LEFT" },
            fills: [
              {
                type: "SOLID",
                blendMode: "NORMAL",
                color: { r: 0, g: 0, b: 0, a: 1 }
              }
            ],
            strokes: [],
            strokeWeight: 1,
            strokeAlign: "OUTSIDE",
            exportSettings: [],
            effects: [],
            characters: "B",
            style: {
              fontFamily: "Roboto",
              fontPostScriptName: "Roboto-Regular",
              fontWeight: 400,
              fontSize: 144,
              textAlignHorizontal: "LEFT",
              textAlignVertical: "TOP",
              letterSpacing: 0,
              lineHeightPx: 168.75,
              lineHeightPercent: 100
            },
            characterStyleOverrides: [],
            styleOverrideTable: {}
          }
        ],
        absoluteBoundingBox: { x: 1419, y: -961, width: 1920, height: 1080 },
        constraints: { vertical: "TOP", horizontal: "LEFT" },
        backgroundColor: { r: 1, g: 1, b: 1, a: 1 },
        clipsContent: true,
        exportSettings: [],
        effects: [],
        svg:
          '<svg width="1920" height="1080" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">\n<rect width="1920" height="1080" fill="white"/>\n<path d="M11.8828 134V31.625H45.3516C56.4609 31.625 64.8047 33.9219 70.3828 38.5156C76.0078 43.1094 78.8203 49.9062 78.8203 58.9062C78.8203 63.6875 77.4609 67.9297 74.7422 71.6328C72.0234 75.2891 68.3203 78.125 63.6328 80.1406C69.1641 81.6875 73.5234 84.6406 76.7109 89C79.9453 93.3125 81.5625 98.4688 81.5625 104.469C81.5625 113.656 78.5859 120.875 72.6328 126.125C66.6797 131.375 58.2656 134 47.3906 134H11.8828ZM25.3828 86.1172V122.961H47.6719C53.9531 122.961 58.8984 121.344 62.5078 118.109C66.1641 114.828 67.9922 110.328 67.9922 104.609C67.9922 92.2812 61.2891 86.1172 47.8828 86.1172H25.3828ZM25.3828 75.2891H45.7734C51.6797 75.2891 56.3906 73.8125 59.9062 70.8594C63.4688 67.9062 65.25 63.8984 65.25 58.8359C65.25 53.2109 63.6094 49.1328 60.3281 46.6016C57.0469 44.0234 52.0547 42.7344 45.3516 42.7344H25.3828V75.2891Z" transform="translate(368.747 189.981)" fill="black"/>\n</svg>\n'
      },
      {
        id: "5:4",
        name: "Instagram Story",
        type: "FRAME",
        blendMode: "PASS_THROUGH",
        children: [
          {
            id: "5:27",
            name: "Group",
            type: "GROUP",
            blendMode: "PASS_THROUGH",
            children: [
              {
                id: "5:25",
                name: "Rectangle",
                type: "RECTANGLE",
                blendMode: "PASS_THROUGH",
                absoluteBoundingBox: {
                  x: 4339.00016784668,
                  y: -714.7362060546875,
                  width: 602.8918217141381,
                  height: 543.9039172087851
                },
                constraints: { vertical: "TOP", horizontal: "LEFT" },
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
                strokes: [],
                strokeWeight: 1,
                strokeAlign: "INSIDE",
                exportSettings: [],
                effects: []
              },
              {
                id: "5:26",
                name: "Rectangle",
                type: "RECTANGLE",
                blendMode: "PASS_THROUGH",
                absoluteBoundingBox: {
                  x: 3967.7838745117188,
                  y: -736.5205078125,
                  width: 602.8918217141381,
                  height: 543.9039172087851
                },
                constraints: { vertical: "TOP", horizontal: "LEFT" },
                fills: [
                  {
                    type: "SOLID",
                    blendMode: "NORMAL",
                    color: {
                      r: 1,
                      g: 0.5215686274509804,
                      b: 0.5215686274509804,
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
              x: 3967.7838745117188,
              y: -736.5205078125,
              width: 974.108154296875,
              height: 565.688232421875
            },
            constraints: { vertical: "TOP", horizontal: "LEFT" },
            backgroundColor: { r: 0, g: 0, b: 0, a: 0 },
            clipsContent: false,
            exportSettings: [],
            effects: []
          }
        ],
        absoluteBoundingBox: { x: 3379, y: -961, width: 1920, height: 1080 },
        constraints: { vertical: "TOP", horizontal: "LEFT" },
        backgroundColor: { r: 1, g: 1, b: 1, a: 1 },
        clipsContent: true,
        exportSettings: [],
        effects: [],
        svg:
          '<svg width="1920" height="1080" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">\n<rect width="1920" height="1080" fill="white"/>\n<rect width="500.335" height="339.177" transform="translate(1129.59 246.264) rotate(30)" fill="#C4C4C4"/>\n<rect width="500.335" height="339.177" transform="translate(758.373 224.479) rotate(30)" fill="#FF8585"/>\n</svg>\n'
      },
      {
        id: "5:8",
        name: "Instagram Story",
        type: "FRAME",
        blendMode: "PASS_THROUGH",
        children: [
          {
            id: "5:28",
            name: "Group",
            type: "GROUP",
            blendMode: "PASS_THROUGH",
            children: [
              {
                id: "5:29",
                name: "Rectangle",
                type: "RECTANGLE",
                blendMode: "PASS_THROUGH",
                absoluteBoundingBox: {
                  x: 6182.343265923605,
                  y: -602.1163355368786,
                  width: 543.9039305290107,
                  height: 602.8918239147878
                },
                constraints: { vertical: "TOP", horizontal: "LEFT" },
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
                strokes: [],
                strokeWeight: 1,
                strokeAlign: "INSIDE",
                exportSettings: [],
                effects: []
              },
              {
                id: "5:30",
                name: "Rectangle",
                type: "RECTANGLE",
                blendMode: "PASS_THROUGH",
                absoluteBoundingBox: {
                  x: 5871.752730421486,
                  y: -806.5900497436523,
                  width: 543.9039037385828,
                  height: 602.8918125826865
                },
                constraints: { vertical: "TOP", horizontal: "LEFT" },
                fills: [
                  {
                    type: "SOLID",
                    blendMode: "NORMAL",
                    color: {
                      r: 1,
                      g: 0.5215686274509804,
                      b: 0.5215686274509804,
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
              x: 5746.668884277344,
              y: -891.3843994140625,
              width: 1001.3625357317906,
              height: 892.1600094475652
            },
            constraints: { vertical: "TOP", horizontal: "LEFT" },
            backgroundColor: { r: 0, g: 0, b: 0, a: 0 },
            clipsContent: false,
            exportSettings: [],
            effects: []
          },
          {
            id: "5:31",
            name: "Rectangle",
            type: "RECTANGLE",
            blendMode: "PASS_THROUGH",
            absoluteBoundingBox: {
              x: 5441.404616769146,
              y: -324.70031929374727,
              width: 256.67204338710417,
              height: 284.5088404274402
            },
            constraints: { vertical: "TOP", horizontal: "LEFT" },
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
            strokes: [],
            strokeWeight: 1,
            strokeAlign: "INSIDE",
            exportSettings: [],
            effects: []
          }
        ],
        absoluteBoundingBox: { x: 5339, y: -961, width: 1920, height: 1080 },
        constraints: { vertical: "TOP", horizontal: "LEFT" },
        backgroundColor: { r: 1, g: 1, b: 1, a: 1 },
        clipsContent: true,
        exportSettings: [],
        effects: [],
        svg:
          '<svg width="1920" height="1080" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">\n<rect width="1920" height="1080" fill="white"/>\n<rect width="500.335" height="339.177" transform="translate(1387.25 528.472) rotate(120)" fill="#C4C4C4"/>\n<rect width="500.335" height="339.177" transform="translate(826.489 154.41) rotate(60)" fill="#FF8585"/>\n<rect width="236.112" height="160.06" transform="translate(359.077 716.33) rotate(120)" fill="#C4C4C4"/>\n</svg>\n'
      }
    ],
    selectedFrame: null,
    selectedLayer: {
      videos: [],
      audios: [],
      animationsIn: [],
      animationsOut: [],
      urls: []
    },
    hasChanges: false,
    isPlaying: false
  }
};

const mutations = {
  setZoomLevel(state, value) {
    state.editor.settings.zoomLevel = value;
  },
  SET_VIDEO_PROPERTY(state, layer) {
    state.editor.selectedLayer.videos[layer.index][layer.key] = layer.value;
  },
  SET_AUDIO_PROPERTY(state, layer) {
    state.editor.selectedLayer.audios[layer.index][layer.key] = layer.value;
  },
  ADD_VIDEO(state, video) {
    state.editor.selectedLayer.videos.push(video);
  },
  ADD_ANIMATION_IN(state, animation) {
    state.editor.selectedLayer.animationsIn.push(animation);
  },
  ADD_ANIMATION_OUT(state, animation) {
    state.editor.selectedLayer.animationsOut.push(animation);
  },
  ADD_AUDIO(state, audio) {
    state.editor.selectedLayer.audios.push(audio);
  },
  REMOVE_VIDEO(state) {
    state.editor.selectedLayer.videos.pop();
  },
  REMOVE_AUDIO(state) {
    state.editor.selectedLayer.audios.pop();
  },
  REMOVE_ANIMATION_IN(state, index) {
    if (index !== undefined && index !== null) {
      state.editor.selectedLayer.animationsIn.splice(index, 1);
    } else {
      state.editor.selectedLayer.animationsIn.pop();
    }
  },
  REMOVE_ANIMATION_OUT(state, index) {
    if (index !== undefined && index !== null) {
      state.editor.selectedLayer.animationsOut.splice(index, 1);
    } else {
      state.editor.selectedLayer.animationsOut.pop();
    }
  },
  SET_ANIMATION_IN_PROPERTY(state, layer) {
    state.editor.selectedLayer.animationsIn[layer.index][layer.key] =
      layer.value;
  },
  SET_ANIMATION_OUT_PROPERTY(state, layer) {
    state.editor.selectedLayer.animationsOut[layer.index][layer.key] =
      layer.value;
  },
  ADD_URL(state, url) {
    state.editor.selectedLayer.urls.push(url);
  },
  REMOVE_URL(state) {
    state.editor.selectedLayer.urls.pop();
  },
  SET_URL_PROPERTY(state, layer) {
    state.editor.selectedLayer.urls[layer.index]["websiteUrl"] = layer.value;
  },
  SET_FRAMES(state, frames) {
    state.editor.frames = frames;
  },
  SET_SELECTED_FRAME(state, index) {
    state.editor.selectedFrame = state.editor.frames[index];
  },
  ENTERING_PLAY_MODE(state) {
    state.editor.isPlaying = true;
  }
};

const actions = {
  setSelectedLayer({ commit }, layer) {
    commit("setSelectedLayer", layer);
  },
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
  }
};

const getters = {
  availableZoomLevels: state => state.editor.settings.availableZoomLevels,
  zoomLevel: state => state.editor.settings.zoomLevel,
  selectedLayer: state => state.editor.selectedLayer,
  slides: state => state.editor.frames,
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
