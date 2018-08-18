<template>
    <div class="animate">
      <editor-property>
        <editor-property-header>
          <editor-property-title>PRESET</editor-property-title>
          <editor-property-actions>
            <editor-property-action >
                <fluid-icon-preset-library :tint="iconTint"></fluid-icon-preset-library>
            </editor-property-action>
            <editor-property-action v-if="name" @mousedown.native="removeAnimation">
              <fluid-icon-minus :tint="iconTint"></fluid-icon-minus>
            </editor-property-action>
            <editor-property-action v-else @mousedown.native="addAnimation">
                <fluid-icon-add :tint="iconTint"></fluid-icon-add>
            </editor-property-action>
          </editor-property-actions>
        </editor-property-header>
        <editor-property-content v-if="name">
          <editor-sub-property>
            <editor-sub-property-row>
              <editor-sub-property-row-name>Name</editor-sub-property-row-name>
              <editor-sub-property-row-value label="value" track-by="key" :options="PRESETS" v-model="name" type="combo"></editor-sub-property-row-value>
            </editor-sub-property-row>
            <editor-sub-property-row>
              <editor-sub-property-row-name>Duration</editor-sub-property-row-name>
              <editor-sub-property-row-value ref="durationRef" :formatter="secondFormatter" :min="0" :max="30" v-model="duration"  type="range"></editor-sub-property-row-value>
            </editor-sub-property-row>
            <editor-sub-property-row>
              <editor-sub-property-row-name>Delay</editor-sub-property-row-name>
              <editor-sub-property-row-value ref="delayRef" :formatter="secondFormatter" :min="0" :max="30"  v-model="delay" type="range"></editor-sub-property-row-value>
            </editor-sub-property-row>
            <editor-sub-property-row>
              <editor-sub-property-row-name>Ease</editor-sub-property-row-name>
              <editor-sub-property-row-value label="value" model-property="value" track-by="key" :options="EASINGS" v-model="ease" type="combo"></editor-sub-property-row-value>
            </editor-sub-property-row>
          </editor-sub-property>
        </editor-property-content>
      </editor-property>
      <editor-property v-if="name">
        <editor-property-header>
          <editor-property-title>PROPERTIES</editor-property-title>
          <editor-property-actions>
            <editor-property-action @mousedown.native="popAnimatedProperty" v-if="properties.length > 0">
              <fluid-icon-minus :tint="iconTint"></fluid-icon-minus>
            </editor-property-action>
            <editor-property-action @mousedown.native="addAnimatedProperty">
                <fluid-icon-add :tint="iconTint"></fluid-icon-add>
            </editor-property-action>
          </editor-property-actions>
        </editor-property-header>
        <editor-property-content v-if="properties.length > 0">
          <editor-animated-sub-property>
            <editor-animated-property-row v-for="(animatedProperty,index) in properties" :key="animatedProperty.name">
              <fluid-combo-box label="value" model-property="value" @input="updateAnimatedSubProperty('name',index,$event)" :value="animatedProperty.name" track-by="key" :options="remainingAnimatedProperties(animatedProperty.name)"></fluid-combo-box>
              <fluid-text-box class="animated-property-value" :max="1000" :min="-1000" :value="animatedProperty.from" ></fluid-text-box>
              <editor-animated-property-row-actions>
                <editor-property-action  @mousedown.native="removeAnimatedProperty(index)">
                  <fluid-icon-minus :tint="iconTint"></fluid-icon-minus>
                </editor-property-action>
              </editor-animated-property-row-actions>
            </editor-animated-property-row>
          </editor-animated-sub-property>
        </editor-property-content>
        <fluid-text-info :style="propertiesInfoStyle" v-else class="properties-info" >Add properties to animate by clicking the "+" icon</fluid-text-info>
      </editor-property>

    </div>
</template>

<script>
import {
  PRESETS,
  EASINGS,
  ANIMATED_PROPERTIES,
  PRESETS_FROM_TYPES,
  MAX_DURATION,
  MIN_DURATION,
  MAX_DELAY,
  MIN_DELAY
} from "@/models/types2.ts";
import SecondFormatter from "@/formatter/SecondFormatter";

