<template>
    <div class="panel" :style="panelStyle">
      <div class="right-actions">
        <fluid-text-button :style="buttonStyle">Sync</fluid-text-button>
        <fluid-text-button @click.native="enterPlayerMode" :icon="PlayIcon" :style="buttonStyle">Play</fluid-text-button>
      </div>
      <div class="panel-border" :style="panelBorderStyle"></div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PlayIcon from "@/assets/icons/play.svg";

import panelMixin from "@/mixins/panel";
export default {
  mixins: [panelMixin],
  data() {
    return {
      PlayIcon
    };
  },
  computed: {
    ...mapGetters(["themeColors"]),
    buttonStyle() {
      return {
        color: this.themeColors.text
      };
    }
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
  height: 70px;
  display: flex;
  z-index: 1;

  align-items: center;
}

.panel-border {
  position: absolute;
  left: 0;
  bottom: -1px;
  right: 0;
  height: 1px;
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
