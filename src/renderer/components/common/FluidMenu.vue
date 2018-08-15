<template>

    <div class="menu">
        
        <div :style="menuItemStyle" :class="{'active':isActive(option.key)}" @mousedown.stop="changeActiveMenuItem(option)" v-for="option in options" :key="option.key" class="menu-option">
            <div class="menu-option-background" :style="activeBackground(option.key)"></div>
            {{option.name}}
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["options", "value"],
  computed: {
    ...mapGetters(["themeColors"]),
    menuItemStyle() {
      return {
        color: this.themeColors.text
      };
    }
  },
  methods: {
    changeActiveMenuItem(option) {
      this.$emit("input", option);
    },
    isActive(value) {
      return this.value.key === value;
    },
    activeBackground(value) {
      if (this.isActive(value)) {
        return {
          background: this.themeColors.text
        };
      }
    }
  }
};
</script>

<style scoped>
.menu {
  display: flex;
  align-items: center;
  justify-content: center;
}
.menu-option {
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;

  font-family: Exo;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  font-size: 11.2954px;
  text-align: center;

  border-radius: 40px;
  padding: 10px 14px;
  position: relative;

  background: transparent;
  margin: 0 2px;
  user-select: none;
  transition: color 0.15s;
}

.menu-option-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 40px;
  opacity: 0.08;
}

.menu-option.active {
  color: rgba(255, 255, 255, 0.84);
}

.menu-option:hover {
  color: rgba(255, 255, 255, 1);
}
</style>
