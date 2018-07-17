<template>
    <div class="animate-in">
        <editor-property>
            <editor-property-header>
                <editor-property-title>animations</editor-property-title>
                <editor-property-actions>
                    <editor-property-action v-if="selectedLayer.animationsIn.length > 0 ">
                    <fluid-icon-minus></fluid-icon-minus>
                    </editor-property-action>
                    <editor-property-action v-else @click.native="addAnimation()">
                        <fluid-icon-add ></fluid-icon-add>
                    </editor-property-action>
                </editor-property-actions>
            </editor-property-header>
            <editor-property-content v-show="selectedLayer.animationsIn.length > 0 ">
                <editor-sub-property v-for="(animation,index) in selectedLayer.animationsIn" :key="index">
                    <editor-sub-property-row>
                        <editor-sub-property-row-name>Property</editor-sub-property-row-name>
                        <editor-sub-property-row-value :options="availableAnimations" @input="setAnimationValue(index,'property',$event)" :value="animation.property" type="combo"></editor-sub-property-row-value>
                    </editor-sub-property-row>
                    <editor-sub-property-row>
                        <editor-sub-property-row-name>Duration</editor-sub-property-row-name>
                        <editor-sub-property-row-value unit="s" @input="setAnimationValue(index,'duration',$event)" :value="animation.duration" type="textbox"></editor-sub-property-row-value>
                    </editor-sub-property-row>
                    <editor-sub-property-row>
                        <editor-sub-property-row-name>Delay</editor-sub-property-row-name>
                        <editor-sub-property-row-value unit="s" :options="availableAnimations" @input="setAnimationValue(index,'delay',$event)" :value="animation.delay" type="textbox"></editor-sub-property-row-value>
                    </editor-sub-property-row>
                </editor-sub-property>
            </editor-property-content>
        </editor-property>
    </div>
</template>

<script>
import { Animation, AnimationPropertyType } from "@/models/types";
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
    EditorPropertyAction
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["selectedLayer"]),
    availableAnimations() {
      return Object.values(AnimationPropertyType);
    }
  },
  methods: {
    ...mapActions(["addAnimationIn"]),
    addAnimation() {
      this.addAnimationIn(new Animation());
    },
    setAnimationValue(index, key, value) {
      this.$store.commit("SET_ANIMATION_IN_PROPERTY", { index, key, value });
    }
  }
};
</script>

<style scoped>
</style>
