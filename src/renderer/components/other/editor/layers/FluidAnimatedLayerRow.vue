<template>
    <div class="animated-layer-row" :class="{'selected':selected}">
        <div class="background"></div>
        <div class="animated-layer-infos">
            <div class="animated-layer-order">1</div>
            <div class="animated-layer-name">
                Rect a
            </div>
        </div>
        <div class="animated-layer-properties">
            <div class="animated-layer-trigger animated-layer-property">
               <fluid-icon-click-trigger></fluid-icon-click-trigger>
            </div>
            <div class="animated-layer-trigger animated-layer-property">
               <fluid-icon-time-trigger></fluid-icon-time-trigger>
            </div>
            <fluid-combo-box class="animated-layer-property" label="value" track-by="key" :options="TRIGGERS" ></fluid-combo-box>
            <!-- Todo constant for min max -->
            <editor-sub-property-row-value class="animated-layer-property" :formatter="secondFormatter" :value="0" type="range" :min="0" :max="30"></editor-sub-property-row-value>
            <editor-sub-property-row-value class="animated-layer-property" :formatter="secondFormatter" :value="0" type="range" :min="0" :max="30"></editor-sub-property-row-value>
            <fluid-combo-box class="animated-layer-property" :options="['EaseIn','EaseOut','EaseInOut']" value="EaseIn"></fluid-combo-box>
        </div>
    </div>
</template>

<script>
import EditorSubPropertyRowValue from "@/components/other/EditorSubPropertyRowValue.vue";
import SeconderFormatter from "../../../../formatter/SecondFormatter";
import { TRIGGERS } from "../../../../models/types2";

export default {
  components: { EditorSubPropertyRowValue },
  props: {
    selected: {
      default: false
    }
  },
  data() {
    return {
      secondFormatter: new SeconderFormatter(),
      TRIGGERS
    };
  },
  computed: {
    trigger: {
      get() {
        return this.$store.getters.fluidProperty({
          type: FLUID_TYPES.ANIMATION_IN,
          propertyName: "trigger"
        });
      },
      set(value) {
        this.$store.commit("SET_FLUID_PROPERTY", {
          type: FLUID_TYPES.ANIMATION_IN,
          propertyName: "trigger",
          value
        });
      }
    }
  }
};
</script>

<style scoped>
.animated-layer-row {
  display: flex;
  align-items: center;
  padding: 8px 16px;
}

.background {
  position: absolute;
  left: 0;
  right: 0;
  height: 50px;
}

.animated-layer-row.selected .background {
  background-color: #1f8aff;
  z-index: -1;
}

.animated-layer-infos {
  display: flex;
  align-items: center;
}

.animated-layer-name {
  font-family: Exo;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 13px;

  color: #ffffff;
  margin-left: 10px;
}

.animated-layer-properties {
  margin-left: 110px;
  display: flex;
  align-items: center;
}

.animated-layer-property {
  margin-left: 15px;
}

.animated-layer-trigger {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(255, 255, 255, 0.15);
}

.animated-layer-order {
  font-family: Exo;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-size: 7px;
  text-align: center;
  text-transform: uppercase;

  color: #ffffff;
}
</style>
