import { ipcRenderer } from "electron";
import { mergeProperty, getThemeFromPref, isMixed } from "../helpers";
import TreeWalker from "../../editor/tree-walker";
import { ANIMATED_PROPERTIES, PRESETS_FROM_TYPES } from "../../models/types2";
import { isRoot } from "../../editor/tree-helpers";

const state = {
  settings: {
    currentTheme: getThemeFromPref("light")
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
  },
  editingValue: null
};

const mutations = {
  setZoomLevel(state, value) {
    state.settings.zoomLevel = value;
  },
  SET_FRAMES(state, frames) {
    state.frames = frames;
  },
  SET_SELECTED_FRAME(state, index) {
    if (state.frames[index]) {
      state.selectedFrame = state.frames[index];
    }
  },
  ENTERING_PLAY_MODE(state) {
    state.isPlaying = true;
  },
  ADD_NODES_TO_SELECTION(state, nodeId) {
    state.selectedLayers.push(nodeId);
  },
  DESELECT_ALL_NODES(state) {
    state.selectedLayers = [state.selectedFrame.id];
  },
  SELECT_NODES(state, nodeIds) {
    state.selectedLayers = nodeIds;
  },
  TOGGLE_NODE_VISIBILITY(state, nodeId) {
    const node = state.nodesTree[nodeId];
    node.visible = !node.visible;

    if (node.visible) {
      state.nodesTreeHtmlRefs[nodeId].style.opacity = "1";
    } else {
      state.nodesTreeHtmlRefs[nodeId].style.opacity = "0";
    }
  },
  SET_NODES_TREE(state, tree) {
    state.nodesTree = tree;
  },
  SET_HIGHLIGHTED_LAYER(state, id) {
    state.highlightedLayer = id;
  },
  SET_CANVAS_BOUNDS(state, bounds) {
    state.canvasBounds = bounds;
  },
  SET_NODES_TREE_HTML_REFS(state, refTree) {
    state.nodesTreeHtmlRefs = refTree;
  },
  SET_SELECTION_ANIMATION(state, props) {
    state.selectedLayers.map(
      id =>
        (state.nodesTree[id].fluid[props.type] = new PRESETS_FROM_TYPES[
          props.value
        ]())
    );
  },
  REMOVE_SELECTION_ANIMATION(state, props) {
    state.selectedLayers.map(
      id => (state.nodesTree[id].fluid[props.type] = null)
    );
  },
  SET_FLUID_PROPERTY(state, props) {
    state.selectedLayers.map(
      id =>
        (state.nodesTree[id].fluid[props.type][props.propertyName] =
          props.value)
    );
  },
  ADD_SELECTION_ANIMATED_PROPERTY(state, props) {
    state.selectedLayers.map(id => {
      state.nodesTree[id].fluid[props.type].properties.push(
        props.animatedProperty
      );
    });
  },
  REPLACE_SELECTION_ANIMATED_PROPERTY(state, props) {
    state.selectedLayers.map(id => {
      state.nodesTree[id].fluid[props.type].properties = props.properties;
    });
  },
  REMOVE_SELECTION_ANIMATED_PROPERTY(state, props) {
    state.selectedLayers.map(id =>
      state.nodesTree[id].fluid[props.type].properties.splice(props.index, 1)
    );
  },
  POP_SELECTION_ANIMATED_PROPERTY(state, props) {
    state.selectedLayers.map(id =>
      state.nodesTree[id].fluid[props.type].properties.pop()
    );
  },
  UPDATE_SELECTION_ANIMATED_SUB_PROPERTY(state, props) {
    state.selectedLayers.map(
      id =>
        (state.nodesTree[id].fluid[props.type].properties[props.index][
          props.propertyName
        ] = props.value)
    );
  },
  SET_THEME(state, theme) {
    state.settings.currentTheme = theme;
    localStorage.setItem("theme", JSON.stringify(theme));
  },
  SET_EDITING_VALUE(state, value = null) {
    state.editingValue = value;
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
    if (layer !== state.highlightedLayer) {
      commit("SET_HIGHLIGHTED_LAYER", layer);
    }
  },
  selectNodes({ commit, getters }, nodeIds) {
    const missingItems = nodeIds.filter(
      id => state.selectedLayers.indexOf(id) < 0
    );

    if (
      missingItems.length > 0 ||
      nodeIds.length !== state.selectedLayers.length
    ) {
      commit("SELECT_NODES", nodeIds);
    }
  },
  addNodeToSelection({ commit }, nodeId) {
    if (state.selectedLayers.indexOf(nodeId) === -1) {
      commit("ADD_NODES_TO_SELECTION", nodeId);
    }
  },
  deselectAllNodes({ commit }) {
    //before deselecting we need to make sure we are not editing a property because mousedown is trigger before blur
    if (state.selectedLayers[0] !== state.selectedFrame.id) {
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
  },
  setTheme({ commit }, theme) {
    commit("SET_THEME", theme);
  },
  setEditingValue({ commit }, value) {
    commit("SET_EDITING_VALUE", value);
  }
};

const getters = {
  availableZoomLevels: state => state.settings.availableZoomLevels,
  zoomLevel: state => state.settings.zoomLevel,
  slides: state => state.frames,
  currentSlide: state => state.selectedFrame,
  selectedLayers: state => state.selectedLayers,
  highlightedLayer: state => state.highlightedLayer,
  nodesTree: state => state.nodesTree,
  canvasBounds: state => state.canvasBounds,
  fluidProperty: state => props => {
    const value = state.selectedLayers
      .map(
        id =>
          state.nodesTree[id].fluid[props.type]
            ? state.nodesTree[id].fluid[props.type][props.propertyName]
            : null
      )
      .reduce(mergeProperty); //retrieve all selected properties so we can compare to get one value

    return value;
  },
  remainingAnimatedProperties: (state, getters) => props => {
    return ANIMATED_PROPERTIES;
    /* return ANIMATED_PROPERTIES.filter(possibleProperty => {
      let properties = getters.fluidProperty({
        type: props.type,
        propertyName: "properties"
      });

      console.log(properties);

      let found = properties.find(
        property => property.name === possibleProperty.value
      );

      return !found || props.selectedName === possibleProperty.value;
    }); */
  },
  animatedLayers: state => type => {
    const animatedLayers = [];
    if (state.selectedFrame.children) {
      TreeWalker.preOrder(state.selectedFrame, node => {
        if (!isRoot(node) && node.fluid[type]) {
          animatedLayers.push(node);
        }
      });
    }

    return animatedLayers;
  },
  themeColors: state => state.settings.currentTheme.colors,
  editingValue: state => state.editingValue
};

export default {
  state,
  mutations,
  actions,
  getters
};
