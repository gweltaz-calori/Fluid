<template>
    <div class="select" v-on-clickaway="closeOptions">
        <div class="select-value-container" @click="focus">
            <div ref="input" contenteditable="true" v-text="value"  @keypress.enter.prevent @keyup.enter="blur($event)" @blur="blur($event)" class="select-value" ></div>
            <div class="unit">{{unit}}</div>
        </div>
        <fluid-icon-chevron @click="showOptions" class="chevron"></fluid-icon-chevron>
        <div v-show="optionsVisible" class="select-options">
            <div class="select-option" @click.stop="changeValue(option)" v-for="option in options" :key="option">
              <div class="select-option-check" :class="{'checked':option == value}">
                <fluid-icon-check></fluid-icon-check>
              </div>
              <div class="select-option-text" :class="{'active':option == value}">{{option}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";
import SuperMath from "@/js/math";

export default {
  mixins: [clickaway],
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
    options: {},
    type: {},
    unit: {}
  },

  data() {
    return {
      optionsVisible: false
    };
  },
  methods: {
    showOptions() {
      this.optionsVisible = true;
    },
    closeOptions() {
      this.optionsVisible = false;
    },
    changeValue(option) {
      this.$emit("input", option);
      this.closeOptions();
    },
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
        this.max
      );
      event.target.innerHTML = value;
      this.$emit("input", value);
    }
  },
  mounted() {}
};
</script>

<style scoped>
.select {
  display: flex;
  align-items: center;
}
.select-value-container {
  display: flex;
  align-items: center;
}

.select-value,
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

.chevron {
  margin-left: 5.4px;
  height: 20px;
}

.select-options {
  background: #2d2d2d;
  border-radius: 2px;
  padding: 4px 0;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999999;
}

.select-option {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 4px 8px;
  padding-right: 70px;

  color: rgba(255, 255, 255, 0.5);
}

.select-option-check {
  margin-right: 7px;
  opacity: 0;
  pointer-events: none;
}

.select-option-check.checked {
  opacity: 1;
}

.select-option-text,
.select-value {
  font-family: Exo;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 11px;
  cursor: default;
}

.select-option-text.active {
  color: rgba(255, 255, 255, 1);
}

.select-option:hover {
  background: rgba(180, 180, 180, 0.17);
}

.select-option.active {
  color: rgba(255, 255, 255, 1);
}
</style>
