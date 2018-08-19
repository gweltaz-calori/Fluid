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
            <div class="animated-layer-trigger-wrapper animated-layer-property">
              <div class="animated-layer-trigger" v-if="animation.trigger === PresetTriggerType.ON_CLICK">
                <fluid-icon-click-trigger></fluid-icon-click-trigger>
              </div>
              <div class="animated-layer-trigger " v-else-if="animation.trigger === PresetTriggerType.AFTER">
                <fluid-icon-time-trigger></fluid-icon-time-trigger>
              </div>
            </div>
            <fluid-combo-box class="animated-layer-property" label="value" track-by="key" model-property="value" v-model="trigger" :options="TRIGGERS" ></fluid-combo-box>

            <editor-sub-property-row-value class="animated-layer-property" :formatter="secondFormatter"  v-model="duration" type="range" :min="MIN_DURATION" :max="MAX_DURATION"></editor-sub-property-row-value>
            <editor-sub-property-row-value class="animated-layer-property" :formatter="secondFormatter"  v-model="delay" type="range" :min="MIN_DELAY" :max="MAX_DELAY"></editor-sub-property-row-value>
            <fluid-combo-box class="animated-layer-property" label="value" model-property="value" track-by="key" v-model="ease" :options="EASINGS"></fluid-combo-box>
        </div>
    </div>
</template>

<script>
import EditorSubPropertyRowValue from "@/components/other/EditorSubPropertyRowValue.vue";
import SeconderFormatter from "../../../../formatter/SecondFormatter";
import {
  TRIGGERS,
  EASINGS,
  MAX_DURATION,
  MIN_DURATION,
  MAX_DELAY,
  MIN_DELAY,
  PresetTriggerType
} from "../../../../models/types2";
import { FLUID_TYPES } from "../../../../store/helpers";

export default {
  components: { EditorSubPropertyRowValue },
  props: {
    selected: {
      default: false
    },
    animationType: {
      default: FLUID_TYPES.ANIMATION_IN
    },
    animation: {}
  },
  data() {
    return {
      secondFormatter: new SeconderFormatter(),
      TRIGGERS,
      EASINGS,
      MAX_DURATION,
      MIN_DURATION,
      MAX_DELAY,
      MIN_DELAY,
      PresetTriggerType
    };
  },
  computed: {
    trigger: {
      get() {
        return this.$store.getters.fluidSubProperty({
          type: this.animationType,
          propertyName: "trigger"
        });
      },
      set(value) {
        this.$store.commit("SET_FLUID_PROPERTY", {
          type: this.animationType,
          propertyName: "trigger",
          value
        });
      }
    },
    ease: {
      get() {
        return this.$store.getters.fluidSubProperty({
          type: this.animationType,
          propertyName: "ease"
        });
      },
      set(value) {
        this.$store.commit("SET_FLUID_PROPERTY", {
          type: this.animationType,
          propertyName: "ease",
          value
        });
      }
    },
    duration: {
      get() {
        return this.$store.getters.fluidSubProperty({
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
    delay: {
      get() {
        return this.$store.getters.fluidSubProperty({
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

.animated-layer-trigger-wrapper {
  width: 26px;
  height: 26px;
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
