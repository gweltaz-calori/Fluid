<template>
    <div class="menu">
        <div :class="{'active':isActive(option.key)}" @click="changeActiveMenuItem(option)" v-for="option in options" :key="option.key" class="menu-option">
            {{option.name}}
        </div>
    </div>
</template>

<script>
export default {
  props: ["options", "value"],
  methods: {
    changeActiveMenuItem(option) {
      this.$emit("input", option);
    },
    isActive(value) {
      return this.value.key === value;
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

  color: rgba(255, 255, 255, 0.25);
  background: transparent;
  margin: 0 2px;
  user-select: none;
  transition: color 0.15s;
}

.menu-option.active {
  color: rgba(255, 255, 255, 0.84);
  background: rgba(169, 169, 169, 0.07);
}

.menu-option:hover {
  color: rgba(255, 255, 255, 1);
}
</style>
