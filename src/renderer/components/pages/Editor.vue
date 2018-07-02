<template>
    <div class="editor">
        <editor-properties-panel>
            <fluid-menu :options="menus" v-model="selectedPropertyMenu"></fluid-menu>
            <editor-property v-for="property in currentMenu.properties" :key="property">
              <editor-property-header>
                <editor-property-title>{{property}}</editor-property-title>
                <editor-property-actions>
                  <editor-property-action>
                      <fluid-icon-add v-if="currentMenu.animations.length == 0"></fluid-icon-add>
                      <fluid-icon-remove v-else></fluid-icon-remove>
                  </editor-property-action>
                </editor-property-actions>
              </editor-property-header>
              <editor-property-content>
                <editor-sub-property>
                  <editor-sub-property-name>Duration</editor-sub-property-name>
                  <editor-sub-property-value :options="testComboOptions" v-model="testCombo"></editor-sub-property-value>
                </editor-sub-property>
                <editor-sub-property>
                  <editor-sub-property-name>Value</editor-sub-property-name>
                  <editor-sub-property-value v-model="testRange" type="range"></editor-sub-property-value>
                </editor-sub-property>
              </editor-property-content>
            </editor-property>
        </editor-properties-panel>
    </div>
</template>

<script>
import { Properties } from "@/models/types.ts";

import FluidMenu from "@/components/common/FluidMenu.vue";
import EditorProperty from "@/components/other/EditorProperty.vue";
import EditorPropertyActions from "@/components/other/EditorPropertyActions.vue";
import EditorPropertyHeader from "@/components/other/EditorPropertyHeader.vue";
import EditorPropertyAction from "@/components/other/EditorPropertyAction.vue";
import EditorPropertyContent from "@/components/other/EditorPropertyContent.vue";
import EditorPropertyTitle from "@/components/other/EditorPropertyTitle.vue";
import EditorPropertiesPanel from "@/components/other/editor/panels/EditorPropertiesPanel.vue";
import EditorSubProperty from "@/components/other/EditorSubProperty.vue";
import EditorSubPropertyName from "@/components/other/EditorSubPropertyName.vue";
import EditorSubPropertyValue from "@/components/other/EditorSubPropertyValue.vue";
import FluidIconAdd from "@/components/icons/FluidIconAdd.vue";
import FluidIconRemove from "@/components/icons/FluidIconRemove.vue";

export default {
  components: {
    FluidMenu,
    EditorProperty,
    EditorPropertyActions,
    EditorPropertyAction,
    EditorPropertyTitle,
    FluidIconAdd,
    FluidIconRemove,
    EditorPropertiesPanel,
    EditorPropertyHeader,
    EditorPropertyContent,
    EditorSubProperty,
    EditorSubPropertyName,
    EditorSubPropertyValue
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
