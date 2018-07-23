<template>
    <div class="layers">
        <fluid-layer-item :layer="currentSlide"></fluid-layer-item>
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
</style>
