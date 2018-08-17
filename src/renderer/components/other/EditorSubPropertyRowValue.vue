<template>
    <div class="sub-property-value-container">
        <div class="range-value-type" v-if="type === 'range'">
            <fluid-text-box @blur="$emit('blur')" :fallback-value="fallbackValue" :max="max" :min="min" :formatter="formatter" class="range-value-type-textbox" :value="value" @input="changeValue"></fluid-text-box>
            <fluid-range v-if="!isMixed" :max="max" :min="min" :formatter="formatter" :value="value" @input="changeValue"></fluid-range>
        </div>
        <fluid-check-box v-else-if="type === 'checkbox'" :value="value" @input="changeValue"></fluid-check-box>
        <div v-else-if="type === 'textbox'" class="text-box-container">
          <fluid-text-box @blur="$emit('blur')" :fallback-value="fallbackValue" :max="max" :min="min" :formatter="formatter" :value="value" @input="changeValue"></fluid-text-box>
        </div>
        <div v-else>
            <fluid-combo-box :model-property="modelProperty" :label="label" :track-by="trackBy" :value="value" :options="options" @input="changeValue"></fluid-combo-box>
        </div>
    </div>
</template>

<script>
import { isMixed } from "../../store/helpers";

export default {
  props: {
    type: {
      type: String
    },
    label: {},
    trackBy: {},
    value: {},
    options: {},
    max: {},
    min: {},
    formatter: {},
    fallbackValue: {},
    modelProperty: {}
  },
  methods: {
    changeValue(value) {
      this.$emit("input", value);
    }
  },
  computed: {
    isMixed() {
      return isMixed(this.value);
    }
  }
};
</script>

<style scoped>
.sub-property-value-container {
  display: flex;
  align-items: center;
}
.range-value-type {
  display: flex;
  align-items: center;
}
.range-value-type-textbox {
  margin-right: 9px;
}

.unit {
  font-family: Exo;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 11px;
  color: #ffffff;
}

.text-box-container {
  display: flex;
  align-items: center;
}
</style>
