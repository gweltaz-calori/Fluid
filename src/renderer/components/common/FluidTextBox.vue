<template>
    <input :style="style" @click="click" @keydown.enter="exit" @keydown.esc="exit"  @blur="validateInput($event.target.value)" ref="input" :value="value" :placeholder="placeholder" type="text">
</template>

<script>
import SuperMath from "@/js/math";
import { mapGetters } from "vuex";

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
  computed: {
    ...mapGetters(["themeColors"]),
    style() {
      return {
        background: this.themeColors.highlight,
        color: this.themeColors.text
      };
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
    },
    exit(e) {
      e.target.blur();
    }
  }
};
</script>

<style scoped>
input {
  width: 48.56px;
  height: 24px;
  padding: 6.43px 4.12px;

  border-radius: 3px;

  font-family: Exo;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  font-size: 13.4435px;

  border: solid transparent 1px;

  cursor: default;
}

input:focus {
  border: solid #1f8aff 1px;
}
</style>
