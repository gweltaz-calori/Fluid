<template>
    <div class="panel">
      <fluid-scrollable-container height="100%" class="slides">
        <fluid-menu class="menu" v-model="selectedMenu" :options="menuOptions"></fluid-menu>
        <keep-alive>
            <component :is="selectedMenu.value"></component>
        </keep-alive>
      </fluid-scrollable-container>
    </div>
</template>

<script>
import SlidesMenu from "@/components/other/editor/menus/SlidesMenu.vue";
import LayersMenu from "@/components/other/editor/menus/LayersMenu.vue";

export default {
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
  }
};
</script>

<style scoped>
.panel {
  position: absolute;
  padding: 18px 0;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  width: 246px;
  background: #181818;
}

.slide {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 9px;
}

.menu {
  margin-bottom: 18px;
}
</style>
