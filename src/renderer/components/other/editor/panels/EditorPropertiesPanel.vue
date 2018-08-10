<template>
    <div class="panel">
        <fluid-scrollable-container height="100%" class="properties-container">
          <fluid-menu class="menu" v-model="selectedMenu" :options="menuOptions"></fluid-menu>
          <keep-alive>
            <component :animation-type="selectedMenu.key" :is="selectedMenu.value"></component>
          </keep-alive>
        </fluid-scrollable-container>
    </div>
</template>

<script>
import FormatMenu from "@/components/other/editor/menus/FormatMenu.vue";
import AnimateMenuV2 from "@/components/other/editor/menus/AnimateMenuV2.vue";
import { AnimationType } from "@/models/types";
export default {
  components: {
    FormatMenu,
    AnimateMenuV2
  },
  data() {
    return {
      menuOptions: [
        {
          name: "animate in",
          key: "animateIn",
          value: "AnimateMenuV2"
        } /* 
        {
          name: "animate out",
          key: AnimationType.ANIMATE_OUT,
          value: "AnimateMenu"
        },
        {
          name: "format",
          key: "FORMAT",
          value: "FormatMenu"
        } */
      ],
      selectedMenu: {
        name: "animate in",
        key: "animateIn",
        value: "AnimateMenuV2"
      }
    };
  }
};
</script>

<style scoped>
.panel {
  position: absolute;
  top: 0;
  right: 0;
  background: #181818;
  display: flex;
  flex-direction: column;
  width: 305px;
  height: 100%;
  padding: 18px 0;
  z-index: 1;
}

.menu {
  margin-bottom: 14px;
}

.properties-container {
  height: 100%;
}
</style>
