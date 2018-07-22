<template>
    <div class="play-container">
        <div class="canvas" ref="canvas"></div>
    </div>
</template>

<script>
const { remote } = require("electron");
export default {
  mounted() {}
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
