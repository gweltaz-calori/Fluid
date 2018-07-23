<template>
    <div class="layer" >
        <div class="layer-header" @mouseenter="highlight(true)" @mouseleave="highlight(false)">
            <div v-if="highlighted" class="layer-header-overlay"></div>
            <div :class="{'disabled':layer.visible === false}" class="layer-infos">
                <div @click="toggleOpening" class="layer-icon-arrow-wrapper" v-if="isContainer">
                    <fluid-icon-arrow-down class="layer-icon-arrow" :class="{'opened':open}"></fluid-icon-arrow-down>
                </div>    
                <div class="layer-name">{{layer.name}}</div>
            </div>
            <div :class="{'disabled':layer.visible === false}" class="layer-actions">
                <div @click="toggleVisibility" class="visibility-icon-wrapper" v-if="highlighted">
                    <fluid-icon-eye class="layer-action layer-icon-visibility"></fluid-icon-eye>
                </div>
                <div class="is-animated-icon-wrapper">
                    <fluid-icon-is-animated class="layer-action layer-icon-is-animated"></fluid-icon-is-animated>
                </div>
            </div>
        </div>
        <div :class="{'disabled':layer.visible === false}" class="layer-content" v-if="isContainer && open">
            <fluid-layer-item v-for="(subLayer, index) in layer.children" :layer="subLayer" :key="subLayer.id"></fluid-layer-item>
        </div>
    </div>
</template>

<script>
import FluidLayerItem from "@/components/other/editor/layers/FluidLayerItem.vue";
import { mapActions } from "vuex";
export default {
  components: { FluidLayerItem },
  name: "fluid-layer-item",
  props: ["layer"],
  data() {
    return {
      open: false,
      highlighted: false
    };
  },
  computed: {
    isContainer() {
      return this.layer.children;
    }
  },
  methods: {
    ...mapActions(["toggleLayerVisibility"]),
    toggleOpening() {
      this.open = !this.open;
    },
    highlight(value) {
      this.highlighted = value;
    },
    toggleVisibility() {
      if (this.layer.visible === undefined) {
        this.$set(this.layer, "visible", true);
      }

      this.layer.visible = !this.layer.visible;
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

.layer.selected {
  background: rgba(169, 169, 169, 0.07);
}

.layer-name {
  font-family: Exo;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 12px;
  margin-left: 14px;
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
  padding: 0 14.18px;
  position: relative;
}

.layer-header-overlay {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border: solid rgba(169, 169, 169, 0.5) 1px;
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
  width: 28px;
  height: 100%;
  position: absolute;
  left: 0;
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

.layer-content {
  margin-left: 10px;
}
</style>
