import Vue from "vue";
import Vuex from "vuex";
import { ipcRenderer } from "electron";
import {
  getValueFromSelectionObject,
  isMixed,
  mergeProperty,
  animatedPropertyAlreadyExists,
  FLUID_TYPES
} from "./helpers";
import { ANIMATED_PROPERTIES } from "../models/types2";
import { isCanvas, isRoot } from "../editor/tree-helpers";
import TreeWalker from "../editor/tree-walker";

const state = {
  editor: {
    settings: {
      zoomLevel: 100,
      availableZoomLevels: [50, 75, 100]
    },
    frames: [],
    //index each node with his id
    nodesTree: {},
    // index html node with id
    nodesTreeHtmlRefs: {},
    selectedFrame: {},
    selectedLayers: [],
    highlightedLayer: null,
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
  ADD_NODES_TO_SELECTION(state, nodeId) {
    state.editor.selectedLayers.push(nodeId);
  },
  DESELECT_ALL_NODES(state) {
    state.editor.selectedLayers = [state.editor.selectedFrame.id];
  },
  SELECT_NODES(state, nodeIds) {
    state.editor.selectedLayers = nodeIds;
  },
  TOGGLE_NODE_VISIBILITY(state, nodeId) {
    const node = state.editor.nodesTree[nodeId];
    node.visible = !node.visible;

    if (node.visible) {
      state.editor.nodesTreeHtmlRefs[nodeId].style.display = "block";
    } else {
      state.editor.nodesTreeHtmlRefs[nodeId].style.display = "none";
    }
  },
  SET_NODES_TREE(state, tree) {
    state.editor.nodesTree = tree;
  },
  SET_HIGHLIGHTED_LAYER(state, id) {
    state.editor.highlightedLayer = id;
  },
  SET_CANVAS_BOUNDS(state, bounds) {
    state.editor.canvasBounds = bounds;
  },
  SET_NODES_TREE_HTML_REFS(state, refTree) {
    state.editor.nodesTreeHtmlRefs = refTree;
  },
  SET_SELECTION_ANIMATION(state, props) {
    state.editor.selectedLayers.map(
      id => (state.editor.nodesTree[id].fluid[props.type] = props.value)
    );
  },
  REMOVE_SELECTION_ANIMATION(state, props) {
    state.editor.selectedLayers.map(
      id => (state.editor.nodesTree[id].fluid[props.type] = null)
    );
  },
  SET_FLUID_PROPERTY(state, props) {
    state.editor.selectedLayers.map(
      id =>
        (state.editor.nodesTree[id].fluid[props.type][props.propertyName] =
          props.value)
    );
  },
  ADD_SELECTION_ANIMATED_PROPERTY(state, props) {
    state.editor.selectedLayers.map(id => {
      state.editor.nodesTree[id].fluid[props.type].properties.push(
        props.animatedProperty
      );
    });
  },
  REPLACE_SELECTION_ANIMATED_PROPERTY(state, props) {
    state.editor.selectedLayers.map(id => {
      state.editor.nodesTree[id].fluid[props.type].properties =
        props.properties;
    });
  },
  REMOVE_SELECTION_ANIMATED_PROPERTY(state, props) {
    state.editor.selectedLayers.map(id =>
      state.editor.nodesTree[id].fluid[props.type].properties.splice(
        props.index,
        1
      )
    );
  },
  POP_SELECTION_ANIMATED_PROPERTY(state, props) {
    state.editor.selectedLayers.map(id =>
      state.editor.nodesTree[id].fluid[props.type].properties.pop()
    );
  },
  UPDATE_SELECTION_ANIMATED_SUB_PROPERTY(state, props) {
    state.editor.selectedLayers.map(
      id =>
        (state.editor.nodesTree[id].fluid[props.type].properties[props.index][
          props.propertyName
        ] = props.value)
    );
  }
};

const actions = {
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
  selectNodes({ commit, getters }, nodeIds) {
    const missingItems = nodeIds.filter(
      id => state.editor.selectedLayers.indexOf(id) < 0
    );

    if (
      missingItems.length > 0 ||
      nodeIds.length !== state.editor.selectedLayers.length
    ) {
      commit("SELECT_NODES", nodeIds);
    }
  },
  addNodeToSelection({ commit }, nodeId) {
    if (state.editor.selectedLayers.indexOf(nodeId) === -1) {
      commit("ADD_NODES_TO_SELECTION", nodeId);
    }
  },
  deselectAllNodes({ commit }) {
    if (state.editor.selectedLayers[0] !== state.editor.selectedFrame.id) {
      commit("DESELECT_ALL_NODES");
    }
  },
  toggleNodeVisibility({ commit }, nodeId) {
    commit("TOGGLE_NODE_VISIBILITY", nodeId);
  },
  setNodesTree({ commit }, tree) {
    commit("SET_NODES_TREE", tree);
  },
  setNodesTreeHtmlRefs({ commit }, tree) {
    commit("SET_NODES_TREE_HTML_REFS", tree);
  },
  setCanvasBounds({ commit }, bounds) {
    commit("SET_CANVAS_BOUNDS", bounds);
  },
  setSelectionAnimation({ commit }, props) {
    commit("SET_SELECTION_ANIMATION", props);
  },
  removeSelectionAnimation({ commit }, props) {
    commit("REMOVE_SELECTION_ANIMATION", props);
  },
  addSelectionAnimatedProperty({ commit }, props) {
    /*  //@todo if mixed content for this property, then call REPLACE_SELECTION_ANIMATED_PROPERTY ELSE CALL ADD SELECTION

    let propertyName = AnimatedPropertyType.OPACITY;
    let index = 0;

    while (
      index < ANIMATED_PROPERTIES.length &&
      animatedPropertyAlreadyExists(propertyName)
    ) {
      index++;
      propertyName = AnimatedPropertyType[ANIMATED_PROPERTIES[index].key];
    }

    console.log(propertyName);

    commit("ADD_SELECTION_ANIMATED_PROPERTY", props); */
  },
  removeSelectionAnimatedProperty({ commit }, props) {
    commit("REMOVE_SELECTION_ANIMATED_PROPERTY", props);
  },
  popSelectionAnimatedProperty({ commit }, props) {
    commit("POP_SELECTION_ANIMATED_PROPERTY", props);
  },
  updateSelectionAnimatedSubProperty({ commit }, props) {
    commit("UPDATE_SELECTION_ANIMATED_SUB_PROPERTY", props);
  }
};

const getters = {
  availableZoomLevels: state => state.editor.settings.availableZoomLevels,
  zoomLevel: state => state.editor.settings.zoomLevel,
  slides: state => state.editor.frames,
  currentSlide: state => state.editor.selectedFrame,
  selectedLayers: state => state.editor.selectedLayers,
  highlightedLayer: state => state.editor.highlightedLayer,
  nodesTree: state => state.editor.nodesTree,
  canvasBounds: state => state.editor.canvasBounds,
  fluidProperty: state => props => {
    const value = state.editor.selectedLayers
      .map(
        id =>
          state.editor.nodesTree[id].fluid[props.type]
            ? state.editor.nodesTree[id].fluid[props.type][props.propertyName]
            : null
      )
      .reduce(mergeProperty); //retrieve all selected properties so we can compare to get one value

    return value;
  },
  remainingAnimatedProperties: (state, getters) => props => {
    return ANIMATED_PROPERTIES.filter(possibleProperty => {
      let properties = getters.fluidProperty({
        type: props.type,
        propertyName: "properties"
      });

      let found = properties.find(
        property => property.name === possibleProperty.value
      );

      return !found || props.selectedName === possibleProperty.value;
    });
  },
  animatedLayers: state => type => {
    const animatedLayers = [];
    if (state.editor.selectedFrame.children) {
      TreeWalker.preOrder(state.editor.selectedFrame, node => {
        if (!isRoot(node) && node.fluid[type]) {
          animatedLayers.push(node);
        }
      });
    }

    return animatedLayers;
  }
};

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  strict: process.env.NODE_ENV !== "production"
});
