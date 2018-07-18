<template>
    <div class="box-value-container" @click="focus">
        <div ref="input" contenteditable="true" v-text="value"  @keypress.enter.prevent @keyup.enter="blur($event)" @blur="blur($event)" class="box-value" ></div>
        <div class="unit">{{unit}}</div>
    </div>
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
    type: {},
    unit: {},
    fallbackValue: {
      default: "max"
    }
  },
  methods: {
    focus(e) {
      this.$refs.input.focus();
      let range = document.createRange();
      range.selectNodeContents(this.$refs.input);
      let sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    },
    blur(event) {
      let sel = window.getSelection();
      sel.removeAllRanges();
      this.validateValue(event);
    },
    validateValue(event) {
      let value = SuperMath.clamp(
        parseFloat(event.target.innerHTML),
        this.min,
        this.max,
        this.fallbackValue === "max"
      );
      event.target.innerHTML = value;
      this.$emit("input", value);
    }
  },
  mounted() {}
};
</script>

<style scoped>
.box-value-container {
  display: flex;
  align-items: center;
}
.box-value,
.unit {
  text-transform: uppercase;
  width: auto;
  font-family: Exo;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  font-size: 11px;

  color: #ffffff;
}

.unit {
  margin-left: 3px;
  text-transform: lowercase;

  font-weight: 600;
  color: rgba(255, 255, 255, 0.6);
}
</style>
