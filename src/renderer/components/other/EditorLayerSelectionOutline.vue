<template>
    <div :style="style" class="layer-outline"></div>
</template>

<script>
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
      console.log(this.transform);
      console.log(
        `matrix(${this.transform.a},${this.transform.b},${this.transform.c},${
          this.transform.d
        },${this.transform.e},${this.transform.f})`
      );
      return {
        top: `${this.top}px`,
        left: `${this.left}px`,
        width: `${this.width}px`,
        height: `${this.height}px`,
        transform: `matrix(${this.transform.a},${this.transform.b},${
          this.transform.c
        },${this.transform.d},0,0)`
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
