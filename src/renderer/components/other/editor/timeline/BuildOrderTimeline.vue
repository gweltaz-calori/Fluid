<template>
    <div v-if="animatedLayers.length > 0">
        <fluid-animated-layer-row :animation-type="animationType" @mousedown.native="selectNodeFromId(layer.id)" :selected="isCurrentSelectedLayer(layer)" :key="layer.id" v-for="layer in animatedLayers" :animation="layer.fluid[animationType]"></fluid-animated-layer-row>
    </div>
    <fluid-text-info class="info" v-else>No Animations found for this slide yet</fluid-text-info>
</template>

<script>
import Bus from "@/bus";
import { mapGetters, mapActions } from "vuex";
import FluidAnimatedLayerRow from "@/components/other/editor/layers/FluidAnimatedLayerRow.vue";
import { FLUID_TYPES } from "../../../../store/helpers";
import { isRoot } from "../../../../editor/tree-helpers";

export default {
  components: { FluidAnimatedLayerRow },
  props: {
    animationType: {
      default: FLUID_TYPES.ANIMATION_IN
    }
  },
  computed: {
    ...mapGetters(["selectedLayers"]),
    animatedLayers() {
      return this.$store.getters.animatedLayers(this.animationType);
    }
  },
  methods: {
    ...mapActions(["selectNodes"]),
    isCurrentSelectedLayer(layer) {
      return !isRoot(layer) && this.selectedLayers.includes(layer.id);
    },
    selectNodeFromId(id) {
      Bus.$emit("before-selection-changed");
      this.selectNodes([id]);
    }
  }
};
</script>

<style scoped>
</style>
