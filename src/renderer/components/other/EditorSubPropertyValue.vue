<template>
    <div class="sub-property-value-container">
        <div v-if="type === 'range'">
            <fluid-range :value="value" @input="changeValue"></fluid-range>
            <fluid-text-box :value="value" @input="changeValue"></fluid-text-box>
        </div>
        <div v-else>
            <fluid-combo-box :value="value" :options="options" @input="changeValue"></fluid-combo-box>
        </div>
    </div>
</template>

<script>
import FluidRange from "@/components/common/FluidRange.vue";
import FluidTextBox from "@/components/common/FluidTextBox.vue";
import FluidComboBox from "@/components/common/FluidComboBox.vue";
export default {
  components: { FluidRange, FluidTextBox, FluidComboBox },
  props: {
    type: {
      type: String
    },
    value: {},
    options: {}
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
}
</style>
