<template>
    <div class="player-controls">
        <fluid-icon-backward class="backward"></fluid-icon-backward>
        <fluid-icon-play v-if="!playing" @click.native="play"></fluid-icon-play>
        <fluid-icon-pause v-else @click.native="pause"></fluid-icon-pause>
        <fluid-icon-forward class="forward"></fluid-icon-forward>
    </div>
</template>

<script>
export default {
  props: {
    playing: {
      default: false
    }
  },
  methods: {
    play() {
      this.$emit("playing");
    },
    pause() {
      this.$emit("pausing");
    }
  }
};
</script>

<style scoped>
.player-controls {
  margin-left: 13px;
  display: flex;
  align-items: center;
}

.backward {
  margin-right: 4.87px;
}

.forward {
  margin-left: 4.87px;
}
</style>
