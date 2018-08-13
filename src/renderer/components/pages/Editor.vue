<template>
    <div class="editor">
        <editor-actions-panel></editor-actions-panel>
        <editor-slides-panel></editor-slides-panel>
        <editor-canvas-panel></editor-canvas-panel>
        <editor-build-order-panel></editor-build-order-panel>
        <editor-properties-panel></editor-properties-panel>
        <fluid-layer-selection></fluid-layer-selection>
    </div>
</template>

<script>
import FluidLayerSelection from "@/components/other/editor/layers/FluidLayerSelection.vue";

import EditorPropertiesPanel from "@/components/other/editor/panels/EditorPropertiesPanel.vue";
import EditorSlidesPanel from "@/components/other/editor/panels/EditorSlidesPanel.vue";
import EditorActionsPanel from "@/components/other/editor/panels/EditorActionsPanel.vue";
import EditorCanvasPanel from "@/components/other/editor/panels/EditorCanvasPanel.vue";
import EditorBuildOrderPanel from "@/components/other/editor/panels/EditorBuildOrderPanel.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    EditorPropertiesPanel,
    EditorSlidesPanel,
    EditorActionsPanel,
    EditorCanvasPanel,
    FluidLayerSelection,
    EditorBuildOrderPanel
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
  position: relative;
}
</style>
