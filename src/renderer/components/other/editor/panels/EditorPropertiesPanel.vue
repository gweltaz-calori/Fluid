<template>
    <div class="panel" :style="panelStyle">
        <div height="100%" class="properties-container" v-if="selectedLayers.length > 0">
          <fluid-menu class="menu" v-model="selectedMenu" :options="menuOptions"></fluid-menu>
          <keep-alive>
            <component :animation-type="selectedMenu.key" :is="selectedMenu.value"></component>
          </keep-alive>
        </div>
        <fluid-text-info v-else class="properties-info" >Select a SLIDE or a NODE</fluid-text-info>
        <div class="panel-border" :style="panelBorderStyle"></div>
    </div>
</template>

<script>
import FormatMenu from "@/components/other/editor/menus/FormatMenu.vue";
import AnimateMenuV2 from "@/components/other/editor/menus/AnimateMenuV2.vue";
import { AnimationType } from "@/models/types";
import { mapGetters } from "vuex";
import { FLUID_TYPES } from "../../../../store/helpers";
import panelMixin from "@/mixins/panel";
export default {
  mixins: [panelMixin],
  components: {
    FormatMenu,
    AnimateMenuV2
  },
  data() {
    const menuOptions = [
      {
        name: "animate in",
        key: FLUID_TYPES.ANIMATION_IN,
        value: "AnimateMenuV2"
      },
      {
        name: "animate Out",
        key: FLUID_TYPES.ANIMATION_OUT,
        value: "AnimateMenuV2"
      }
    ];

    const selectedMenu = menuOptions[0];

    return {
      menuOptions,
      selectedMenu
    };
  },
  computed: {
    ...mapGetters(["selectedLayers", "themeColors"])
  }
};
</script>

<style scoped>
.panel {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  width: 305px;
  height: 100%;
  z-index: 1;
}

.panel-border {
  position: absolute;
  top: 70px;
  left: -1px;
  bottom: 0;
  width: 1px;
}

.menu {
  height: 70px;
}

.properties-container {
  height: 100%;
}
</style>
