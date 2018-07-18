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
      audios: [],
      animationsIn: [],
      animationsOut: []
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
