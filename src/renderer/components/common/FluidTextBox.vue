<template>
    <input @keyup.enter="exitInput($event)" @click="click" :value="value" @blur="validateValue($event)" :placeholder="placeholder" type="text">
</template>

<script>
import SuperMath from "@/js/math";
export default {
  props: {
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 1
    },
    value: {},
    placeholder: {}
  },

  methods: {
    click(e) {
      e.target.setSelectionRange(0, e.target.value.length);
    },
    exitInput(event) {
      event.target.blur();
      this.validateValue(event);
    },
    validateValue(event) {
      event.target.value = SuperMath.clamp(
        event.target.value,
        this.min,
        this.max
      );
      this.$emit(
        "input",
        SuperMath.clamp(event.target.value, this.min, this.max)
      );
    }
  }
};
</script>

<style scoped>
input {
  background-color: transparent;

  font-family: Exo;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 11px;

  color: #ffffff;
  width: 30px;
}
</style>
