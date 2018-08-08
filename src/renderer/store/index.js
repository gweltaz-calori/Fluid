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
    //index each node with his id
    nodesTree: {},
    selectedFrame: {},
    selectedLayers: [],
    highlightedLayer: null,
    fluid: {
      videos: [],
      audios: [],
      animationsIn: [],
      animationsOut: [],
      urls: []
    },
    canvasBounds: {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    }
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
  ADD_NODES_TO_SELECTION(state, nodeIds) {
    state.editor.selectedLayers.push(...nodeIds);
  },
  DESELECT_ALL_NODES(state) {
    state.editor.selectedLayers = [state.editor.selectedFrame.id];
  },
  SELECT_NODES(state, nodeIds) {
    state.editor.selectedLayers = [...nodeIds];
  },
  TOGGLE_NODE_VISIBILITY(state, nodeId) {
    const node = state.editor.nodesTree[nodeId];
    node.visible = !node.visible;
  },
  SET_NODES_TREE(state, tree) {
    state.editor.nodesTree = tree;
  },
  SET_HIGHLIGHTED_LAYER(state, id) {
    state.editor.highlightedLayer = id;
  },
  SET_CANVAS_BOUNDS(state, bounds) {
    state.editor.canvasBounds = bounds;
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
  setFrames({ commit, dispatch }, frames) {
    commit("SET_FRAMES", frames);
    dispatch("setSelectedFrame", 0);
  },
  setSelectedFrame({ commit }, index) {
    commit("SET_SELECTED_FRAME", index);
    commit("DESELECT_ALL_NODES");
  },
  enterPlayerMode({ commit }) {
    commit("ENTERING_PLAY_MODE");
    ipcRenderer.send("ENTERING_PLAY_MODE");
  },
  toggleLayerVisibility({ commit }) {
    commit("TOGGLE_LAYER_VISIBILITY");
  },
  setHighlightedLayer({ commit }, layer) {
    if (layer !== state.editor.highlightedLayer) {
      commit("SET_HIGHLIGHTED_LAYER", layer);
    }
  },
  selectNodes({ commit }, nodeIds) {
    commit("SELECT_NODES", nodeIds);
  },
  deselectAllNodes({ commit }) {
    commit("DESELECT_ALL_NODES");
  },
  toggleNodeVisibility({ commit }, nodeId) {
    commit("TOGGLE_NODE_VISIBILITY", nodeId);
  },
  setNodesTree({ commit }, tree) {
    commit("SET_NODES_TREE", tree);
  },
  setCanvasBounds({ commit }, bounds) {
    commit("SET_CANVAS_BOUNDS", bounds);
  }
};

const getters = {
  availableZoomLevels: state => state.editor.settings.availableZoomLevels,
  zoomLevel: state => state.editor.settings.zoomLevel,
  fluid: state => state.editor.fluid,
  slides: state => state.editor.frames,
  currentSlide: state => state.editor.selectedFrame,
  selectedLayers: state => state.editor.selectedLayers,
  highlightedLayer: state => state.editor.highlightedLayer,
  nodesTree: state => state.editor.nodesTree,
  canvasBounds: state => state.editor.canvasBounds
};

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  strict: process.env.NODE_ENV !== "production"
});
