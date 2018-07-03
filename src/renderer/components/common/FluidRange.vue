<template>
    <div ref="rangeContainer" class="range">
        <div class="range-bar"></div>
        <div ref="indicator" class="range-indicator"></div>
    </div>
</template>

<script>
import Draggable from "gsap/Draggable";
import TweenMax from "gsap/TweenMax";
export default {
  props: {
    max: {
      type: Number,
      default: 1
    },
    min: {
      type: Number,
      default: 0
    },
    value: {}
  },
  data() {
    return {
      draggable: null
    };
  },
  watch: {
    value() {
      if (this.draggable.isDragging) return;

      TweenMax.set(this.draggable.target, {
        x: this.value * this.draggable.maxX / this.max,
        onUpdate: this.draggable.update,
        onUpdateScope: this.draggable
      });
    }
  },
  methods: {
    onDrag() {
      this.$emit("input", (this.draggable.x / this.draggable.maxX).toFixed(2));
    }
  },
  beforeDestroy() {
    this.draggable.addEventListener("drag", this.onDrag);
  },
  mounted() {
    this.draggable = Draggable.create(this.$refs.indicator, {
      cursor: "e-resize",
      type: "x",
      bounds: this.$refs.rangeContainer
    })[0];

    this.draggable.addEventListener("drag", this.onDrag);
  }
};
</script>

<style scoped>
.range {
  position: relative;
  display: flex;
  align-items: center;
}

.range-bar {
  width: 60px;
  height: 2px;
  background: rgba(255, 255, 255, 0.59);
  border-radius: 37.3431px;
}

.range-indicator {
  position: absolute;

  height: 8px;
  width: 8px;
  border-radius: 50%;

  background: #ffffff;
}
</style>
