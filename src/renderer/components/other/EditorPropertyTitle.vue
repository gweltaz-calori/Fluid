<template>
    <span class="property-title" :style="style">
        <slot></slot>
    </span>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["themeColors"]),
    style() {
      return {
        color: this.themeColors.text
      };
    }
  }
};
</script>

<style scoped>
.property-title {
  text-transform: uppercase;
  font-family: Exo;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  font-size: 11px;
}
</style>
