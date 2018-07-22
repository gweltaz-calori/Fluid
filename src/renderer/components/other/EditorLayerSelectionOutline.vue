<template>
    <div :style="style" class="layer-outline"></div>
</template>

<script>
import SuperMath from "@/js/math";
export default {
  props: {
    top: {
      default: 0
    },
    left: {
      default: 0
    },
    width: { default: 0 },
    height: { default: 0 },
    transform: {}
  },
  computed: {
    style() {
      let angle = Math.round(
        SuperMath.toDegrees(Math.atan2(this.transform.b, this.transform.a))
      );

      return {
        top: `0px`,
        left: `0px`,
        width: `${this.width}px`,
        height: `${this.height}px`,
        transformOrigin: "0 0",
        transform: `matrix(${this.transform.a},${this.transform.b},${
          this.transform.c
        },${this.transform.d},${this.transform.e},${
          this.transform.f
        }) translate(${this.left}px,${this.top}px)`
      };
    }
  }
};
</script>

<style scoped>
.layer-outline {
  position: fixed;
  border: solid #1a74d9 2px;
  pointer-events: none;
}
</style>
