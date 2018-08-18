<template>
    <div ref="rangeContainer" class="range" >
        <span class="range-bar-wrapper" @mousedown="onBarClick" >
          <div :style="barStyle" class="range-bar" ></div>
        </span>
        <div class="range-background" :style="backgroundWidth"></div>
        <div :style="indicatorStyle" ref="indicator" class="range-indicator"></div>
    </div>
</template>

<script>
import Draggable from "@/lib/draggable";
import { mapGetters } from "vuex";
import SuperMath from "../../importer/utils/SuperMath";
import { isMixed } from "../../store/helpers";
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
    formatter: {},
    disabled: {
      default: false
    }
  },
  data() {
    return {
      backgroundRatio: 0
    };
  },
  watch: {
    value() {
      if (this.draggable && this.draggable.isDragging) return;
      // value changed without dragging
      this.setValue();
    }
  },
  computed: {
    ...mapGetters(["themeColors"]),
    backgroundWidth() {
      return {
        width: `${SuperMath.range(
          this.formatter.parse(this.value.toString()),
          this.min,
          this.max,
          0,
          1
        ) * 100}%`
      };
    },
    indicatorStyle() {
      return {
        background: this.themeColors.text
      };
    },

    barStyle() {
      return {
        background: this.themeColors.highlight
      };
    }
  },
  methods: {
    setValue() {
      const value = !isMixed(this.value)
        ? this.formatter.parse(this.value.toString())
        : 0;
      const valueInRange = SuperMath.range(value, this.min, this.max, 0, 1);
      this.draggable.set({
        x: valueInRange
      });
    },
    onDrag(e) {
      this.$emit(
        "input",
        this.formatter.format(
          SuperMath.range(e.x / e.maxX, 0, 1, this.min, this.max)
        )
      );
    },
    onBarClick(e) {
      const { offsetX } = e;
      const valueInRange = SuperMath.range(
        offsetX,
        0,
        e.target.clientWidth,
        0,
        1
      );
      this.draggable.set({
        x: valueInRange
      });

      this.draggable.move(e);

      this.$emit(
        "input",
        this.formatter.format(
          SuperMath.range(
            this.draggable.getBounds().x / this.draggable.getBounds().maxX,
            0,
            1,
            this.min,
            this.max
          )
        )
      );
    }
  },
  beforeDestroy() {
    this.draggable.off();
  },
  mounted() {
    this.draggable = new Draggable({
      axises: ["x"],
      el: this.$refs.indicator,
      boundsElement: this.$refs.rangeContainer
    });

    this.draggable.on("drag", this.onDrag);

    this.setValue();
  }
};
</script>

<style scoped>
.range {
  position: relative;
  display: flex;
  align-items: center;
  height: 2.34px;
  width: 80.05px;
}

.range-bar {
  height: 2.34px;
  width: 80.05px;
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
  right: 0;
}

.range-bar-wrapper {
  padding: 10px 0;
}

.range-indicator {
  position: absolute;

  height: 13px;
  width: 13px;
  border-radius: 50%;
}

.disabled {
  pointer-events: none;
  opacity: 0.3;
}
</style>
