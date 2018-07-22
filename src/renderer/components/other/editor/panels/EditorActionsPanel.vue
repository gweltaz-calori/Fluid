<template>
    <div class="panel">
      <div class="left-actions">
        <fluid-select-input v-model="zoomLevel" :options="availableZoomLevels" unit="%" :min="10" :max="100"></fluid-select-input>
      </div>
      <input placeholder="file name" type="text">
      <div class="right-actions">
        <fluid-text-button>Export</fluid-text-button>
        <fluid-text-button @click.native="enterPlayerMode" :icon="PlayIcon" focus="true">Play</fluid-text-button>
      </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PlayIcon from "@/assets/icons/play.svg";

export default {
  data() {
    return {
      PlayIcon
    };
  },
  computed: {
    zoomLevel: {
      get() {
        return this.$store.state.editor.settings.zoomLevel;
      },
      set(value) {
        this.$store.commit("setZoomLevel", value);
      }
    },
    ...mapGetters(["availableZoomLevels"])
  },
  methods: {
    ...mapActions(["enterPlayerMode"])
  }
};
</script>

<style scoped>
.panel {
  position: absolute;
  top: 0;
  left: 246px;
  right: 305px;
  background: #181818;
  height: 70px;
  display: flex;
  align-items: center;
}

input {
  font-family: Exo;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  font-size: 13px;
  text-align: center;
  text-transform: uppercase;
  margin: auto;

  color: white;
}

.right-actions {
  position: absolute;
  right: 24.9px;
}

.left-actions {
  position: absolute;
  left: 24.9px;
}
</style>
