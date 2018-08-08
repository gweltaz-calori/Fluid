<template>
    <div :style="style" class="selection"></div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    layer: {}
  },
  computed: {
    ...mapGetters(["canvasLayerElement"]),
    style() {
      if (!this.layer) return {};

      let el = this.canvasLayerElement(this.layer.id);

      if (!el) return;

      let bounds = el.getBoundingClientRect();

      return {
        top: `${bounds.top}px`,
        left: `${bounds.left}px`,
        width: `${bounds.width}px`,
        height: `${bounds.height}px`
      };

      /* let matrix;

      //svg node
      if (el.getScreenCTM) {
        let transform = el.getScreenCTM();
        matrix = `matrix(${transform.a},${transform.b},${transform.c},${
          transform.d
        },${transform.e},${transform.f})`;
      } else {
        matrix = getComputedStyle(el).transform;
      }

      return {
        top: `0px`,
        left: `0px`,
        width: `${width}px`,
        height: `${height}px`,
        transformOrigin: "0 0",
        transform: `${matrix} translate(${left}px,${top}px)`
      }; */
    }
  }
};
</script>

<style scoped>
.selection {
  position: absolute;
  z-index: 9999;
  border: solid 2px #1f8aff;
  pointer-events: none;
}
</style>
