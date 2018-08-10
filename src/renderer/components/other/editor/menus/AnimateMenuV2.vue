<template>
    <div class="animate">
      <editor-property>
        <editor-property-header>
          <editor-property-title>PRESET</editor-property-title>
          <editor-property-actions>
            <editor-property-action >
                <fluid-icon-preset-library></fluid-icon-preset-library>
            </editor-property-action>
            <editor-property-action v-if="animation" @mousedown.native="removeAnimation">
              <fluid-icon-minus></fluid-icon-minus>
            </editor-property-action>
            <editor-property-action v-else @mousedown.native="addAnimation">
                <fluid-icon-add ></fluid-icon-add>
            </editor-property-action>
          </editor-property-actions>
        </editor-property-header>
        <editor-property-content v-if="animation">
          <editor-sub-property>
            <editor-sub-property-row>
              <editor-sub-property-row-name>Name</editor-sub-property-row-name>
              <editor-sub-property-row-value label="value" track-by="key" :options="PRESETS" :value="animation.name" @input="onPresetChanged" type="combo"></editor-sub-property-row-value>
            </editor-sub-property-row>
            <editor-sub-property-row>
              <editor-sub-property-row-name>Duration</editor-sub-property-row-name>
              <editor-sub-property-row-value :formatter="secondFormatter" fallback-value="min" :max="20" v-model="animation.duration"  type="range"></editor-sub-property-row-value>
            </editor-sub-property-row>
            <editor-sub-property-row>
              <editor-sub-property-row-name>Delay</editor-sub-property-row-name>
              <editor-sub-property-row-value :formatter="secondFormatter" fallback-value="min" :max="20"  v-model="animation.delay" type="range"></editor-sub-property-row-value>
            </editor-sub-property-row>
            <editor-sub-property-row>
              <editor-sub-property-row-name>Ease</editor-sub-property-row-name>
              <editor-sub-property-row-value label="value" model-property="value" track-by="key" :options="EASINGS" v-model="animation.ease" type="combo"></editor-sub-property-row-value>
            </editor-sub-property-row>
          </editor-sub-property>
        </editor-property-content>
      </editor-property>
      <editor-property v-if="animation">
        <editor-property-header>
          <editor-property-title>PROPERTIES</editor-property-title>
          <editor-property-actions>
            <editor-property-action @mousedown.native="animation.popProperty" v-if="animation.properties.length > 0">
              <fluid-icon-minus></fluid-icon-minus>
            </editor-property-action>
            <editor-property-action v-if="!animation.hasAllProperties()" @mousedown.native="animation.addProperty">
                <fluid-icon-add ></fluid-icon-add>
            </editor-property-action>
          </editor-property-actions>
        </editor-property-header>
        <editor-property-content v-if="animation.properties.length > 0">
          <editor-animated-sub-property>
            <editor-animated-property-row v-for="(animatedProperty,index) in animation.properties" :key="animatedProperty.name">
              <fluid-combo-box label="value" model-property="value" v-model="animatedProperty.name" track-by="key" :options="animation.getRemainingProperties(animatedProperty.name)"></fluid-combo-box>
              <fluid-text-box class="animated-property-value" :max="1000" :min="-1000" :value="animatedProperty.from" ></fluid-text-box>
              <editor-animated-property-row-actions>
                <editor-property-action  @mousedown.native="animation.removeProperty(index)">
                  <fluid-icon-minus></fluid-icon-minus>
                </editor-property-action>
              </editor-animated-property-row-actions>
            </editor-animated-property-row>
          </editor-animated-sub-property>
        </editor-property-content>
        <fluid-text-info v-else class="properties-info" >Add properties to animate by clicking the "+" icon</fluid-text-info>
      </editor-property>
      
    </div>
</template>

<script>
import {
  PRESETS,
  EASINGS,
  ANIMATED_PROPERTIES,
  PRESETS_FROM_TYPES
} from "@/models/types2.ts";
import SecondFormatter from "@/formatter/SecondFormatter";

import { mapGetters, mapActions } from "vuex";

import EditorProperty from "@/components/other/EditorProperty.vue";
import EditorSubProperty from "@/components/other/EditorSubProperty.vue";
import EditorSubPropertyRow from "@/components/other/EditorSubPropertyRow.vue";
import EditorSubPropertyRowName from "@/components/other/EditorSubPropertyRowName.vue";
import EditorSubPropertyRowValue from "@/components/other/EditorSubPropertyRowValue.vue";
import EditorPropertyHeader from "@/components/other/EditorPropertyHeader.vue";
import EditorPropertyContent from "@/components/other/EditorPropertyContent.vue";
import EditorPropertyTitle from "@/components/other/EditorPropertyTitle.vue";
import EditorPropertyActions from "@/components/other/EditorPropertyActions.vue";
import EditorPropertyAction from "@/components/other/EditorPropertyAction.vue";
import EditorAnimatedPropertyRow from "@/components/other/EditorAnimatedPropertyRow.vue";
import EditorAnimatedPropertyRowActions from "@/components/other/EditorAnimatedPropertyRowActions.vue";
import EditorAnimatedSubProperty from "@/components/other/EditorAnimatedSubProperty.vue";

export default {
  components: {
    EditorSubProperty,
    EditorSubPropertyRow,
    EditorSubPropertyRowName,
    EditorSubPropertyRowValue,
    EditorProperty,
    EditorPropertyHeader,
    EditorPropertyContent,
    EditorPropertyTitle,
    EditorPropertyActions,
    EditorPropertyAction,
    EditorAnimatedPropertyRow,
    EditorAnimatedPropertyRowActions,
    EditorAnimatedSubProperty
  },
  data() {
    return {
      PRESETS,
      EASINGS,
      ANIMATED_PROPERTIES,
      secondFormatter: new SecondFormatter(),
      animation: null
    };
  },
  computed: {},
  methods: {
    addAnimation() {
      this.animation = new PRESETS_FROM_TYPES.CUSTOM();
    },
    removeAnimation() {
      this.animation = null;
    },
    onPresetChanged(presetType) {
      this.animation = new PRESETS_FROM_TYPES[presetType.key]();
    },
    onEaseChanged(ease) {
      this.animation.ease = ease.value;
    }
  }
};
</script>

<style scoped>
.preview-animation {
  margin: 0 auto;
  margin-top: 7px;
}

.info {
  display: flex;
  text-align: center;
  justify-content: center;
}

.properties-info {
  display: flex;
  text-align: center;
  justify-content: center;
  padding: 10px 37px;
}

.animated-property-value {
  margin-left: 10px;
}
</style>
