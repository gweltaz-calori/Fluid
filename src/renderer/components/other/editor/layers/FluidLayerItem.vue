<template>
    <div class="layer" :class="{'selected':isCurrentSelectedLayer}">
        <span >
          <div @mousedown.stop="onHeaderClick" class="layer-header" @mouseenter.stop="enter" @mouseleave.stop="leave">
            <span class="layer-indentations">
                
              <span class="layer-indent" v-for="(indent,index) in indentLevel" :key="index"></span>
              <div @mousedown.stop="toggleOpening" class="layer-icon-arrow-wrapper" :class="{'hidden':layer.visible === false}" v-if="isContainer">
                  <fluid-icon-arrow-down :tint="iconTint" class="layer-icon-arrow" :class="{'opened':open}"></fluid-icon-arrow-down>
              </div> 
            </span>
            <div v-if="isHighlightedLayer" class="layer-header-overlay"></div>
            
            <span :class="{'hidden':layer.visible === false}" :style="layerNameStyle" class="layer-name">{{layer.name}}</span>
            <div :class="{'hidden':layer.visible === false}" class="layer-actions">
                <div @mousedown.stop="toggleVisibility" class="visibility-icon-wrapper" v-if="hovered && !isRoot">
                    <fluid-icon-eye :tint="iconTint" class="layer-action layer-icon-visibility"></fluid-icon-eye>
                </div>
                <div v-if="hasAnimations" class="is-animated-icon-wrapper">
                    <fluid-icon-is-animated :tint="iconTint" class="layer-action layer-icon-is-animated"></fluid-icon-is-animated>
                </div>
            </div>
            
            <div :style="layerBackgroundStyle" class="layer-header-background"></div>
          </div>
          <div :class="{'hidden':layer.visible === false}" class="layer-content" v-if="isContainer && open">
              <fluid-layer-item :indent-level="indentLevel+1" :is-parent-selected="isCurrentSelectedLayer" v-for="(subLayer) in layer.children" :layer="subLayer" :key="subLayer.id"></fluid-layer-item>
          </div>
        </span>
    </div>
</template>

<script>
import Bus from "@/bus";
import FluidLayerItem from "@/components/other/editor/layers/FluidLayerItem.vue";
import { mapActions, mapGetters } from "vuex";
import { isRoot } from "@/editor/tree-helpers";
export default {
  components: { FluidLayerItem },
  name: "fluid-layer-item",
  props: {
    layer: {},
    isParentSelected: {
      default: false
    },
    indentLevel: {
      default: 1
    }
  },
  data() {
    return {
      open: false,
      disabled: false,
      hovered: false
    };
  },
  computed: {
    ...mapGetters(["selectedLayers", "highlightedLayer", "themeColors"]),
    isContainer() {
      return this.layer.children;
    },
    isCurrentSelectedLayer() {
      return !isRoot(this.layer) && this.selectedLayers.includes(this.layer.id);
    },
    isHighlightedLayer() {
      return !isRoot(this.layer) && this.highlightedLayer === this.layer.id;
    },
    isRoot() {
      return isRoot(this.layer);
    },
    hasAnimations() {
      return this.layer.fluid.animationIn;
    },
    rootLayerStyle() {
      return {
        opacity: 0.015,
        background: this.themeColors.text,
        zIndex: -1
      };
    },
    layerSelectedBackgroundStyle() {
      return {
        opacity: 1,
        background: this.themeColors.selection,
        zIndex: -1
      };
    },
    parentSelectedBackgroundStyle() {
      return {
        zIndex: -1,
        opacity: 0.05,
        background: this.themeColors.selection
      };
    },
    layerBackgroundStyle() {
      if (this.isRoot) {
        return this.rootLayerStyle;
      }

      if (this.isCurrentSelectedLayer) {
        return this.layerSelectedBackgroundStyle;
      }

      if (this.isParentSelected) {
        return this.parentSelectedBackgroundStyle;
      }
    },
    layerNameStyle() {
      if (this.isCurrentSelectedLayer) {
        return {
          color: "#FFFFFF"
        };
      }

      return {
        color: this.themeColors.text
      };
    },
    iconTint() {
      if (this.isCurrentSelectedLayer) {
        return "#FFFFFF";
      }

      return this.themeColors.text;
    }
  },
  methods: {
    ...mapActions([
      "toggleNodeVisibility",
      "selectNodes",
      "setHighlightedLayer"
    ]),
    toggleOpening() {
      this.open = !this.open;
    },
    leave() {
      if (this.isRoot) {
        return;
      }

      this.hovered = false;

      this.setHighlightedLayer();
    },
    enter() {
      if (this.isRoot) {
        return;
      }

      this.hovered = true;

      this.setHighlightedLayer(this.layer.id);
    },
    toggleVisibility() {
      this.toggleNodeVisibility(this.layer.id);
      if (!this.layer.visible) {
        this.setHighlightedLayer(null);
      }
    },
    onHeaderClick() {
      if (this.isRoot || this.disabled) {
        return;
      }
      this.selectNodes([this.layer.id]);
    }
  }
};
</script>

<style scoped>
.layer {
  width: 100%;

  display: flex;
  flex-direction: column;
  cursor: default;
}

.hidden {
  opacity: 0.2;
}

.layer-name {
  font-family: Exo;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 12px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
}

.layer-header,
.layer-actions,
.layer-infos {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
}

.layer-header {
  height: 39.64px;
  width: 100%;
  padding: 0 14.18px;
  position: relative;
}

.layer-header-overlay {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border: solid #1f8aff 1px;
  pointer-events: none;
}

.layer-header-background {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 39.64px;
  width: 100%;

  pointer-events: none;
}

.layer-actions {
  margin-left: auto;
}

.layer-infos {
  width: calc(100% - 65px);
}

.layer-icon-arrow-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 100%;
  position: absolute;
  right: 0;
}

.layer-icon-arrow {
  transform: rotate(-90deg);
  opacity: 0.6;
}

.layer-icon-arrow.opened {
  transform: rotate(0);
}

.layer.selected .layer-icon-arrow {
  opacity: 1;
}

.layer-icon-arrow {
  margin-left: 6px;
}

.layer-action {
  margin-left: 7px;
}

.layer-indentations {
  display: flex;
  position: relative;
  height: 100%;
  flex-shrink: 0;
}

.layer-indent {
  width: 18px;
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
  box-sizing: border-box;
  flex-shrink: 0;
}
</style>
