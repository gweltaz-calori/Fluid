<template>
    <div class="combo" @click="showOptions" v-on-clickaway="closeOptions">
        <div class="combo-value">{{value}}</div>
        <fluid-icon-chevron @click="showOptions"></fluid-icon-chevron>
        <div v-show="optionsVisible" class="combo-options" :style="comboOptionsStyle">
            <div class="combo-option" @click.stop="changeValue(option)" v-for="option in options" :key="option">
              <div class="combo-option-check" :class="{'checked':option == value}">
                <fluid-icon-check></fluid-icon-check>
              </div>
              <div class="combo-option-text" :class="{'active':option == value}">{{option}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";

import FluidIconChevron from "@/components/icons/FluidIconChevron.vue";
import FluidIconCheck from "@/components/icons/FluidIconCheck.vue";

export default {
  mixins: [clickaway],
  components: { FluidIconChevron, FluidIconCheck },
  props: ["value", "options"],
  data() {
    return {
      optionsVisible: false
    };
  },
  methods: {
    changeValue(option) {
      this.$emit("input", option);
      this.closeOptions();
    },
    showOptions() {
      this.optionsVisible = true;
    },
    closeOptions() {
      this.optionsVisible = false;
    }
  },
  computed: {
    comboOptionsStyle() {
      let index = this.options.findIndex(option => option == this.value);
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
}

.combo-value {
  margin-right: 7px;

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
