<template>
    <div class="panel" :style="style">
        <div class="header">
          <div class="preview-button">
            <fluid-icon-dark-preview></fluid-icon-dark-preview>
          </div>
          <fluid-menu class="timeline-menu" v-model="selectedMenu" :options="menuOptions"></fluid-menu>
        </div>
        <keep-alive>
          <component :animation-type="selectedMenu.key" :is="selectedMenu.value"></component>
        </keep-alive>
        <div @mousedown="onTouchEdge" class="resize-edge"></div>
    </div>
</template>

<script>
import SuperMath from "../../../../js/math";
import { FLUID_TYPES } from "../../../../store/helpers";
import BuildOrderTimeline from "../timeline/BuildOrderTimeline.vue";
import panelMixin from "@/mixins/panel";
export default {
  mixins: [panelMixin],
  components: { BuildOrderTimeline },
  data() {
    const menuOptions = [
      {
        name: "Animate In",
        key: FLUID_TYPES.ANIMATION_IN,
        value: "BuildOrderTimeline"
      },
      {
        name: "Animate Out",
        key: FLUID_TYPES.ANIMATION_OUT,
        value: "BuildOrderTimeline"
      }
    ];

    const selectedMenu = menuOptions[0];
    return {
      isDragging: false,
      mouse: {
        x: 0,
        y: 0
      },
      height: 230,
      minHeight: 150,
      maxHeight: 600,
      menuOptions,
      selectedMenu
    };
  },

  computed: {
    style() {
      return { height: `${this.height}px`, ...this.panelStyle };
    }
  },
  methods: {
    onTouchEdge(e) {
      if (this.isDragging) return;
      const { x, y } = e;

      this.mouse.x = x;
      this.mouse.y = y;
      this.isDragging = true;
    },
    onDropWindow() {
      if (!this.isDragging) return;
      this.isDragging = false;
    },
    onMoveWindow(e) {
      if (!this.isDragging) return;

      const { x, y } = e;

      const distance = this.mouse.y - y;

      this.height = SuperMath.clamp(
        this.height + distance,
        this.minHeight,
        this.maxHeight
      );

      if (this.height !== this.maxHeight && this.height !== this.minHeight) {
        this.mouse.x = x;
        this.mouse.y = y;
      }
    }
  },
  beforeDestroy() {
    window.removeEventListener("mouseup", this.onDropWindow);
    window.removeEventListener("mousemove", this.onMoveWindow);
  },
  mounted() {
    window.addEventListener("mouseup", this.onDropWindow);
    window.addEventListener("mousemove", this.onMoveWindow);
  }
};
</script>

<style scoped>
.panel {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 305px;
  height: 230px;
  z-index: 1;
  padding: 20px;
}

.resize-edge {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 5px;
  z-index: 9999;
  cursor: n-resize;
}

.preview-button {
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  padding-left: 2px;

  background: #ffffff;
  border-radius: 50%;
}

.header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.timeline-menu {
  margin-left: 20px;
}
</style>
