import Vue from "vue";
import Vuex from "vuex";
import { ipcRenderer } from "electron";

const state = {
  editor: {
    settings: {
      zoomLevel: 100,
      availableZoomLevels: [50, 75, 100]
    },
    frames: [],
    selectedFrame: {
      svg: ""
    },
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
    if (state.editor.frames[index]) {
      state.editor.selectedFrame = state.editor.frames[index];
    }
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
