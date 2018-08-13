<template>
    <div class="combo" @mousedown="showOptions" v-on-mousedownaway="closeOptions">
        <div class="combo-value">{{getLabel(value)}}</div>
        <fluid-icon-chevron class="combo-chevron" @click="showOptions"></fluid-icon-chevron>
        <div v-show="optionsVisible" class="combo-options" :style="comboOptionsStyle">
            <div class="combo-option" @mousedown.stop="changeValue(option)" v-for="option in options" :key="getKey(option)">
              <div class="combo-option-check" :class="{'checked':getLabel(option) == getLabel(value)}">
                <fluid-icon-check></fluid-icon-check>
              </div>
              <div class="combo-option-text" :class="{'active':getLabel(option) == getLabel(value)}">{{getLabel(option)}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import { mixin as mousedownaway } from "@/directives/mouse-away";

import FluidIconChevron from "@/components/icons/FluidIconChevron.vue";
import FluidIconCheck from "@/components/icons/FluidIconCheck.vue";

export default {
  mixins: [mousedownaway],
  components: { FluidIconChevron, FluidIconCheck },
  props: ["value", "options", "label", "track-by", "modelProperty"],
  data() {
    return {
      optionsVisible: false
    };
  },
  methods: {
    changeValue(option) {
      if (this.modelProperty && typeof option === "object") {
        this.$emit("input", option[this.modelProperty]);
      } else {
        this.$emit("input", option);
      }
      this.closeOptions();
    },
    showOptions() {
      this.optionsVisible = true;
    },
    closeOptions() {
      this.optionsVisible = false;
    },
    getKey(value) {
      if (typeof value === "object" && this.trackBy) return value[this.trackBy];

      return value;
    },
    getLabel(value) {
      if (typeof value === "object" && this.label) return value[this.label];

      return value;
    }
  },
  computed: {
    comboOptionsStyle() {
      let index = this.options.findIndex(
        option => this.getLabel(option) === this.getLabel(this.value)
      );

      return {
        top: `${-(index * 29) - 4}px`
      };
    }
  },
  mounted() {}
};
</script>

<style scoped>
.combo {
  cursor: default;
  display: flex;
  align-items: center;
  position: relative;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 3px;
  padding: 2.59px 7.08px;
  width: 136.7px;
  height: 24px;
}

.combo-options {
  background: #2d2d2d;
  border-radius: 2px;
  padding: 4px 0;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999999;
}

.combo-option {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 4px 8px;
  padding-right: 70px;

  color: rgba(255, 255, 255, 0.5);
}

.combo-option-check {
  margin-right: 7px;
  opacity: 0;
  pointer-events: none;
}

.combo-chevron {
  margin-left: auto;
}

.combo-option-check.checked {
  opacity: 1;
}

.combo-option-text,
.combo-value {
  font-family: Exo;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 11px;
  cursor: default;
}

.combo-value {
  font-family: Exo;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-size: 11px;

  color: #ffffff;
}

.combo-option-text.active {
  color: rgba(255, 255, 255, 1);
}

.combo-option:hover {
  background: rgba(180, 180, 180, 0.17);
}

.combo-option.active {
  color: rgba(255, 255, 255, 1);
}
</style>