import Bus from "@/bus";

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
import { FLUID_TYPES } from "../../../../store/helpers";

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
  props: {
    animationType: {
      default: this.animationType
    }
  },
  data() {
    return {
      PRESETS,
      EASINGS,
      ANIMATED_PROPERTIES,
      secondFormatter: new SecondFormatter(),
      animation: null,
      MAX_DURATION,
      MIN_DURATION,
      MAX_DELAY,
      MIN_DELAY
    };
  },
  computed: {
    ...mapGetters(["themeColors", "selectedLayers"]),
    iconTint() {
      return this.themeColors.text;
    },
    propertiesInfoStyle() {
      return {
        color: this.themeColors.highlightSecondary
      };
    },
    duration: {
      get() {
        return this.$store.getters.fluidProperty({
          type: this.animationType,
          propertyName: "duration"
        });
      },
      set(value) {
        this.$store.commit("SET_FLUID_PROPERTY", {
          type: this.animationType,
          propertyName: "duration",
          value
        });
      }
    },
    name: {
      get() {
        return this.$store.getters.fluidProperty({
          type: this.animationType,
          propertyName: "name"
        });
      },
      set(presetType) {
        this.setSelectionAnimation({
          value: presetType.key,
          type: this.animationType
        });
      }
    },
    ease: {
      get() {
        return this.$store.getters.fluidProperty({
          type: this.animationType,
          propertyName: "ease"
        });
      },
      set(ease) {
        this.$store.commit("SET_FLUID_PROPERTY", {
          type: this.animationType,
          propertyName: "ease",
          value: ease
        });
      }
    },
    delay: {
      get() {
        return this.$store.getters.fluidProperty({
          type: this.animationType,
          propertyName: "delay"
        });
      },
      set(value) {
        this.$store.commit("SET_FLUID_PROPERTY", {
          type: this.animationType,
          propertyName: "delay",
          value
        });
      }
    },
    properties: {
      get() {
        return this.$store.getters.fluidProperty({
          type: this.animationType,
          propertyName: "properties"
        });
      },
      set(value) {
        this.$store.commit("SET_FLUID_PROPERTY", {
          type: this.animationType,
          propertyName: "properties",
          value
        });
      }
    }
  },
  methods: {
    ...mapActions([
      "setSelectionAnimation",
      "removeSelectionAnimation",
      "addSelectionAnimatedProperty",
      "removeSelectionAnimatedProperty",
      "popSelectionAnimatedProperty",
      "updateSelectionAnimatedProperty",
      "updateSelectionAnimatedSubProperty"
    ]),
    addAnimation() {
      this.setSelectionAnimation({
        type: this.animationType,
        value: "CUSTOM"
      });
    },
    removeAnimation() {
      this.removeSelectionAnimation({
        type: this.animationType
      });
    },
    addAnimatedProperty() {
      this.addSelectionAnimatedProperty({
        type: this.animationType
      });
    },
    removeAnimatedProperty(index) {
      this.removeSelectionAnimatedProperty({
        type: this.animationType,
        index
      });
    },
    popAnimatedProperty() {
      this.popSelectionAnimatedProperty({
        type: this.animationType
      });
    },
    remainingAnimatedProperties(selectedName) {
      return this.$store.getters.remainingAnimatedProperties({
        type: this.animationType,
        selectedName
      });
    },
    updateAnimatedSubProperty(name, index, value) {
      this.updateSelectionAnimatedSubProperty({
        type: this.animationType,
        propertyName: name,
        value,
        index
      });
    },
    beforeSelectionChanged() {
      if (this.$refs.durationRef && this.$refs.delayRef) {
        [this.$refs.durationRef, this.$refs.delayRef].map(ref => {
          if (ref.isFocused()) {
            ref.flush();
          }
        });
      }
    }
  },
  beforeDestroy() {
    Bus.$off("before-selection-changed", this.beforeSelectionChanged);
  },
  mounted() {
    Bus.$on("before-selection-changed", this.beforeSelectionChanged);
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
