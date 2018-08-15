<template>
    <div class="property-action" :class="{'visible':visible}">
        <slot></slot> 
        <div class="property-action-background" :style="backgroundStyle"></div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    visible: {
      default: true
    }
  },
  computed: {
    ...mapGetters(["themeColors"]),
    backgroundStyle() {
      return {
        backgroundColor: this.themeColors.text
      };
    }
  }
};
</script>

<style scoped>
.property-action {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: default;
  margin-left: 10px;
  height: 24px;
  width: 24px;

  pointer-events: none;
  opacity: 0;
  position: relative;
}

.property-action-background {
  position: absolute;
  border-radius: 39px;
  padding: 15px;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: opacity 0.05s;
}

.property-action-background:hover {
  opacity: 0.04;
}

.property-action.visible {
  pointer-events: all;
  opacity: 1;
}
</style>
