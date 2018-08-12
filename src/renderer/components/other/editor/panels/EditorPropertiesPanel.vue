<template>
    <div class="panel">
        <fluid-scrollable-container height="100%" class="properties-container" v-if="selectedLayers.length > 0">
          <fluid-menu class="menu" v-model="selectedMenu" :options="menuOptions"></fluid-menu>
          <keep-alive>
            <component :animation-type="selectedMenu.key" :is="selectedMenu.value"></component>
          </keep-alive>
        </fluid-scrollable-container>
        <fluid-text-info v-else class="properties-info" >Select a SLIDE or a NODE</fluid-text-info>
    </div>
</template>

<script>
import FormatMenu from "@/components/other/editor/menus/FormatMenu.vue";
import AnimateMenuV2 from "@/components/other/editor/menus/AnimateMenuV2.vue";
import { AnimationType } from "@/models/types";
import { mapGetters } from "vuex";
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
        }
      ],
      selectedMenu: {
        name: "animate in",
        key: "animateIn",
        value: "AnimateMenuV2"
      }
    };
  },
  computed: {
    ...mapGetters(["selectedLayers"])
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
