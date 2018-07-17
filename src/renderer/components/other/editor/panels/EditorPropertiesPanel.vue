<template>
    <div class="panel">
        <fluid-scrollable-container height="100%" class="properties-container">
          <fluid-menu v-model="selectedMenu" :options="menuOptions"></fluid-menu>
          <keep-alive>
            <component :is="selectedMenu"></component>
          </keep-alive>
        </fluid-scrollable-container>
    </div>
</template>

<script>
import FormatMenu from "@/components/other/editor/menus/FormatMenu.vue";
import AnimateInMenu from "@/components/other/editor/menus/AnimateInMenu.vue";
import AnimateOutMenu from "@/components/other/editor/menus/AnimateOutMenu.vue";

export default {
  components: {
    FormatMenu,
    AnimateInMenu,
    AnimateOutMenu
  },
  data() {
    return {
      menuOptions: [
        {
          name: "animate in",
          key: "AnimateInMenu"
        },
        {
          name: "animate out",
          key: "AnimateOutMenu"
        },
        {
          name: "format",
          key: "FormatMenu"
        }
      ],
      selectedMenu: "AnimateInMenu"
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
}

.properties {
  margin-top: 14px;
}

.properties-container {
  height: 100%;
}
</style>
