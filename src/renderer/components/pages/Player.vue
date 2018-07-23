<template>
    <div class="play-container">
        <div class="canvas" ref="canvas"></div>
    </div>
</template>

<script>
const { remote } = require("electron");

const ECHAP_KEY = 27;
export default {
  methods: {
    onKeyUp(e) {
      switch (e.keyCode) {
        case ECHAP_KEY:
          this.exitPlayer();
          break;
      }
    },
    exitPlayer() {
      let window = remote.getCurrentWindow();
      window.close();
    }
  },
  beforeDestroy() {
    window.removeEventListener("keyup", this.onKeyUp, true);
  },
  mounted() {
    window.addEventListener("keyup", this.onKeyUp, true);
  }
};
</script>

<style scoped>
.play-container {
  height: 100%;
}

.canvas {
  background-color: red;
  height: 100%;
  width: 100%;
}
</style>
