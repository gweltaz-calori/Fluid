<template>
    <div class="animate">
        <editor-property>
            <editor-property-header>
                <editor-property-title>animations</editor-property-title>
                <editor-property-actions>
                    <editor-property-action v-if="animations.length > 0 " @click.native="removeAnimation()">
                        <fluid-icon-minus></fluid-icon-minus>
                    </editor-property-action>
                    <editor-property-action @click.native="addAnimation()">
                        <fluid-icon-add></fluid-icon-add>
                    </editor-property-action>
                </editor-property-actions>
            </editor-property-header>
            <editor-property-content v-show="animations.length > 0 ">
                <editor-sub-property v-for="(animation,index) in animations" :key="index">
                    <editor-sub-property-row>
                        <editor-sub-property-row-name>Property</editor-sub-property-row-name>
                        <editor-sub-property-row-value :options="availableAnimations" @input="setAnimationValue(index,'property',$event)" :value="animation.property" type="combo"></editor-sub-property-row-value>
                    </editor-sub-property-row>
                    <editor-sub-property-row>
                        <editor-sub-property-row-name>Value</editor-sub-property-row-name>
                        <editor-sub-property-row-value fallback-value="min" :max="Infinity" :formatter="animation.property.formatter" @input="setAnimationValue(index,'value',$event)" :value="animation.value" type="range"></editor-sub-property-row-value>
                    </editor-sub-property-row>
                    <editor-sub-property-row>
                        <editor-sub-property-row-name >Duration</editor-sub-property-row-name>
                        <editor-sub-property-row-value fallback-value="min" :max="Infinity" :formatter="secondFormatter" @input="setAnimationValue(index,'duration',$event)" :value="animation.duration" type="range"></editor-sub-property-row-value>
                    </editor-sub-property-row>
                    
                    <editor-sub-property-row>
                        <editor-sub-property-row-name>Delay</editor-sub-property-row-name>
                        <editor-sub-property-row-value fallback-value="min" :max="Infinity" :formatter="secondFormatter" :options="availableAnimations" @input="setAnimationValue(index,'delay',$event)" :value="animation.delay" type="range"></editor-sub-property-row-value>
                        
                    </editor-sub-property-row>
                    <editor-sub-property-row>
                        <editor-sub-property-row-name>Easing</editor-sub-property-row-name>
                        <editor-sub-property-row-value :options="availableEasings" @input="setAnimationValue(index,'easing',$event)" :value="animation.easing" type="combo"></editor-sub-property-row-value>
                    </editor-sub-property-row>
                    <editor-sub-property-actions>
                        <editor-sub-property-action @click.native="removeAnimation(index)">
                            <fluid-icon-minus></fluid-icon-minus>
                        </editor-sub-property-action>
                    </editor-sub-property-actions>
                </editor-sub-property>
            </editor-property-content>
            
            <fluid-button v-if="animations.length > 0 " class="preview-animation">
                <fluid-icon-preview slot="icon"></fluid-icon-preview>
                preview animation
            </fluid-button>
        </editor-property>
    </div>
</template>

<script>
import SecondFormatter from "@/formatter/SecondFormatter";
import {
  Animation,
  AnimationType,
  AVAILAIBLE_ANIMATION_PROPERTIES,
  AVAILAIBLE_ANIMATION_EASINGS
} from "@/models/types";
import { mapGetters, mapActions } from "vuex";

import EditorProperty from "@/components/other/EditorProperty.vue";
import EditorSubProperty from "@/components/other/EditorSubProperty.vue";
import EditorSubPropertyRow from "@/components/other/EditorSubPropertyRow.vue";
import EditorSubPropertyActions from "@/components/other/EditorSubPropertyActions.vue";
import EditorSubPropertyAction from "@/components/other/EditorSubPropertyAction.vue";
import EditorSubPropertyRowName from "@/components/other/EditorSubPropertyRowName.vue";
import EditorSubPropertyRowValue from "@/components/other/EditorSubPropertyRowValue.vue";
import EditorPropertyHeader from "@/components/other/EditorPropertyHeader.vue";
import EditorPropertyContent from "@/components/other/EditorPropertyContent.vue";
import EditorPropertyTitle from "@/components/other/EditorPropertyTitle.vue";
import EditorPropertyActions from "@/components/other/EditorPropertyActions.vue";
import EditorPropertyAction from "@/components/other/EditorPropertyAction.vue";

export default {
  props: ["animationType"],
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
    EditorSubPropertyAction,
    EditorSubPropertyActions
  },
  data() {
    return {
      secondFormatter: new SecondFormatter()
    };
  },
  computed: {
    ...mapGetters(["fluid", "selectedLayersFromTree"]),
    availableAnimations() {
      return AVAILAIBLE_ANIMATION_PROPERTIES;
    },
    availableEasings() {
      return AVAILAIBLE_ANIMATION_EASINGS;
    },
    animations() {
      switch (this.animationType) {
        case AnimationType.ANIMATE_IN:
          return this.fluid.animationsIn;
          break;
        case AnimationType.ANIMATE_OUT:
          return this.fluid.animationsOut;
          break;
      }
    }
  },
  methods: {
    ...mapActions([
      "addAnimationIn",
      "addAnimationOut",
      "removeAnimationIn",
      "removeAnimationOut"
    ]),
    addAnimation() {
      switch (this.animationType) {
        case AnimationType.ANIMATE_IN:
          this.addAnimationIn(new Animation());
          break;
        case AnimationType.ANIMATE_OUT:
          this.addAnimationOut(new Animation());
          break;
      }
    },
    removeAnimation(index) {
      switch (this.animationType) {
        case AnimationType.ANIMATE_IN:
          this.removeAnimationIn(index);
          break;
        case AnimationType.ANIMATE_OUT:
          this.removeAnimationOut(index);
          break;
      }
    },
    setAnimationValue(index, key, value) {
      switch (this.animationType) {
        case AnimationType.ANIMATE_IN:
          this.$store.commit("SET_ANIMATION_IN_PROPERTY", {
            index,
            key,
            value
          });
          break;
        case AnimationType.ANIMATE_OUT:
          this.$store.commit("SET_ANIMATION_OUT_PROPERTY", {
            index,
            key,
            value
          });
          break;
      }
    }
  }
};
</script>

<style scoped>
.preview-animation {
  margin: 0 auto;
  margin-top: 7px;
}
</style>
