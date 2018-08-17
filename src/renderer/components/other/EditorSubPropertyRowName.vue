<template>
    <div class="sub-property-title" :style="style">
        <slot></slot>
    </div>
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
.sub-property-title {
  font-family: Exo;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 13.4435px;
  margin-right: 21px;
  user-select: none;
  opacity: 0.6;
  width: 44px;
}
</style>
