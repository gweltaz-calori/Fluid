<template>
    <div class="sub-property-value-container">
        <div v-if="type === 'range'">
            <fluid-range @input="changeValue"></fluid-range>
            <fluid-text-box @input="changeValue"></fluid-text-box>
        </div>
        <div v-else>
            <fluid-combo-box v-model="test" :options="options" @input="changeValue"></fluid-combo-box>
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
    value: {}
  },
  data() {
    return {
      test: "None",
      options: ["None", "Opacity", "Move"]
    };
  },
  methods: {
    changeValue() {
      //this.$emit("input", this.$event.target.value);
    }
  }
};
</script>

<style scoped>
.sub-property-value-container {
}
</style>
