<template>
    <div class="editor">
        <editor-actions-panel></editor-actions-panel>
        <!-- <editor-slides-panel></editor-slides-panel> -->
        <editor-canvas-panel></editor-canvas-panel>
        <editor-properties-panel></editor-properties-panel>
    </div>
</template>

<script>
import EditorPropertiesPanel from "@/components/other/editor/panels/EditorPropertiesPanel.vue";
import EditorSlidesPanel from "@/components/other/editor/panels/EditorSlidesPanel.vue";
import EditorActionsPanel from "@/components/other/editor/panels/EditorActionsPanel.vue";
import EditorCanvasPanel from "@/components/other/editor/panels/EditorCanvasPanel.vue";

export default {
  components: {
    EditorPropertiesPanel,
    EditorSlidesPanel,
    EditorActionsPanel,
    EditorCanvasPanel
  },
  data() {
    return {};
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
