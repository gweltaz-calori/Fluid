<template>
    <div ref="rangeContainer" class="range">
        <span class="range-bar-wrapper" @mousedown="onClick"><div class="range-bar" ></div></span>
        <div class="range-background" :style="backgroundWidth"></div>
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
    value: {},
    formatter: {}
  },
  data() {
    return {
      draggable: null,
      backgroundRatio: 0
    };
  },
  watch: {
    value() {
      if (this.draggable.isDragging) return;

      TweenMax.set(this.draggable.target, {
        x: this.getValue() * this.draggable.maxX / this.max,
        onUpdate: this.draggable.update,
        onUpdateScope: this.draggable
      });
    }
  },
  computed: {
    backgroundWidth() {
      return {
        width: `${this.getValue() / this.max * 100}%`
      };
    }
  },
  methods: {
    getValue() {
      return this.formatter
        ? this.formatter.parse(String(this.value))
        : this.value;
    },
    onDrag() {
      this.$emit("input", (this.draggable.x / this.draggable.maxX).toFixed(2));
    },
    onClick(e) {
      this.$emit("input", e.offsetX / e.target.clientWidth);
    }
  },
  beforeDestroy() {
    this.draggable.addEventListener("drag", this.onDrag);
  },
  mounted() {
    this.draggable = Draggable.create(this.$refs.indicator, {
      cursor: "default",
      type: "x",
      bounds: this.$refs.rangeContainer
    })[0];

    this.draggable.addEventListener("drag", this.onDrag);

    TweenMax.set(this.draggable.target, {
      x: this.getValue() * this.draggable.maxX / this.max
    });
  }
};
</script>

<style scoped>
.range {
  position: relative;
  display: flex;
  align-items: center;
  height: 2.34px;
}

.range-bar {
  height: 2.34px;
  width: 73.05px;
  background: rgba(255, 255, 255, 0.59);
  border-radius: 37.3431px;
}

.range-background {
  pointer-events: none;
  background: #1f8aff;
  height: 2.34px;
  position: absolute;
  border-radius: 37.3431px;
  top: 0;
  left: 0;
  bottom: 0;
}

.range-bar-wrapper {
  padding: 10px 0;
}

.range-indicator {
  position: absolute;

  height: 13px;
  width: 13px;
  border-radius: 50%;

  background: #ffffff;
}
</style>
