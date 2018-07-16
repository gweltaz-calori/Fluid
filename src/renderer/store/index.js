import Vue from "vue";
import Vuex from "vuex";

const state = {
  editor: {
    settings: {
      zoomLevel: 100,
      availableZoomLevels: [50, 75, 100]
    },
    selectedLayer: {
      medias: []
    }
  }
};

const mutations = {
  setZoomLevel(state, value) {
    state.editor.settings.zoomLevel = value;
  },
  addMediaToSelectedLayer(state, media) {
    state.editor.selectedLayer.medias.push(media);
  }
};

const actions = {
  addMediaToSelectedLayer({ commit }, media) {
    commit("addMediaToSelectedLayer", media);
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
