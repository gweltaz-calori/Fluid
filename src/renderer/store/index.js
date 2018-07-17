import Vue from "vue";
import Vuex from "vuex";

const state = {
  editor: {
    settings: {
      zoomLevel: 100,
      availableZoomLevels: [50, 75, 100]
    },
    selectedLayer: {
      videos: [],
      audios: []
    }
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
  ADD_AUDIO(state, audio) {
    state.editor.selectedLayer.audios.push(audio);
  },
  REMOVE_VIDEO(state) {
    state.editor.selectedLayer.videos.pop();
  },
  REMOVE_AUDIO(state) {
    state.editor.selectedLayer.audios.pop();
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
  }
};

const getters = {
  availableZoomLevels: state => state.editor.settings.availableZoomLevels,
  zoomLevel: state => state.editor.settings.zoomLevel,
  selectedLayer: state => state.editor.selectedLayer
};

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  strict: process.env.NODE_ENV !== "production"
});
