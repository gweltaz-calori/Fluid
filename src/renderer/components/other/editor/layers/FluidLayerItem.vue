<template>
    <div class="layer" :class="{'selected':isCurrentSelectedLayer,'parent-selected':isParentSelected}">
        <span >
          <div @mousedown.stop="onHeaderClick" class="layer-header" @mouseenter.stop="enter" @mouseleave.stop="leave">
            <span class="layer-indentations">
                
              <span class="layer-indent" v-for="(indent,index) in indentLevel" :key="index"></span>
              <div @mousedown.stop="toggleOpening" class="layer-icon-arrow-wrapper" :class="{'disabled':layer.visible === false}" v-if="isContainer">
                  <fluid-icon-arrow-down class="layer-icon-arrow" :class="{'opened':open}"></fluid-icon-arrow-down>
              </div> 
            </span>
            <div v-if="highlighted" class="layer-header-overlay"></div>
            
            <span :class="{'disabled':layer.visible === false}" class="layer-name">{{layer.name}}</span>
            <div :class="{'disabled':layer.visible === false}" class="layer-actions">
                <div @mousedown.stop="toggleVisibility" class="visibility-icon-wrapper" v-if="highlighted && !isRoot">
                    <fluid-icon-eye class="layer-action layer-icon-visibility"></fluid-icon-eye>
                </div>
                <div v-if="hasAnimations" class="is-animated-icon-wrapper">
                    <fluid-icon-is-animated class="layer-action layer-icon-is-animated"></fluid-icon-is-animated>
                </div>
            </div>
            
            <div :class="{'root-layer':isRoot}" class="layer-header-background"></div>
          </div>
          <div :class="{'disabled':layer.visible === false}" class="layer-content" v-if="isContainer && open">
              <fluid-layer-item :indent-level="indentLevel+1" :is-parent-selected="isCurrentSelectedLayer" v-for="(subLayer) in layer.children" :layer="subLayer" :key="subLayer.id"></fluid-layer-item>
          </div>
        </span>
    </div>
</template>

<script>
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
      highlighted: false
    };
  },
  computed: {
    ...mapGetters(["selectedLayers"]),
    isContainer() {
      return this.layer.children;
    },
    isCurrentSelectedLayer() {
      return !isRoot(this.layer) && this.selectedLayers.includes(this.layer.id);
    },
    isRoot() {
      return isRoot(this.layer);
    },
    hasAnimations() {
      this.layer.fluid.animationsIn.length > 0 ||
        this.layer.fluid.animationsOut.length > 0;
    }
  },
  methods: {
    ...mapActions(["toggleNodeVisibility", "selectNodes"]),
    toggleOpening() {
      this.open = !this.open;
    },
    leave() {
      if (this.isRoot) {
        return;
      }
      this.highlighted = false;
    },
    enter() {
      if (this.isRoot) {
        return;
      }
      this.highlighted = true;
    },
    toggleVisibility() {
      this.toggleNodeVisibility(this.layer.id);
    },
    onHeaderClick() {
      if (this.isRoot) {
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

.disabled {
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
  color: #ffffff;
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

.root-layer {
  background: rgba(169, 169, 169, 0.03);
  z-index: -1;
}

.layer.selected .layer-header-background {
  background: #1f8aff;

  z-index: -1;
}

.layer.parent-selected .layer-header-background {
  background: rgba(31, 138, 255, 0.05);

  z-index: -1;
}
</style>
