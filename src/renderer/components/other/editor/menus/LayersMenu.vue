<template>
    <div class="layers">
        <fluid-layer-item v-if="currentSlide.id" :layer="currentSlide"></fluid-layer-item>
        <fluid-text-info class="layers-info" v-else>No layers found</fluid-text-info>
    </div>
</template>

<script>
import FluidLayerItem from "@/components/other/editor/layers/FluidLayerItem.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: { FluidLayerItem },
  computed: {
    ...mapGetters(["currentSlide"])
  }
};
</script>

<style scoped>
.layers-info {
  display: flex;
  text-align: center;
  justify-content: center;
}
</style>
