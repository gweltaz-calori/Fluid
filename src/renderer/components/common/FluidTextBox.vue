<template>
    <input @click="click"  @blur="validateInput($event.target.value)" ref="input" :value="value" :placeholder="placeholder" type="text">
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
    placeholder: {},
    formatter: {
      required: false
    }
  },
  methods: {
    click(e) {
      e.target.setSelectionRange(0, e.target.value.length);
    },
    validateInput(value) {
      let val = this.value;

      if (this.formatter) {
        try {
          val = this.formatter.parse(value);
        } catch (e) {
          if (val) {
            val = this.formatter.parse(val);
          }
        }

        val = this.formatter.format(SuperMath.clamp(val, this.min, this.max));
      } else {
        val = SuperMath.clamp(val, this.min, this.max);
      }

      this.$refs.input.value = val;

      this.$emit("input", val);
    }
  }
};
</script>

<style scoped>
input {
  width: 48.56px;
  height: 24px;
  padding: 6.43px 4.12px;

  background: rgba(34, 34, 34, 1);
  border-radius: 3px;

  font-family: Exo;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 13.4435px;

  color: #ffffff;
  border: solid transparent 1px;

  cursor: default;
}

input:focus {
  border: solid #1f8aff 1px;
}
</style>
