<template>
    <input 
      :style="style" 
      @click="click" 
      @keydown.enter="exit"
      @keydown.esc="exit" 
      @blur="$emit('blur')"
      @input="change"
      ref="input" 
      :value="value" 
      :placeholder="placeholder" 
      type="text">
</template>

<script>
import SuperMath from "@/js/math";
import { mapGetters, mapActions } from "vuex";
import { isMixed } from "../../store/helpers";

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
    ...mapActions(["setEditingValue"]),
    click(e) {
      e.target.setSelectionRange(0, e.target.value.length);
    },
    blur(e) {
      this.validateInput(e.target.value);
    },
    change() {
      console.log("on change");
    },
    validateInput(value) {
      let val = this.value;

      if (this.formatter && !isMixed(value)) {
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
      this.validateInput(this.$refs.input.value);
    }
  }
};
</script>

<style scoped>
input {
  width: 48.56px;
  padding: 3.43px 4.12px;

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
