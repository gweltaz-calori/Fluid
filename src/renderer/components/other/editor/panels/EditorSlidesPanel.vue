<template>
    <div class="panel" @mousedown="deselectAllNodes" :style="panelStyle">
      <div height="100%" class="slides">
        <fluid-menu class="menu" v-model="selectedMenu" :options="menuOptions"></fluid-menu>
        <keep-alive>
            <component :is="selectedMenu.value"></component>
        </keep-alive>
      </div>
      <div class="panel-border" :style="panelBorderStyle"></div>
    </div>
</template>

<script>
import SlidesMenu from "@/components/other/editor/menus/SlidesMenu.vue";
import LayersMenu from "@/components/other/editor/menus/LayersMenu.vue";
import { mapActions } from "vuex";
import panelMixin from "@/mixins/panel";

export default {
  mixins: [panelMixin],
  components: {
    SlidesMenu,
    LayersMenu
  },
  data() {
    return {
      menuOptions: [
        {
          name: "slides",
          key: "SLIDE_LIST",
          value: "SlidesMenu"
        },
        {
          name: "layers",
          key: "SLIDE_LAYERS",
          value: "LayersMenu"
        }
      ],
      selectedMenu: {
        name: "slides",
        key: "SLIDE_LIST",
        value: "SlidesMenu"
      }
    };
  },
  methods: {
    ...mapActions(["deselectAllNodes"])
  }
};
</script>

<style scoped>
.panel {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  width: 246px;
}

.panel-border {
  position: absolute;
  top: 70px;
  right: -1px;
  bottom: 0;
  width: 1px;
}

.slide {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 9px;
}

.menu {
  height: 70px;
}
</style>
