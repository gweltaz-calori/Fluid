<template>
    <div class="property">
        <div class="property-container">
          <slot></slot>
        </div>  
        <div class="border" :style="borderStyle"></div>  
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["themeColors"]),
    borderStyle() {
      return {
        backgroundColor: this.themeColors.text
      };
    }
  }
};
</script>

<style scoped>
.border {
  height: 0.8px;
  opacity: 0.1;
  width: 100%;
}

.property {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.property-container {
  padding: 12px 24px;
}
</style>
