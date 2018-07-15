<template>
    <div class="editor">
        <editor-actions-panel></editor-actions-panel>
        <editor-slides-panel></editor-slides-panel>
        <editor-canvas-panel></editor-canvas-panel>
        <editor-properties-panel>
            <fluid-menu :options="menus" v-model="selectedPropertyMenu"></fluid-menu>
        </editor-properties-panel>
    </div>
</template>

<script>
import { Properties } from "@/models/types.ts";

import FluidMenu from "@/components/common/FluidMenu.vue";
import EditorPropertiesPanel from "@/components/other/editor/panels/EditorPropertiesPanel.vue";
import EditorSlidesPanel from "@/components/other/editor/panels/EditorSlidesPanel.vue";
import EditorActionsPanel from "@/components/other/editor/panels/EditorActionsPanel.vue";
import EditorCanvasPanel from "@/components/other/editor/panels/EditorCanvasPanel.vue";

export default {
  components: {
    FluidMenu,
    EditorPropertiesPanel,
    EditorSlidesPanel,
    EditorActionsPanel,
    EditorCanvasPanel
  },
  data() {
    return {
      menus: [
        {
          key: "animateIn",
          name: "Animate in",
          properties: [Properties.ANIMATION],
          animations: []
        },
        {
          key: "animateOut",
          name: "animate out",
          properties: [Properties.ANIMATION],
          animations: []
        },
        {
          key: "format",
          name: "format",
          properties: [Properties.VIDEO, Properties.GIF, Properties.AUDIO],
          animations: []
        }
      ],
      selectedPropertyMenu: "animateIn",
      testRange: 0,
      testCombo: "None",
      testComboOptions: ["None", "Opacity", "Move"]
    };
  },
  computed: {
    currentMenu() {
      return this.menus.find(menu => menu.key === this.selectedPropertyMenu);
    }
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
