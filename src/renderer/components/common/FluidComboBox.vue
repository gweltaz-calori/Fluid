<template>
    <div class="combo">
        <div class="combo-value">{{value}}</div>
        <fluid-icon-chevron @click="showOptions"></fluid-icon-chevron>
        <div class="combo-options">
            
        </div>
    </div>
</template>

<script>
import FluidIconChevron from "@/components/icons/FluidIconChevron.vue";

export default {
  components: { FluidIconChevron },
  props: ["value", "options"],
  methods: {
    changeValue() {
      this.$emit("input", this.$event.target.value);
    }
  }
};
</script>

<style scoped>
.combo {
  display: flex;
  align-items: center;
}
.combo-value {
  margin-right: 7px;
}
</style>
