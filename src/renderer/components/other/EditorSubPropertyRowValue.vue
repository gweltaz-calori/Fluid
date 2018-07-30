<template>
    <div class="sub-property-value-container">
        <div class="range-value-type" v-if="type === 'range'">
            <fluid-text-box-v-2 :formatter="formatter" class="range-value-type-textbox" :value="value" @input="changeValue"></fluid-text-box-v-2>
            <fluid-range-2 :formatter="formatter" :value="value" @input="changeValue"></fluid-range-2 >
        </div>
        <fluid-check-box v-else-if="type === 'checkbox'" :value="value" @input="changeValue"></fluid-check-box>
        <div v-else-if="type === 'textbox'" class="text-box-container">
          <fluid-text-box-v-2 :fallback-value="fallbackValue" :max="max" :min="min" :formatter="formatter" :value="value" @input="changeValue"></fluid-text-box-v-2>
        </div>
        <div v-else>
            <fluid-combo-box-2 :value="value" :options="options" @input="changeValue"></fluid-combo-box-2>
        </div>
    </div>
</template>

<script>
import FluidRange from "@/components/common/FluidRange.vue";
import FluidTextBox from "@/components/common/FluidTextBox.vue";
import FluidComboBox from "@/components/common/FluidComboBox.vue";
import FluidCheckBox from "@/components/common/FluidCheckBox.vue";
export default {
  components: { FluidRange, FluidTextBox, FluidComboBox, FluidCheckBox },
  props: {
    type: {
      type: String
    },
    value: {},
    options: {},
    max: {},
    min: {},
    formatter: {},
    fallbackValue: {}
  },
  methods: {
    changeValue(value) {
      this.$emit("input", value);
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
