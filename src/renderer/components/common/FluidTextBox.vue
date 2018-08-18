<template>
    <input 
      :style="style" 
      @click="click" 
      @keydown.enter="exit"
      @keydown.esc="exit" 
      @blur="blur($event.target.value)"
      @focus="onFocus"
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
  data() {
    return {
      focused: false
    };
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
    ...mapActions(["setFocusedTextboxRef"]),
    click(e) {
      e.target.setSelectionRange(0, e.target.value.length);
    },
    blur(value) {
      if (!this.focused) return;

      this.focused = false;
      this.validateInput(value);
    },
    onFocus() {
      this.focused = true;
    },
    validateInput(newValue) {
      let oldValue = this.value;

      if (this.formatter) {
        try {
          //the parsing succeed
          const parsedValue = this.formatter.parse(newValue);
          newValue = this.formatter.format(
            SuperMath.clamp(parsedValue, this.min, this.max)
          );
        } catch (e) {
          //parsing failed so set the old value back
          newValue = oldValue;
        }
      } else {
        //no need to make any formatting on the value
        newValue = SuperMath.clamp(newValue, this.min, this.max);
      }

      this.$refs.input.value = newValue;
      this.$emit("input", newValue);
    },
    exit(e) {
      e.target.blur();
      this.validateInput(this.$refs.input.value);
    },
    flush() {
      this.blur(this.$refs.input.value);
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
