<template>
    <div class="editor">
        <editor-actions-panel></editor-actions-panel>
        <editor-slides-panel></editor-slides-panel>
        <editor-canvas-panel></editor-canvas-panel>
        <editor-properties-panel></editor-properties-panel>
        <fluid-canvas-overlay>
        </fluid-canvas-overlay>
    </div>
</template>

<script>
import FluidLayerSelection from "@/components/other/editor/layers/FluidLayerSelection.vue";
import FluidCanvasOverlay from "@/components/other/editor/layers/FluidCanvasOverlay.vue";

import EditorPropertiesPanel from "@/components/other/editor/panels/EditorPropertiesPanel.vue";
import EditorSlidesPanel from "@/components/other/editor/panels/EditorSlidesPanel.vue";
import EditorActionsPanel from "@/components/other/editor/panels/EditorActionsPanel.vue";
import EditorCanvasPanel from "@/components/other/editor/panels/EditorCanvasPanel.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    EditorPropertiesPanel,
    EditorSlidesPanel,
    EditorActionsPanel,
    EditorCanvasPanel,
    FluidCanvasOverlay,
    FluidLayerSelection
  },
  computed: {
    ...mapGetters(["hightlightedLayer"])
  },
  methods: {
    ...mapActions(["setSelectedFrame", "slides"])
  },
  beforeMount() {
    //this.setSelectedFrame(0);
  }
};
</script>

<style scoped>
.editor {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
