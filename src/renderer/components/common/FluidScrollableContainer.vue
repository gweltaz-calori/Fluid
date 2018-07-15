<template>
    <div ref="scrollContainer" @mouseenter="enter" @mouseleave="leave" class="scroll-container">
        <div @scroll="scroll" ref="scrollContent" class="scroll-content" :style="{'height':'100%',width: 'calc(100% + 17px)'}">
            <slot></slot>
        </div>
        <div ref="trackBarContainer" class="scroll-track" :class="{'visible':barVisible}">
            <div ref="trackBar" class="scroll-track-bar" ></div>
        </div>
    </div>
</template>

<script>
import Draggable from "gsap/Draggable";
import TweenMax from "gsap/TweenMax";
export default {
  data() {
    return {
      draggable: null,
      barVisible: false
    };
  },
  methods: {
    scroll(e) {
      TweenMax.set(this.$refs.trackBar, {
        y:
          this.$refs.scrollContainer.clientHeight *
          this.$refs.scrollContent.scrollTop /
          this.$refs.scrollContent.scrollHeight
      });
    },
    onDrag() {
      this.$refs.scrollContent.scrollTop =
        this.$refs.scrollContent.scrollHeight *
        this.draggable.y /
        this.$refs.scrollContainer.clientHeight;
    },
    leave() {
      if (this.draggable.isDragging) return;

      this.barVisible = false;
    },
    enter() {
      this.barVisible = true;
    }
  },
  beforeDestroy() {
    this.draggable.removeEventListener("drag", this.onDrag);
    this.draggable.removeEventListener("release", this.leave);
  },
  mounted() {
    TweenMax.set(this.$refs.trackBar, {
      height:
        this.$refs.scrollContainer.clientHeight *
        this.$refs.scrollContent.clientHeight /
        this.$refs.scrollContent.scrollHeight
    });

    this.draggable = Draggable.create(this.$refs.trackBar, {
      cursor: "default",
      type: "y",
      onUpdate: () => console.log("updateing"),
      bounds: this.$refs.trackBarContainer
    })[0];

    this.draggable.addEventListener("drag", this.onDrag);
    this.draggable.addEventListener("release", this.leave);
  }
};
</script>

<style scoped>
.scroll-container {
  overflow: hidden;
  position: relative;
}
.scroll-content {
  overflow-y: scroll;
  overflow-x: hidden;
}

.scroll-track {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 6px;
  padding: 2px;
  cursor: default;
  z-index: 7;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s;
}

.scroll-track.visible {
  pointer-events: all;
  opacity: 1;
}

.scroll-track-bar {
  position: absolute;
  width: 6px;
  right: 2px;
  top: 0;
  border-radius: 25px;
  background-color: rgb(43, 43, 43);
}
</style>
