<template>
    <div class="combo">
        <div class="combo-value">{{value}}</div>
        <fluid-icon-chevron @click="showOptions"></fluid-icon-chevron>
        <div class="combo-options">
            <div class="combo-option" @click="changeValue(option)" v-for="option in options" :key="option">
              <div class="combo-option-check" :class="{'checked':option == value}">
                <fluid-icon-check></fluid-icon-check>
              </div>
              <div class="combo-option-text">{{option}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import FluidIconChevron from "@/components/icons/FluidIconChevron.vue";
import FluidIconCheck from "@/components/icons/FluidIconCheck.vue";

export default {
  components: { FluidIconChevron, FluidIconCheck },
  props: ["value", "options"],
  methods: {
    changeValue(option) {
      this.$emit("input", option);
    },
    showOptions() {}
  }
};
</script>

<style scoped>
.combo {
  display: flex;
  align-items: center;
  position: relative;
}
.combo-value {
  margin-right: 7px;
}

.combo-options {
  background: #2d2d2d;
  border-radius: 2px;
  padding: 4px 0;
}
.combo-option {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 4px 8px;
  padding-right: 70px;
  cursor: default;

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

.combo-option-text {
  font-family: Exo;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 11px;
}

.combo-option:hover {
  background: rgba(180, 180, 180, 0.17);
}

.combo-option.active {
  color: rgba(255, 255, 255, 1);
}
</style>
